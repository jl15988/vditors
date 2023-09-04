import {app, dialog, ipcMain} from 'electron';
import * as fs from "fs";

const homeDir = require('os').homedir();
const desktopDir = `${homeDir}/Desktop`;
import FileFilter = Electron.FileFilter;

interface FileType {
  [type: string]: FileFilter
}

const fileType = {
  'pdf': {
    name: 'PDF',
    extensions: ['pdf']
  },
  'html': {
    name: 'Html',
    extensions: ['html']
  },
  'image': {
    name: 'Images',
    extensions: ['jpg', 'png', 'gif']
  },
  'movies': {
    name: 'Movies',
    extensions: ['mkv', 'avi', 'mp4']
  },
  'all': {
    name: 'All Files',
    extensions: ['*']
  }
} as FileType

const getType = (types: string[]) => {
  const res = [] as FileFilter[]
  if (types && types.length > 0) {
    for (let type of types) {
      res.push(fileType[type])
    }
  }
  return res
}

ipcMain.on('file-export', (event, file, types) => {
  dialog.showSaveDialog({
    title: '导出',
    defaultPath: app.getAppPath(),
    filters: getType(types),
    buttonLabel: '确认',
    properties: ['createDirectory']
  }).then(res => {
    if (res.filePath)
      fs.writeFileSync(res.filePath, file, 'utf-8')
  }).catch(err => {
    dialog.showErrorBox("错误", err)
  })
})

ipcMain.on('file-save', (event, fileName, value) => {
  dialog.showSaveDialog({
    title: '保存',
    defaultPath: desktopDir + "\\" + fileName,
    filters: [{
      name: 'MD',
      extensions: ['md']
    }],
    buttonLabel: '保存',
    properties: ['createDirectory']
  }).then(res => {
    if (res.filePath) {
      fs.writeFileSync(res.filePath, value, 'utf-8')
    }
  }).catch(err => {
    dialog.showErrorBox("错误", err)
  })
})
