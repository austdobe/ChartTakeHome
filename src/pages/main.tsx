import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useState } from "react";
import Chart from "../components/chart";
import { Wrapper, FormWrapper, Form, FormInput, NumberInput, Checkbox, Content } from "./main.styles";


const search = 'https://openlibrary.org/search/authors.json?q='

export interface ISelectedWork {
    work: Array<object>
}

const selectedWork: ISelectedWork = {
    work: [],
}

const MainPage = () => {
    const [ FirstSelectedWork, SetFirstSelectedWork ] = useState(selectedWork)
    const [ SecondSelectedWork, SetSecondSelectedWork ] = useState(selectedWork)
    const [ firstAuthName, setFirstAuthName ] = useState('First Author')
    const [ secondAuthName, setSecondAuthName ] = useState('Second Author')
    const [ TitleWorks, setTitleWorks ] = useState(4)
    const [ firstBestSeller, setFirstBestSeller ] = useState('')
    const [ secondBestSeller, setSecondBestSeller ] = useState('')
    const [ isIncluded, setIsIncluded ] = useState(true)
    const [ isActive, setIsActive ] = useState(true)
    const handleFirstName = (event:any) => {
        event.preventDefault()
        setFirstAuthName(event.target.value)
    }
    const handleSecondName = (event:any) => {
        event.preventDefault()
        setSecondAuthName(event.target.value)
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

    }
    const handleFirstAuthor = (event:any) => {
        event.preventDefault()
        fetch(`${search}${firstAuthName}`)
        .then((response) => response.json())
        .then((data) => {
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
            setSecondBestSeller(data.docs[0].top_work)
            getAuthorWork(data.docs[0].key, "Second")
        })
        .catch(e => console.log(e))
    }
    return (
        <Wrapper data-testid="greetings-container">Author Revision Head to Head
            <FormWrapper>
                <Form  onSubmit={handleFirstAuthor} >
                    <FormInput data-testid="firstAuth" value={firstAuthName} placeholder="First Author" onChange={handleFirstName} />
                    <div className="icon">
                        <FontAwesomeIcon icon={solid('magnifying-glass')} />
                    </div>
                </Form>
                <Form  onSubmit={handleSecondAuthor} >
                    <FormInput placeholder="Second Author" onChange={handleSecondName} />
                    <div className="icon">
                        <FontAwesomeIcon icon={solid('magnifying-glass')} />
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
            <Content>
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