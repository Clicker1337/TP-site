import { FC, useEffect, useState } from "react";
import Select from 'react-select'
import { Iingr } from "../../../types/types";
import IngrItem from "./IngrItem";

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

    useEffect(() => {
        vegSort(options1)
    }, [])
    useEffect(() => {
        meatSort(options2)
    }, [])
    useEffect(() => {
        otherSort(options3)
    }, [])

    function vegSort(options: Array<Options>) {
        for (var i = 0; i < ingrs.length; i++) {
            if (ingrs[i].id) {
                options[i] = { value: i, label: ingrs[i].name }
            }
        }
        setOptions1(options)
    }

    function meatSort(options: Array<Options>) {
        for (var i = 0; i < ingrs.length; i++) {
            if (ingrs[i].id) {
                options[i] = { value: i, label: ingrs[i].name }
            }
        }
        setOptions2(options)
    }

    function otherSort(options: Array<Options>) {
        for (var i = 0; i < ingrs.length; i++) {
            if (ingrs[i].id) {
                options[i] = { value: i, label: ingrs[i].name }
            }
        }
        setOptions3(options)
        
    }

    switch (id) {
        case 'Veg':
            return (
                <div>
                    <Select placeholder="Выберите" options={options1} />
                </div>
            );

        case 'Meat':
            return (
                <div>
                    <Select placeholder="Выберите" options={options2} />
                </div>
            );
        case 'Other':
            return (
                <div>
                    <Select placeholder="Выберите" options={options3} />
                </div>
            );
        default: return null
    }
};

export default IngrList
