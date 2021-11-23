import React from "react";
import Product from "../Product/Product";
import "./ProductList.css";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Tamim</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
          officia unde. Necessitatibus dolores enim consequuntur expedita, odit
          assumenda amet similique odio dolorem, doloremque, animi quisquam
          harum totam quos suscipit recusandae!
        </p>
      </div>
      <div className="pl-list">

        {
          products.map((item) => (
             <Product img={item.img} key={item.id} link={item.link} />
          ))
        }

      </div>
    </div>
  );
};

export default ProductList;
