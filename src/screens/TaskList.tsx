import plusSign from "/plus.svg";
import "./styles.css";
import { useState } from "react";
import Tech from "../components/Tech";

export default function TaskList(){
    const [techs, setTechs] = useState<string[]>(["Fuck"]);

    return (
        <>
            <div className="header">
                <h1>Minha Lista de Tecnologias</h1>
            </div>

            <div className="input-task">
                <input type="text" placeholder="Adicione uma nova tecnologia"></input>
                <button type="submit">Criar<img src={plusSign} alt="Símbolo de mais"></img></button>
            </div>

            <div className="task-list">
                <div className="sub-header">
                    <div>
                        <span id="sub-text-tech">Tecnologias criadas</span>
                        <span className="counter">0</span>
                    </div>
                    <div>
                        <span id="sub-text-done">Concluídas</span>
                        <span className="counter">2 de 5</span>
                    </div>
                </div>

                {techs.length === 0 && (
                    <div id="warning-message">
                        <span>Você ainda não tem tecnologias cadastradas</span>
                        <span>Crie tecnologia e organize seus itens a fazer</span>
                    </div>
                )}

                {techs.map((tech, key=0) => (
                    <Tech tech={tech} key={key+1}/>
                ))}
            </div>
        </>
    )
}