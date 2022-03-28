import { useState, useEffect } from "react";
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";

interface Props {
    selecionado: ITarefa | undefined
}

export default function Cronometro({ selecionado } : Props){
    console.log('Conversao: '+ tempoParaSegundos('01:01:01'));

    const [tempo, setTempo] = useState<number>(tempoParaSegundos(String(selecionado?.tempo)));

    useEffect(() => {
        if(selecionado?.tempo){

            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado]);


    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>

            <Botao>Começar!</Botao>
        </div>
    );
}