import React, { FC } from 'react'
import Select from 'react-select';
import { Iingr } from '../../../types/types';


interface IngrItemProps {
    ingr: Iingr;

}

const IngrItem: FC<IngrItemProps> = ({ ingr }) => {
    return (
        <div>
            {ingr.name}
        </div>
    )
}
export default IngrItem