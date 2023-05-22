<script setup lang="ts">
const props = defineProps({
  localTime: {
    type: String,
    required: true,
  },
  timezone: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>Time of Current Location: {{ localTime + " " + timezone }}</div>
</template>
