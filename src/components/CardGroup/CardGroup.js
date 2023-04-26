import React from "react";
import Card from "../Card/Card";

const CardGroup = () => {
    const products = [
        {id : 1, name : "Mac Book", price : 120000},
        {id : 2, name : "Hp Laptop", price : 80000},
        {id : 3, name : "I phone", price : 20000},
    ]
  return (
    <div className="card-group">
     {
        products.map(product => <Card key={product.id} product={product}></Card>)
     }

    </div>
  );
};

export default CardGroup;
