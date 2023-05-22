<script setup lang="ts">
import styled from "vue-styled-components";
import { ref, type PropType } from "vue";
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import IconCurrLoc from "./icons/IconCurrLoc.vue";
import type { LocationType } from "@/types/locationType";

const props = defineProps({
  center: {
    type: Array as unknown as PropType<[number, number]>,
    required: true,
  },
  searched: {
    type: Array as PropType<LocationType[]>,
    required: true,
  },
});

const zoom = ref<number>(16);
const mapOptions = ref<object>({ zoomSnap: 0.5 });
const url = ref<string>("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
const attribution = ref<string>(
  "&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
);

const MapContainer = styled.div`
  overflow: hidden;
  width: 50%;
`;
</script>

<template>
  <map-container>
    <!-- <v-icon size="large" color="red-darken-2" icon="mdi-map-marker " /> -->
    <l-map
      :zoom="zoom"
      :center="props.center"
      :options="mapOptions"
      style="height: 100%"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        v-for="location in searched"
        :key="location.id"
        :lat-lng="location.coordinates"
      ></l-marker>
      <l-marker :lat-lng="props.center">
        <l-icon>
          <icon-curr-loc />
        </l-icon>
      </l-marker>
    </l-map>
  </map-container>
</template>
