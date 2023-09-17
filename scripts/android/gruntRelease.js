module.exports = function () {
  const execSync = require("child_process").execSync;
  console.log("grunt release");
  const result = execSync("npx grunt release").toString();
  console.log(result);
};
