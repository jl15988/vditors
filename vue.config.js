const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  // publicPath: './',
  // electron 13 把"build":{}从package.json移除，在vue.config.js里写
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      externals: ['vditor'],
      customFileProtocol: './',
      builderOptions: {
        productName: 'Vditors',
        appId: 'com.jl15988.vditors',
        copyright: 'Copyright © 2023',
        directories: {
          output: 'builder'
        },
        publish: [
          {
            provider: 'generic',
            url: ''
          }
        ],
        nsis: {
          oneClick: false,
          allowElevation: true,
          allowToChangeInstallationDirectory: true,
          // installerIcon: "public/icons/icon.ico",
          // uninstallerIcon: "public/icons/icon.ico",
          // installerHeaderIcon: "public/icons/icon.ico",
          createDesktopShortcut: true,
          createStartMenuShortcut: true,
          shortcutName: 'Vditors',
          perMachine: true
        },
        dmg: {
          contents: [
            {
              x: 410,
              y: 150,
              type: 'link',
              path: '/Applications'
            },
            {
              x: 130,
              y: 150,
              type: 'file'
            }
          ]
        }
        // productName 包名称 version 包版本(package.json)  ext后缀
        // mac: {
        //   icon: 'public/icons/icon.icns',
        //   artifactName: '${productName}_setup_${version}.${ext}'
        // },
        // win: {
        //   icon: 'public/icons/icon.ico',
        //   artifactName: '${productName}_setup_${version}.${ext}'
        // },
        // linux: {
        //   icon: 'public/icons',
        //   artifactName: '${productName}_setup_${version}.${ext}'
        // }
      }
    }
  }
})
