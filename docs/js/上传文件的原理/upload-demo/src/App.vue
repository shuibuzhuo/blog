<script setup>
import axios from 'axios'

function onFileChange(e) {
  // 获取到 type="file" 的 input 元素
  const target = e.target
  // 获取上传的文件
  const files = target.files
  // 如果文件存在
  if (files) {
    // 获取到上传的文件
    const uploadFile = files[0]
    console.log('uploadFile', uploadFile);
    // 定义 form data，form data 的数据结构和我们使用 form 表单提交时的数据结构一致
    const formData = new FormData()
    // 添加 uploadFile 字段，值为我们上传的文件的二进制数据
    formData.append('uploadFile', uploadFile)
    // 发送 POST 请求
    axios.post('https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188', formData, {
      headers: {
        // 设置 Content-Type 为 multipart/form-data 的请求头
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      console.log(res)
    })
  }
}
</script>

<template>
  <form 
    method="post" 
    enctype="multipart/form-data"
    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
  >
    <input type="file" name="uploadFile" @change="onFileChange" />
    <input type="text" name="userName" />
    <button type="submit">提交</button>
  </form>
  <!-- <form 
    method="post" 
    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
  >
    <input type="file" name="uploadFile" />
    <input type="text" name="userName" />
    <button type="submit">提交</button>
  </form> -->
  <!-- <form 
    method="post" 
    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
  >
    <input type="text" name="userName" />
    <input type="text" name="city" />
    <button type="submit">提交</button>
  </form> -->
</template>

<style scoped>
</style>
