const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dataPath = path.join(root, 'data', 'questions.js');

function fail(message) {
  console.error(`VALIDATION FAILED: ${message}`);
  process.exit(1);
}

if (!fs.existsSync(dataPath)) {
  fail('data/questions.js is missing');
}

const source = fs.readFileSync(dataPath, 'utf8');
const match = source.match(/window\.QUESTION_BANK\s*=\s*(\[[\s\S]*?\]);\s*$/);
if (!match) {
  fail('data/questions.js must assign an array to window.QUESTION_BANK');
}

let questions;
try {
  questions = JSON.parse(match[1]);
} catch (error) {
  fail(`question data is not valid JSON: ${error.message}`);
}

if (!Array.isArray(questions)) fail('question bank must be an array');
if (questions.length !== 20) fail(`expected 20 questions, got ${questions.length}`);

const ids = new Set();
const requiredQuestionFields = [
  'id',
  'title',
  'source',
  'questionImage',
  'options',
  'answer',
  'analysis',
  'tags',
  'diagnosis',
  'recommendations',
  'qualityFlags',
];

questions.forEach((question, index) => {
  requiredQuestionFields.forEach((field) => {
    if (!(field in question)) fail(`question ${index + 1} missing ${field}`);
  });

  if (ids.has(question.id)) fail(`duplicate id ${question.id}`);
  ids.add(question.id);

  const imagePath = path.join(root, question.questionImage);
  if (!fs.existsSync(imagePath)) fail(`${question.id} image does not exist: ${question.questionImage}`);

  if (!question.source.pdf || !Number.isInteger(question.source.page)) {
    fail(`${question.id} source must include pdf and integer page`);
  }

  if (!Array.isArray(question.options) || question.options.length < 4) {
    fail(`${question.id} must have at least four options`);
  }
  if (!Array.isArray(question.answer) || question.answer.length === 0) {
    fail(`${question.id} must have an answer array`);
  }
  if (!question.analysis.summary || !Array.isArray(question.analysis.steps) || question.analysis.steps.length === 0) {
    fail(`${question.id} must have analysis summary and steps`);
  }

  ['knowledge', 'methods', 'cognition', 'mistakes'].forEach((tagGroup) => {
    if (!Array.isArray(question.tags[tagGroup]) || question.tags[tagGroup].length === 0) {
      fail(`${question.id} missing tags.${tagGroup}`);
    }
  });

  if (!question.diagnosis.qMatrix || !question.diagnosis.abilityLoadings || !question.diagnosis.mistakeEvidence) {
    fail(`${question.id} diagnosis must include qMatrix, abilityLoadings, mistakeEvidence`);
  }
  if (!Array.isArray(question.qualityFlags) || question.qualityFlags.length === 0) {
    fail(`${question.id} must include quality flags`);
  }
});

console.log(`Validated ${questions.length} questions and ${ids.size} unique ids.`);
