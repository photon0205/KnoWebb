import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
import { Stepper, Step, StepLabel, StepContent } from '@material-ui/core'
import { useState } from 'react'
// localStorage.setItem("quiz_score","");
//         localStorage.setItem("jumbleword_score","");
//         localStorage.setItem("puzzle_score","");
//         localStorage.setItem("order_score","");
//         localStorage.setItem("slider_score","");
const Home = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [scores,setScores] = useState([]);

    const nextStep = (index) => {
        setActiveStep(index)
    }

    useState(()=>{
        const score1 = localStorage.getItem("quiz_score") || -1 ;
        const score2 = localStorage.getItem("puzzle_score") || -1 ;
        const score3 = localStorage.getItem("slider_score") || -1 ;
        const score4 = localStorage.getItem("jumbleword_score") || -1 ;
        const score5 = localStorage.getItem("order_score") || -1 ;
        const arr = [score1,score2,score3,score4,score5];

        for(let i=0;i<5;i++){
            if(arr[i]!==-1){
                nextStep(i+1)
            }
        }
        setScores(arr);
    },[])

    const steps = [
        {
            label: 'Quiz',
            description: `Answer all the question correctly and get 
            the MIRI instrument, one of the most important instrument of telescope.
            It is used to detect Dust clouds, and planets etc...
             It operates in the long IR Spectrum i.e. the wavelenghth that 
             this instrument detects is longer than what the others detect`,
            path: "/quiz"
        },
        {
            label: 'Puzzle',
            description:
                'Align the blocks so that it forms the perfect image! To get the NIRISS instrument ',
                
            path: "/puzzle"
        },
        {
            label: 'Slider',
            description: `Stop the slider by the spacebar at the perfect moment when the image is the most clear to get the NIRCam instrument! `,
            path: "/slider"
        },
        {
            label: 'Jumble Word',
            description: `Rearrange the letters in the lowest amount of time to get the perfect NIRSpec instrument!`,
            path: "/jumbleword"
        },
        {
            label: 'Order',
            description: `Put the optical elements of the telescope in the correct order for the perfect FGS instrument!`,
            path: "/order"
        },
    ];

    return (
        <>
            <h1 className="gamename my-4 alignIt">KnoWebb</h1>
            <div className="stepper my-4">
                <Stepper alternativeLabel activeStep={activeStep}>
                    {steps.map((step,index) => {
                        return (<Step key={step.label}>
                            <StepLabel>{step.label}</StepLabel>
                            <StepContent><small>{step.description}</small>
                                <Link className="link" to={step.path}>Play</Link>
                            </StepContent>
                        </Step>)
                    })}
                </Stepper>
            </div>
        </>
    )
}

export default Home