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

const options1 = [
    { value: 'meat-1', label: 'Курица' },
    { value: 'meat-2', label: 'Лосось' },
    { value: 'meat-3', label: 'Говядина' },
    { value: 'meat-4', label: 'Треска' }
]

const options2 = [
    { value: 'meat-1', label: 'Курица' },
    { value: 'meat-2', label: 'Лосось' },
    { value: 'meat-3', label: 'Говядина' },
    { value: 'meat-4', label: 'Треска' }
]
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
            <div className={s.select}> <IngrList ingrs={ingrs} /> </div>
            <Select placeholder="Выберите" className={s.select} />
            <Select placeholder="Выберите" className={s.select} options={options3} />
            <p className={s.label}> </p>

        </div>);
}

export default Selector;