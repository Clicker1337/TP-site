import id1 from './id1.jpg'
import id2 from './id2.jpg'
import id3 from './id3.jpg'
import id4 from './id4.jpg'

interface Props {
    id: number;
}

export const GlobalPngSelector = ({ id }: Props) => {
    switch (id) {
        case 1:
            return (<img src={id1} height='205px' width='410px'></img>
            );
        case 2:
            return (<img src={id2} height='205px' width='410px'></img>
            );
        case 3:
            return (<img src={id3} height='205px' width='410px'></img>
            );
        case 4:
            return (<img src={id4} height='205px' width='410px'></img>
            );


        default:
            return null;
    }
};