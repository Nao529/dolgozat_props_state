import type { SzobakTipus } from "../adatok"
import Kartya from "./Kartya";
import './Kartyak.css'

interface KartyakProps {
    lista: SzobakTipus[];
    foglalasHozzaad: (index: number) => void;
}

function Kartyak({lista, foglalasHozzaad}: KartyakProps) {
    return (
        <div className="kartyak">
            {lista.map((e,i) => (
                <Kartya  elem={e} index={i} foglalasHozzaad={foglalasHozzaad} key={e.id}/>
            ))}
        </div>
    )
}
export default Kartyak;