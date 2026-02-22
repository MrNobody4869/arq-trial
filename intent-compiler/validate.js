#!/usr/bin/env node

/**
 * Validates IntentCompiler output against the defined schema and business rules.
 *
 * Usage:
 *   echo '{"message":"...","spec":{...},"ready_to_build":false}' | node validate.js
 *   node validate.js < response.json
 *   node validate.js path/to/response.json
 */

const fs = require("fs");
const path = require("path");

const schema = JSON.parse(
  fs.readFileSync(path.join(__dirname, "output-schema.json"), "utf-8")
);

function validate(output) {
  const errors = [];

  if (typeof output !== "object" || output === null || Array.isArray(output)) {
    errors.push("Response must be a JSON object");
    return { valid: false, errors };
  }

  if (typeof output.message !== "string" || output.message.length === 0) {
    errors.push('"message" must be a non-empty string');
  } else {
    if (/[#*_`\[\]]/.test(output.message)) {
      errors.push('"message" must be plain text — no markdown formatting detected');
    }
    if (/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u.test(output.message)) {
      errors.push('"message" must not contain emojis');
    }
    if (/!/.test(output.message)) {
      errors.push('"message" must not contain exclamation marks');
    }
    if (/\b(GPT|Claude|OpenAI|Anthropic|AI model|language model|LLM)\b/i.test(output.message)) {
      errors.push('"message" must not reference AI models or providers');
    }
  }

  if (typeof output.ready_to_build !== "boolean") {
    errors.push('"ready_to_build" must be a boolean');
  }

  if (typeof output.spec !== "object" || output.spec === null || Array.isArray(output.spec)) {
    errors.push('"spec" must be an object');
    return { valid: errors.length === 0, errors };
  }

  const spec = output.spec;

  if (spec.version !== undefined && spec.version !== 1) {
    errors.push('"spec.version" must be 1');
  }

  if (spec.project_type !== undefined && typeof spec.project_type !== "string") {
    errors.push('"spec.project_type" must be a string');
  }

  if (spec.description !== undefined) {
    if (typeof spec.description !== "string" || spec.description.length === 0) {
      errors.push('"spec.description" must be a non-empty string');
    }
  }

  const arrayFields = ["features", "tech_preferences", "constraints", "open_questions"];
  for (const field of arrayFields) {
    if (spec[field] !== undefined) {
      if (!Array.isArray(spec[field])) {
        errors.push(`"spec.${field}" must be an array`);
      } else if (spec[field].some((item) => typeof item !== "string" || item.length === 0)) {
        errors.push(`"spec.${field}" items must be non-empty strings`);
      }
    }
  }

  if (spec.confidence !== undefined) {
    if (typeof spec.confidence !== "number" || spec.confidence < 0 || spec.confidence > 100) {
      errors.push('"spec.confidence" must be a number between 0 and 100');
    }
  }

  const codePatterns = [
    /import\s+[\w{]/,
    /require\s*\(/,
    /export\s+(default|const|function)/,
    /<\w+[\s>]/,
    /\.\w+\//,
    /\/(src|app|components|pages)\//,
  ];

  const allText = JSON.stringify(spec);
  for (const pattern of codePatterns) {
    if (pattern.test(allText)) {
      errors.push(`"spec" fields must not contain code or file paths (matched: ${pattern})`);
      break;
    }
  }

  if (output.ready_to_build === true) {
    if (spec.confidence !== undefined && spec.confidence < 80) {
      errors.push('"ready_to_build" cannot be true when confidence < 80');
    }
    if (spec.open_questions !== undefined && spec.open_questions.length > 0) {
      errors.push('"ready_to_build" cannot be true when open_questions is non-empty');
    }
  }

  if (output.quick_replies !== undefined) {
    if (!Array.isArray(output.quick_replies)) {
      errors.push('"quick_replies" must be an array');
    } else {
      if (output.quick_replies.length > 3) {
        errors.push('"quick_replies" must contain at most 3 items');
      }
      if (output.quick_replies.some((r) => typeof r !== "string" || r.length === 0)) {
        errors.push('"quick_replies" items must be non-empty strings');
      }
    }
  }

  const allowedTopLevel = new Set(["message", "spec", "quick_replies", "ready_to_build"]);
  for (const key of Object.keys(output)) {
    if (!allowedTopLevel.has(key)) {
      errors.push(`Unknown top-level field: "${key}"`);
    }
  }

  const allowedSpec = new Set([
    "version", "project_type", "description", "features",
    "tech_preferences", "constraints", "open_questions", "confidence",
  ]);
  for (const key of Object.keys(spec)) {
    if (!allowedSpec.has(key)) {
      errors.push(`Unknown spec field: "${key}"`);
    }
  }

  return { valid: errors.length === 0, errors };
}

function main() {
  let input = "";

  const filePath = process.argv[2];
  if (filePath) {
    try {
      input = fs.readFileSync(filePath, "utf-8");
    } catch (err) {
      console.error(`Error reading file: ${err.message}`);
      process.exit(2);
    }
  } else {
    input = fs.readFileSync(0, "utf-8");
  }

  input = input.trim();

  let parsed;
  try {
    parsed = JSON.parse(input);
  } catch (err) {
    console.error("INVALID: Response is not valid JSON");
    console.error(`Parse error: ${err.message}`);
    process.exit(1);
  }

  const result = validate(parsed);

  if (result.valid) {
    console.log("VALID: Response conforms to IntentCompiler output schema");
    process.exit(0);
  } else {
    console.error("INVALID: Response has the following issues:");
    for (const error of result.errors) {
      console.error(`  - ${error}`);
    }
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { validate };
