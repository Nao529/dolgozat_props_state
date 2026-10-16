import type { SzobakTipus } from "../adatok"
import Kartya from "./Kartya";

interface KartyakProps {
    lista: SzobakTipus[];
    kartyakivalaszt: (index: number) => void;
}

function Kartyak({lista, kartyakivalaszt}: KartyakProps) {
    return (
        <div className="kartyak">
            {lista.map((e,i) => (
                <Kartya  elem={e} index={i} kartyakivalaszt={kartyakivalaszt} key={e.id}/>
            ))}
        </div>
    )
}
export default Kartyak;