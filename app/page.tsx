import OverView from '@/components/Overview';
import fetchWeather from '@/utils/fetchWeather';
import weather from '@/data/weatherData';
import WeatherInfo from '@/components/WeatherInfo';
import TodayForecast from '@/components/TodayForecast';
import DailyForecast from '@/components/DailyForecast';

interface SearchParams {
    query?: string;
}

const Page = async ({ searchParams: { query } }: { searchParams: SearchParams }) => {
    // const weather = await fetchWeather({
    //     lat: '28.6600',
    //     lon: '77.2300',
    // });

    // fs.writeFileSync('data/weatherData.ts', `export default ${JSON.stringify(weather)}`);

    return (
        <div className="mt-24 grid md:grid-cols-[1fr_2fr] md:gap-12">
            <div className='space-y-10'>
                <OverView data={weather.current} /> 
                <DailyForecast data={weather.daily} />
            </div>
            <div className="space-y-12">
                <WeatherInfo data={weather.current} />
                <TodayForecast data={weather.hourly} />
            </div>
        </div>
    );
};

export default Page;
