interface Props {
    lat: string;
    lon: string;
}

const Map = ({ lat, lon }: Props) => {
    return (
        <section>
            <h3 className="section-title">Wind Map</h3>

            <iframe
                className="h-64 md:h-96 w-full overflow-hidden rounded-2xl"
                src={`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=4&overlay=wind&product=ecmwf&level=surface&lat=${lat}&lon=${lon}&message=true`}
                // frameBorder="0"
            ></iframe>
        </section>
    );
};

export default Map;
