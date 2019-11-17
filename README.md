[![Build Status](https://travis-ci.com/telemark/util-check-renovate.svg?branch=master)](https://travis-ci.com/telemark/util-check-renovate)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# util-check-renovate

Check renovate settings for repos.

If a file does not match the template the template is copied to clipboard and the repo is opened in your browser.

# Usage

Make sure the [template](data/template.json) is correct.

Add an local `.env``

```
REPOS_URL=https://api.github.com/orgs/telemark/repos
```

Start with collecting the repos.

```
$ npm run save-repos
```

Run the script

```
$ npm start
```

# License

[MIT](LICENSE)
