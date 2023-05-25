export interface LocationType {
  id: number;
  name: string;
  coordinates: [number, number];
  offset: number;
  timezone: string;
  searchDatetime: string;
  localDatetime?: string;
  selected: boolean;
}
