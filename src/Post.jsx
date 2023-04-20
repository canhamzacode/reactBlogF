import React from 'react'
import { formatISO9075 } from 'date-fns'
import { Link } from 'react-router-dom';

const Post = ({ title, summary, cover, content, createdAt, author, _id }) => {
    const username = author.username;
    return (
        <div className="post">
            <div className="image">
                <Link to={`/post/${_id}`}>
                    <img src={"http://localhost:3000/" + cover} alt="" />
                </Link>
            </div>
            <div className="texts">
                <Link to={`/post/${_id}`}>
                    <h2>
                        {title}
                    </h2>
                </Link>

                <p className="info">
                    <a className="author">
                        {username}
                    </a>
                    <time>{formatISO9075(new Date(createdAt))}</time>
                </p>
                <p className="summary">
                    {summary}
                </p>
            </div>
        </div>

    )
}

export default Post