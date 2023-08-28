import MenuItemConstructorOptions = Electron.MenuItemConstructorOptions

export default [
  {
    label: '文件',
    submenu: [
      {
        label: '新建',
        accelerator: 'Ctrl+N',
        click: () => {
          console.log(111)
        }
      },
      {
        label: '打开...',
        accelerator: 'Ctrl+O'
      },
      {
        type: 'separator'
      } as MenuItemConstructorOptions,
      {
        label: '保存',
        accelerator: 'Ctrl+S'
      },
      {
        label: '另存为...',
        accelerator: 'Ctrl+Shift+S'
      },
      {
        type: 'separator'
      },
      {
        label: '导出...',
        submenu: [
          {
            label: 'PDF'
          },
          {
            label: 'HTML'
          },
          {
            label: '图片'
          }
        ]
      }
    ]
  },
  {
    label: '编辑',
    submenu: [
      {
        label: '撤销',
        role: 'undo'
      },
      {
        label: '重做',
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        label: '剪切',
        role: 'cut'
      },
      {
        label: '复制',
        role: 'copy'
      },
      {
        label: '粘贴',
        role: 'paste'
      }
    ]
  }
] as Array<MenuItemConstructorOptions>
