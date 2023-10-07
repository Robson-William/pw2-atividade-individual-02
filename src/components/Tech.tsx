import trashCan from "/trashCan.svg";
import "./styles.css";

type IProps = {
    tech:string,
}

export default function Tech({tech}:IProps){
    return (
        <div className="card">
            <button></button>
            <p>
                {tech}
            </p>
            <a><img src={trashCan} alt="Trash can"></img></a>
        </div>
    )
}