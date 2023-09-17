module.exports = function (context) {
  const execSync = require('child_process').execSync;
  console.log("grunt build");
  const result = execSync('npx grunt build').toString();
  console.log(result);
};
