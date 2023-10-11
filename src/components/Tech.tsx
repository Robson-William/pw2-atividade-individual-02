import trashCan from "/trashCan.svg";
import "./styles.css";

type IProps = {
    tech:mockList,
    id: number,
    onRemove:Function,
    onDone:Function
}

export default function Tech({tech, id, onRemove, onDone}:IProps){
    return (
        <div className="card">
            <input type="checkbox" onClick={() => {onDone(id)}} defaultChecked={tech.done}></input>
            <p className={tech.done ? "checked" : "without"}>
                {tech.content}
            </p>
            <button onClick={() => onRemove(tech)}><img src={trashCan} alt="Trash can"></img></button>
        </div>
    )
}