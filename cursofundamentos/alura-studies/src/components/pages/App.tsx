import React, {useState} from 'react';
import { ITarefa } from '../../types/tarefa';
import Cronometro  from '../Cronometro';

import Formulario from '../Formulario';
import Lista from '../Lista';

import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);

  /*
  {
    tarefa: 'React', 
    tempo: '02:00:00'
}, {
    tarefa: 'Javascript', 
    tempo: '01:00:00'
},{
    tarefa: 'TypeScript', 
    tempo: '03:00:00'
}
  
  
  */
  return (
    <div className={style.AppStyle}>
     <Formulario setTarefas={setTarefas} />
     <Lista tarefas={tarefas} />
     <Cronometro />
    </div>
  );
}

export default App;