<template>
  <div class="notes-menu">
    <button @click="addHandler">+</button>
    <button :disabled="!props.canDelete" @click="deleteHandler">x</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['add', 'delete']);

const props = defineProps({
  canDelete: {
    type: Boolean,
    default: false,
  },
});

const deleteHandler = () => {
  emit('delete');
};

const addHandler = () => {
  emit('add');
};
</script>

<style lang="scss">
.notes-menu {
  position: relative;
}
</style>
