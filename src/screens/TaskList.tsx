import { v4 as uuidv4 } from 'uuid';

import plusSign from "/plus.svg";
import "./styles.css";
import { useState } from "react";
import Tech from "../components/Tech";

interface Tech {
    content: string,
    done: boolean,
    id: number
}

const mockList: Tech[] = [
    { content: "CSS", done: true, id: 0 },
    { content: "REACT", done: true, id: 1 },
    { content: "HTML", done: true, id: 2 },
    { content: "TYPESCRIPT", done: true, id: 3 }
]

export default function TaskList() {
    const [techList, setTechList] = useState<Tech[]>(mockList);
    const [tech, setTech] = useState("");

    function handleAddTech(event: any) {
        event.preventDefault();
        const newList: Tech[] = techList.concat({ content: tech, done: false, id: uuidv4() });

        setTech("");

        setTechList(newList);
    }

    function handleRemove(id: number) {
        const newList = techList.filter((tech) => tech.id !== id);

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

            <form className="input-task" onSubmit={handleAddTech}>
                <input type="text" placeholder="Adicione uma nova tecnologia" value={tech} onChange={e => setTech(e.target.value)}></input>
                <button type="submit">
                    Criar
                    <img src={plusSign} alt="Símbolo de mais"></img>
                </button>
            </form>

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

                {techList.length === 0 && (
                    <div id="list">
                        <div id="warning-message">
                            <span>Você ainda não tem tecnologias cadastradas</span>
                            <span>Crie tecnologia e organize seus itens a fazer</span>
                        </div>
                    </div>
                )}

                {techList.map((tech) => (
                    <Tech tech={tech} key={tech.id} id={tech.id} onRemove={handleRemove} onDone={handleDone} />
                ))}
            </div>
        </>
    )
}
