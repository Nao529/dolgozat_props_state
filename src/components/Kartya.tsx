import type { SzobakTipus } from "../adatok"

interface KartyaProps {
    elem: SzobakTipus;
    index: number;
    kartyakivalaszt: ( index: number) => void;
}

function Kartya({ elem, index, kartyakivalaszt }: KartyaProps) {
    return (
        <div className="kartya">
            <div className="kartyaFejlec">
                <span><p>{elem.szoba_nev}</p></span>
                <span><p>{elem.szobatipus}</p></span>
            </div>
            <span>ID <p>{elem.id}</p></span>
            <span>Szobatípus <p>{elem.szobatipus}</p></span>
            <span>Emelet <p>{elem.emelet}</p></span>
            <span>Férőhely <p>{elem.ferohely}</p></span>
            <span>Foglalt helyek <p>{elem.foglalt_helyek}</p></span>
            <button className="foglalasGomb" onClick={() => kartyakivalaszt(index)}></button>
        </div>
    )
}
export default Kartya;