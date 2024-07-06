import OpenWeather from "@/lib/OpenWeather"
import type { WeatherType } from "@/types/WeatherType"
import { isAxiosError } from "axios"

interface Params {
    lat: string
    lon: string
}

const fetchWeather = async ({ lat, lon }: Params): Promise<WeatherType> => {
    try {
        const response = await OpenWeather.get<WeatherType>("data/2.5/onecall", {
            params: {
                lat,
                lon,
                exclude: "minutely,hourly",
            }
        });

        return response.data;

    } catch (error) {
        console.log(error);
        if (isAxiosError(error) && error?.response?.status === 404) {
            throw new Error("Weather not found for this city! Please try with another city.")
        } else {
            throw new Error("Something went wrong! Please try again later.")
        }
    }
}

export default fetchWeather;