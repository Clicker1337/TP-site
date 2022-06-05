import axios from "axios";
import { FC, useEffect, useState } from "react";
import Select from 'react-select'
import { Iingr } from "../../../types/types";
import { SaladRecipes } from "../../SaladRecipes/SaladRecipes";
import s from './IngrList.module.scss'

interface IngrListProps {
    ingrs: Iingr[]
    id: string
}

interface Options {
    value: number;
    label: string;
}

declare global {
    var Gvegetable: number;
    var Gmeat: number;
    var Gother: number;
}

const IngrList: FC<IngrListProps> = ({ ingrs, id }) => {

    const [options1, setOptions1] = useState<Options[]>([])
    const [options2, setOptions2] = useState<Options[]>([])
    const [options3, setOptions3] = useState<Options[]>([])

    for (var i = 0; i < ingrs.length; i++) {
        if (ingrs[i].type == 'Овощ') {
            options1[i] = { value: i, label: ingrs[i].name }
        }
    }

    for (var i = 0; i < ingrs.length; i++) {
        if (ingrs[i].type == 'Мясо') {
            options2[i] = { value: i, label: ingrs[i].name }
        }
    }

    for (var i = 0; i < ingrs.length; i++) {
        if (ingrs[i].type == 'другое') {
            options3[i] = { value: i, label: ingrs[i].name }
        }
    }

    const [veg, setVeg] = useState(0);
    const [meat, setMeat] = useState(0);
    const [other, setOther] = useState(0);

    const changeHandler1 = (e: any) => {
        setVeg(e.value + 1);
        globalThis.Gvegetable = (e.value + 1);
    }
    const changeHandler2 = (e: any) => {
        setMeat(e.id)
        globalThis.Gmeat = (e.value + 1);
    }
    const changeHandler3 = (e: any) => {
        setOther(e.id)
        globalThis.Gother = (e.value + 1);
    }

    function fetchInfo() {
            axios.post('/', {
                veg: globalThis.Gvegetable,
                meat: globalThis.Gmeat,
                other: globalThis.Gother
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
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
            <button className={s.button} onClick={() => document.location.href = "/saladrecipes"}> Продолжить </button> </div>
        );

        default: return null
    }
};

export default IngrList
