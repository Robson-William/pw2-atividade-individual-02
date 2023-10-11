import { v4 as uuidv4 } from 'uuid';

import plusSign from "/plus.svg";
import "./styles.css";
import { useState } from "react";
import Tech from "../components/Tech";

const mockList = [
    { content: "lorem ipsum saksodka", done: false, id: 0 },
    { content: "teste yay", done: true, id: 1 }
]

export default function TaskList() {
    const [techList, setTechList] = useState<Object[]>(mockList);
    const [tech, setTech] = useState("");

    function handleAddTech() {
        const newList = techList.concat({ content: tech, id: uuidv4() });

        setTechList(newList);
    }

    function handleRemove(techToDelete: string) {
        const newList = techList.filter((tech) => tech !== techToDelete);

        setTechList(newList);
    }

    function handleDone(id: number) {
        const newList = techList.map((tech) => {
            if (tech.id === id) {
                const techDone = {
                    ...tech,
                    done: !tech.done
                }

                return techDone;
            }

            return tech;
        })

        setTechList(newList);
    }

    function searchDone() {
        const done = techList.filter((tech) => tech.done === true).length;

        return done;
    }

    return (
        <>
            <div className="header">
                <h1>Minha Lista de Tecnologias</h1>
            </div>

            <div className="input-task">
                <input type="text" placeholder="Adicione uma nova tecnologia" value={tech} onChange={e => setTech(e.target.value)}></input>
                <button type="submit" onClick={handleAddTech}>
                    Criar
                    <img src={plusSign} alt="Símbolo de mais"></img>
                </button>
            </div>

            <div className="task-list">
                <div className="sub-header">
                    <div>
                        <span id="sub-text-tech">Tecnologias criadas</span>
                        <span className="counter">{techList.length}</span>
                    </div>
                    <div>
                        <span id="sub-text-done">Concluídas</span>
                        <span className="counter">{searchDone() + " de " + techList.length}</span>
                    </div>
                </div>

                <div id="list">
                    {techList.length === 0 && (
                        <div id="warning-message">
                            <span>Você ainda não tem tecnologias cadastradas</span>
                            <span>Crie tecnologia e organize seus itens a fazer</span>
                        </div>
                    )}

                    {techList.map((tech) => (
                        <Tech tech={tech} key={tech.id} id={tech.id} onRemove={handleRemove} onDone={handleDone} />
                    ))}
                </div>
            </div>
        </>
    )
}
