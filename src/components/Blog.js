import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await axios.get(url);
    const items = response.data;
    console.log({ items });
    setItems(items);
  };

  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {items.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id}>
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
