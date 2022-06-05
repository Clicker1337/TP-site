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



function Selector({ id }: any) {

    const [ingrs, setIngrs] = useState<Iingr[]>([])

    useEffect(() => {
        fetchIngrs()
    }, [])

    async function fetchIngrs() {
        try {
            const response = await axios.get<Iingr[]>('https://jsonplaceholder.typicode.com/users')
            setIngrs(response.data)
        } catch (e) {
            alert(e)
        }
    }
    
switch(id) {
    case 'selector':
    return (<div>
        <div className={s.container}>
            <div className={s.select}> <IngrList ingrs={ingrs} id={"Veg"} /> </div>
            <div className={s.select}> <IngrList ingrs={ingrs} id={"Meat"} /> </div>
            <div className={s.select}> <IngrList ingrs={ingrs} id={"Other"} /> </div>
        </div>
        <div className={s.buttons}> <IngrList ingrs={ingrs} id={"button"} />
        </div>
    </div>
    );

    case 'label':
        return(<div>
            <div> <IngrList ingrs={ingrs} id={"Selected"} /> </div>
        </div>)

    default: return null
}
}

export default Selector;