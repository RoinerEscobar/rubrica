import './App.css';
import Menu from './Componentes/Menu';
import Inicio from './Componentes/Inicio';
import Count from './Componentes/Count';
import Footer from './Componentes/Footer';
import { useState } from 'react';
import { Provider } from './contexto/Contexto';
function App() {

  const [inicio, setInicio] = useState(true)
  return (
   <Provider>
    <div id='inicio' className="inicio">
      <header>
         <Menu setInicio={setInicio}></Menu>
        </header>
        { 
            inicio ? <Inicio/>:<Count/>
        }


<footer>
<Footer></Footer>
</footer>
      


    </div>
    </Provider>
  );
}

export default App;
