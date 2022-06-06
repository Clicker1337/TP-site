import React, { useEffect, useState } from 'react'
import s from "./Selector.module.scss"
import '../../../styles/react-select.scss';
import './react-select.scss'
import IngrList from './IngrList';
import { Iingr } from '../../../types/types';
import axios from 'axios';

interface Props {
    id: string
}

const Selector = ({ id }: any) => {

    const [ingrs, setIngrs] = useState<Iingr[]>([])

    useEffect(() => {
        fetchIngrs()
    }, [])

    async function fetchIngrs() {
        try {
            const response = await axios.get<Iingr[]>('https://jsonplaceholder.typicode.com/users?_limit=10')
            setIngrs(response.data)
        } catch (e) {
            alert(e)
        }
    }
    
const [name, setName] = useState()
const [name1, setName1] = useState()

const handleChangeName1 = (name1: any) => {
    setName(name1)
}
const handleChangeName = (name: any) => {
    setName(name)
}

    return (<div>
        <div className={s.container}>
            <div className={s.select}> <IngrList ingrs={ingrs} id={"Veg"} onChange={handleChangeName1}/> </div>
            <div className={s.select}> <IngrList ingrs={ingrs} id={"Meat"} onChange={handleChangeName}/> </div>
            <div className={s.select}> <IngrList ingrs={ingrs} id={"Other"} onChange={handleChangeName}/> </div>
        </div>
        <div className={s.buttons}> <IngrList ingrs={ingrs} id={"button"} onChange={handleChangeName}/>
        </div>
    </div>
    );
}

export default Selector;