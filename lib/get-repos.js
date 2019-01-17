const axios = require('axios')
const reposUrl = 'https://api.github.com/orgs/telemark/repos'

module.exports = async () => {
  let repos = []
  let page = 0
  let gotRepos = true
  while (gotRepos === true) {
    page++
    const url = `${reposUrl}?page=${page}&per_page=100`
    console.log(url)
    const { data: retrievedRepos } = await axios.get(url)
    console.log(`retrieved ${retrievedRepos.length}`)
    repos = repos.concat(retrievedRepos)
    console.log(`total repos: ${repos.length}`)
    if (retrievedRepos.length === 0) {
      gotRepos = false
    }
  }
  return repos
}
