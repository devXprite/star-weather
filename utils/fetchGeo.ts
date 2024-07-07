import OpenWeather from "@/lib/OpenWeather";
import { City } from "@/types/CityType";

const fetchGeo = async (q: string, signal?: AbortSignal): Promise<City | null> => {
    const response = await OpenWeather.get<City[]>('geo/1.0/direct', {
        params: {
            q,
            limit: 1
        },
        // signal,
    });

    const city = response.data[0];
    return city;
}

export default fetchGeo;