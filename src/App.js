import React, { useState } from "react";
import { useEffect } from "react";
import { supabase } from "./supabaseClient";
import ProductCard from "./ProductCard";
import "./style/App.css"

const App = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [products, setProducts] = useState([]);
  console.log(name);
  console.log(description);

  useEffect(() => {
    getProducts();
  },[]);

  async function getProducts() {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .limit(10);
      if (error) throw error;
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }
  console.log(products);
  
  async function createProduct() {
    try {
      const { data, error } = await supabase
        .from("products")
        .insert({
          name: name,
          description: description,
        })
        .single();

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div>
      <form className="m-3">
        <div className="mb-3 form-outline w-25">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputText1"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3 form-outline w-25 ">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Product Description
          </label>
          <input
            type="textp"
            className="form-control"
            id="exampleInputText2"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => createProduct()}
        >
          Create Product in Supabase DB
        </button>
      </form>
      <hr></hr>
      <div className="cardbox">
        {products.map(product => {
         return(
          <div className="cards">
            <ProductCard product = {product} />
          </div>
         )
        })}
      </div>
    </div>
  );
};

export default App;
