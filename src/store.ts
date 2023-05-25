import { defineStore } from "pinia";
import type { LocationType } from "./types/locationType";

export const useStore = defineStore("state", {
  state: () => {
    return {
      apiKey: "9f4ae6f585ad43fbb6891080e2bb2204",
      currentLocation: {} as LocationType,
      searched: [
        {
          id: 1,
          name: "Madrid",
          coordinates: [40.4165, -3.70256],
          offset: 7200,
          timezone: "CEST",
          searchDatetime: new Date("2020-01-15").toLocaleString(),
          selected: false,
        },
        {
          id: 2,
          name: "New York",
          coordinates: [40.71427, -74.00597],
          offset: -14400,
          timezone: "EDT",
          searchDatetime: new Date("2022-05-21").toLocaleString(),
          selected: false,
        },
        {
          id: 3,
          name: "London",
          coordinates: [51.50853, -0.12574],
          offset: 3600,
          timezone: "BST",
          searchDatetime: new Date("2022-05-25").toLocaleString(),
          selected: false,
        },
        {
          id: 4,
          name: "Tokyo",
          coordinates: [35.6895, 139.69171],
          offset: 32400,
          timezone: "JST",
          searchDatetime: new Date("2023-04-25").toLocaleString(),
          selected: false,
        },
        {
          id: 5,
          name: "Sydney",
          coordinates: [-33.86785, 151.20732],
          offset: 36000,
          timezone: "AEST",
          searchDatetime: new Date("2023-04-26").toLocaleString(),
          selected: false,
        },
        {
          id: 6,
          name: "Rio de Janeiro",
          coordinates: [-22.90278, -43.2075],
          offset: -10800,
          timezone: "BRT",
          searchDatetime: new Date("2023-05-02").toLocaleString(),
          selected: false,
        },
        {
          id: 7,
          name: "China",
          coordinates: [35.86166, 104.1954],
          offset: 28800,
          timezone: "CST",
          searchDatetime: new Date("2023-05-03").toLocaleString(),
          selected: false,
        },
        {
          id: 8,
          name: "Moscow",
          coordinates: [55.75222, 37.61556],
          offset: 10800,
          timezone: "MSK",
          searchDatetime: new Date("2023-05-12").toLocaleString(),
          selected: false,
        },
        {
          id: 9,
          name: "Paris",
          coordinates: [48.85341, 2.3488],
          offset: 7200,
          timezone: "CEST",
          searchDatetime: new Date("2023-05-13").toLocaleString(),
          selected: false,
        },
        {
          id: 10,
          name: "Berlin",
          coordinates: [52.52437, 13.41053],
          offset: 7200,
          timezone: "CEST",
          searchDatetime: new Date("2023-05-14").toLocaleString(),
          selected: false,
        },
        {
          id: 11,
          name: "36 Howden Road, Toronto, ON M1R 3C7, Canada",
          coordinates: [43.74834985377921, -79.28939848465869],
          offset: -14400,
          timezone: "EDT",
          searchDatetime: new Date("2023-05-15").toLocaleString(),
          selected: false,
        },
      ] as LocationType[],
    };
  },
  actions: {
    setCurrentLocation(location: LocationType) {
      this.currentLocation = location;
    },
    addSearched(searched: LocationType) {
      this.searched.push(searched);
    },
    removeSearched(remove: LocationType[]) {
      this.searched = this.searched.filter((item) => !remove.includes(item));
      this.searched = this.searched.filter((item) => !item.selected);
    },
    setSearched(searched: LocationType) {
      const index = this.searched.findIndex((item) => item.id === searched.id);
      if (index !== -1) {
        this.searched[index] = searched;
      }
    },
  },
});
