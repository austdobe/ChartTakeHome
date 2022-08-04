import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useState } from "react";
import Chart from "../components/Chart";
import { Wrapper, FormWrapper, Form, FormInput, NumberInput, Checkbox, Content } from "./main.styles";

import { search } from "../util/utils";
import Alert from "../components/Alert";
import { setTimeout } from "timers";
import { faSpaghettiMonsterFlying } from "@fortawesome/free-solid-svg-icons";

export interface ISelectedWork {
    work: Array<object>
}

const selectedWork: ISelectedWork = {
    work: [],
}

const MainPage = () => {

    const [ FirstSelectedWork, SetFirstSelectedWork ] = useState(selectedWork)
    const [ SecondSelectedWork, SetSecondSelectedWork ] = useState(selectedWork)
    const [ firstAuthName, setFirstAuthName ] = useState('')
    const [ secondAuthName, setSecondAuthName ] = useState('')
    const [ TitleWorks, setTitleWorks ] = useState(4)
    const [ firstBestSeller, setFirstBestSeller ] = useState('')
    const [ secondBestSeller, setSecondBestSeller ] = useState('')
    const [ isIncluded, setIsIncluded ] = useState(true)
    const [ isActive, setIsActive ] = useState(true)
    const [ isError, setIsError ] = useState(false)

    const handleFirstName = (event:any) => {
        event.preventDefault()
        const reg = /[a-z]/gi
        if(reg.test(event.target.value)) {
            setFirstAuthName(event.target.value)
        }
        else if(event.target.value === ''){
            setFirstAuthName(event.target.value)
        }
    }
    const handleSecondName = (event:any) => {
        event.preventDefault()
        const reg = /[a-z]/gi
        if(reg.test(event.target.value)) {
            setSecondAuthName(event.target.value)
        }
        else if(event.target.value === ''){
            setSecondAuthName(event.target.value)
        }
    }
    const handleSeller = (event:any) => {
        event.preventDefault()
        const Best = isIncluded
        setIsActive(!isActive)
        setIsIncluded(!Best)
    }
    const setWorks = (event:any) => {
        event.preventDefault()
        setTitleWorks(event.target.value)
    }
    const AddWorks = (event:any) => {
        event.preventDefault()
        const num = TitleWorks
        setTitleWorks(num + 1)
    }
    const RemoveWorks = (event:any) => {
        event.preventDefault()
        const num = TitleWorks
        if(num > 1){
            setTitleWorks(num - 1)
        }
    }
    
    const getAuthorWork = (key:String, Author:String) => {
        fetch(`https://openlibrary.org/authors/${key}/works.json?limit=100`)
        .then((response) => response.json())
        .then((data)=> {
            if(Author === "First") {
                SetFirstSelectedWork({work:data.entries})      
            }
            if(Author === "Second") {
                SetSecondSelectedWork({work:data.entries})
            }
        })
        .catch((e)=>{
            console.log(e)
        })

    }
    const handleFirstAuthor = (event:any) => {
        event.preventDefault()
        fetch(`${search}${firstAuthName}`)
        .then((response) => {
            if(response.ok) {
                return response.json()
            }
            
        })
        .then((data) => {
            if(data.numFound <= 0){
                setIsError(true)
                setTimeout(() => setIsError(false), 3000)
            }
                setFirstAuthName(data.docs[0].name)
                setFirstBestSeller(data.docs[0].top_work)
                getAuthorWork(data.docs[0].key, "First")
        })
        .catch(e => console.log(e))
        
    }
    const handleSecondAuthor = (event:any) => {
        event.preventDefault()
        fetch(`${search}${secondAuthName}`)
        .then((response) => response.json())
        .then((data)=> {
            setSecondAuthName(data.docs[0].name)
            setSecondBestSeller(data.docs[0].top_work)
            getAuthorWork(data.docs[0].key, "Second")
        })
        .catch(e => console.log(e))
    }
    return (
        <Wrapper data-testid="greetings-container">Author Revision Head to Head
            <Alert isError={isError} timer={100}/>
            <FormWrapper>
                <Form  onSubmit={handleFirstAuthor} data-testid="firstAuth">
                    <FormInput  value={firstAuthName} placeholder="First Author" onChange={handleFirstName} />
                    <div className="icon">
                        <FontAwesomeIcon icon={solid('magnifying-glass')} onClick={handleFirstAuthor}/>
                    </div>
                </Form>
                <Form  onSubmit={handleSecondAuthor} data-testid="secondAuth" >
                    <FormInput data-testid="secondAuth" value={secondAuthName} placeholder="Second Author" onChange={handleSecondName} />
                    <div className="icon">
                        <FontAwesomeIcon icon={solid('magnifying-glass')} onClick={handleSecondAuthor}/>
                    </div>
                </Form>
                <Form>
                    <button onClick={RemoveWorks} >
                        <FontAwesomeIcon className="Arrow" icon={solid('angle-down')} />
                    </button>
                    <NumberInput placeholder={TitleWorks} name="works" type="number" value={TitleWorks} onChange={setWorks} />
                    <button onClick={AddWorks} >
                        <FontAwesomeIcon className="Arrow" icon={solid('angle-up')} />
                    </button>
                    <h3>Number of Works</h3>
                </Form>
                <Form>
                    <Checkbox onClick={handleSeller}><div style={{background: isActive ? "radial-gradient(#bdbdbd, #eeeeee)" : ''}}></div></Checkbox>
                    <h3>Include Best Seller</h3>
                </Form>
            </FormWrapper>
            <Content data-testid="chart-container">
                <Chart 
                    firstAuth={firstAuthName}
                    FirstWork={FirstSelectedWork.work} 
                    firstBest={firstBestSeller}
                    secondAuth={secondAuthName}
                    SecondWork={SecondSelectedWork.work}
                    secondBest={secondBestSeller} 
                    Titles={TitleWorks} 
                    included={isIncluded}
                />
            </Content>
        </ Wrapper>
    )

}

export default MainPage