'use client';

import { FaSun } from 'react-icons/fa';
import { LuSunrise, LuSunset } from 'react-icons/lu';

interface Props {
    sunrise: number;
    sunset: number;
}

const calculateSunPosition = (sunrise: number, sunset: number) => {
    const sunriseTimestamp = new Date(sunrise * 1000).getTime();
    const sunsetTimestamp = new Date(sunset * 1000).getTime();
    const currentTimestamp = new Date().getTime();

    if (currentTimestamp < sunriseTimestamp) return 0;
    if (currentTimestamp > sunsetTimestamp) return 100;

    const totalDayDuration = sunsetTimestamp - sunriseTimestamp;
    const elapsedTime = currentTimestamp - sunriseTimestamp;

    const dayProgress = (elapsedTime / totalDayDuration) * 100;
    return dayProgress.toFixed(2);
};

const SunPosition = ({ sunrise, sunset }: Props) => {
    const dayProgress = calculateSunPosition(sunrise, sunset);
    // const dayProgress = 100;

    return (
        <section>
            <div className="rounded-xl bg-gray-800 p-4 md:p-6">
                <div className="flex justify-between text-xs text-gray-400 md:text-base">
                    <p>
                        <LuSunrise className="text-2xl text-gray-300 md:text-3xl" />
                        Sunrise
                    </p>
                    <p className="">
                        <LuSunset className="ml-auto text-2xl text-gray-300 md:text-3xl" />
                        Sunset
                    </p>
                </div>

                <div className="relative my-4 h-1.5 w-full rounded-full bg-gray-700">
                    <div className="absolute inset-0 rounded-full bg-gray-300" style={{ width: `${dayProgress}%` }}></div>
                    <FaSun
                        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-yellow-500 bg-gray-800 px-1"
                        style={{ left: `${dayProgress}%` }}
                    />
                </div>

                <div className="flex justify-between font-medium uppercase md:text-xl">
                    <p>
                        {new Date(sunrise * 1000).toLocaleTimeString('en-IN', {
                            hour: '2-digit',
                            minute: '2-digit',
                        })}
                    </p>
                    <p>
                        {new Date(sunset * 1000).toLocaleTimeString('en-IN', {
                            hour: '2-digit',
                            minute: '2-digit',
                        })}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SunPosition;

{
    /* <div
className="relative h-[10rem] w-full -translate-y-4 bg-gray-600 p-1"
style={{
    clipPath: 'ellipse(50% 70% at 50% 100%)',
}}
>
<div
    className="absolute inset-0 bg-yellow-500"
    style={{
        width: `${dayProgress}%`,
    }}
></div>

<div
    className="h-[9.75rem] w-full bg-gray-800"
    style={{
        clipPath: 'ellipse(50% 70% at 50% 100%)',
    }}
></div>
</div> */
}
