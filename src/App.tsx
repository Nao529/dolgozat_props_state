import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <main>
        <header>
          <h1>Tanulószobák neked</h1>
          <p>Találd meg számodra a megfelelő tanulóhelyet!</p>
        </header>
        <article>
          <Kartyak />
        </article>
      </main>
    </>
  )
}

export default App
