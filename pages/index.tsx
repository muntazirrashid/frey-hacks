import { HourglassDisabledRounded } from "@mui/icons-material";
import type { NextPage } from "next";
import { Fragment } from "react";
import Head from "next/head";

// importing material UI
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// importing component
import Holder from "../components/Holder";
import RecipeCard from "../components/Card/RecipeCard";

const Home: NextPage = () => {
  return (
    <Fragment>
      {/* Head */}
      <Head>
        <title>Dashboard</title>
      </Head>
      {/* Recommendations */}
      <Box sx={{ margin: "2vw auto" }}>
        <Holder
          title="Our Recommendations for the day"
          subtitle="We refresh our recommendations to better match your refreshments requirements..."
        >
          <Grid container spacing={1}>
            {[...Array(3)].map((card, index) => (
              <Grid item md={4} sm={12}>
                <RecipeCard
                  author="Ali"
                  title="Something food"
                  description="We refresh our recommendations to better match your refreshments requirements..."
                  steps={["Step1", "step2"]}
                />
              </Grid>
            ))}
          </Grid>
        </Holder>
      </Box>
      {/* Recipes by you */}
      <Box sx={{ margin: "2vw auto" }}>
        <Holder
          title="Recipes from you"
          subtitle="Recipes that originated from your heart..."
        >
          <Grid container spacing={1}>
            {[...Array(3)].map((card, index) => (
              <Grid item md={4} sm={12}>
                <RecipeCard
                  author="Ali"
                  title="Something food"
                  description="We refresh our recommendations to better match your refreshments requirements..."
                  steps={["Step1", "step2"]}
                />
              </Grid>
            ))}
          </Grid>
        </Holder>
      </Box>
      {/* Recipes by you */}
      <Box sx={{ margin: "2vw auto" }}>
        <Holder
          title="New Recipes and Combinations"
          subtitle="See if these new summer aids are perfectly soothing your taste buds..."
        >
          <Grid container spacing={1}>
            {[...Array(3)].map((card, index) => (
              <Grid item md={4} sm={12}>
                <RecipeCard
                  author="Ali"
                  title="Something food"
                  description="We refresh our recommendations to better match your refreshments requirements..."
                  steps={["Step1", "step2"]}
                />
              </Grid>
            ))}
          </Grid>
        </Holder>
      </Box>
    </Fragment>
  );
};

export default Home;
