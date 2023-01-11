import React from "react";
import { Grid, Typography, Select, Option } from "@mui/joy";

function InputSelect({ title, selectOption }) {
  return (
    <Grid container  padding="10px">
      <Grid xs={4}>
        <Typography component="p" textAlign="end">
          {title}:
        </Typography>
      </Grid>
      <Grid xs={8}>
        <Select
          placeholder={selectOption[0]}
          sx={{
            "--Select-minHeight": "40px",
            "--Select-radius": "24px",
            backgroundColor: "#EFEDEE !important",
            border: "none",
            "--Select-paddingInline": "26px",
          }}
        >
          {selectOption.map((value, index) => (
            <Option
              value={value}
              key={index}
              sx={{ backgroundColor: "#EFEDEE !important" }}
            >
              {value}
            </Option>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
}

export default InputSelect;
