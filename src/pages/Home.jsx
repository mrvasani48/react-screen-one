import React from "react";
import { Grid, Stack, Typography, Button, Checkbox } from "@mui/joy";

import SaveAsIcon from "@mui/icons-material/SaveAs";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import PhotoUpload from "../components/PhotoUpload";
import UploadDocument from "../components/common/UploadDocument";
import EditText from "../components/common/EditText";
import Heading from "../components/common/Heading";
import InputSelect from "../components/common/InputSelect";

function Home() {
  return (
    <Grid container={true} margin="30px" spacing="40px">
      <Heading title=" MBA Admission" />
      <Grid xs={12} sm={12} md={6} lg={4}>
        <EditText
          label="Name : "
          placeholder="Student &#40; As Per HSC &#41;"
          type="text"
        />
        <EditText placeholder="Mother Name " type="text" />
        <EditText label="Date of Birth :" placeholder="" type="date" />
        <InputSelect title="Gender" selectOption={["male", "female"]} />
        <EditText
          label="Aadharcard Number No :"
          placeholder="2222 1111 2222"
          type="text"
        />
        <EditText
          label="Email Id :"
          placeholder="abced12@gmail.com"
          type="email"
        />
        <EditText label="Contact No :" placeholder="student" type="number" />
        <EditText label="" placeholder="parent" type="number" />
        <EditText label="" placeholder="guardian" type="number" />
        <EditText label="permanent Address :" isTextArea={true} />
        <EditText label="city :" placeholder="Rajkot" type="text" />
        <EditText label="District :" placeholder="Rajkot" type="text" />
        <EditText label="Pincode :" placeholder="304045" type="number" />
        <InputSelect
          title="Category"
          selectOption={["GENERAL", "SEBC", "SC", "ST"]}
        />
        <EditText label="Blood Group :" placeholder="A+" type="text" />
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={4} border="2px solid #3e445f">
        <EditText label="Graduation :" placeholder="Marvadi" type="text" />
        <EditText
          label="Graduation per :"
          placeholder="Gujrat board"
          type="text"
        />
        <EditText
          label="Graduation institute Name :"
          placeholder="Marvadi"
          type="text"
        />
        <EditText
          label="Graduation University Name :"
          placeholder="Marvadi"
          type="text"
        />
        <EditText label="Seat No :" placeholder="1234" type="text" />
        <EditText label="Year of Passing" placeholder="2021" type="number" />
        <EditText label="Grades :" placeholder="B+" type="text" />
        <EditText
          label="CAT/MAT/CAMT/ATMS Roll NO :"
          placeholder="2300"
          type="number"
        />
        <EditText
          label="CAT/MAT/CAMT/ATMS Marks :"
          placeholder="720"
          type="number"
        />
        <InputSelect
          title="Admission Quota"
          selectOption={["MANAGEMENT", "ENGINEERING", "MEDICAL"]}
        />
        <EditText
          label="ACPC Marit No &#40; If Applicable &#41; :"
          placeholder="B.VOC"
          type="text"
        />

        <InputSelect
          title="Student Of Online Admission ACPC "
          selectOption={["yes", "no"]}
        />

        <EditText
          label="Name Of Institude ACPC :"
          placeholder="B.VOC"
          type="text"
        />

        <InputSelect
          title=" HSC Complete from Gujrat  "
          selectOption={["yes", "no"]}
        />
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={4}>
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
      <Grid xs={12} sm={12} md={6} lg={4}>
        <UploadDocument title="10th Mark Sheet" />
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={4}>
        <UploadDocument title="12th Mark Sheet" />
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={4}>
        <UploadDocument title="School Leaving Certificate" />
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={4}>
        <UploadDocument title="Document 1" />
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={4}>
        <UploadDocument title="Document 2" />
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={4}>
        <UploadDocument title="Document 3" />
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={4}>
        <UploadDocument title="Document 4" />
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={4}>
        <UploadDocument title="Document 5 " />
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={4}>
        <UploadDocument title="Document 6" />
      </Grid>
      <Grid xs={12} sm={12} md={12}>
        <Stack
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
        >
          <Button
            sx={{
              color: "black",
              borderRadius: "60px",
              padding: "10px !important",
              textTransform: "capitalize",
              fontSize: "15px",
              width: "220px",
              border: "1px solid gray",
              display: "flex",
              gap: "10px",
            }}
            onClick={() => console.log("add new document")}
          >
            Add New Document <ArrowCircleRightIcon color="gray" />
          </Button>
          <Stack>
            <Checkbox
              color="neutral"
              disabled={false}
              label="Passport Photograph"
              size="lg"
              variant="outlined"
            />
          </Stack>
        </Stack>
      </Grid>
      <Grid xs={12} sm={12} md={12}>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "row !important",
            alignItems: "flex-end",
            gap: "20px",
          }}
        >
          <Button
            sx={{
              color: "white",
              borderRadius: "60px",
              padding: "10px !important",
              textTransform: "capitalize",
              fontSize: "15px",
              width: "130px",
              backgroundColor: "#2d3878 !important",
              display: "flex",
              gap: "10px",
            }}
            onClick={() => console.log("add new document")}
          >
            <SaveIcon /> Save
          </Button>
          <Button
            sx={{
              color: "white",
              borderRadius: "60px",
              padding: "10px !important",
              textTransform: "capitalize",
              fontSize: "15px",
              width: "130px",
              backgroundColor: "#ff7d59",
              display: "flex",
              gap: "5px",
            }}
            onClick={() => console.log("add new document")}
          >
            <DeleteIcon /> Delete
          </Button>
          <Button
            sx={{
              color: "white",
              borderRadius: "60px",
              padding: "10px !important",
              textTransform: "capitalize",
              fontSize: "15px",
              width: "130px",
              display: "flex",
              gap: "5px",
              backgroundColor: "#2d3878 !important",
            }}
            onClick={() => console.log("add new document")}
          >
            <LocalPrintshopIcon /> Print
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Home;
