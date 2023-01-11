import React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Grid, Stack } from "@mui/joy";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";
import SaveAsIcon from "@mui/icons-material/SaveAs";

import PhotoUpload from "../components/PhotoUpload";
import UploadDocument from "../components/common/UploadDocument";
import InputComponent from "../components/common/InputComponent";

const Home = () => {
  return (
    <Grid container={true} margin="30px" spacing="40px">
      <Grid xs={12} sm={12}>
        <Typography
          variant="p"
          component="p"
          fontSize="30px"
          sx={{ color: "black", fontWeight: "800" }}
        >
          {" "}
          MBA Admission
        </Typography>
      </Grid>
      <Grid xs={12} sm={12} md={4}>
        <InputComponent
          label="Name : "
          placeholder="Student &#40; As Per HSC &#41;"
          type="text"
        />
        <InputComponent placeholder="Mother Name " type="text" />
        <InputComponent label="Date of Birth :" placeholder="" type="date" />
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ m: 2, mt: 4 }}
        >
          <Typography minWidth="150px" variant="body1">
            Gender:
          </Typography>
          <Select
            defaultValue="0"
            sx={{
              width: "350px",
              "--Select-minHeight": "40px",
              "--Select-radius": "24px",
              backgroundColor: "#EFEDEE",
              border: "none",
              "--Select-paddingInline": "26px",
            }}
          >
            <Option value="0">Male</Option>
            <Option value="1">Female</Option>
          </Select>
        </Stack>
        <InputComponent
          label="Aadharcard Number No :"
          placeholder="2222 1111 2222"
          type="text"
        />
        <InputComponent
          label="Email Id :"
          placeholder="abced12@gmail.com"
          type="email"
        />
        <InputComponent
          label="Contact No :"
          placeholder="student"
          type="number"
        />
        <InputComponent label="" placeholder="parent" type="number" />
        <InputComponent label="" placeholder="guardian" type="number" />
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ m: 2, mt: 4 }}
        >
          <Typography minWidth="150px" variant="body1">
            permanent Address :
          </Typography>
          <Textarea
            sx={{
              width: "350px",
              "--Select-minHeight": "40px",
              "--Select-radius": "24px",
              backgroundColor: "#EFEDEE",
              border: "none",
              "--Select-paddingInline": "26px",
            }}
            minRows={4}
          ></Textarea>
        </Stack>
        <InputComponent label="city :" placeholder="Rajkot" type="text" />
        <InputComponent label="District :" placeholder="Rajkot" type="text" />
        <InputComponent label="Pincode :" placeholder="304045" type="number" />
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ m: 2, mt: 4 }}
        >
          <Typography minWidth="150px" variant="body1">
            Category:
          </Typography>
          <Select
            defaultValue="0"
            sx={{
              width: "350px",
              "--Select-minHeight": "40px",
              "--Select-radius": "24px",
              backgroundColor: "#EFEDEE",
              border: "none",
              "--Select-paddingInline": "26px",
            }}
          >
            <Option value="0">Open</Option>
            <Option value="1">OBC</Option>
          </Select>
        </Stack>
        <InputComponent label="Blood Group :" placeholder="A+" type="text" />
      </Grid>
      <Grid xs={12} sm={12} md={4} border="2px solid #3e445f">
        <InputComponent
          label="Graduation :"
          placeholder="Marvadi"
          type="text"
        />
        <InputComponent
          label="Graduation per :"
          placeholder="Gujrat board"
          type="text"
        />
        <InputComponent
          label="Graduation institute Name :"
          placeholder="Marvadi"
          type="text"
        />
        <InputComponent
          label="Graduation University Name :"
          placeholder="Marvadi"
          type="text"
        />
        <InputComponent label="Seat No :" placeholder="1234" type="text" />
        <InputComponent
          label="Year of Passing"
          placeholder="2021"
          type="number"
        />
        <InputComponent label="Grades :" placeholder="B+" type="text" />
        <InputComponent
          label="CAT/MAT/CAMT/ATMS Roll NO :"
          placeholder="2300"
          type="number"
        />
        <InputComponent
          label="CAT/MAT/CAMT/ATMS Marks :"
          placeholder="720"
          type="number"
        />
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ m: 2, mt: 4 }}
        >
          <Typography minWidth="150px" variant="body1">
            Admission Quota :
          </Typography>
          <Select
            defaultValue="0"
            sx={{
              width: "350px",
              "--Select-minHeight": "40px",
              "--Select-radius": "24px",
              backgroundColor: "#EFEDEE",
              border: "none",
              "--Select-paddingInline": "26px",
            }}
          >
            <Option value="0">MANAGEMENT </Option>
            <Option value="1">ENGINEERING</Option>
          </Select>
        </Stack>
        <InputComponent
          label="ACPC Marit No &#40; If Applicable &#41; :"
          placeholder="B.VOC"
          type="text"
        />
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ m: 2, mt: 4 }}
        >
          <Typography minWidth="150px" variant="body1">
            Student Of Online Admission ACPC :
          </Typography>
          <Select
            defaultValue="0"
            sx={{
              width: "350px",
              "--Select-minHeight": "40px",
              "--Select-radius": "24px",
              backgroundColor: "#EFEDEE",
              border: "none",
              "--Select-paddingInline": "26px",
            }}
          >
            <Option value="0">Yes </Option>
            <Option value="1">No</Option>
          </Select>
        </Stack>
        <InputComponent
          label="Name Of Institude ACPC :"
          placeholder="B.VOC"
          type="text"
        />
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ m: 2, mt: 4 }}
        >
          <Typography minWidth="150px" variant="body1">
            HSC Complete from Gujrat :
          </Typography>
          <Select
            defaultValue="0"
            sx={{
              width: "350px",
              "--Select-minHeight": "40px",
              "--Select-radius": "24px",
              backgroundColor: "#EFEDEE",
              border: "none",
              "--Select-paddingInline": "26px",
            }}
          >
            <Option value="0">Yes </Option>
            <Option value="1">No</Option>
          </Select>
        </Stack>
      </Grid>
      <Grid xs={12} sm={12} md={4}>
        <PhotoUpload />
      </Grid>
      <Grid xs={12} sm={12} md={12}>
        <hr />
      </Grid>
      <Grid xs={12} sm={12} md={12}>
        <Typography
          variant="p"
          component="p"
          fontSize="30px"
          textAlign="center"
          sx={{ color: "black", fontWeight: "800" }}
        >
          {" "}
          FOR OFFICE USE ONLY
        </Typography>

        <Typography
          variant="p"
          component="p"
          fontSize="30px"
          sx={{ color: "black", fontWeight: "700" }}
        >
          {" "}
          <SaveAsIcon sx={{ fontSize: "30px" }} /> Document Attach
        </Typography>
        <Typography
          variant="p"
          component="p"
          fontSize="20px"
          sx={{ color: "#ff7d59", fontWeight: "700" }}
        >
          {" "}
          File Type For Uploding Documents Must Be in &#40;..Jpeg/.Jpg/.Png
          &#41; Format Maximum Size = 5 Mb
        </Typography>
      </Grid>
      <Grid xs={12} sm={12} md={4}>
        <UploadDocument title="10th Mark Sheet" />
      </Grid>
      <Grid xs={12} sm={12} md={4}>
        <UploadDocument title="12th Mark Sheet" />
      </Grid>
      <Grid xs={12} sm={12} md={4}>
        <UploadDocument title="School Leaving Certificate" />
      </Grid>
      <Grid xs={12} sm={12} md={4}>
        <UploadDocument title="Document 1" />
      </Grid>
      <Grid xs={12} sm={12} md={4}>
        <UploadDocument title="Document 2" />
      </Grid>
      <Grid xs={12} sm={12} md={4}>
        <UploadDocument title="Document 3" />
      </Grid>
      <Grid xs={12} sm={12} md={4}>
        <UploadDocument title="Document 4" />
      </Grid>
      <Grid xs={12} sm={12} md={4}>
        <UploadDocument title="Document 5" />
      </Grid>
      <Grid xs={12} sm={12} md={4}>
        <UploadDocument title="Document 6" />
      </Grid>
    </Grid>
  );
};

export default Home;
