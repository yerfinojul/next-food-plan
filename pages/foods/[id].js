import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getLayout } from "../../components/Layout";
import {
  addFood,
  deleteFood,
  getFoodById,
  updateFood,
} from "../../firebase/food";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PageLoader from "../../components/PageLoader";

const Food = () => {
  const router = useRouter();
  const { id } = router.query;
  const [food, setFood] = useState({ name: "", carb: 0, protein: 0, fat: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const isNew = id === "new";

  useEffect(async () => {
    if (id) {
      if (!isNew) {
        setFood(await getFoodById(id));
      }
      setIsLoading(false);
    }
  }, [router.query]);

  const handleChange = (prop) => (event) => {
    if (["protein", "carbs", "fat"].includes(prop)) {
      const value = parseInt(event.target.value);
      setFood({ ...food, [prop]: value });
    } else {
      setFood({ ...food, [prop]: event.target.value });
    }
  };

  const save = async () => {
    setIsLoading(true);
    if (isNew) {
      await addFood(food);
    } else {
      await updateFood(food);
    }
    router.back();
  };

  const remove = async () => {
    setIsLoading(true);
    await deleteFood(food.id);
    router.back();
  };

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            label="Name"
            value={food.name}
            onChange={handleChange("name")}
            aria-describedby="filled-weight-helper-text"
          />
        </div>
        <div>
          <TextField
            label="Protein"
            value={food.protein}
            onChange={handleChange("protein")}
            InputProps={{
              endAdornment: <InputAdornment position="end">g</InputAdornment>,
            }}
            aria-describedby="filled-weight-helper-text"
          />
          <TextField
            label="Fat"
            value={food.fat}
            onChange={handleChange("fat")}
            InputProps={{
              endAdornment: <InputAdornment position="end">g</InputAdornment>,
            }}
            aria-describedby="filled-weight-helper-text"
          />
          <TextField
            label="Carb"
            value={food.carb}
            onChange={handleChange("carb")}
            InputProps={{
              endAdornment: <InputAdornment position="end">g</InputAdornment>,
            }}
            aria-describedby="filled-weight-helper-text"
          />
        </div>
        <div>
          <Button onClick={save} variant="contained">
            Save
          </Button>
          <Button onClick={remove} variant="contained" color="error">
            Delete
          </Button>
        </div>
      </Box>
    </>
  );
};

Food.getLayout = getLayout;

export default Food;
