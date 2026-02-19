#!/usr/bin/env node

const { execSync } = require("child_process");

const commands = {
  show_folder: 'tree -d -L 4 src/app -I "node_modules|.git|dist|public"',
  show_files: 'tree -L 4 src/app -I "node_modules|.git|dist|public"',
};

const arg = process.argv[2];

if (!commands[arg]) {
  console.log("Available commands:");
  console.log(Object.keys(commands).join("\n"));
  process.exit(1);
}

execSync(commands[arg], { stdio: "inherit" });
