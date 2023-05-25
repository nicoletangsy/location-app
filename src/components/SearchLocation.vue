<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useStore } from "@/store";
import type { LocationType } from "@/types/locationType";
import styled from "vue-styled-components";

const state = useStore();
const searchTerm = ref<string>("");

const searchLocation = async (): Promise<void> => {
  if (!searchTerm.value) return;

  // Fetch the location coordinates using geocoding API
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    searchTerm.value
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
    } else {
      console.log("Location not found.");
    }
  } catch (error) {
    console.error("Error searching location:", error);
  }
};

const Container = styled.div`
  margin-bottom: 12px;
`;

const SSearch = styled.div`
  display: flex;
  align-items: baseline;
`;

const SField = styled.div`
  width: 160px;
  margin-right: 12px;
`;
</script>

<template>
  <container>
    <s-search>
      <s-field>
        <v-text-field
          placeholder="Search Location"
          solo
          type="text"
          v-model="searchTerm"
          @keydown.enter="searchLocation"
          clearable
          dense
          single-line
        ></v-text-field>
      </s-field>
      <v-btn @click="searchLocation" color="info" small rounded>Search</v-btn>
    </s-search>
    <div>
      Time of Current Location:
      {{
        state.searched[state.searched.length - 1].localDatetime
          ? state.searched[state.searched.length - 1].localDatetime +
            " " +
            state.searched[state.searched.length - 1].timezone
          : "Not Available"
      }}
    </div>
  </container>
</template>
