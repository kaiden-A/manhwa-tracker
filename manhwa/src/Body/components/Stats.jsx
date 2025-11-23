

function Stats({total, ongoing , complete , hiatus}){

    return(
        <div className="stats">
            <div className="stat-card">
                <i className="fas fa-book-open fa-2x" style={{color: "var(--primary)"}}></i>
                <div className="stat-value">{total}</div>
                <div className="stat-label">Total Manhwa</div>
            </div>
            <div className="stat-card">
                <i className="fas fa-clock fa-2x" style={{color: "var(--reading)"}}></i>
                <div className="stat-value">{ongoing}</div>
                <div className="stat-label">Currently Reading</div>
            </div>
            <div className="stat-card">
                <i className="fas fa-check-circle fa-2x" style={{color: "var(--completed)"}}></i>
                <div className="stat-value">{complete}</div>
                <div className="stat-label">Completed</div>
            </div>
            <div className="stat-card">
                <i className="fas fa-pause-circle fa-2x" style={{color: "var(--on-hold)"}}></i>
                <div className="stat-value">{hiatus}</div>
                <div className="stat-label">Hiatus</div>
            </div>
        </div>
    )
}

export default Stats;