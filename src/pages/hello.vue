<template>
  <div>
    Page Content: {{ data }}
  </div>
</template>
<script setup>
const { data } = await useFetch('/api/hello')
</script>