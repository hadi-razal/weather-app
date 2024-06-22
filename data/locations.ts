export interface CityCoordinates {
    name: string;
    latitude: number;
    longitude: number;
}

export const delhi: CityCoordinates = {
    name: "Delhi",
    latitude: 28.7041,
    longitude: 77.1025,
};

export const moscow: CityCoordinates = {
    name: "Moscow",
    latitude: 55.7558,
    longitude: 37.6176,
};

export const paris: CityCoordinates = {
    name: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
};

export const newYork: CityCoordinates = {
    name: "New York",
    latitude: 40.7128,
    longitude: -74.006,
};

export const sydney: CityCoordinates = {
    name: "Sydney",
    latitude: -33.8688,
    longitude: 151.2093,
};

export const riyadh: CityCoordinates = {
    name: "Riyadh",
    latitude: 24.7136,
    longitude: 46.6753,
};

export const cities: CityCoordinates[] = [delhi, moscow, paris, newYork, sydney, riyadh];


