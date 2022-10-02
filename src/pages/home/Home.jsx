import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
import { Stepper, Step, StepLabel, StepContent } from '@material-ui/core'
import { useState } from 'react'

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
        setScores(arr);
        for(let i=0;i<5;i++){
            if(arr[i]===-1){
                if(i!==0) {nextStep(i-1);
                    break;
                }
            }
        }
    },[])

    const steps = [
        {
            label: 'Quiz',
            description: `For each ad campaign that you create, you can control how much
                    you're willing to spend on clicks and conversions, which networks
                    and geographical locations you want your ads to show on, and more.`,
            path: "/quiz"
        },
        {
            label: 'Puzzle',
            description:
                'An ad group contains one or more ads which target a shared set of keywords.',
            path: "/puzzle"
        },
        {
            label: 'Slider',
            description: `Try out different ad text to see what brings in the most customers,
                      and learn how to enhance your ads using features like ad extensions.
                      If you run into any problems with your ads, find out how to tell if
                      they're running and how to resolve approval issues.`,
            path: "/slider"
        },
        {
            label: 'Jumble Word',
            description: `Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.`,
            path: "/jumbleword"
        },
        {
            label: 'Order',
            description: `Try out different ad text to see what brings in the most customers,
                      and learn how to enhance your ads using features like ad extensions.
                      If you run into any problems with your ads, find out how to tell if
                      they're running and how to resolve approval issues.`,
            path: "/order"
        },
    ];

    return (
        <>
            <h1 className="gamename my-4 alignIt">NoWebb</h1>
            <div className="stepper my-4">
                <Stepper alternativeLabel activeStep={activeStep}>
                    {steps.map((step,index) => {
                        return (<Step key={step.label}>
                            <StepLabel>{step.label}</StepLabel>
                            <StepContent><small className='d-block'>{`Score ${scores[index]}`}</small><small>{step.description}</small>
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