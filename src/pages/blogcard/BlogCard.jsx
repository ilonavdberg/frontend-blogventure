import './BlogCard.css';
import {Link} from "react-router-dom";

function BlogCard({ id, title, author, comments, shares }) {
    return (
        <article className="blog-card">
            <h2><Link to={`/blogposts/${id}`}>{title}</Link></h2>
            <h3>{author}</h3>
            <p>{comments} reacties - {shares} keer gedeeld</p>
        </article>
    )
}

export default BlogCard;