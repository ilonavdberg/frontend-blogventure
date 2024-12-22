import './NewPost.css';

import {useForm} from 'react-hook-form';
import axios from "axios";
import {useState} from "react";
import {Link} from "react-router-dom";


function NewPost() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [id, setId] = useState(null);

    async function handleFormSubmit(data) {
        try {
            const response = await axios.post(
                "http://localhost:3000/posts",
                {
                    "title": data.title,
                    "subtitle": data.subtitle,
                    "content": data.content,
                    "created": new Date(Date.now()).toJSON(),
                    "author": data.author,
                    "readTime": 5,
                    "comments": 0,
                    "shares": 0
                }
            );
            setId(response.data.id);
        } catch(e) {
            console.error(e.message);
        }
    }

    return (
        <>
            {id !== null //Checks if the blog post has been successfully submitted
                ?
                <>
                    <h2>Thank you! Your blog post has been submitted successfully</h2>
                    <h3>Bekijk jouw post <Link to={`/blogposts/${id}`}>hier</Link></h3>
                </>
                :
                <>
                    <h1>Create a new blog post!</h1>
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <label htmlFor="title-field">
                            Title:
                            <input
                                type="text"
                                id="title-field"
                                {...register("title", {
                                    required: {
                                        value: true,
                                        message: 'Titel is verplicht'
                                    }
                                })}
                            />
                        </label>
                        {errors.title && <p>{errors.title.message}</p>}

                        <label htmlFor="subtitle-field">
                            Subtitle:
                            <input
                                type="text"
                                id="subtitle-field"
                                {...register("subtitle", {
                                    required: {
                                        value: true,
                                        message: 'Subtitel is verplicht'
                                    }
                                })}
                            />
                        </label>
                        {errors.subtitle && <p>{errors.subtitle.message}</p>}

                        <label htmlFor="author-field">
                            Author:
                            <input
                                type="text"
                                {...register("author", {
                                    required: {
                                        value: true,
                                        message: 'Author is verplicht'
                                    }
                                })}
                            />
                        </label>
                        {errors.author && <p>{errors.author.message}</p>}

                        <label htmlFor="content-field">
                            Content:
                            <textarea
                                id="content-field"
                                cols="30"
                                rows="10"
                                placeholder="Schrijf hier je post"
                                {...register("content", {
                                    required: {
                                        value: true,
                                        message: 'Content is verplicht'
                                    },
                                    minLength: {
                                        value: 300,
                                        message: 'De blogpost moet uit minstens 300 karakters bestaan'
                                    },
                                    maxLength: {
                                        value: 2000,
                                        message: 'De blogpost moet uit maximaal 2000 karakters bestaan'
                                    },
                                })}
                            ></textarea>
                        </label>
                        {errors.content && <p>{errors.content.message}</p>}

                        <button type="submit">
                            Verzenden
                        </button>
                    </form>
                </>
            }
        </>
    )
}

export default NewPost;