import { FC } from "react";
import Select from 'react-select'
import { Iingr } from "../../../types/types";
import IngrItem from "./IngrItem";

interface IngrListProps {
    ingrs: Iingr[]
}

const IngrList: FC<IngrListProps> = ({ ingrs }) => {

    return (
        <div>
            {ingrs.map(ingr =>
                <IngrItem key={ingr.id} ingr={ingr}/>
            )}
        </div>
    )
};

export default IngrList
