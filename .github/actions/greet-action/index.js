const core = require('@actions/core');

try {
  // Get input
  const name = core.getInput('who-to-greet');

  // Create greeting message
  const message = `Hello ${name}! 👋`;
  console.log(message);

  // Get current time
  const time = new Date().toTimeString();

  // Set output
  core.setOutput("time", time);

} catch (error) {
  core.setFailed(error.message);
}
