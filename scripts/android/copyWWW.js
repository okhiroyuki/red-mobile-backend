module.exports = function () {
  const fs = require("fs-extra");
  const path = require("path");

  async function clean() {
    const currentWorkingDirectory = process.cwd();
    const pathsToClean = [
      "www/assets/",
      "www/css/",
      "www/js",
      "www/img/",
      "www/*.html",
      "www/*.icon",
    ];

    for (const p of pathsToClean) {
      await fs.remove(path.resolve(currentWorkingDirectory, p));
    }
  }

  async function ensureDirectoryExists(directoryPath) {
    if (!(await fs.pathExists(directoryPath))) {
      await fs.mkdirp(directoryPath);
    }
  }

  async function copy() {
    const currentWorkingDirectory = process.cwd();
    const source = path.resolve(currentWorkingDirectory, "dist/");
    const destination = path.resolve(currentWorkingDirectory, "www/");

    await ensureDirectoryExists(source);

    await fs.copy(source, destination);
  }

  async function build() {
    await clean();
    await copy();
  }

  build().catch((error) => {
    console.error(error);
    process.exit(1);
  });
};
