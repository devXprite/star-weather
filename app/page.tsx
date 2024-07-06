import OverView from '@/components/Overview';
import fetchWeather from '@/utils/fetchWeather';
import weather from '@/data/weatherData';
import WeatherInfo from '@/components/WeatherInfo';
import TodayForecast from '@/components/TodayForecast';


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
        <div className="grid md:grid-cols-[1fr_2fr] mt-24 md:gap-10">
            <div>
                <OverView data={weather.current} />
            </div>
            <div className='space-y-12'>
              <WeatherInfo data={weather.current} />
              <TodayForecast data={weather.hourly} />

            </div>
        </div>
    );
};

export default Page;
