import type { SzobakTipus } from "../adatok"
import './Kartya.css'

interface KartyaProps {
    elem: SzobakTipus;
    index: number;
    foglalasHozzaad: ( index: number) => void;
}

function Kartya({ elem, index, foglalasHozzaad }: KartyaProps) {
    return (
        <div className="kartya">
            <div className="kartyaFejlec">
                <span><p>{elem.szoba_nev}</p></span>
                <span><p>{elem.szobatipus}</p></span>
            </div>
            <span><p>ID {elem.id}</p></span>
            <span><p>Szobatípus {elem.szobatipus}</p></span>
            <span><p>Emelet {elem.emelet}</p></span>
            <span><p>Férőhely {elem.ferohely}</p></span>
            <span><p>Foglalt helyek {elem.foglalt_helyek}</p></span>
            <button className="foglalasGomb" onClick={() => foglalasHozzaad(index)}>Helyet foglalok</button>
        </div>
    )
}
export default Kartya;