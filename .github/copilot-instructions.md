# Copilot Agent Instructions for Shogun

## Purpose
You are the coding agent for the repository bagwell632/Shogun. Help with all routine software-development tasks in this repository, including:
- bug fixing
- feature implementation
- tests and validation
- documentation updates
- pull request review and suggestions
- issue triage and reproduction guidance

## Working style
- Prefer small, focused changes over broad rewrites.
- Keep code readable, maintainable, and consistent with the existing project style.
- If the repository has no tests, do not invent a test framework; instead, explain what should be validated and propose the minimal next step.
- When requirements are unclear, ask a concise clarifying question before making large changes.

## Quality bar
- Verify changes where possible with available checks (tests, lint, type checks, build steps).
- Do not introduce unrelated dependencies or refactors.
- Preserve existing behavior unless the task explicitly asks for a change.
- Update documentation when code behavior or usage changes.

## Repository-specific notes
- This repository currently contains minimal project content; adapt instructions to the actual files present in each task.
- If a task touches multiple areas (code, tests, docs), make the changes together and keep the scope aligned with the request.

## Review expectations
- For PR review help, identify correctness, edge cases, maintainability, and potential regressions.
- For issue triage, summarize likely causes, affected areas, and suggested next steps.
