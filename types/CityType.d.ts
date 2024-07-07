export interface City {
    name: string;
    local_names?: {
        [key: string]: string | null;
    };
    lat: number;
    lon: number;
    country: string;
    state: string;
}