import OpenWeather from "@/lib/OpenWeather";
import { City } from "@/types/CityType";
import axios from "axios";
import { headers } from "next/headers";

const IP = () => {
    const FALLBACK_IP_ADDRESS = '';
    const forwardedFor = headers().get('x-forwarded-for')

    if (forwardedFor && forwardedFor != '::1') return forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS
    return headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS;
}

const fetchGeo = async (q: string): Promise<City | null> => {
    try {
        if (q) {
            const response = await OpenWeather.get<City[]>('geo/1.0/direct', {
                params: { q, limit: 1 },
            });

            return response.data[0];
        }

        const { data } = await axios.get('https://ipinfo.io/' + IP(), {
            params: {
                token: process.env.IPINFO_API_KEY
            }
        });

        console.log(data);

        const city: City = {
            name: data.city,
            country: data.country,
            state: data.region,
            lat: parseFloat(data.loc.split(',')[0]),
            lon: parseFloat(data.loc.split(',')[1]),
        }

        return city;

    } catch (error) {
        console.log(error);
        return null;
    }

}

export default fetchGeo;