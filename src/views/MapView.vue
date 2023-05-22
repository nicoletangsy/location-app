<script setup lang="ts">
import { ref, reactive } from "vue";
import styled from "vue-styled-components";
import axios from "axios";
import LocationMap from "../components/LocationMap.vue";
import SearchedTable from "../components/SearchedTable.vue";
import CurrentLocation from "../components/CurrentLocation.vue";
import type { LocationType } from "@/types/locationType";
import TimeZoneDisplay from "@/components/TimeZoneDisplay.vue";

const center = ref<[number, number]>([43.74834985377921, -79.28939848465869]);
const locations = ref<LocationType[]>([]);
const possibleLocations = ref<LocationType[]>([]);
const searchTerm = ref<string>("");
const timezone = ref("");
const localDateTime = ref("");

const currLoc = ref({
  latitude: null as number | null,
  longitude: null as number | null,
});

const getCurrentLocation = async () => {
  if (navigator.geolocation.getCurrentPosition) {
    navigator.geolocation.getCurrentPosition((position) => {
      currLoc.value.latitude = position.coords.latitude;
      currLoc.value.longitude = position.coords.longitude;
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
};

const searchLocation = async (): Promise<void> => {
  if (!searchTerm.value) return;

  // Fetch the location coordinates using geocoding API
  const apiKey = "9f4ae6f585ad43fbb6891080e2bb2204";
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    searchTerm.value
  )}&key=${apiKey}`;

  try {
    const { data } = await axios.get(apiUrl);

    if (data.results.length > 0) {
      const result = data.results[0];
      const { formatted, geometry, annotations } = result;
      const { timezone } = annotations;
      console.log("nictest: ", result);

      // Add the searched location to the 'locations' ref
      locations.value.push({
        id: locations.value.length + 1,
        name: formatted,
        coordinates: [geometry.lat, geometry.lng],
        offset: timezone?.offset_sec || 0,
        timezone: timezone?.short_name || "",
      });
      console.log("searched location added to locations: ", locations.value);
      // Emit the searched location to the parent component
      // emit("searched", [geometry.lat, geometry.lng]);
      center.value = [geometry.lat, geometry.lng];
      timezone.value = timezone?.short_name || "";

      const current = new Date();
      const timezoneOffset = timezone?.offset_sec * 1000; // Convert to milliseconds
      const locationTime = new Date(
        current.getTime() +
          timezoneOffset +
          current.getTimezoneOffset() * 60 * 1000
      ); // Adjust based on timezone offset
      localDateTime.value = locationTime.toLocaleString();

      // todo: add auto complete show all possible locations
      // add all possible locations to the 'possibleLocations' ref
      possibleLocations.value = data.results.map((result: any) => {
        const { formatted, geometry } = result;
        return {
          id: locations.value.length + 1,
          name: formatted,
          coordinates: [geometry.lat, geometry.lng],
        };
      });
      console.log(
        "possible searched location added: ",
        possibleLocations.value
      );
    } else {
      console.log("Location not found.");
    }
  } catch (error) {
    console.error("Error searching location:", error);
  }
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;
</script>

<template>
  <container>
    <location-map :searched="locations" :center="center" />
    <div>
      <current-location
        :currLoc="currLoc"
        :getCurrentLocation="getCurrentLocation"
        :searched="locations"
      />
      <div>
        <input
          type="text"
          v-model="searchTerm"
          @keydown.enter="searchLocation"
          placeholder="Search Location"
        />
        <button @click="searchLocation">Search</button>
      </div>
      <time-zone-display :timezone="timezone" :localTime="localDateTime" />
      <location-table :locations="locations" />
    </div>
  </container>
</template>
