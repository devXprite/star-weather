import OverView from '@/components/Overview';
import fetchWeather from '@/utils/fetchWeather';
import WeatherInfo from '@/components/WeatherInfo';
import TodayForecast from '@/components/TodayForecast';
import DailyForecast from '@/components/DailyForecast';
import Map from '@/components/Map';
import fetchGeo from '@/utils/fetchGeo';
import fetchAir from '@/utils/fetchAir';
import AirQuality from '@/components/AirQuality';

// import fs from "fs"
import weather from '@/data/weatherData';
import air from '@/data/airData';
import city from '@/data/cityData';

interface SearchParams {
    q?: string;
}

const Page = async ({ searchParams: { q } }: { searchParams: SearchParams }) => {
    if (!q) return <p>Please Search for City</p>;

    // const city = await fetchGeo(q);
    // if (!city) return <p>No City Found</p>;

    // const weather = await fetchWeather({ lat: city.lat, lon: city.lon });
    // const air = await fetchAir({ lat: city.lat, lon: city.lon })

    // fs.writeFileSync('data/weatherData.ts', `export default ${JSON.stringify(weather)}`);
    // fs.writeFileSync('data/cityData.ts', `export default ${JSON.stringify(city)}`);
    // fs.writeFileSync('data/airData.ts', `export default ${JSON.stringify(air)}`);

    return (
        <div>
            <div className="hidden grid-cols-[1fr_2fr] gap-16 md:grid">
                <div className="space-y-10">
                    <OverView data={weather.current} city={city} />
                    <DailyForecast data={weather.daily} />
                    <AirQuality data={air} />
                </div>
                <div className="space-y-12">
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

                <Map lat={city.lat} lon={city.lon} />
            </div>
        </div>
    );
};

export default Page;
