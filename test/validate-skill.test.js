import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

test('SKILL.md frontmatter validation', () => {
  const content = fs.readFileSync('SKILL.md', 'utf8');
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  
  if (!match) {
    throw new Error('SKILL.md must start with YAML frontmatter');
  }

  const frontmatter = match[1];
  const lines = frontmatter.split('\n').filter(line => line.trim() !== '');
  const keys = lines.map(line => line.split(':')[0].trim());

  assert.ok(keys.includes('name'), 'Frontmatter must have a name');
  assert.ok(keys.includes('description'), 'Frontmatter must have a description');
  assert.strictEqual(keys.length, 2, 'Frontmatter must only have name and description');
  
  const nameLine = lines.find(line => line.startsWith('name:'));
  const name = nameLine.split(':')[1].trim();
  assert.match(name, /^[a-z0-9-]+$/, 'Name must be lowercase alphanumeric and hyphens');
  assert.ok(name.length <= 64, 'Name must be <= 64 chars');
});

