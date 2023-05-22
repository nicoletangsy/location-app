<script setup lang="ts">
import { computed, type PropType } from "vue";

const props = defineProps({
  currLoc: {
    type: Object as PropType<{
      latitude: number | null;
      longitude: number | null;
    }>,
    required: true,
  },
  getCurrentLocation: {
    type: Function as PropType<() => void>,
    required: true,
  },
});

const locStr = computed(() => {
  return props.currLoc.latitude && props.currLoc.longitude
    ? props.currLoc.latitude?.toString() +
        `, ` +
        props.currLoc.longitude?.toString()
    : null;
});
</script>

<template>
  <div>
    <button @click="props.getCurrentLocation">Get Current Location</button>
    <p>
      Current Location :
      {{ locStr ?? `not available` }}
    </p>
  </div>
</template>
