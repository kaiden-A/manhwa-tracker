

function Form({open , close}){

    if(!open){
        return null;
    }

    return(

        <div className={`modal`} id="addManhwaModal" style={{display : `${open ? "flex" : "none"}`}}>
            <div className="modal-content">
                <button className="close-modal" onClick={close}>&times;</button>
                <h2>Add New Manhwa</h2>
                <form id="addManhwaForm">
                    <div className="form-group">
                        <label for="manhwaTitle">Title</label>
                        <input type="text" id="manhwaTitle" className="form-control" placeholder="Enter manhwa title"/>
                    </div>
                    <div className="form-group">
                        <label for="manhwaCover">Cover Image URL</label>
                        <input type="text" id="manhwaCover" className="form-control" placeholder="Enter image URL"/>
                    </div>
                    <div className="form-group">
                        <label for="currentChapter">Current Chapter</label>
                        <input type="number" id="currentChapter" className="form-control" placeholder="Enter current chapter"/>
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <div className="status-options">
                            <div className="status-option reading active">Reading</div>
                            <div className="status-option completed">Completed</div>
                            <div className="status-option on-hold">On Hold</div>
                        </div>
                    </div>
                    <button type="submit" className="btn" style={{width: "100%" , marginTop: "10px"}}>
                        <i className="fas fa-plus"></i> Add Manhwa
                    </button>
                </form>
            </div>
        </div>
    )

}

export default Form;