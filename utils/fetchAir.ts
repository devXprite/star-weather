import OpenWeather from "@/lib/OpenWeather";
import { Air } from "@/types/AirType";
interface Params {
    lat: number
    lon: number
}
const fetchAir = async ({ lat, lon }: Params): Promise<Air> => {
    const response = await OpenWeather.get('data/2.5/air_pollution', {
        params: {
            lat,
            lon,
        },
    });

    const air = response.data?.list[0];
    return air;
}

export default fetchAir;