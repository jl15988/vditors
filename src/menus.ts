import MenuItemConstructorOptions = Electron.MenuItemConstructorOptions;
import {BrowserWindow, ipcMain} from 'electron'

const theme = ['ant-design', 'light', 'dark', 'wechat']

export default (win: BrowserWindow) => {
  return [
    {
      label: '文件(F)',
      accelerator: 'Alt+F',
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
              label: 'PDF',
              click: () => {
                win.webContents.send('export-pdf')
              }
            },
            {
              label: 'HTML',
              click: () => {
                win.webContents.send('export-html')
              }
            },
            {
              label: '图片',
              click: () => {
                win.webContents.send('export-images')
              }
            }
          ]
        }
      ]
    },
    {
      label: '编辑(E)',
      accelerator: 'Alt+E',
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
        },
        {
          type: 'separator'
        },
        {
          label: '复制为纯文本'
        },
        {
          label: '复制为Markdown',
          accelerator: 'Ctrl+Shift+C'
        },
        {
          label: '复制为HTML'
        }
      ]
    },
    {
      label: '视图(V)',
      accelerator: 'Alt+V',
      submenu: [
        {
          label: '大纲',
          accelerator: 'Ctrl+Shift+G'
        },
        {
          label: '工具栏',
          accelerator: 'Ctrl+U'
        },
        {
          type: 'separator'
        },
        {
          label: '全屏/窗口',
          accelerator: 'F11'
        },
      ]
    },
    {
      label: '主题(T)',
      accelerator: 'Alt+T',
      submenu: [
        {
          label: '编辑器',
          submenu: theme.map(item => {
            return {
              label: item
            }
          })
        },
        {
          label: '暗色'
        },
        {
          label: '亮色'
        },
        {
          type: 'separator'
        },
        {
          label: ''
        }
      ]
    }
  ] as Array<MenuItemConstructorOptions>
}
