import React, { FC } from 'react'
import { Iingr } from '../../../types/types';


interface IngrItemProps {
    ingr: Iingr;

}

const IngrItem: FC<IngrItemProps> = ({ ingr }) => {
    return (
        <div>
           <div> {ingr.name} </div>
        </div>
    )
}

export default IngrItem