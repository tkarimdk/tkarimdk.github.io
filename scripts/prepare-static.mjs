import { readdir, copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const output = fileURLToPath(new URL("../apps/web/out/", import.meta.url));

// Next.js 16.4 can emit nested segment files on Windows, while its browser
// router requests dot-separated names. Linux (including GitHub Actions)
// already emits the flat names. Add matching files without changing source.
async function normalizeSegments(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const child = path.join(directory, entry.name);
    if (entry.name.startsWith("__next.")) {
      await flattenSegmentTree(child, directory, entry.name);
    } else if (entry.name !== "_next") {
      await normalizeSegments(child);
    }
  }
}
async function flattenSegmentTree(directory, destination, prefix) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const source = path.join(directory, entry.name);
    const filename = `${prefix}.${entry.name}`;
    if (entry.isDirectory()) {
      await flattenSegmentTree(source, destination, filename);
    } else if (entry.name.endsWith(".txt")) {
      await copyFile(source, path.join(destination, filename));
    }
  }
}
await normalizeSegments(output);
console.log("Static export prepared for file hosting.");
