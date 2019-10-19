module.exports = {
  apps: [
    {
      name: 'code-connection-server',
      script: './index.js'
    }
  ],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-216-232-225.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/code-connection.pem',
      ref: 'origin/master',
      repo: 'git@github.com:madeleinewoodbury/code-connection-server.git',
      path: '/home/ubuntu/code-connection-server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
