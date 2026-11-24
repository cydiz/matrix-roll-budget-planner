#!/usr/bin/env node
const {readFileSync} = require('node:fs');
const {compare} = require('./odds');
try {
  const args = process.argv.slice(2);
  const pair = args.length ? args : readFileSync(0, 'utf8').trim().split(/\s+/);
  if (pair.length !== 2) throw new Error('Supply exactly two counts: matrix-roll-plan A B');
  console.log(JSON.stringify(compare(...pair)));
} catch (error) {
  console.error(error.message);
  process.exitCode = 2;
}
