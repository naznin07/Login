import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostById } from "../services/api";

const DetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id).then(setPost).catch(console.error);
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <Link to="/main" className="text-blue-500">
        ← Back to Main
      </Link>
      <h2 className="text-xl font-bold mt-2">{post.title}</h2>
      <p className="mt-2">{post.body}</p>
    </div>
  );
};

export default DetailPage;
