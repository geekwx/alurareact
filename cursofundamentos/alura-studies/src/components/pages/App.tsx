import React, {useState} from 'react';
import { ITarefa } from '../../types/tarefa';
import Cronometro  from '../Cronometro';

import Formulario from '../Formulario';
import Lista from '../Lista';

import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
      setSelecionado(tarefaSelecionada);
      setTarefas(tarefaAnteriores => tarefaAnteriores.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      })));
  }


  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined);
      setTarefas(tarefaAnteriores => tarefaAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado: false, 
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }
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
     <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
     <Cronometro selecionado={selecionado} 
     finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;
