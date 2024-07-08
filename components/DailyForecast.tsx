import type { DailyEntity } from '@/types/WeatherType';
import _ from 'lodash';
import { FaTemperatureArrowDown, FaTemperatureArrowUp, FaWind } from 'react-icons/fa6';

interface Props {
    data: DailyEntity[];
}

// const getDailyForecast = (data: DailyEntity[]) => {
//     const forecastGroup = _.chain(forecast.list)
//         .groupBy(item => new Date(item.dt_txt).getDate())
//         .values()
//         .value();

//     const dailyForecast = forecastGroup.map(day => {
//         return {
//             date: new Date(day[0].dt_txt),
//             minTemp: _.minBy(day, 'main.temp_min')?.main.temp_min,
//             maxTemp: _.maxBy(day, 'main.temp_max')?.main.temp_max,
//             temp: _.meanBy(day, 'main.temp').toFixed(0),
//             weather: day[0].weather[0],
//             humidity: _.meanBy(day, 'main.humidity'),
//             clouds: _.meanBy(day, 'clouds.all').toFixed(0),
//             wind: _.meanBy(day, 'wind.speed').toFixed(0),
//         };
//     });

//     return dailyForecast;
// };

const DailyForecast = ({ data }: Props) => {
    return (
        <section>
            <h3 className="section-title">7 day Forecast</h3>
            <div className="flex flex-col gap-1.5 md:gap-2 text-center">
                {data.map((day, index) => (
                    <div
                        key={day.dt}
                        className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center gap-2 rounded-lg bg-gray-800 px-4 py-3 text-xs md:text-sm text-gray-300 shadow-md"
                    >
                        <div className="text-left text-xs md:text-sm">
                            <p>
                                {new Date(day.dt * 1000).toLocaleDateString(undefined, {
                                    weekday: 'long',
                                })}
                            </p>
                           
                        </div>

                        <img
                            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                            className="-my-2.5 -ml-2 inline-block size-10"
                        />

                        <p>
                            <FaTemperatureArrowUp className="inline-block" /> {day.temp.max.toFixed(0)}°
                        </p>

                        <p>
                            <FaTemperatureArrowDown className="inline-block" /> {day.temp.min.toFixed(0)}°
                        </p>
                        <p className='whitespace-nowrap'>
                            <FaWind className="inline-block" /> {day.wind_speed.toFixed(0)}<span className='ml-0.5 text-[8px] md:text-[10px] text-gray-400'>m/s</span>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DailyForecast;
