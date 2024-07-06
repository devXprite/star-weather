import { HourlyEntity } from '@/types/WeatherType';

interface Props {
    data: HourlyEntity[];
}

const TodayForecast = ({ data }: Props) => {
    return (
        <section>
            <h3 className="section-title">Today Forecast</h3>

            <div className="grid grid-cols-8 gap-2.5 text-center">
                {data.slice(0, 16).map((hour, index) => (
                    <div key={hour.dt} className="rounded-md bg-gray-800 p-3">
                        <p className="mb-1 text-[10px] uppercase font-semibold text-gray-400">
                            {new Date(hour.dt * 1000).toLocaleString('en-IN', {
                                hour: '2-digit',
                                hour12: true,
                                weekday: 'short',

                                // timeZone: 'Asia/Kolkata'
                            })}
                            {/* :00 */}
                        </p>

                        <img
                            // replace the n in icon with d for day and n for night
                            src={`https://openweathermap.org/img/wn/${hour.weather[0].icon.replace('n', 'd')}@2x.png`}
                            className="-my-2.5 mx-auto scale-110"
                        />

                        <h3 className="font-semibold text-lg">{hour.temp.toFixed(0)}°</h3>
                        <p className="text-[12px]">{hour.weather[0].main}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TodayForecast;
