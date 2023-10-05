export default function TaskList(){
    return (
        <div className="list-body">
            <div className="header">
                <h1>Minha Lista de Tecnologias</h1>
            </div>

            <div className="input-task">
                <input type="text" placeholder="Adicione uma nova tecnologia"></input>
                <button type="submit"></button>
            </div>

            <div className="task-list">
                <div className="sub-header">
                    <span>Tecnologias criadas</span>
                    <span>Concluídas</span>
                </div>

                <div className="task">
                    <button></button>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro laudantium doloremque commodi officiis incidunt in voluptatibus. Quos possimus, quidem veritatis velit temporibus, iure quae delectus rem ad nam deleniti pariatur.
                    </p>
                    <button></button>
                </div>
            </div>
        </div>
    )
}