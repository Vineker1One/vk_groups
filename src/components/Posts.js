import React, { useState, useEffect } from 'react';
import './Posts.css';

const Posts = ({ domain }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPosts = () => {
        const script = document.createElement('script');
        const callbackName = 'callbackFunc';

        window[callbackName] = (data) => {
            if (data.error) {
                setError(`Ошибка API: ${data.error.error_msg}`);
                setLoading(false);
                return;
            }
            setPosts(data.response.items);
            setLoading(false);
        };

        const apiURL = `https://api.vk.com/method/wall.get?access_token=6065660360656603606566037f637970c1660656065660306a33a404472355f2ddccb00&v=5.199&domain=${domain}&callback=${callbackName}`;

        script.src = apiURL;
        script.onerror = () => {
            setError('Failed to load data');
            setLoading(false);
        };

        document.body.appendChild(script);
    };

    useEffect(() => {
        if (domain) {
            fetchPosts();
        }
    }, [domain]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container_post">
            <h1>Посты из группы ВКонтакте</h1>
            <ul className="postList">
                {posts.map(post => (
                    <li key={post.id} className="postItem">
                        {post.text && <h2 className="postText">{post.text}</h2>}
                        {post.attachments && post.attachments.map((attachment, index) => (
                            attachment.type === 'photo' && (
                                <img
                                    key={index}
                                    src={attachment.photo.sizes.find(size => size.type === 'x').url}
                                    alt="Вложение"
                                    className="postImage"
                                />
                            )
                        ))}
                        <p className="postLikes">Лайки: {post.likes?.count || 0}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;