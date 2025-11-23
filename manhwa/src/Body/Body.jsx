import { useState } from "react";
import SideBar from "./components/SideBar";
import Stats from "./components/Stats";
import { useEffect } from "react";
import { useMemo } from "react";
import Form from "./components/Form";


function Body(){

    const [data , setData] = useState({});
    const [filter , setFilter] = useState("ongoing");
    const [openForm , setOpenForm] = useState(false);


    useEffect(() => {

        const fetchData = async () => {

            try{

                const responses = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/manhwa`);
                const data = await responses.json();

                console.log(data);

                setData(data);

            }catch(err){
                console.log(err);
            }
        }
        fetchData();

    } , [])


    const manhwaArray = useMemo(() => {

        if(!data.manhwa){
            return []
        }

        const arr = data.manhwa.filter(m => m?.status === filter);
        return arr;

    } , [filter , data])

    return(
        <>
        <div className="container">
            <div className="main-content">
            
            <SideBar
                filter={filter}
                setFilter={setFilter}
            />

            <main className="dashboard">
                <section className="reading-streak">
                    <div className="streak-icon">
                        <i className="fas fa-fire"></i>
                    </div>
                    <div className="streak-info">
                        <h3>7-Day Reading Streak!</h3>
                        <p>You've read manhwa for 7 days in a row. Keep it up!</p>
                    </div>
                </section>

                <section className="currently-reading">
                    <div className="section-title">
                        <h2>Currently Reading</h2>
                        <button className="btn" onClick={() => setOpenForm(true)}>
                            <i className="fas fa-plus"></i> Add New Manhwa
                        </button>
                    </div>
                    <div className="manhwa-grid">
                        {
                            manhwaArray?.length > 0 ? (

                                manhwaArray?.map(m => 
                                    <div key={m._id} className="manhwa-card" onClick={() => window.open( `${m?.manhwaUrl}` , "_blanks")}>
                                        <img src={m?.imgUrl}  alt="Solo Leveling" className="manhwa-cover"/>
                                        <div className="manhwa-info">
                                            <h3 className="manhwa-title">{m?.name}</h3>
                                            <div className="manhwa-chapter">
                                                <span className="chapter-progress">
                                                    {`Ch. ${m?.currentChapter}/${m?.latestChapter === 0 ? "?" : m?.latestChapter }`}
                                                </span>
                                                <button className="update-btn">Update</button>
                                            </div>
                                        </div>
                                    </div>
                                )

                            ) : (
                                <p>No Manhwa yet</p>
                            )
                        }
                    </div>
                </section>

                <Stats
                    total={data.totalManhwa}
                    ongoing={data.totalOnGoing}
                    hiatus={data.totalHiatus}
                    complete={data.totalCompleted}
                />

            </main>
        </div>
        
    </div>
    <Form
        open={openForm}
        close={() => setOpenForm(false)}
    />

    </>
    )
}

export default Body;