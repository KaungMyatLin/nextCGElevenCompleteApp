const { PHASE_DEVELOPMENT_SERVER } = require( 'next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'anyadmin'
        , mongodb_password: 'tw22d56f'
        , mongodb_clustername: 'cluster0'
        , mongodb_database: 'nextcgelevencompleteapp-dev'
      },
      nextConfig: {
        reactStrictMode: true,
        swcMinify: true,
      }
    }
  }

  return {
    env: {
      mongodb_username: 'anyadmin'
      , mongodb_password: 'tw22d56f'
      , mongodb_clustername: 'cluster0'
      , mongodb_database: 'nextcgelevencompleteapp-prd'
    },
    nextConfig: {
      reactStrictMode: true,
      swcMinify: true,
    }
  }
}

// module.exports = {
//   env: {
//     mongodb_username: 'anyadmin'
//     , mongodb_password: 'tw22d56f'
//     , mongodb_clustername: 'cluster0'
//     , mongodb_database: 'nextcgelevencompleteapp'
//   },
//   nextConfig: {
//     reactStrictMode: true,
//     swcMinify: true,
//   }
// }
