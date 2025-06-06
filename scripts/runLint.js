#!/usr/bin/env node
import { existsSync } from 'node:fs';
import { execSync } from 'node:child_process';

const eslintPath = './node_modules/.bin/eslint';
if (existsSync(eslintPath)) {
  execSync(`${eslintPath} .`, { stdio: 'inherit' });
} else {
  console.warn('ESLint not installed, skipping lint step.');
}
