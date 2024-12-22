//Styling
import './Blogposts.css';

import {useEffect, useState} from "react";
import axios from 'axios';
import BlogCard from "../blogcard/BlogCard.jsx";

function BlogPosts() {
    const [blogPosts, setBlogPosts] = useState([]);

    async function fetchBlogposts() {
        try {
            const response = await axios.get('http://localhost:3000/posts')
            setBlogPosts(response.data);
            console.log(blogPosts);
        } catch(e) {
            console.error(e.message);
        }
    }

    useEffect(() => {fetchBlogposts();}, []);

    return (
        <article>
            <h1>Bekijk alle {blogPosts.length} posts op het platform</h1>
            {blogPosts.length > 0 && (
                <ul>
                    {blogPosts.map((post) => (
                        <BlogCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            author={post.author}
                            comments={post.comments}
                            shares={post.shares}
                        />
                    ))}
                </ul>
            )}
        </article>
    );
}



export default BlogPosts;