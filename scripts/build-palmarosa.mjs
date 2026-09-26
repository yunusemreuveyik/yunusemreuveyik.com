import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const palmarosaDir =
  process.env.PALMAROSA_DIR?.trim() ||
  join(root, "showcase-sources", "palmarosa");
const fallbackDir = join(root, "..", "Palmarosa");
const sourceDir = existsSync(palmarosaDir)
  ? palmarosaDir
  : existsSync(fallbackDir)
    ? fallbackDir
    : null;
const outDir = join(root, "public", "showcase-sites", "palmarosa");

if (!sourceDir) {
  if (existsSync(join(outDir, "index.html"))) {
    console.log(
      "Palmarosa source not found — using committed static files in public/showcase-sites/palmarosa",
    );
    process.exit(0);
  }
  console.error(
    "Palmarosa source not found. Set PALMAROSA_DIR or place the project at ../Palmarosa, or commit public/showcase-sites/palmarosa.",
  );
  process.exit(1);
}

console.log("Building Palmarosa from", sourceDir);
if (!existsSync(join(sourceDir, "node_modules"))) {
  console.log("Installing Palmarosa dependencies…");
  execSync("npm ci", { cwd: sourceDir, stdio: "inherit" });
}
execSync("npm run build", { cwd: sourceDir, stdio: "inherit" });

const distDir = join(sourceDir, "dist");
if (!existsSync(join(distDir, "index.html"))) {
  console.error("Palmarosa build did not produce dist/index.html");
  process.exit(1);
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(dirname(outDir), { recursive: true });
cpSync(distDir, outDir, { recursive: true });

console.log("Copied static site to", outDir);
