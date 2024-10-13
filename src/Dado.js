import "./dado.css"

function Dado(props){
    return (
        <div className="dado">
            { props.valor }
        </div>
    )
}



export default Dado