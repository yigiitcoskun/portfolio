import React, { useEffect, useState } from 'react';
import './Blog.css';

function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://blogproject-production-37b1.up.railway.app/api/blogposts/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setPosts(data))
            .catch(error => console.error('Fetch error:', error));
    }, []);
    

    return (
        <div id="blog" className="blog-section">
            <h1 className="blog-title">My Latest Blog Posts</h1>
            <div className="blog-container">
                {posts.slice(0, 3).map(post => (
                    <div key={post.id} className="blog-card">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="blog-image"
                        />
                    <div className="blog-heading-container">
                         <h2 className="blog-heading">{post.title}</h2>
                    </div>
                    <div className="blog-read-more-container">
                        <button className="blog-read-more">Devamını Gör</button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
