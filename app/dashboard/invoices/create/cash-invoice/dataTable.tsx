import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { AiFillDelete } from "react-icons/ai";
const products = [
  {
    name: "Product A",
    quantity: 10,
    price: 19.99,
  },
  {
    name: "Product B",
    quantity: 5,
    price: 24.95,
  },
  {
    name: "Product C",
    quantity: 15,
    price: 14.5,
  },
  {
    name: "Product D",
    quantity: 8,
    price: 29.99,
  },
  {
    name: "Product E",
    quantity: 20,
    price: 9.75,
  },
];
function DataTable({}) {
  return (
    <div>
      <Table className="w-3/4 mt-10 border-black rounded-md">
        <TableHeader className="bg-slate-100">
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
                <Button variant={"ghost"}>
                  <AiFillDelete />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTable;
