import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';




function Home() {
  return (
    <>
      <main>
        <h1>Meus exercicios</h1><main>
        </main>
        <nav>
          <ul>
            <li><Link to="/Calculadora">Calculadora</Link></li>
            <li><Link to="/Esconder">Esconder</Link></li>
            <li><Link to="/ShowUsers">Usuarios</Link></li>
            <li><Link to="/DisableButton">Desativar Botao</Link></li>
            <li><Link to="/TextField">Campo de Texto</Link></li>
            <li><Link to="/TodoList">Lista de afazeres </Link></li>
            <li><Link to="/Contador">Contador</Link></li>

          </ul>
        </nav>
      </main>
    </>
  );
}

function Calculadora (){
  return (
    <>
    <main>
      <Link to="/">Voltar</Link> 
    </main>
    </>
  )
}

function DisableButton(){
  const [active, setActive] = useState(false);
  function Active(){
    if (active){
      setActive(false);
    }else
      setActive(true);

    }
  
  return(
    <>
      <main>
        <h1>Desativar Botao</h1>
        <button onClick={Active}>
          {!active ?  "Ativar" : "Desativar"}
        </button>
      </main>
      <nav>
        <Link to="/">Início</Link>
      </nav>
    </>
  )
  
}

function Esconder(){
  const [state, setState] = useState(false);
    function mostrar(){
      if (state){
        setState(false);
        console.log("desativando");
      }else{
        setState(true);
        console.log("Ativando")
      }
    }
    return(
      
      (state) ?
      <>
      <main>
        <h1>
          Esconder
        </h1>
        <img src={logo} id="imagem"></img>
        <button onClick={mostrar}>
          { (state) ? "Esconder" : "Mostrar"}          
        </button>
      </main>
      <nav>
        <Link to="/">Voltar</Link>
      </nav>
      </>
    : <> 
    <main>
       <h1>Esconder</h1>
       <button className='botao' onClick={mostrar}>
          { (state) ? "Esconder" : "Mostrar"}
        </button>
     </main>
     <nav>
       <Link to="/">Início</Link>
     </nav>
   </>
 );
}
    
function ShowUsers(){
  const Users = [{id: 1, name: "Fabio", age: "26"},
                 {id: 2, name: "Theo", age: "3"}   
  ];
  


  const UsersList = Users.map(
      (user) => <li key={user}> {user.name}, {user.age}</li>
  );

    return(
      <>
        <main>
          <h1>Usuarios:</h1>
          <ul>
            {UsersList}
          </ul>
        </main>
        <nav>
          <Link to="/">Início</Link>
        </nav>
      </>
    );
    }
 
  


function TodoList(){
 
  
  
    return(
      <>
      <input type="text" onChange={(event) => console.log (event.target.value)}/>
      <button type='button' >Adicionar tarefa</button>
      </>
    )
}
  
function Contador (){
  const [contador, setContador] = useState(0);

  function addContador(){
    setContador (contador + 1);
  }

  function removeContador(){
  setContador (contador - 1);

  }

  function limparContador (){

    setContador(0);
  }
    return (
      <div>
        {contador}
        <button onClick={addContador}>Adicionar</button>
        <button onClick={removeContador}>Remover</button>
        <button onClick={limparContador}>Limpar Tudo</button>
        </div>

    )


  }


    
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
 

function App(){
  return (
    <>
    <div className='App'>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/Calculadora" element = {<Calculadora />} />
        <Route path="/Esconder" element = {<Esconder />} />
        <Route path="/ShowUsers" element = {<ShowUsers />} />
        <Route path="/DisableButton" element = {<DisableButton />} />
        <Route path="/TextField" element = {<TextField />} />
        <Route path="/TodoList" element = {<TodoList />} />
        <Route path="/Contador" element = {<Contador />} />
        
      </Routes>
    </div>
    </>
  )
    
  
}


export default App;