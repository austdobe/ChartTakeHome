import { Line } from "react-chartjs-2";
import { Wrapper } from "./chart.styles";


export interface ISelectedWork {
    FirstWork?: Array<object>
    SecondWork?: Array<object>
    Titles:any
}



const Chart = (props:ISelectedWork) => {
    const labels = []
    for(var i = 0; i < props.Titles; i++) {
        labels.push(`Title ${i + 1}`)
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
            x:{},
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
                data: props?.FirstWork?.map((work:any) => work.revision),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: "Second Author",
                data: props?.SecondWork?.map((work:any) => work.revision),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    }
    console.log(data)
    return (
        <Wrapper>
            <Line options={options} data={data}/>
        </Wrapper>
    )
}

export default Chart