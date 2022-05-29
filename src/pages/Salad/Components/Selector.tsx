import React, { useState } from 'react'
import s from "./Selector.module.scss"
import Select from 'react-select'
import '../../../styles/react-select.scss';
import './react-select.scss'
import { ArrayIng } from './axiosselector';

interface Props {
}

const options1 = [
    { value: 'veg-1', label: 'Лук' },
    { value: 'veg-2', label: 'Капуста' },
    { value: 'veg-3', label: 'Помидоры' },
    { value: 'veg-4', label: 'Огурцы' }
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

let type4 = "овощи"
const options4 = ArrayIng(type4)

function Selector({ }: any) {

    const [labeltext, setSelectedLabel] = useState('');

    const handleChange = (e: any) => {
        setSelectedLabel(e.label);
    }

    return (
        <div className={s.container}>
            <Select className={s.select} options={options1}
                placeholder="Выберите"
                onChange={handleChange}
            />
            <Select placeholder="Выберите" className={s.select} options={options2} />
            <Select placeholder="Выберите" className={s.select} options={options3} />
            <p className={s.label}> {labeltext} </p>

        </div>);
}

export default Selector;