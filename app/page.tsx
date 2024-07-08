import OverView from '@/components/Overview';
import fetchWeather from '@/utils/fetchWeather';
import WeatherInfo from '@/components/WeatherInfo';
import TodayForecast from '@/components/TodayForecast';
import DailyForecast from '@/components/DailyForecast';
import Map from '@/components/Map';
import fetchGeo from '@/utils/fetchGeo';
import fetchAir from '@/utils/fetchAir';
import AirQuality from '@/components/AirQuality';

import fs from 'fs';
import weather from '@/sample/weatherData';
import air from '@/sample/airData';
import city from '@/sample/cityData';
import SunPosition from '@/components/SunPosition';

interface SearchParams {
    q?: string;
}

const Page = async ({ searchParams: { q = "" } }: { searchParams: SearchParams }) => {
    // if (!q) return <p>Please Search for City</p>;

    const city = await fetchGeo(q);
    if (!city) return <p>No City Found</p>;
    console.log(city);

    // const weather = await fetchWeather({ lat: city.lat, lon: city.lon });
    // const air = await fetchAir({ lat: city.lat, lon: city.lon })

    // fs.writeFileSync('sample/weatherData.ts', `export default ${JSON.stringify(weather)}`);
    // fs.writeFileSync('sample/cityData.ts', `export default ${JSON.stringify(city)}`);
    // fs.writeFileSync('sample/airData.ts', `export default ${JSON.stringify(air)}`);

    return (
        <div>
            <div className="hidden grid-cols-[1fr_2fr] gap-16 md:grid">
                <div className="space-y-10">
                    <OverView data={weather.current} city={city} />
                    <AirQuality data={air} />
                    <SunPosition sunrise={weather.current.sunrise} sunset={weather.current.sunset} />
                    <DailyForecast data={weather.daily} />
                </div>
                <div className="space-y-10">
                    <WeatherInfo data={weather.current} />
                    <TodayForecast data={weather.hourly} />
                    <Map lat={city.lat} lon={city.lon} />
                </div>
            </div>
            <div className="space-y-10 md:hidden">
                <OverView data={weather.current} city={city} />
                <WeatherInfo data={weather.current} />
                <TodayForecast data={weather.hourly} />
                <DailyForecast data={weather.daily} />
                <AirQuality data={air} />
                <SunPosition sunrise={weather.current.sunrise} sunset={weather.current.sunset} />
                <Map lat={city.lat} lon={city.lon} />
            </div>
        </div>
    );
};

export default Page;
