import {app, dialog, ipcMain} from 'electron';
import fsUtils from "@/utils/fsUtils";

ipcMain.handle('read', ((event, filePath) => {
  return fsUtils.readFile(filePath);
}))
