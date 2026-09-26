import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const palmarosaDir =
  process.env.PALMAROSA_DIR?.trim() ||
  join(root, "showcase-sources", "palmarosa");
const fallbackDir = join(root, "..", "Palmarosa");
const outDir = join(root, "public", "showcase-sites", "palmarosa");
const committedIndex = join(outDir, "index.html");

function run(cmd, cwd) {
  execSync(cmd, { cwd, stdio: "inherit", env: process.env });
}

/** Vercel: use committed static in public/ — no nested npm install on every deploy. */
if (
  existsSync(committedIndex) &&
  (process.env.VERCEL === "1" || process.env.SKIP_PALMAROSA_REBUILD === "1")
) {
  console.log(
    "Palmarosa: using committed static at public/showcase-sites/palmarosa (skip rebuild).",
  );
  process.exit(0);
}

const sourceDir = existsSync(palmarosaDir)
  ? palmarosaDir
  : existsSync(fallbackDir)
    ? fallbackDir
    : null;

if (!sourceDir) {
  if (existsSync(committedIndex)) {
    console.log(
      "Palmarosa source not found — using committed static files in public/showcase-sites/palmarosa",
    );
    process.exit(0);
  }
  console.error(
    "Palmarosa source not found. Commit public/showcase-sites/palmarosa or add showcase-sources/palmarosa.",
  );
  process.exit(1);
}

console.log("Building Palmarosa from", sourceDir);

const hasPnpmLock = existsSync(join(sourceDir, "pnpm-lock.yaml"));
const hasNpmLock = existsSync(join(sourceDir, "package-lock.json"));

if (!existsSync(join(sourceDir, "node_modules"))) {
  console.log("Installing Palmarosa dependencies…");
  if (hasPnpmLock) {
    run("pnpm install --frozen-lockfile", sourceDir);
  } else if (hasNpmLock) {
    run("npm ci", sourceDir);
  } else {
    run("npm install", sourceDir);
  }
}

if (hasPnpmLock) {
  run("pnpm run build", sourceDir);
} else {
  run("npm run build", sourceDir);
}

const distDir = join(sourceDir, "dist");
if (!existsSync(join(distDir, "index.html"))) {
  console.error("Palmarosa build did not produce dist/index.html");
  process.exit(1);
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(dirname(outDir), { recursive: true });
cpSync(distDir, outDir, { recursive: true });

console.log("Copied static site to", outDir);
