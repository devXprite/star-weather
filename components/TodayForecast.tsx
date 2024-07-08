import { HourlyEntity } from '@/types/WeatherType';
import BarChart from './BarChart';

interface Props {
    data: HourlyEntity[];
}

const TodayForecast = ({ data }: Props) => {
    return (
        <section>
            <h3 className="section-title">Today Forecast</h3>

            <div>
                <BarChart
                    labels={data
                        .slice(0, 24)
                        .map(hour =>
                            new Date(hour.dt * 1000).toLocaleString('en-US', { hour: 'numeric', hour12: true }),
                        )}
                    values={data.slice(0, 24).map(hour => hour.temp)}
                    label="Temperature (°C)"
                />
            </div>

            <div className="mt-7 grid grid-cols-4 gap-2 text-center md:grid-cols-6 md:gap-3">
                {/* remove odd hours */}
                {data
                    .filter((_, index) => index % 2 === 0)
                    .slice(0, 12)
                    .map((hour, index) => (
                        <div key={hour.dt} className="rounded-md bg-gray-800 p-3">
                            <p className="mb-1 text-[8px] font-semibold uppercase text-gray-400 md:text-xs">
                                {new Date(hour.dt * 1000).toLocaleString('en-IN', {
                                    hour: '2-digit',
                                    hour12: true,
                                    weekday: 'short',
                                })}
                            </p>

                            <img
                                // replace the n in icon with d for day and n for night
                                src={`https://openweathermap.org/img/wn/${hour.weather[0].icon.replace('n', 'd')}@2x.png`}
                                className="-my-2.5 mx-auto md:scale-110 md:size-20"
                            />

                            <h3 className="font-semibold md:text-lg">{hour.temp.toFixed(0)}°</h3>
                            <p className="text-xs md:text-sm">{hour.weather[0].main}</p>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default TodayForecast;
