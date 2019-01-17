(async () => {
  const { writeFile } = require('fs').promises
  const getRepos = require('./get-repos')
  const repos = await getRepos()
  writeFile('data/repos.json', JSON.stringify(repos, null, 2), 'utf-8')
})()
