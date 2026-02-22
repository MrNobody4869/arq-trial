#!/usr/bin/env node

const { validate } = require("./validate");
const fs = require("fs");
const path = require("path");

let passed = 0;
let failed = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`  PASS: ${testName}`);
    passed++;
  } else {
    console.error(`  FAIL: ${testName}`);
    failed++;
  }
}

console.log("--- Valid Examples ---");

const examplesDir = path.join(__dirname, "examples");
const files = fs.readdirSync(examplesDir).filter((f) => f.endsWith(".json"));

for (const file of files) {
  const data = JSON.parse(fs.readFileSync(path.join(examplesDir, file), "utf-8"));
  const result = validate(data);
  assert(result.valid, `${file} should be valid`);
  if (!result.valid) {
    console.error(`    Errors: ${result.errors.join(", ")}`);
  }
}

console.log("\n--- Invalid Cases ---");

const invalidCases = [
  {
    name: "not an object",
    input: "hello",
    expectedError: "Response must be a JSON object",
  },
  {
    name: "missing message",
    input: { spec: {}, ready_to_build: false },
    expectedError: '"message" must be a non-empty string',
  },
  {
    name: "message with markdown",
    input: { message: "Here is **bold** text", spec: { version: 1, confidence: 0 }, ready_to_build: false },
    expectedError: "markdown",
  },
  {
    name: "message with emoji",
    input: { message: "Hello \u{1F600}", spec: { version: 1, confidence: 0 }, ready_to_build: false },
    expectedError: "emoji",
  },
  {
    name: "message with exclamation",
    input: { message: "Welcome!", spec: { version: 1, confidence: 0 }, ready_to_build: false },
    expectedError: "exclamation",
  },
  {
    name: "message referencing AI",
    input: { message: "As an AI model, I can help you", spec: { version: 1, confidence: 0 }, ready_to_build: false },
    expectedError: "AI models",
  },
  {
    name: "ready_to_build true with low confidence",
    input: { message: "Ready", spec: { version: 1, confidence: 50, open_questions: [] }, ready_to_build: true },
    expectedError: "confidence < 80",
  },
  {
    name: "ready_to_build true with open questions",
    input: { message: "Ready", spec: { version: 1, confidence: 90, open_questions: ["What stack?"] }, ready_to_build: true },
    expectedError: "open_questions is non-empty",
  },
  {
    name: "confidence out of range",
    input: { message: "Hello", spec: { version: 1, confidence: 150 }, ready_to_build: false },
    expectedError: "between 0 and 100",
  },
  {
    name: "wrong version",
    input: { message: "Hello", spec: { version: 2, confidence: 0 }, ready_to_build: false },
    expectedError: "version",
  },
  {
    name: "unknown top-level field",
    input: { message: "Hello", spec: { version: 1 }, ready_to_build: false, extra_field: true },
    expectedError: "Unknown top-level field",
  },
  {
    name: "unknown spec field",
    input: { message: "Hello", spec: { version: 1, unknown_field: "test" }, ready_to_build: false },
    expectedError: "Unknown spec field",
  },
  {
    name: "too many quick replies",
    input: { message: "Hello", spec: { version: 1 }, ready_to_build: false, quick_replies: ["a", "b", "c", "d"] },
    expectedError: "at most 3",
  },
  {
    name: "features with empty string",
    input: { message: "Hello", spec: { version: 1, features: ["valid", ""] }, ready_to_build: false },
    expectedError: "non-empty strings",
  },
];

for (const testCase of invalidCases) {
  const result = validate(testCase.input);
  assert(!result.valid, `"${testCase.name}" should be invalid`);
  const hasExpectedError = result.errors.some((e) =>
    e.toLowerCase().includes(testCase.expectedError.toLowerCase())
  );
  assert(hasExpectedError, `"${testCase.name}" should mention "${testCase.expectedError}"`);
  if (!hasExpectedError && result.errors.length > 0) {
    console.error(`    Got: ${result.errors.join(", ")}`);
  }
}

console.log(`\n--- Results: ${passed} passed, ${failed} failed ---`);
process.exit(failed > 0 ? 1 : 0);
