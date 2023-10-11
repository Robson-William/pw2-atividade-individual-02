import trashCan from "/trashCan.svg";
import "./styles.css";

interface Tech {
    content: string,
    done: boolean,
    id: number
}

type IProps = {
    tech: Tech,
    id: number,
    onRemove: (id: number) => void,
    onDone: (id: number) => void
}

export default function Tech({ tech, id, onRemove, onDone }: IProps) {
    return (
        <div className="card">
            <input type="checkbox" onClick={() => { onDone(id) }} defaultChecked={tech.done}></input>
            <p className={tech.done ? "checked" : "without"}>
                {tech.content}
            </p>
            <button onClick={() => onRemove(id)}><img src={trashCan} alt="Trash can"></img></button>
        </div>
    )
}
