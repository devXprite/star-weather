import OverView from '@/components/Overview';
import fetchWeather from '@/utils/fetchWeather';
import weather from '@/data/weatherData';
import WeatherInfo from '@/components/WeatherInfo';
import TodayForecast from '@/components/TodayForecast';
import DailyForecast from '@/components/DailyForecast';
import Map from '@/components/Map';
import BarChart from '@/components/BarChart';
import searchGeo from '@/actions/searchGeo';

interface SearchParams {
    q?: string;
}

const Page = async ({ searchParams: { q } }: { searchParams: SearchParams }) => {
    if (!q) return <p>Please Search for City</p>;

    const city = await searchGeo(q);
    if (!city) return <p>No City Found</p>;

    // const weather = await fetchWeather({
    //     lat: city.lat.toString(),
    //     lon: city.lon.toString(),
    // });

    // fs.writeFileSync('data/weatherData.ts', `export default ${JSON.stringify(weather)}`);

    return (
        <div>
            <div className="hidden grid-cols-[1fr_2fr] gap-16 md:grid">
                <div className="space-y-10">
                    <OverView data={weather.current} city={city} />
                    <DailyForecast data={weather.daily} />
                </div>
                <div className="space-y-12">
                    <WeatherInfo data={weather.current} />
                    <TodayForecast data={weather.hourly} />
                    <Map lat={city.lat} lon={city.lon} />
                </div>
            </div>
            <div className="space-y-12 md:hidden">
                <OverView data={weather.current} city={city} />
                <WeatherInfo data={weather.current} />
                <TodayForecast data={weather.hourly} />
                <DailyForecast data={weather.daily} />
                <Map lat={city.lat} lon={city.lon} />
            </div>
        </div>
    );
};

export default Page;
