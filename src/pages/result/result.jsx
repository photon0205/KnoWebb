import {gettheImages} from "../../services/remote/firebase_services";
import React, { useEffect, useState } from "react";
import './result.css'
import { useNavigate } from "react-router-dom";

const scores = [localStorage.getItem("quiz_score"),localStorage.getItem("puzzle_score"),localStorage.getItem("slider_score"),localStorage.getItem("jumbleword_score"),localStorage.getItem("order_score")
];
let final_score = 0;
for(let i=0;i<5;i++) final_score+=parseInt(scores[i]);
export default function Result() {
    const instrument = ["MIRI", "NIRISS", "NIRCam", "NIRSpec", "FGS"];
    const [srcArray, setSrcArray] = useState([]);
    const [load, setLoad] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        var urls= [];
        console.log(scores);
       const func=async()=>{ 
         for (let i = 0; i < 5; i++) {
        const url = await gettheImages(scores[i], instrument[i])
        urls.push(url);
            if (i == 4)
               {
                setSrcArray(urls);
                setLoad(false);
             }
        }
     }
        func();
    }, [])

    const reset=()=>{
        localStorage.setItem("quiz_score","");
        localStorage.setItem("jumbleword_score","");
        localStorage.setItem("puzzle_score","");
        localStorage.setItem("order_score","");
        localStorage.setItem("slider_score","");
        navigate("/")
    }
    return (
        <>
            {load ?  "Loading":
                (<>
                    <div className="heading">
                    <h3>Final Score : {final_score}</h3>
                        <span>The Difference PSF shows how your image and the ideal image differed. The whiter it is, the better you did!</span>
                        <button className="footer" onClick={reset}>Reset</button>
                    </div>
                <div className="parent">
                     <div className="image">
                        
                        <div className="column">
                            <img
                            src={srcArray[0]}
                            alt="Result"
                            
                            />
                        </div>
                        <div className="column">
                            <img
                            src='https://firebasestorage.googleapis.com/v0/b/nasa-hackathon-50da5.appspot.com/o/MIRI_Ideal.jpeg?alt=media&token=31a8077e-012a-481f-b10d-1ed78c95e872'
                            alt="ideal"
                            
                            />
                            <div className="text">MIRI</div>
                        </div>
                        
                    </div>
                    <div className="image">
                        <div className="column">
                        <img
                            src={srcArray[1]}
                            alt="Result"
                            
                        />
                        </div>
                        <div className="column">
                            <img
                            src='https://firebasestorage.googleapis.com/v0/b/nasa-hackathon-50da5.appspot.com/o/NIRISS_Ideal.jpeg?alt=media&token=8ae1e766-5452-46a6-a678-f78c37aca19a'
                            alt="ideal"
                            />
                        </div>
                        <div className="text">NIRISS</div>
                    </div>
                    <div className="image">
                        <div className="column">
                            
                        <img
                            src={srcArray[2]}
                            alt="Result"
                            
                        />
                        
                        </div>
                        <div className="column">
                            <img
                            src='https://firebasestorage.googleapis.com/v0/b/nasa-hackathon-50da5.appspot.com/o/NIRCam_Ideal.jpeg?alt=media&token=1e5faae4-b5f5-4c0c-82af-3fefe5d8a32d'
                            alt="ideal"
                            />
                        </div>
                        <div className="text">NIRCam</div>
                    </div>
                    <div className="image">
                        <div className="column">
                        <img
                            src={srcArray[3]}
                            alt="Result"               
                        />
                        </div>
                        <div className="column">
                            <img
                            src='https://firebasestorage.googleapis.com/v0/b/nasa-hackathon-50da5.appspot.com/o/NIRSpec_Ideal.jpeg?alt=media&token=10e66b63-73bd-44b3-88db-96da55022f2f'
                            alt="ideal"
                            />
                        </div>
                        <div className="text">NIRSpec</div>

                    </div>
                    <div className="image">
                        <div className="column">
                        <img
                            src={srcArray[4]}
                            alt="Result"
                        />
                        </div>

                        <div className="column">
                            <img
                            src='https://firebasestorage.googleapis.com/v0/b/nasa-hackathon-50da5.appspot.com/o/FGS_Ideal.jpeg?alt=media&token=604563d4-0f1b-41d3-8c22-16836b5e40b0'
                            alt="ideal"
                            />
                        </div>
                        <div className="text">FGS</div>
                     </div>  
                </div>
                </>
                ) }
        </>
    )
}

