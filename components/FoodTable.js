import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";
import { useFood } from "./Food";

export default function FoodTable() {
  const foods = useFood();
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Food</TableCell>
            <TableCell>Protein (g)</TableCell>
            <TableCell>Carb (g)</TableCell>
            <TableCell>Fat (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foods.map((food) => (
            <TableRow key={food.id}>
              <TableCell>
                <Link href={`/foods/${food.id}`}>{food.name}</Link>
              </TableCell>
              <TableCell>{food.protein}</TableCell>
              <TableCell>{food.carb}</TableCell>
              <TableCell>{food.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
