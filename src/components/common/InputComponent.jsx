import { Stack, Input } from "@mui/joy";
import React from "react";
import Typography from "@mui/joy/Typography";

const InputComponent = (props) => {
  return (
    <Stack direction="row" alignItems="center" display="flex" justifyContent="flex-start" spacing={2} sx={{ m: 2 }}>
     <Typography component="p" minWidth="150px">{ props.label && props.label }</Typography>
      <Input
        placeholder={props.placeholder}
        sx={{
          width: "350px",
          "--Input-minHeight": "40px",
          "--Input-radius": "24px",
          backgroundColor: "#EFEDEE",
          border: "none",
          "--Input-paddingInline": "26px",
        }}
        type={props.type}
      />
    </Stack>
  );
};

export default InputComponent;
