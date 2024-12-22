import './Blogpost.css'
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


function Blogpost() {
    const { id } = useParams();
    const [post, setPost] = useState({});

    async function fetchPost() {
        try {
            const response = await axios.get(`http://localhost:3000/posts/${id}`);
            console.log(id);
            console.log(response);
            setPost(response.data);
        } catch(e) {
            console.error(e.message);
        }
    }

    useEffect(() => {fetchPost();}, []);

    return (
        <article>
            <h1>{post.title}</h1>
            <h2>{post.subtitle}</h2>
            <h3>Geschreven door {post.author} op {post.created}</h3>
            <h4>{post.readTime} minuten lezen</h4>
            <p>{post.content}</p>
            <h3>{post.comments} reacties - {post.shares} keer gedeeld</h3>
            <Link to="/blogposts">{"< Terug naar de overzichtspagina"}</Link>
        </article>
    )
}

export default Blogpost;