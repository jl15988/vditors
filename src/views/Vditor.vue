<template>
  <div id="vditor"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Vditor from 'vditor'
import 'vditor/dist/index.css'
import { ipcRenderer } from 'electron'
import { Modal } from 'view-ui-plus'

const vditor = ref<Vditor | null>(null)

const data = {
  filePath: ''
}

const toolbars = [
  'headings',
  'bold',
  'italic',
  'strike',
  '|',
  'line',
  'quote',
  'list',
  'ordered-list',
  'check',
  'outdent',
  'indent',
  'code',
  'inline-code',
  '|',
  'upload',
  'link',
  'table',
  'record',
  'edit-mode',
  'both',
  'preview',
  'outline',
  'export',
  'devtools',
  'br'].map(item => {
  return {
    name: item,
    tipPosition: 's'
  }
})

const fileUpload = (files: File[]): string | Promise<string> | Promise<null> | null => {
  return ''
}

onMounted(() => {
  vditor.value = new Vditor('vditor', {
    placeholder: '在此处输入内容...',
    toolbarConfig: {
      pin: true
    },
    toolbar: toolbars,
    counter: {
      enable: true,
      type: 'text'
    },
    upload: {
      handler: fileUpload
    }
  })
})

ipcRenderer.on('export-pdf', () => {
  if (!vditor.value) return ''
  const value = vditor.value
  console.log(value.getHTML())
  ipcRenderer.send('file-export', value.getHTML(), ['pdf'])
})
ipcRenderer.on('export-html', () => {
  if (!vditor.value) return ''
  const value = vditor.value
  console.log(value.getHTML())
  ipcRenderer.send('file-export', value.getHTML(), ['pdf'])
})
ipcRenderer.on('export-pdf', () => {
  if (!vditor.value) return ''
  const value = vditor.value
  console.log(value.getHTML())
  ipcRenderer.send('file-export', value.getHTML(), ['pdf'])
})
ipcRenderer.on('save', async () => {
  if (!vditor.value) return ''
  const value = vditor.value
  ipcRenderer.send('file-save', '新建文件.md', value.getValue())
})

const readFile = (filePath: string) => {
  ipcRenderer.invoke('read', filePath).then(res => {
    if (res) {
      vditor.value?.setValue(res)
    }
  })
}
ipcRenderer.on('filePath', (event, filePath) => {
  if (!data.filePath) {
    Modal.confirm({
      title: '提示',
      content: '当前内容未保存，确认丢弃？',
      onOk: () => {
        readFile(filePath)
      }
    })
  } else {
    readFile(filePath)
  }
})
</script>

<style scoped>
#vditor {
  min-height: 100vh;
}
</style>
