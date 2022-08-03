import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Wrapper } from "./chart.styles";


export interface ISelectedWork {
    FirstWork: Array<object>
    firstBest?: string
    SecondWork: Array<object>
    secondBest?: string
    Titles:any
    included: boolean
}



const Chart = (props:ISelectedWork) => {
    const newFirstData = props.FirstWork 
    const newSecondData = props.SecondWork 
    const labels = []
    for(var i = 0; i < props.Titles; i++) {
        labels.push(`Title ${i + 1}`)
    }
    
    if(props.included){
        const num = props.Titles
        labels[num + 1] = "Best Seller"
        props.FirstWork?.filter((title:any) => {
            if(title.title === props.firstBest){
                newFirstData[num+1] = title
            }
        })
        props.SecondWork?.filter((title:any) => {
            if(title.title === props.secondBest){
               newSecondData[num+1] = title
                 
            }
        })
    }
    
    const options = {
        responsive: true,
        layout: {
            padding: {
                top: 50,
                right: 50,
                left: 50,
                bottom: 50
            }
        },
        scales: {
            y:{
                title: {
                    text:   "Revisions",
                    display: true,
                },
                suggestedMin: 0,
                suggestedMax: 50,
                stepSize: 10
            },
            x:{
                title: {
                    text:   "Works",
                    display: true,
                },
            },
          },
        plugins: {
            legend: {
                display:    false,
            },
        },
    }
    const data = {
        labels, 
        datasets: [
            {
                label: "First Author",
                data: props.included ? newFirstData.map((work:any) => work.revision) : props.FirstWork.map((work:any) => work.revision),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: "Second Author",
                data: props.included ? newSecondData.map((work:any) => work.revision) : props.SecondWork.map((work:any) => work.revision),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    
    }
    return (
        <Wrapper>
            <Line options={options} data={data}/>
        </Wrapper>
    )
}

export default Chart