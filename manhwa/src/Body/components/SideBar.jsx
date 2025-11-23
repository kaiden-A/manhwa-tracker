import { useContext } from "react";
import { MenuContext } from "../../context/ToggleContext";

function SideBar({filter , setFilter}){

    const {openToggle} = useContext(MenuContext)

    return(
        <>
            <aside className={`sidebar ${openToggle ? "active" : ""}`} id="sidebar">
                    <ul className="sidebar-menu">
                        <li><a className="active"><i className="fas fa-home"></i> Dashboard</a></li>
                        <li><a><i className="fas fa-plus-circle"></i> Add Manhwa</a></li>
                        <li><a><i className="fas fa-user"></i> Profile</a></li>
                        <li><a><i className="fas fa-cog"></i> Settings</a></li>
                    </ul>

                    <div className="status-filters">
                        <h3>Filter by Status</h3>
                        <div className={`filter-option ${filter === "ongoing" ? "active" : ""}`}
                            onClick={() => setFilter("ongoing")}
                        >
                            <div className="status-indicator reading-indicator"></div>
                            <span>Reading</span>
                        </div>
                        <div className={`filter-option ${filter === "completed" ? "active" : ""}`}
                            onClick={() => setFilter("completed")}
                        >
                            <div className="status-indicator completed-indicator"></div>
                            <span>Completed</span>
                        </div>
                        <div className={`filter-option ${filter === "hiatus" ? "active" : ""}`}
                            onClick={() => setFilter("hiatus")}
                        >
                            <div className="status-indicator onhold-indicator"></div>
                            <span>Hiatus</span>
                        </div>
                    </div>
            </aside>
        </>
    )
}

export default SideBar;