const axios = require('axios')

module.exports = async url => {
  const renovateUrl = `${url}/raw/master/renovate.json`
  console.log(`lookup ${renovateUrl}`)
  try {
    const { data: renovate } = await axios.get(renovateUrl)
    console.log(`${renovateUrl} - success`)
    return renovate
  } catch (error) {
    console.log(`no renovate found`)
    return false
  }
}
