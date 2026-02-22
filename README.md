# arq-trial

## IntentCompiler Output Format

IntentCompiler is a requirements extraction engine for Arq.dev. It extracts structured project requirements from user input and outputs a JSON object conforming to a strict schema.

### Directory Structure

```
intent-compiler/
  system-prompt.md          # System prompt defining IntentCompiler behavior
  output-schema.json        # JSON Schema for output validation
  validate.js               # CLI validator and importable module
  validate.test.js          # Test suite for the validator
  knowledge-base/
    tailwind-css.md          # Tailwind CSS utility patterns
    portfolio-landing-pages.md  # Portfolio & landing page patterns
  examples/
    01-initial-greeting.json    # First interaction
    02-portfolio-first-turn.json # User describes a portfolio
    03-adding-details.json      # Incremental spec update
    04-near-complete.json       # Tech preferences added
    05-ready-to-build.json      # Spec complete, ready to build
    06-unparseable-input.json   # Handling unclear input
```

### Validation

Validate an IntentCompiler response:

```bash
node intent-compiler/validate.js path/to/response.json
echo '{"message":"...","spec":{},"ready_to_build":false}' | node intent-compiler/validate.js
```

Run the test suite:

```bash
node intent-compiler/validate.test.js
```
