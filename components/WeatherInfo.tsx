import type { Current } from '@/types/WeatherType';
import { title } from 'process';
import { DiVim } from 'react-icons/di';
import { FaCloud, FaWater, FaWind } from 'react-icons/fa';
import { LuSunrise, LuSunset } from 'react-icons/lu';
import { MdDewPoint, MdOutlineVisibility } from 'react-icons/md';
import { MdSunnySnowing } from 'react-icons/md';

interface Props {
    data: Current;
}

// {
//     title: 'Wind',
//     value: (
//         <p>
//             <span className="text-xl font-semibold">{(weather.wind.speed * 3.6).toFixed(0)}</span> km/h
//         </p>
//     ),
//     details: `Direction: ${weather.wind.deg}°`,
//     icon: <FaWind className="text-2xl md:text-3xl" />,
// },
// {
//     title: 'Humidity',
//     value: (
//         <p>
//             <span className="text-2xl font-semibold">{weather.main.humidity}</span> %
//         </p>
//     ),
//     icon: <MdDewPoint className="text-2xl md:text-3xl" />,
// },
// {
//     title: 'Pressure',
//     value: (
//         <p>
//             <span className="text-2xl font-semibold">{weather.main.pressure}</span>
//         </p>
//     ),
//     details: 'mBar',
//     icon: <FaWater className="text-3xl" />,
// },
// {
//     title: 'Visibility',
//     value: (
//         <p>
//             <span className="text-xl font-semibold">{(weather.visibility / 1000).toFixed(2)}</span>
//         </p>
//     ),
//     details: 'Kilometers',
//     icon: <MdOutlineVisibility className="text-2xl md:text-3xl" />,
// },
// {
//     title: 'Sunrise',
//     value: (
//         <p className="text-xl font-semibold">
//             {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-IN', {
//                 hour: '2-digit',
//                 minute: '2-digit',
//                 hour12: false,
//             })}
//         </p>
//     ),
//     details: 'Morning',
//     icon: <LuSunrise className="text-2xl md:text-3xl" />,
// },
// {
//     title: 'Sunset',
//     value: (
//         <p className="text-xl font-semibold">
//             {new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-IN', {
//                 hour: '2-digit',
//                 minute: '2-digit',
//                 hour12: false,
//             })}
//         </p>
//     ),
//     details: 'Evening',
//     icon: <LuSunset className="text-2xl md:text-3xl" />,
// }

const WeatherInfo = ({ data }: Props) => {
    const cardData = [
        {
            title: 'Wind',
            value: `${data.wind_speed.toFixed(1)}`,
            unit: 'm/s',
            detail: `Direction: ${data.wind_deg}°`,
            icon: <FaWind />,
        },
        {
            title: 'Humidity',
            value: `${data.humidity}`,
            unit: '%',
            detail: `Dew at ${data.dew_point.toFixed(0)}°C`,
            icon: <MdDewPoint />,
        },
        {
            title: 'UV Index',
            value: `${data.uvi}`,
            // detail: 'Intensity',
            icon: <MdSunnySnowing />,
        },
        {
            title: 'Pressure',
            value: `${data.pressure}`,
            detail: 'mBar',
            icon: <FaWater />,
        },
        {
            title: 'Clouds',
            value: `${data.clouds}`,
            unit: '%',
            detail: 'Sky Coverage',
            icon: <FaCloud />,
        },
        {
            title: 'Visibility',
            value: `${(data.visibility / 1000).toFixed(1)}`,
            detail: 'Kilometers',
            icon: <MdOutlineVisibility />,
        },
        {
            title: 'Sunrise',
            value: `${new Date(data.sunrise * 1000).toLocaleTimeString('en-IN', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            })}`,
            detail: 'Morning',
            icon: <LuSunrise />,
        },
        {
            title: 'Sunset',
            value: `${new Date(data.sunset * 1000).toLocaleTimeString('en-IN', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            })}`,
            detail: 'Evening',
            icon: <LuSunset />,
        },
    ];

    return (
        <section>
            <h2 className="section-title">Weather Conditions</h2>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 text-gray-400">
                {cardData.map((item, i) => (
                    <div key={i} className={`rounded-lg md:rounded-xl bg-gray-800 p-3 md:p-4 pt-3 shadow-md`}>
                        <p className="mb-2 text-xs md:text-base font-medium">{item.title}</p>
                        <div className="flex justify-between gap-2">
                            <div>
                                <p className='text-xl md:text-2xl text-gray-200 font-semibold'>
                                    {item.value} <span className='text-xs md:text-sm text-gray-300'>
                                        {item.unit}
                                    </span>
                                </p> 
                                <p className='text-xs md:text-sm opacity-80'>
                                    {item.detail}
                                </p>
                            </div>
                            <p className="text-3xl md:text-3xl">{item.icon}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WeatherInfo;
