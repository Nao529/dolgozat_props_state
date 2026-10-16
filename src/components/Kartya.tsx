import type { SzobakTipus } from "../adatok"

interface KartyaProps {
    elem: SzobakTipus;
    index: number;
    kivalaszt: ( index: number) => void;
}

function Kartya({ elem, index, kivalaszt }: KartyaProps) {
    return (
        <div className="kartya">
            <div className="kartyaFejlec">
                <p>{elem.szoba_nev}</p>
                <p>{elem.szobatipus}</p>
            </div>
            <p>{elem.id}</p>
            <p>{elem.szobatipus}</p>
            <p>{elem.emelet}</p>
            <p>{elem.ferohely}</p>
            <p>{elem.foglalt_helyek}</p>
            <button className="foglalasGomb" onClick={() => kivalaszt(index)}></button>
        </div>
    )
}
export default Kartya;