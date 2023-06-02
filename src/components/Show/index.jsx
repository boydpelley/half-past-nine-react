function Show({ date, venue, needsTicket }) {
    return (
        <div className="performanceInfo">
            <h3 className="dateShow">{date}</h3>
            <h3 className="venue">{venue}</h3>
            <h3 className="location">{location}</h3>
            <Ticket />
        </div>
    )
}