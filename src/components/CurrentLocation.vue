<script setup lang="ts">
import { useStore } from "@/store";
import { computed } from "vue";
import styled from "vue-styled-components";
import axios from "axios";
import type { LocationType } from "@/types/locationType";

const state = useStore();

const getCurrentLocation = async (): Promise<void> => {
  if (navigator.geolocation.getCurrentPosition) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const coordinates = [position.coords.latitude, position.coords.longitude];
      const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        coordinates.join(",")
      )}&key=${state.apiKey}`;
      try {
        const { data } = await axios.get(apiUrl);

        if (data.results.length > 0) {
          const result = data.results[0];
          const { formatted, geometry, annotations } = result;
          const { timezone } = annotations;
          const current = new Date();
          timezone.value = timezone?.short_name || "";
          const timezoneOffset = timezone?.offset_sec * 1000; // Convert to milliseconds
          const locationTime = new Date(
            current.getTime() +
              timezoneOffset +
              current.getTimezoneOffset() * 60 * 1000
          ); // Adjust based on timezone offset

          const location: LocationType = {
            id: state.searched.length + 1,
            name: formatted,
            coordinates: [geometry.lat, geometry.lng],
            offset: timezone?.offset_sec || 0,
            timezone: timezone?.short_name || "",
            searchDatetime: current.toLocaleString(),
            localDatetime: locationTime.toLocaleString(),
            selected: false,
          };

          // Add the searched location to the 'locations' ref
          state.addSearched(location);

          // update the current location
          state.setCurrentLocation(location);
        } else {
          console.log("Location not found.");
        }
      } catch (error) {
        console.error("Error searching location:", error);
      }
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
};

const locStr = computed(() => {
  return state.currentLocation ? state.currentLocation.name : null;
});

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 12px;
`;

const SCurrLoc = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-right: 12px;
`;
</script>

<template>
  <container>
    <s-curr-loc>
      Current Location :
      {{ locStr ?? `Not Available` }}
    </s-curr-loc>
    <v-btn @click="getCurrentLocation" color="info" small rounded
      >Get Current Location</v-btn
    >
  </container>
</template>
