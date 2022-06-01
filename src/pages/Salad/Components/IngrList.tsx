import axios from "axios";
import { FC, useEffect, useState } from "react";
import Select from 'react-select'
import { Iingr } from "../../../types/types";
import s from './IngrList.module.scss'

interface IngrListProps {
    ingrs: Iingr[]
    id: string
}

interface Options {
    value: number;
    label: string;
}

const IngrList: FC<IngrListProps> = ({ ingrs, id }) => {

    const [options1, setOptions1] = useState<Options[]>([])
    const [options2, setOptions2] = useState<Options[]>([])
    const [options3, setOptions3] = useState<Options[]>([])

    for (var i = 0; i < ingrs.length; i++) {
        if (ingrs[i].id % 4 === 0) {
            options1[i] = { value: i, label: ingrs[i].name }
        }
    }

    for (var i = 0; i < ingrs.length; i++) {
        if (ingrs[i].id % 2 === 1) {
            options2[i] = { value: i, label: ingrs[i].name }
        }
    }

    for (var i = 0; i < ingrs.length; i++) {
        if (ingrs[i].id % 3 === 0) {
            options3[i] = { value: i, label: ingrs[i].name }
        }
    }

    const [veg, setVeg] = useState('');
    const [meat, setMeat] = useState('');
    const [other, setOther] = useState('');

    const changeHandler1 = (e: any) => {
        setVeg(e.label)
    }
    const changeHandler2 = (e: any) => {
        setMeat(e.label)
    }
    const changeHandler3 = (e: any) => {
        setOther(e.label)
    }

    function fetchInfo() {
        console.log('fetchInfo выполнилась')
        alert('Функция выполнилась')
        try {
            axios.post('/', {
                veg: veg,
                meat: meat,
                other: other
            })
        } catch (e) {
            alert(e)
        }
    }


    switch (id) {
        case 'Veg':
            return (
                <div>
                    <Select placeholder="Выберите" options={options1} onChange={changeHandler1} />
                </div>
            );
        case 'Meat':
            return (
                <div>
                    <Select placeholder="Выберите" options={options2} onChange={changeHandler2} />
                </div>
            );
        case 'Other':
            return (
                <div>
                    <Select placeholder="Выберите" options={options3} onChange={changeHandler3} />
                </div>
            );
        case 'button': return (<div className={s.buttonwrapper}>
            <button className={s.button} onClick={fetchInfo}> Применить </button>
            <button className={s.button} onClick={() => document.location.href = "/salad"}> Продолжить </button> </div>
        );

        case 'Selected': return (
            <div><p> {veg} {meat} {other} </p></div>
        );

        default: return null
    }
};

export default IngrList
