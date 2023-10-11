<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="note-details">
    <div class="note-details__content">
      {{ route.params.id }}
    </div>
  </div>
</template>

<style scoped>

</style>
