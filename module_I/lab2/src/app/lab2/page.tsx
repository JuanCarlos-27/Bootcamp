"use client";
import './style.css';
import { useEffect, useState } from "react";
import { getAllPosts } from "../services/posts.service";
import { Post } from "../models/post.model";

export default function Lab2() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await getAllPosts();
      setPosts(response);
    };
    getData().finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Posts</h1>

      <ul className='posts-container'>
        {loading && <p>Cargando Información...</p>}
        {posts.map((post) => (
          <li key={post.id} className='post'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}