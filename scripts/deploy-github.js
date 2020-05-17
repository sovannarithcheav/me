const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/sovannarithcheav/me.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)