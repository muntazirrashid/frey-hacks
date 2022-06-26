import { useState } from "react";
import axios from "axios";

import Head from "next/head";
import { Fragment } from "react";

// importing material ui
import Box from "@mui/material/Box";
import { TextareaAutosize, TextField } from "@mui/material";
import Button from "@mui/material/Button";

import Holder from "../components/Holder";

type Props = {};

const create = (props: Props) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [step, setStep] = useState<string>();

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:3000/api/recipe/create", {
      title,
      description,
      steps: [step],
    });
    console.log(res.data.err);
  };
  return (
    <Fragment>
      <Head>
        <title>Create</title>
      </Head>

      <Holder
        title="Create a recipe"
        subtitle="Create and share your own fusion"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ margin: "2vw auto", width: "80vw" }}
          Spacing={2}
        >
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            sx={{ width: "100%", margin: "1vw auto" }}
            onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            sx={{ width: "100%", margin: "1vw auto" }}
            onChange={(e) => {
              e.preventDefault();
              setDescription(e.target.value);
            }}
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={8}
            placeholder={`Steps goes here...`}
            style={{ width: "100%", margin: "1vw auto" }}
            onChange={(e) => {
              e.preventDefault();
              setStep(e.target.value);
            }}
          />

          <Button
            variant="contained"
            sx={{ marginTop: "2vw" }}
            onClick={handleSubmit}
          >
            save recipe
          </Button>
        </Box>
      </Holder>
    </Fragment>
  );
};

export default create;
