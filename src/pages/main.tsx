import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useState } from "react";
import Chart from "../components/chart";
import { Wrapper, Form, FormInput, NumberInput, CheckboxInput } from "./main.styles";


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
    const [ TitleWorks, setTitleWorks ] = useState(1)
    const [ firstBestSeller, setFirstBestSeller ] = useState('')
    const [ secondBestSeller, setSecondBestSeller ] = useState('')
    const [ isIncluded, setIsIncluded ] = useState(false)
    const [ isActive, setIsActive ] = useState(false)
    const handleFirstName = (event:any) => {
        setFirstAuthName(event.target.value)
    }
    const handleSecondName = (event:any) => {
        setSecondAuthName(event.target.value)
    }
    const handleSeller = (event:any) => {
        event.preventDefault()
        const Best = isIncluded
        if(Best){
            setIsActive(true)
        }
        else{
            setIsActive(false)
        }
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
        <>
            <Wrapper>
                <Form  onSubmit={handleFirstAuthor} >
                    <FormInput placeholder={firstAuthName} onChange={handleFirstName} />
                    <div className="icon">
                        <FontAwesomeIcon icon={solid('magnifying-glass')} />
                    </div>
                </Form>
                <Form  onSubmit={handleSecondAuthor} >
                    <FormInput placeholder={secondAuthName} onChange={handleSecondName} />
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
                    <CheckboxInput type="checkbox" className={`${isActive && "isActive"}`} onChange={handleSeller} />
                    <h3>include Best Seller</h3>
                </Form>
            </Wrapper>
            <Chart 
                // firstAuth={firstAuthName}
                FirstWork={FirstSelectedWork.work} 
                firstBest={firstBestSeller}
                // secondAuth={secondAuthName}
                SecondWork={SecondSelectedWork.work}
                secondBest={secondBestSeller} 
                Titles={TitleWorks} 
                included={isIncluded}
            />
        </>
    )

}

export default MainPage