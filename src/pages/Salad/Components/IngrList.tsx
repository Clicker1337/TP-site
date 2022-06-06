import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import Select from 'react-select'
import { Iingr, Irecipe } from "../../../types/types";
import RecipeList from "../../SaladRecipes/Components/RecipeList";
import s from './IngrList.module.scss'

interface IngrListProps {
    ingrs: Iingr[]
    id: string
    onChange: any;
}

interface Options {
    value: number;
    label: string;
}

declare global {
    var Gvegetable: number;
    var Gmeat: number;
    var Gother: number;
    var GVL: string;
    var GML: string;
    var GOL: string;
}

const IngrList: FC<IngrListProps> = ({ ingrs, id, onChange }) => {

    const [options1, setOptions1] = useState<Options[]>([])
    const [options2, setOptions2] = useState<Options[]>([])
    const [options3, setOptions3] = useState<Options[]>([])

    for (var i = 0; i < ingrs.length; i++) {
        if (ingrs[i].id) {
            options1[i] = { value: i, label: ingrs[i].name }
        }
        //if (ingrs[i].type == 'Овощ') {
        //    options1[i] = { value: i, label: ingrs[i].name }
        //}
    }

    for (var i = 0; i < ingrs.length; i++) {
        if (ingrs[i].type == 'Мясо') {
            options2[i] = { value: i, label: ingrs[i].name }
        }
    }

    for (var i = 0; i < ingrs.length; i++) {
        if (ingrs[i].type == 'другое' || ingrs[i]) {
            options3[i] = { value: i, label: ingrs[i].name }
        }
    }

    const changeHandler2 = (e: any) => {
        globalThis.Gmeat = (e.value + 1);
        globalThis.GML = (e.label);
    }
    const changeHandler3 = (e: any) => {
        globalThis.Gother = (e.value + 1);
        globalThis.GOL = (e.label);
    }

    const handleNameChange = (e: any) => {
        globalThis.Gvegetable = (e.value + 1);
        globalThis.GVL = (e.label);
        //onChange(event.target.label);
    }

    switch (id) {
        case 'Veg':
            return (
                <div>
                    <Select placeholder="Выберите" options={options1} onChange={handleNameChange} />
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

        default: return null
    }
};

export default IngrList
