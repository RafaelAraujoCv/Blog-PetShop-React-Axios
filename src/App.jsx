import React from 'react'
import './assets/css/base/base.css'

import Home from "./paginas/Home" //importando components
import Sobre from "./paginas/Sobre" //importando components
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho' //importando
import Post from './paginas/Post' //importando

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' //importa component de rotas renomeado (as) para Router
import Categoria from './paginas/Categoria'

//<Route path='/'>  => nome da rota URL para chamar o component
// exact => 
// Switch => Evita q o react bussque outros enderecos q tenha um padrao, parecidas Ex: /sobre ||| /sobre/teste

function App() {
  return (

    <Router>
      <Cabecalho/>
      <Switch>
        <Route exact path='/'> 
          <Home />
        </Route>
        <Route path='/sobre'>
          <Sobre />
        </Route>
        <Route path='/categoria/:id'>
          <Categoria />
        </Route>
        <Route path='/posts/:id'>
          <Post />
        </Route>
        <Route >
          <Pagina404 />
        </Route>
      </Switch>
    </Router>

  )
}

export default App
