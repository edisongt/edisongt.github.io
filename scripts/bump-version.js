#!/usr/bin/env node
/**
 * Bumps the app version in src/version.ts.
 * Format: Ver.YYYY.MM.DD.N  — N increments each deploy on the same day,
 * resets to 1 on a new day.
 */

const fs = require('fs');
const path = require('path');

const versionFile = path.join(__dirname, '../src/version.ts');
const content = fs.readFileSync(versionFile, 'utf8');

const match = content.match(/APP_VERSION = 'Ver\.(\d{4})\.(\d{2})\.(\d{2})\.(\d+)'/);
if (!match) {
  console.error('Could not parse APP_VERSION in src/version.ts');
  process.exit(1);
}

const now = new Date();
const yyyy = String(now.getFullYear());
const mm = String(now.getMonth() + 1).padStart(2, '0');
const dd = String(now.getDate()).padStart(2, '0');
const today = `${yyyy}.${mm}.${dd}`;

const prevDate = `${match[1]}.${match[2]}.${match[3]}`;
const prevN = parseInt(match[4], 10);

const newN = prevDate === today ? prevN + 1 : 1;
const newVersion = `Ver.${today}.${newN}`;

const updated = content.replace(
  /APP_VERSION = 'Ver\.\d{4}\.\d{2}\.\d{2}\.\d+'/,
  `APP_VERSION = '${newVersion}'`
);

fs.writeFileSync(versionFile, updated, 'utf8');
console.log(`Version bumped to ${newVersion}`);
