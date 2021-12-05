import React, { useEffect } from "react";
import FoodTable from "../components/FoodTable";
import { getLayout } from "../components/Layout";
import { ACTIONS, useFood, useFoodDispatch } from "../components/Food";
import { getFoods } from "../firebase/food";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import PageLoader from "../components/PageLoader";

const FoodList = () => {
  const foods = useFood();
  const dispatch = useFoodDispatch();
  useEffect(async () => {
    const foods = await getFoods();
    dispatch({ type: ACTIONS.SET_FOODS, payload: foods });
  }, []);
  return (
    <div>
      <PageLoader isLoading={!foods.length} />
      <Link href="/foods/new">
        <Fab
          sx={{ position: "fixed", right: 30, bottom: 30 }}
          color="primary"
          variant="extended"
          aria-label="add"
        >
          <AddIcon />
          Add New
        </Fab>
      </Link>
      <FoodTable />
    </div>
  );
};

FoodList.getLayout = getLayout;

export default FoodList;
