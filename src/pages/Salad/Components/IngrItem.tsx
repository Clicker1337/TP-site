import React, { FC } from 'react'
import Select from 'react-select';
import { Iingr } from '../../../types/types';

interface IngrItemProps {
    item: string
}

const IngrItem: FC<IngrItemProps> = ({ item }) => {
    return (
        <div>
            <p> {item} </p>
        </div>
    )
}
export default IngrItem