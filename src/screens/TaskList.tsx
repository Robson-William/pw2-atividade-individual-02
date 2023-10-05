import "./styles.css";

export default function TaskList(){
    return (
        <>
            <div className="header">
                <h1>Minha Lista de Tecnologias</h1>
            </div>

            <div className="input-task">
                <input type="text" placeholder="Adicione uma nova tecnologia"></input>
                <button type="submit">Criar<span>+</span></button>
            </div>

            <div className="task-list">
                <div className="sub-header">
                    <div>
                        <span id="sub-text-tech">Tecnologias criadas</span>
                        <span className="counter">0</span>
                    </div>
                    <div>
                        <span id="sub-text-done">Concluídas</span>
                        <span className="counter">0</span>
                    </div>
                </div>

                <div className="task">
                    <a><img alt="Radio type check"></img></a>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro laudantium doloremque commodi officiis incidunt in voluptatibus. Quos possimus, quidem veritatis velit temporibus, iure quae delectus rem ad nam deleniti pariatur.
                    </p>
                    <a><img alt="Trash can"></img></a>
                </div>
            </div>
        </>
    )
}