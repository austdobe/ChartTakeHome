import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useState } from "react";
import Chart from "../components/chart";
import { Wrapper, Form, FormInput, NumberInput } from "./main.styles";


const search = 'https://openlibrary.org/search/authors.json?q='

const MainPage = () => {
    const [FirstSelectedWork, SetFirstSelectedWork] = useState()
    const [SecondSelectedWork, SetSecondSelectedWork] = useState()
    const [ firstAuthName, setFirstAuthName ] = useState('First Author')
    const [ secondAuthName, setSecondAuthName ] = useState('Second Author')
    const [ TitleWorks, setTitleWorks ] = useState(1)
    const handleFirstName = (event:any) => {
            setFirstAuthName(event.target.value)
    }
    const handleSecondName = (event:any) => {
            setSecondAuthName(event.target.value)
    }
    const AddWorks = (event:any) => {
        event.preventDefault()
        const num = TitleWorks
        setTitleWorks(num + 1)
    }
    const RemoveWorks = (event:any) => {
        event.preventDefault()
        const num = TitleWorks
        setTitleWorks(num - 1)
    }
    const getAuthorWork = (key:String, Author:String) => {
        fetch(`https://openlibrary.org/authors/${key}/works.json`)
        .then((response) => response.json())
        .then((data)=> {
            if(Author === "First") {
                SetFirstSelectedWork(data.entries)
            }
            if(Author === "Second") {
                SetSecondSelectedWork(data.entries)
            }
        })

    }
    const handleFirstAuthor = (event:any) => {
        event.preventDefault()
        fetch(`${search}${firstAuthName}`)
        .then((response) => response.json())
        .then((data)=> {
            getAuthorWork(data.docs[0].key, "First")
        })
        .catch(e => console.log(e))
        
    }
    const handleSecondAuthor = (event:any) => {
        event.preventDefault()
        fetch(`${search}${secondAuthName}`)
        .then((response) => response.json())
        .then((data)=> {
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
                <NumberInput placeholder={TitleWorks} name="works" type="number" value={TitleWorks}/>
                <button onClick={AddWorks} >
                <FontAwesomeIcon className="Arrow" icon={solid('angle-up')} />
                </button>
                <h3>Number of Works</h3>
            </Form>
        </Wrapper>
        <Chart FirstWork={FirstSelectedWork} SecondWork={SecondSelectedWork} Titles={TitleWorks} />
        
        </>
    )

}

export default MainPage