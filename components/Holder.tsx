// importing material ui
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

const Holder = (props: Props) => {
  return (
    <Paper
      sx={{
        width: "90%",
        margin: "1vw auto",
        padding: {
          md: "1vw",
          sm: "4vw",
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <h1>{props.title}</h1>
        <p style={{ margin: "-1vw 0 0 0" }}>{props.subtitle}</p>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ margin: "1vw 0 0 0" }}
      >
        {props.children}
      </Box>
    </Paper>
  );
};

export default Holder;
