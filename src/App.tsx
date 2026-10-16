import { useState } from 'react'
import './App.css'
import { TANULOSZOBAK, type SzobakTipus } from './adatok';
import Kartyak from './components/Kartyak';

function App() {
  const[lista, setLista] = useState<SzobakTipus[]>(TANULOSZOBAK)
  function foglalasHozzaad(index: number) {
    console.log(lista[index].id);
    //új lista, hogy ne az eredetit módosítsuk
    const ujLista: SzobakTipus[] = [...lista] //eredeti lista másolata
    //csak akkor foglalhatunk helyet, ha elég a férőhely
    //ezért megnézzük az új listában az indexedik helyen lévő elemnek a férőhelyét
    //aztán megnézzük a foglalt helyeket az új listában
    //és ellenőrizzük, hogy a foglalt helyek kisebb-e mint a férőhelyek
    //ha kisebb, hozzáadunk egyet a foglalt helyekhez
    if (ujLista[index].ferohely > ujLista[index].foglalt_helyek) {
      ujLista[index].foglalt_helyek += 1;
    }
    setLista(ujLista)
  }

  return (
    <>
      <main>
        <header>
          <h1>Tanulószobák neked</h1>
          <p>Találd meg számodra a megfelelő tanulóhelyet!</p>
        </header>
        <article>
          <Kartyak lista={lista} foglalasHozzaad={foglalasHozzaad}/>
        </article>
        <footer>Nao</footer>
      </main>
    </>
  )
}
export default App