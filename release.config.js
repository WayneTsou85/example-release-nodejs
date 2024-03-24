module.exports = {
    // 在什麼分支下，要執行 semantic-release
    branches: ['main'],
    plugins: [
      '@semantic-release/commit-analyzer',//分析你的 commit message,有沒有 feat or fix
      '@semantic-release/release-notes-generator',
      ['@semantic-release/npm',{npmPublish: false}],
      [
        '@semantic-release/changelog', //產生CHANGELOG
        {
          mangle: false,
          headerIds: false,
          changelogFile: 'CHANGELOG.md', //設定檔案名稱
        },
      ],
      [
        '@semantic-release/git', // 新增CHANGELOG.md後，進行commit
        {
          assets: ['CHANGELOG.md', 'package.json'], // commit 要加入的檔案
          message:
            'chore(release): ${nextRelease.version} [skip ci]', //commit 時的 message
        },
      ],
        
    ],
  };