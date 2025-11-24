import { useState , useEffect} from "react";
import Success from "./Success";

function Form({open , close  , editData}){

    if(!open){
        return null;
    }

    const [name , setName] = useState("");
    const [imgUrl , setImgUrl] = useState("");
    const [manhwaUrl , setManhwaUrl] = useState("");
    const [currentChapter , setCurrentChapter] = useState("");
    const [latestChapter , setLatestChapter] = useState("");
    const [status , setStatus] = useState("")

    const [success , setSuccess] = useState(false);
    const [msg , setMsg] = useState("");

    useEffect(() => {
        if (editData) {
            setName(editData.name || "");
            setImgUrl(editData.imgUrl || "");
            setManhwaUrl(editData.manhwaUrl || "");
            setCurrentChapter(editData.currentChapter || "");
            setLatestChapter(editData.latestChapter || "");
            setStatus(editData.status || "");
        }
    }, [editData])

    

    const handleForm = async (e) => {
        
        e.preventDefault();

        const isEdit = Boolean(editData?._id);
        const url = isEdit ? 
            `${import.meta.env.VITE_BACKEND_URL}/api/manhwa/${editData?._id}` :
            `${import.meta.env.VITE_BACKEND_URL}/api/manhwa`;

        try{

            const responses = await fetch(url , {
                method : `${isEdit ? "PUT" : "POST"}`,
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify({name , imgUrl , manhwaUrl , currentChapter , latestChapter , status})
            })

            const data = await responses.json();
        

            if(data.success){
                console.log("successfully add Manhwa")
                setMsg(data.msg);
                setSuccess(true)
            }

        }catch(err){
            console.log(err);
        }
    }

    return(
        <>
        <Success
            open={success}
            message={msg}
            success={true}
        />
        <div className={`modal`} id="addManhwaModal" style={{display : `${open ? "flex" : "none"}`}}>
            <div className="modal-content">
                <button className="close-modal" onClick={close}>&times;</button>
                <h2>Add New Manhwa</h2>
                <form onSubmit={handleForm}>
                    <div className="form-group">
                        <label for="manhwaTitle">Title</label>
                        <input 
                            type="text"  
                            className="form-control" 
                            placeholder="Enter manhwa title"
                            value={name}
                            onChange={(e) => setName(e.target.value)}    
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="manhwaCover">Cover Image URL</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter image URL"
                            value={imgUrl}
                            onChange={(e) => setImgUrl(e.target.value)}    
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="manhwaCover">Manhwa URL</label>
                        <input 
                            type="text"  
                            className="form-control" 
                            placeholder="Enter Manhwa URL"
                            value={manhwaUrl}
                            onChange={(e) => setManhwaUrl(e.target.value)}    
                        />
                    </div>
                    <div className="form-group">
                        <label for="currentChapter">Current Chapter</label>
                        <input 
                            type="number"  
                            className="form-control" 
                            placeholder="Enter current chapter"
                            value={currentChapter}
                            onChange={(e) => setCurrentChapter(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="currentChapter">Latest Chapter</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Enter latest chapter"
                            value={latestChapter}
                            onChange={(e) => setLatestChapter(e.target.value)}    
                        />
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <div className="status-options">
                            <div 
                                onClick={() => setStatus("ongoing")} 
                                className={`status-option reading ${status === "ongoing" ? "active" : ""}`}>
                                    Reading
                            </div>
                            <div 
                                onClick={() => setStatus("completed")} 
                                className={`status-option completed ${status === "completed" ? "active" : ""} `}>
                                    Completed
                            </div>
                            <div 
                                onClick={() => setStatus("hiatus")} 
                                className={`status-option on-hold ${status === "hiatus" ? "active" : ""}`}>
                                    Hiatus
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn" style={{width: "100%" , marginTop: "10px"}}>
                        <i className="fas fa-plus"></i> Add Manhwa
                    </button>
                </form>
            </div>
        </div>
        </>
    )

}

export default Form;