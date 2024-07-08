import { FaCloud, FaLocationPin } from 'react-icons/fa6';
import type { Current } from '@/types/WeatherType';
import { FaClock, FaThermometerHalf } from 'react-icons/fa';
import { TbWorldLatitude, TbWorldLongitude } from 'react-icons/tb';
import type { City } from '@/types/CityType';
import { MdLocationPin } from 'react-icons/md';

const OverView = ({ data, city }: { data: Current; city: City }) => {
    return (
        <div className="rounded-xl bg-gray-800 p-4 md:p-6">
            <div className="flex justify-between font-medium">
                <h3 className="text text-sm md:text-base mb-3 text-gray-400">
                    <MdLocationPin className="inline-block" /> {city.name}, {city.country}
                </h3>
                <p className="text-xs md:text-sm uppercase text-gray-400">
                    <FaClock className="mr-1 inline-block" />
                    {new Date(data.dt * 1000).toLocaleString('en-IN', {
                        weekday: 'short',
                        hour: 'numeric',
                        minute: '2-digit',
                    })}
                </p>
            </div>
            <div className="my-4 flex items-center justify-between">
                <div>
                    <h2 className="text-5xl font-medium md:text-6xl">{data.temp.toFixed(0)}°</h2>
                    <p className="mt-1 text-gray-400 text-sm md:text-base">
                        <FaThermometerHalf className="inline-block" /> Feels like: {data.feels_like.toFixed(1)}°
                    </p>
                </div>
                <img
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                    className="-my-8 size-28 md:-mx-4 md:size-36"
                />
            </div>
            <div className="mt-4 flex items-end gap-4 text-gray-400">
                <p className="mr-auto font-medium capitalize text-gray-300 text-sm md:text-xl">{data.weather[0].description}</p>
                <p className="text-xs hidden md:text-sm">Lat: {city.lat.toFixed(3)}°</p>

                <p className="text-xs hidden md:text-sm">Lon: {city.lon.toFixed(3)}°</p>
                {/* <p className="md:text-sm">Feels like: {data.feels_like}</p> */}
            </div>

            {/* 
                <div>
                    <p className="flex items-center text-6xl font-semibold text-gray-100 md:text-5xl">
                        <span>{data.temp}°</span>
                        <img
                            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                            className="size-28"
                        />
                    </p>
                </div>

                <div>
                    <p className="mt-4 font-semibold capitalize">{data.weather[0].description}</p>
                    <p className="text-sm text-gray-300">Feels like {data.feels_like.toFixed(1)}°</p>
                </div>
            </div> */}

            {/* <div className="flex w-full justify-between rounded-lg bg-gray-800 p-3 text-xs font-medium text-gray-300 shadow-md">
                <p>
                    <FaTemperatureArrowUp className="inline-block" /> Max: {data.main.temp_max.toFixed(1)}°
                </p>
                <p>
                    <FaTemperatureArrowDown className="inline-block" /> Min: {data.main.temp_min.toFixed(1)}°
                </p>
                <p>
                    <FaCloud className="inline-block" /> Clouds: {data.clouds.all}%
                </p>
            </div> */}
            {/* <div className="mt-12 flex flex-col items-center justify-between text-center md:flex-row">
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} className="-my-4 size-32" />
                <p className="text-7xl font-semibold">{weather.main.temp.toFixed(0)}°</p>
                <p className="text-sm text-gray-400">Feels like {weather.main.feels_like.toFixed(1)}°</p>
                <p className="mt-2 text-2xl font-semibold capitalize text-gray-300">{weather.weather[0].description}</p>

                <div className="mt-6 flex w-full justify-between rounded-lg bg-gray-800 p-3 text-xs font-medium text-gray-300 shadow-md">
                    <p>
                        <FaTemperatureArrowUp className="inline-block" /> Max: {weather.main.temp_max.toFixed(1)}°
                    </p>
                    <p>
                        <FaTemperatureArrowDown className="inline-block" /> Min: {weather.main.temp_min.toFixed(1)}°
                    </p>
                    <p>
                        <FaCloud className="inline-block" /> Clouds: {weather.clouds.all}%
                    </p>
                </div>
            </div> */}
        </div>
    );
};

export default OverView;
