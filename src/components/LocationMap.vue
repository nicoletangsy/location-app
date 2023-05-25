<script setup lang="ts">
import styled from "vue-styled-components";
import { ref } from "vue";
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import { VIcon } from "vuetify/lib";
import { useStore } from "@/store";

const state = useStore();
const zoom = ref<number>(16);
const mapOptions = ref<object>({ zoomSnap: 0.5 });
const url = ref<string>("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
const attribution = ref<string>(
  "&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
);

const MapContainer = styled.div`
  width: 50%;
`;
</script>

<template>
  <map-container>
    <l-map
      :zoom="zoom"
      :center="state.searched[state.searched.length - 1].coordinates"
      :options="mapOptions"
      style="height: 100%"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        :lat-lng="state.searched[state.searched.length - 1].coordinates"
      >
        <l-icon>
          <v-icon large color="#d32f2f">mdi-map-marker</v-icon>
        </l-icon>
      </l-marker>
      <div v-for="location in state.searched" :key="location.id">
        <l-marker
          v-if="location.id !== state.searched[state.searched.length - 1].id"
          :lat-lng="location.coordinates"
        >
          <l-icon>
            <v-icon large color="#757575">mdi-map-marker</v-icon>
          </l-icon>
        </l-marker>
      </div>
    </l-map>
  </map-container>
</template>
