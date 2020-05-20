const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const token = core.getInput('token');
    const title = core.getInput('title');
    const body = core.getInput('body');
    const assignees = core.getInput('assignees');

    const octokit = new github.GitHub(token);

    const response = await octokit.issues.create({
      ...github.context.repo,
      title,
      body,
      assignees: assignees ? assignees.split(',') : undefined
    })

    core.setOutput('issue', JSON.stringify(response.data));

  } catch (err) {
    core.setFailed(err.message)
  }
}

run();