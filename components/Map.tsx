interface Props {
    lat: number;
    lon: number;
}

const Map = ({ lat, lon }: Props) => {
    return (
        <section>
            <h3 className="section-title">Wind Map</h3>

            <div className="grayscale hover:grayscale-0 transition-all">
            <iframe
                className="h-64 md:h-96 w-full overflow-hidden rounded-2xl"
                src={`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=10&overlay=wind&product=ecmwf&level=surface&lat=${lat}&lon=${lon}&message=true`}
                // frameBorder="0"
            ></iframe>
            </div>
        </section>
    );
};

export default Map;
