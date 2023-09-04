import {app, dialog, ipcMain} from 'electron';

const homeDir = require('os').homedir();
const desktopDir = `${homeDir}/Desktop`;

const chooseFile = (cb: (filePath: String[]) => void) => {
  dialog.showOpenDialog({
    title: '选择文件',
    defaultPath: desktopDir,
    filters: [{
      name: 'MD',
      extensions: ['md']
    }],
    properties: ['openFile']
  }).then(res => {
    if (res.filePaths) {
      cb(res.filePaths)
    }
  }).catch(err => {
    dialog.showErrorBox("错误", err)
  })
}

ipcMain.handle('alert', (event, message, type) => {
  return dialog.showMessageBoxSync({
    title: '提示',
    type: type || 'info',
    buttons: ['取消', '确认'],
    message: message
  })
})

export default {
  chooseFile
}
