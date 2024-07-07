import { Air } from '@/types/AirType';

const airTable = [
    {
        name: 'Excellent',
        color: '#1dcfff',
    },
    {
        name: 'Fair',
        color: '#43d357',
    },
    {
        name: 'Poor',
        color: '#ffc300',
    },
    {
        name: 'Unhealthy',
        color: '#e9356a',
    },
    {
        name: 'Very Unhealthy',
        color: '#a829d4',
    },
    // {
    //     name: 'Excellent',
    //     color: '#1dcfff'
    // }
];

const AirQuality = ({ data }: { data: Air }) => {
    const currentAir = airTable[data.main.aqi - 1];

    const components = [
        {
            name: 'PM 2.5',
            value: data.components.pm2_5,
        },
        {
            name: 'PM 10',
            value: data.components.pm10,
        },
        {
            name: 'CO2',
            value: data.components.co,
        },
        {
            name: 'NH3',
            value: data.components.nh3,
        },
        {
            name: 'NO',
            value: data.components.no,
        },
        {
            name: 'NO2',
            value: data.components.no2,
        },
        {
            name: 'O3',
            value: data.components.o3,
        },
        {
            name: 'SO2',
            value: data.components.so2,
        },
    ];

    return (
        <section className="">
            <h3 className="section-title">Air Quality Index</h3>

            <div className="rounded-xl bg-gray-800 p-4 md:p-6">
                <h4 className="text-3xl font-medium" style={{ color: currentAir.color }}>
                    {currentAir.name}
                </h4>

                <p className="text-xs mt-1 md:text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div
                    className="relative mt-8 grid h-[5px] w-full grid-cols-5 rounded-full"
                    style={{
                        background: `linear-gradient(to right, ${airTable.map(i => i.color).join(',')})`,
                    }}
                >
                    <div
                        style={{
                            gridColumnStart: data.main.aqi,
                            clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
                            rotate: '180deg',
                            background: currentAir.color,
                        }}
                        className="mx-auto h-3 w-4 translate-y-[120%]"
                    ></div>
                </div>

                <div className="mt-6 grid grid-cols-4 gap-2.5">
                    {components.map(component => (
                        <div className="rounded-md bg-gray-900 p-2" key={component.name}>
                            <p className="text-xs text-gray-300">{component.name}</p>
                            <h3 className="my-1 text-center text-xl font-semibold text-gray-300">
                                {component.value.toFixed(0)}
                            </h3>

                            <p className="text-[10px] text-gray-400 text-right">ug/m3</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AirQuality;
