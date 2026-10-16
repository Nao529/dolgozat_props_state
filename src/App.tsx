import { useState } from 'react'
import './App.css'
import { TANULOSZOBAK } from './adatok';
import Kartyak from './components/Kartyak';

function App() {
  const[i, setI] = useState(0);
  function kartyaKivalaszt(index: number) {
    setI(index);
  }

  return (
    <>
      <main>
        <header>
          <h1>Tanulószobák neked</h1>
          <p>Találd meg számodra a megfelelő tanulóhelyet!</p>
        </header>
        <article>
          <p>Szobatípus: </p>
          <Kartyak lista={TANULOSZOBAK} kivalaszt={kartyaKivalaszt}/>
        </article>
        <footer>Nao</footer>
      </main>
    </>
  )
}
export default App