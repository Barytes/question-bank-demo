---
name: solution-generation
description: Project-local workflow for generating answer keys, explanations, option judgements, tags, and review flags for extracted questions.
---

# Solution Generation Skill

Use this skill after `pdf-extraction` has produced question crops.

## Workflow

1. Read each question crop and identify the topic, known quantities, options, and requested conclusion.
2. If a corresponding answer page is visibly matched, set `answer_page_matched`.
3. If the solution is generated from reasoning rather than a verified answer page, set:
   - `answer_generated`
   - `needs_teacher_review`
4. For every question, output:
   - answer array
   - summary
   - 2-4 explanation steps
   - option judgement placeholder or detailed judgement
   - knowledge tags
   - method tags
   - cognition tags
   - common mistake tags

## Quality Rule

The demo may show generated solutions, but it must not hide uncertainty. Keep `qualityFlags` visible in the UI.
