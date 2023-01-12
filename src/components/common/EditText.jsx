import { Input, Typography, Textarea, Grid } from "@mui/joy";
import React from "react";

function EditText(props) {
  return (
    <Grid container  spacing={2}>
      <Grid xs={4} sm={4} md={4} lg={4}>
        <Typography component="p" textAlign="end" wordBreak="break-word">
          {props.label && props.label}
        </Typography>
      </Grid>
      <Grid xs={8}  sm={7} md={7} lg={7}>
        {props?.isTextArea ? (
          <Textarea
            sx={{
              "--Select-minHeight": "40px",
              "--Select-radius": "24px",
              backgroundColor: "#EFEDEE",
              border: "none",
              "--Select-paddingInline": "26px",
            }}
            minRows={4}
          ></Textarea>
        ) : (
          <Input
            placeholder={props.placeholder}
            sx={{
              "--Input-minHeight": "40px",
              "--Input-radius": "24px",
              backgroundColor: "#EFEDEE",
              border: "none",
              "--Input-paddingInline": "26px",
            }}
            type={props.type}
          />
        )}
      </Grid>
    </Grid>
  );
}

export default EditText;
