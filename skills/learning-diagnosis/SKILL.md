---
name: learning-diagnosis
description: Project-local workflow for turning 20-question practice attempts into an explainable MVP learning diagnosis.
---

# Learning Diagnosis Skill

Use this skill when computing the learning report from local practice records.

## MVP Model

This is not calibrated MIRT, G-DINA, or BKT. It is an explainable approximation:

- Q-matrix: question-to-knowledge weights from `diagnosis.qMatrix`.
- Ability loadings: question-to-cognition weights from `diagnosis.abilityLoadings`.
- BKT-lite: start each skill near 0.55, increase after correct evidence, decrease after wrong evidence.
- Mistake evidence: wrong answers add evidence to the question's `mistakeEvidence`.

## Reporting Rules

1. If no questions are submitted, show "暂无诊断".
2. Knowledge points show mastery probability, evidence count, and status.
3. Cognition abilities show evidence strength; with little evidence, show "证据不足".
4. Recommendations prioritize:
   - same mistake remediation
   - same knowledge anchor questions
   - advanced transfer questions

## Integrity Rule

Never present this MVP score as a formal psychometric estimate. Label it as "简版诊断".
