export default function Location(props) {
    let item = props.item;
    return (
        <div className="card-item">
            <img className="image" src={item.src} alt={item.locationName} />
            <div className="card-details">
                <div className="country-details">
                    <span className="country">
                        <i className="fas fa-map-marker-alt map-marker"></i>
                        {item.country.toUpperCase()}</span>
                    <span>
                        <a className="url" href={item.url}>View on Google maps</a>
                    </span>
                </div>
                <h2 className="location-name">{item.locationName}</h2>
                <span className="date-range">{ConvertDate(item.startDate)} - {ConvertDate(item.endDate)}</span>
                <p className="description">{item.description}</p>
            </div>
        </div>
    )
}

const ConvertDate = (date) => {
    let dateObject = Date.parse(date)
    let newDate = new Date(dateObject);
    return `${newDate.getDate() + 1} ${newDate.toLocaleDateString('default',{month: 'short'})}, ${newDate.getFullYear()}`;
}