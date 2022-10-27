import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import("./Categories.css");

const Categories = () => {
  const [categories, setCategories] = useState([]);
  // Loading API with useEffect
  useEffect(() => {
    fetch("https://server-site-2z80pnrc4-turjo99.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <div className="mt-5">
      <h2 className="my-5 fw-bolder">Categories</h2>
      {/*  using map to show categories */}
      {categories.map((category) => (
        <div className="mb-4 ">
          <Link to={`courses/categories/${category.id}`}>
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
