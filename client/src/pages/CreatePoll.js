import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import PollOptions from "../components/PollOptions";
import FormControlLabel from "@mui/material/FormControlLabel";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function CreatePoll({ active }) {
  const [options, setOptions] = useState([]);
  const [optionValue, setOptionValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [durationValue, setDurationValue] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleSClick = () => {
    setOpen(true);
  };

  const handleSClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  let deleteOption = (i) => {
    console.log("deleteOption", i);
    setOptions([...options.filter((element, index) => index != i)]);
  };
  return (
    <>
      <Navbar name={"createPoll"} />
      <Container
        sx={{
          marginTop: 5,
          border: "solid black 2px",
          justifyContent: "center",
        }}
        component="main"
        maxWidth="sm"
        className="shadow-lg rounded-lg p-8"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              CREATE A NEW POLL
            </h2>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id=""
              fullWidth
              label="Poll Title"
              variant="outlined"
              value={titleValue}
              onChange={(event) => {
                setTitleValue(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id=""
              label="Poll Description"
              multiline
              maxRows={4}
              variant="outlined"
              value={descriptionValue}
              onChange={(event) => {
                setDescriptionValue(event.target.value);
              }}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </Grid> */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={categoryValue}
                label="Category"
                fullWidth
                onChange={(event) => {
                  setCategoryValue(event.target.value);
                }}
              >
                <MenuItem value={1}>Health</MenuItem>
                <MenuItem value={2}>Education</MenuItem>
                <MenuItem value={3}>Entertainment</MenuItem>
                <MenuItem value={4}>Politics</MenuItem>
                <MenuItem value={5}>Sports</MenuItem>
                <MenuItem value={6}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            {options.length == 0 ? (
              <div className="rounded text-center p-2 border-2 border-black-400">
                <p className="text-sm">YOU HAVE NOT ADDED ANY OPTION YET</p>
              </div>
            ) : (
              <PollOptions data={options} deleteOption={deleteOption} />
            )}
          </Grid>
          <Grid container item spacing={2} xs={12} alignItems="center">
            <Grid item xs={10}>
              <TextField
                id="outlined-name"
                label="Enter Option Value"
                value={optionValue}
                fullWidth
                onChange={(value) => {
                  setOptionValue(value.target.value);
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                onClick={() => {
                  setOptions([...options, optionValue]);
                  setOptionValue("");
                }}
              >
                +
              </Button>
            </Grid>
          </Grid>
          <Grid container item spacing={2} xs={12} alignItems="center">
            <Grid item xs={6}>
              <TextField
                type="number"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                label="Enter Duration"
                value={durationValue}
                onChange={(event) => {
                  setDurationValue(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <span>Want Anonymous Poll?</span>
              <Switch
                checked={isAnonymous}
                onChange={() => {
                  setIsAnonymous(!isAnonymous);
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} alignItems="center">
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                let data = {
                  title: titleValue,
                  description: descriptionValue,
                  category: categoryValue,
                  options: options,
                  isAnonymous: isAnonymous,
                  duration: durationValue,
                };
                console.log("data", data);
                //Send request to server
                //If Successfull Open Snackbar
                // handleSClick();
              }}
            >
              Create Poll
            </Button>
          </Grid>
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={6000}
          onClose={handleSClose}
        >
          <MuiAlert
            onClose={handleSClose}
            severity="success"
            sx={{ width: "100%" }}
            elevation={6}
            variant="filled"
          >
            This is a success message!
          </MuiAlert>
        </Snackbar>
      </Container>
    </>
  );
}

export default CreatePoll;
