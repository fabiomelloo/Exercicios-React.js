import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';


function TextField(){
 const [name, setName] = useState("");


return (
    <>
    <main>
      <h1>Campo Texto:</h1>
        <input type="text" onChange={ (e) => setName(e.target.value)}/>
        <p> Bem-Vindo: {name}</p>
    </main>
    <nav>
      <Link to="/">Início</Link>
    </nav>
  </>
);

}

export default TextField;