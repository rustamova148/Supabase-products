import React from "react";
import { useState } from "react";
import { supabase } from "./supabaseClient";
import "./style/App.css";
const ProductCard = ({ product }) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);

  async function updateProduct() {
    try {
      const { data, error } = await supabase
        .from("products")
        .update({
          name: name,
          description: description,
        })
        .eq("id", product.id);
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  async function deleteProduct(){
    try {
    const {data,error} = await supabase
    .from("products")
    .delete()
    .eq("id", product.id);
    if (error) throw error;
    window.location.reload();
    } catch (error) {
    alert(error.message);
    }
  }
  return (
    <div>
      {editing === false ? (
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <button className="btn btn-danger" onClick={() => deleteProduct()}>
              Delete Product
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setEditing(true)}
            >
              Edit Product
            </button>
          </div>
        </div>
      ) : (
        <div
          className="card"
          style={{ width: "18rem", paddingLeft: "71px", paddingTop: "15px" }}
        >
          <h5>Editing Product</h5>
          <button
            className="btn btn-primary"
            style={{ width: "8rem", marginTop: "10px" }}
            onClick={() => setEditing(false)}
          >
            Go back
          </button>
          <div className="mb-3 form-outline w-25 secondname">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputText1"
              defaultValue={product.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3 form-outline w-25 seconddesc">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Product Description
            </label>
            <input
              type="textp"
              className="form-control"
              id="exampleInputText2"
              defaultValue={product.description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="btn btn-primary upt" onClick={() => updateProduct()}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
