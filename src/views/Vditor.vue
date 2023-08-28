<template>
  <div id="vditor"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Vditor from 'vditor'
import 'vditor/dist/index.css'

const vditor = ref<Vditor | null>(null)

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
  'insert-after',
  'insert-before',
  'undo',
  'redo',
  'upload',
  'link',
  'table',
  'record',
  'edit-mode',
  'both',
  'preview',
  'fullscreen',
  'outline',
  'code-theme',
  'content-theme',
  'export',
  'devtools',
  'br'].map(item => {
  return {
    name: item,
    tipPosition: 's'
  }
})

onMounted(() => {
  vditor.value = new Vditor('vditor', {
    placeholder: '在此处输入内容...',
    toolbar: toolbars
  })
})
</script>

<style scoped>
#vditor {
  min-height: 100vh;
}
</style>
