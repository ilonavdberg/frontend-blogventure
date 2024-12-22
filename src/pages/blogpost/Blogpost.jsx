import './Blogpost.css'
import {useParams} from "react-router-dom";


function Blogpost() {
    const { id } = useParams();

    return (
        <h1>{`Detailpagina blogpost ${id}`}</h1>
    )
}

export default Blogpost;