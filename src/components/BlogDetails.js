import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogDetails = ({ match }) => {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts/${match.params.id}`;
    const response = await axios.get(url);
    const item = response.data;
    console.log({ item });
    setItem(item);
  };

  return (
    <div>
      <h1>Blog Page</h1>
      <h4>{item.name}</h4>
      <p>{item.body}</p>
    </div>
  );
};

export default BlogDetails;
