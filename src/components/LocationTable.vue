<script setup lang="ts">
import { useStore } from "@/store";
import { ref } from "vue";
import styled from "vue-styled-components";

const state = useStore();
const selected = ref([]);

const deleteLocation = (): void => {
  state.removeSearched(selected.value);
};

const selectAll = (value: boolean): void => {
  state.searched.forEach((item) => (item.selected = value));
};

const headers = [
  { text: "Select", value: "data-table-select" },
  { text: "Location", value: "name" },
  { text: "Coordinates", value: "coordinates" },
  { text: "Timezone", value: "timezone" },
  { text: "Search Datetime", value: "searchDatetime" },
];

const options = {
  sortBy: ["id"],
  sortDesc: [true],
};

const Container = styled.div`
  width: 100%;
`;
</script>

<template>
  <container>
    <v-btn @click="deleteLocation" color="info" small rounded
      >Delete Records</v-btn
    >
    <v-data-table
      ref="table"
      dense
      :single-select="false"
      item-key="id"
      :headers="headers"
      :items="state.searched"
      :items-per-page="10"
      :options="options"
      hide-default-header="true"
    >
      <template v-slot:header="{ props: { headers, ...props } }">
        <thead>
          <tr>
            <th v-for="header in headers" :key="header.value">
              <v-simple-checkbox
                v-model="props.everyItem"
                :indeterminate="props.someItems && !props.everyItem"
                color="purple"
                v-if="header.value === 'data-table-select'"
                @input="selectAll"
              ></v-simple-checkbox>
              <span v-else>{{ header.text }}</span>
            </th>
          </tr>
        </thead>
      </template>
      <template v-slot:item="{ item }">
        <tr>
          <td>
            <v-simple-checkbox v-model="item.selected"></v-simple-checkbox>
          </td>
          <td class="name">{{ item.name }}</td>
          <td>
            {{
              item.coordinates[0].toFixed(4) +
              ", " +
              item.coordinates[1].toFixed(4)
            }}
          </td>
          <td>{{ item.timezone }}</td>
          <td>{{ item.searchDatetime }}</td>
        </tr>
      </template>
    </v-data-table>
  </container>
</template>

<style scoped>
.name {
  max-width: 220px;
}
</style>
