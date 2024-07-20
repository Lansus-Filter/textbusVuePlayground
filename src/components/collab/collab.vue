<template>
  <div class="ui-container">
    <div class="users">
      <div v-for="user in users" :key="user.id">{{ user.username }}</div>
    </div>
    <div v-if="isLoading" class="spinner">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject, ref, onMounted } from 'vue'
// import { renderTextbus } from '../../main.ts'
import { userInfo } from './collab.component'

export default {
  setup () {
    const editorRef = ref(null)
    const isLoading = ref(true)
    const users = ref([userInfo]) // 初始化用户列表，包含当前用户

    onMounted(() => {
    //   if (editorRef.value) {
    //     renderTextbus(editorRef.value)
    //   }
      setTimeout(() => {
        isLoading.value = false
      }, 2000)

      // 模拟新用户加入
      setTimeout(() => {
        users.value.push({
          id: Math.random().toString(),
          username: '新用户' + Math.floor(Math.random() * 100),
          color: '#' + Math.floor(Math.random() * 16777215).toString(16)
        })
      }, 5000)
    })

    return { editorRef, isLoading, users }
  }
}
</script>
