import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import("./Categories.css");

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <div className="mt-5">
      {categories.map((category) => (
        <div className="mb-4 ">
          <Link to={`/categories/${category.id}`}>
            {" "}
            <Button key={category.id} className="catbtn btn btn-dark">
              {category.name}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
