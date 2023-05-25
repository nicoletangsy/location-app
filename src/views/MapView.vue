<script setup lang="ts">
import styled from "vue-styled-components";
import LocationMap from "../components/LocationMap.vue";
import LocationTable from "../components/LocationTable.vue";
import CurrentLocation from "../components/CurrentLocation.vue";
import SearchLocation from "@/components/SearchLocation.vue";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const MapContent = styled.div`
  padding 12px;
  width: 50%;
`;
</script>

<template>
  <v-app id="app">
    <container>
      <location-map />
      <map-content>
        <current-location />
        <search-location />
        <location-table />
      </map-content>
    </container>
  </v-app>
</template>

<style scoped>
#app {
  padding: 0;
  margin: 0;
}
</style>
