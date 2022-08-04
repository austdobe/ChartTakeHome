import { useMemo } from "react";
import { Line } from "react-chartjs-2";
import { Wrapper } from "./chart.styles";


export interface ISelectedWork {
    firstAuth: string
    FirstWork: Array<object>
    firstBest?: string
    secondAuth: string
    SecondWork: Array<object>
    secondBest?: string
    Titles:number
    included: boolean
}

const Chart = (props:ISelectedWork) => {
    let firstBestData = props.FirstWork
    let secondBestData = props.SecondWork
    const labels = []
    for(var i = 1; i <= props.Titles; i++) {
        labels.push(`Title ${i}`)
    }
    
    const handleProps = () => {
        if(props.included){
            const num = props.Titles
            labels[num] = "Best Seller"
            props.FirstWork?.filter((title:any, i:number) => {
                if(title.title === props.firstBest){
                    firstBestData.splice(i, 1)
                    firstBestData[num] = title
                }
                return
            })
            props.SecondWork?.filter((title:any, i:number) => {
                if(title.title === props.secondBest){
                    secondBestData.splice(i, 1)
                    secondBestData[num] = title
                }
                return
            })
        }
    }
    useMemo(() => {
        firstBestData = props.FirstWork
        secondBestData = props.SecondWork
        handleProps();
    }, [props.Titles, firstBestData, secondBestData, props.included, labels]);
    
    const options = {
        responsive: true,
        layout: {
            padding: {
                top: 10,
                right: 10,
                left: 50,
                bottom: 10
            }
        },
        scales: {
            y:{
                suggestedMin: 0,
                suggestedMax: 50,
            },
          },
        plugins: {
            tooltip: {
                callbacks: {
                    title: function(context:any) {
                        if(context.length > 1){
                            return `1. ${context[0].raw.title} \n2. ${context[1].raw.title}`
                        }
                        return `${context[0].raw.title}`
                    },
                    label: function(context:any) {
                        return `Revisions: ${context.raw.y}`
                    }
                },
                bodyColor: 'white',
                bodyFontSize: '50',
                padding: 20,
            },
            legend: {
                display:    false,
            },
        },
    }
    const setData =(work:any) => {
        const data = work.map((work:any, i:number) => {if(i < labels.length) {return {x:i +1, y: work.revision, title:work.title}}})
        return data
    }
    const data = {
        labels, 
        datasets: [
            {
                id: 1,
                label: " Revisions ",
                data: setData(firstBestData),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                id: 2,
                label: " Revisions ",
                data: setData(secondBestData),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    
    }
    return (

        <Wrapper>
            <h2 className="y_label">Revisions</h2>
            <div>
                <Line datasetIdKey='id' options={options} data={data} height={'80%'}/>
            </div>
            <h2 className="x_label">Works</h2>
        </Wrapper>
    )
}

export default Chart