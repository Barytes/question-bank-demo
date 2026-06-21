---
name: pdf-extraction
description: Project-local workflow for converting scanned teaching PDFs into cropped question assets and structured drafts.
---

# PDF Extraction Skill

Use this skill when adding or refreshing questions from the scanned teaching PDF.

## Workflow

1. Render source pages with Poppler:
   `python3 scripts/build-crops.py`
2. The script calls `pdftoppm` when page PNGs are missing and uses Pillow to crop selected question regions.
3. Prefer complete single-region questions. Skip cross-page or cross-column questions for the MVP unless a composite crop is intentionally created.
4. Record source evidence in each question:
   - source PDF filename
   - PDF page number
   - `questionImage`
   - extraction method
5. Mark uncertainty with `qualityFlags`:
   - `ocr_uncertain`
   - `formula_needs_review`
   - `needs_teacher_review`

## MVP Selection Rule

Use the first 20 complete, readable question regions from the rendered PDF body pages. Cross-page questions are skipped to preserve demo quality.
