import React from "react";
import AddIcon from "@mui/icons-material/Add";
import profileImg from "../assets/image/profile.png";
import { Avatar, Typography, Stack } from "@mui/material";
import Button from "@mui/joy/Button";

const PhotoUpload = () => {
  return (
    <Stack
      sx={{
        border: "2px solid #3e445f",
        borderRadius: "30px",
        maxWidth:"480px",
        display:"flex",
        justifyContent:"center"
      }}
    >
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "25px",
          position: "relative",
        }}
      >
        <Avatar
          sx={{
            width: 250,
            height: 250,
            borderRadius: "50%",
          }}
          src={profileImg}
          alt="profile-img"
        />
        <Button
          sx={{
            position: "absolute",
            bottom: "-25px",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#ecefff !important",
            border: "none",
            color: "#3c467f",
            fontSize: "46px",
          }}
          onClick={() => {
            console.log("upload-img");
          }}
        >
          <AddIcon />
        </Button>
      </Stack>
      <Typography
        sx={{
          marginTop: "55px",
          textAlign: "center",
          fontSize: "35px",
          fontWeight: "300",
        }}
      >
        Upload photo
      </Typography>
    </Stack>
  );
};

export default PhotoUpload;
