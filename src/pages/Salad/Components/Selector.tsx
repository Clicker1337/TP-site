import React, { useEffect, useState } from 'react'
import s from "./Selector.module.scss"
import Select from 'react-select'
import '../../../styles/react-select.scss';
import './react-select.scss'
import IngrList from './IngrList';
import { Iingr } from '../../../types/types';
import axios from 'axios';

interface Props {
}

const options3 = [
    { value: 'oth-1', label: 'Масло' },
    { value: 'oth-2', label: 'Молоко' },
    { value: 'oth-3', label: 'Сливки' },
    { value: 'oth-4', label: 'Томатная паста' }
];

function Selector({ }: any) {

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

    return (
        <div className={s.container}>
            <div className={s.select}> <IngrList ingrs={ingrs} id={"Veg"} /> </div>
            <div className={s.select}> <IngrList ingrs={ingrs} id={"Meat"} /> </div>
            <div className={s.select}> <IngrList ingrs={ingrs} id={"Other"} /> </div>
        </div>);
}

export default Selector;