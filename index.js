(async () => {
  const opn = require('opn')
  const clipboardy = require('clipboardy')
  const { writeFile } = require('fs').promises
  let repos = require('./data/repos.json')
  const template = require('./data/template.json')
  const getRenovate = require('./lib/get-renovate-json')
  console.log(`got ${repos.length} repos`)
  const next = async () => {
    if (repos.length > 0) {
      const repo = repos.pop()
      console.log(`now checking ${repo.name}`)
      const renovate = await getRenovate(repo.html_url)
      if (renovate) {
        if (JSON.stringify(renovate, null, 2) === JSON.stringify(template, null, 2)) {
          console.log(`${repo.name} - renovate ok`)
          await next()
        } else {
          console.log(`${repo.name} - renovate needs update`)
          await clipboardy.write(JSON.stringify(template, null, 2))
          await writeFile('data/repos.json', JSON.stringify(repos, null, 2), 'utf-8')
          opn(`${repo.html_url}/blob/master/renovate.json`)
          process.exit()
        }
      } else {
        console.log(`${repo.name} - no renovate`)
        await next()
      }
    } else {
      console.log('Finished!')
      await writeFile('data/repos.json', JSON.stringify(repos, null, 2), 'utf-8')
    }
  }
  await next()
})()
