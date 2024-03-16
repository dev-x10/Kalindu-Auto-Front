import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddInvoice = () => {
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Do something with the product object, e.g., submit to server
    console.log(product);
  };

  return (
    <div className="w-3/4 mt-10">
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <Input
          type="text"
          name="name"
          id="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Name"
          className="flex-1"
        />
        <Input
          type="number"
          name="quantity"
          id="quantity"
          value={product.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="flex-1"
        />
        <Input
          type="number"
          name="price"
          id="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="flex-1"
        />
        <Button type="submit">ADD</Button>
      </form>
    </div>
  );
};

export default AddInvoice;
