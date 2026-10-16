import type { SzobakTipus } from "../adatok"

interface KartyakProps {
    lista: SzobakTipus[];
    kivalaszt: (index: number) => void;
}

function Kartyak({lista, kivalaszt}: KartyakProps) {
    return (
        <div className="kartyak">
            
        </div>
    )
}
export default Kartyak;