import { useState } from 'react'
import './App.css'
import { TANULOSZOBAK } from './adatok';

function App() {
  const[i, setI] = useState(0);
  function kivalaszt(index: number) {
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
          <Kartyak lista={TANULOSZOBAK} kivalaszt/>
        </article>
      </main>
    </>
  )
}
export default App