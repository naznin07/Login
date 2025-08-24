import React, { useEffect, useState } from "react";
import { getPosts } from "../services/api";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getPosts().then(setPosts).catch(console.error);
  }, []);

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search posts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <ul>
        {filtered.map((post) => (
          <li
            key={post.id}
            className="mb-2 border p-2 cursor-pointer"
            onClick={() => navigate(`/detail/${post.id}`)}
          >
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body.slice(0, 50)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
