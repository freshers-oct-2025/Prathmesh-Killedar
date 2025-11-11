import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import { Delete, Margin } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Radio } from "@mui/material";
import { Slider } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import { TextField } from "@mui/material";
import { Switch } from "@mui/material";
import { Box } from "@mui/material";
import { pink, red } from "@mui/material/colors";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";

function App() {
  const [color, setColor] = useState("primary");
  const [disableBtn, setDisableBtn] = useState(false);
  const [gender, setGender] = useState();

  const btnColorChange = () => {
    setColor("secondary");
    setDisableBtn(false);
  };

  const testRadioBtn = (e) => {
    console.log(e.target.value);
    setGender(e.target.value);
  };

  const mark = [
    {
      value: 0,
      label: "start",
    },
    {
      value: 50,
      label: "middle",
    },
    {
      value: 100,
      label: "end",
    },
  ];

  const [value, setValue] = useState([40, 100]);
  const updateVal = (e, item) => {
    setValue(item);
  };

  const [course, setCourse] = useState("");
  const updateSelectBox = (e, val) => {
    console.warn(e.target.value);
    setCourse(e.target.value);
  };

  const getData = (e) => {
    console.log(e.target.value);
  };

  const getValue = (e, val) => {
    console.warn(val);
  };
  return (
    <>
      {/* <div>
        <h1>React with MUI</h1>
        <Button
          color={color}
          variant="contained"
          disabled={disableBtn}
          size="small"
          startIcon={<Delete />}
          onClick={() => {
            btnColorChange();
          }}
        >
          Material-UI Btn
        </Button>
      </div> */}

      {/* <div>
        <h1>React MUI | Button Group, Checkbox, Radio Btn</h1>
        <ButtonGroup color="primary" variant="contained" orientation="vertical">
          <Button>ONE</Button>
          <Button variant="outlined">Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <Checkbox color="secondary" />
        <Checkbox color="primary" indeterminate />
        <Checkbox
          color="secondary"
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />

        <div>
          <Radio
            value="Male"
            color="primary"
            checked={gender === "Male"}
            onChange={testRadioBtn}
          />
          <span>Male</span>

          <Radio
            value="Female"
            color="secondary"
            checked={gender === "Female"}
            onChange={testRadioBtn}
          ></Radio>
          <span>Female</span>
        </div>
      </div> */}

      {/* <div>
        <h1>React MUI | Slider, Range Slider</h1>
        <div style={{ margin: 40, width: 300 }}>
          <Slider
            color="secondary"
            defaultValue={27}
            // step={25}
            marks={mark}
            valueLabelDisplay="auto"
          ></Slider>

          <Slider value={value} max={200} onChange={updateVal}></Slider>
        </div>
      </div> */}

      {/* <div>
        <h1>React MUI | Select Box or Select</h1>
        <Select value={course} displayEmpty onChange={updateSelectBox}>
          <MenuItem value="">Select Course</MenuItem>
          <MenuItem value={1}>React</MenuItem>
          <MenuItem value={2}>JavaScript</MenuItem>
          <MenuItem value={3}>Node</MenuItem>
          <MenuItem value={4}>Java</MenuItem>
        </Select>
      </div> */}

      {/* <div>
        <h1>React MUI | Text Field</h1>
        <TextField
          label="Enter Name"
          variant="filled"
          onChange={getData}
        ></TextField>
      </div> */}

      {/* <div>
        <h1>React MUI | Switch</h1>
        <Switch color="primary" size="small" onChange={getValue}></Switch>
      </div> */}

      {/* <div>
        <h1>React MUI | Layout Box</h1>
        <Box component="span" style={{ color: "red" }} m={20}>
          <Button>Submit</Button>
        </Box>
      </div> */}

      {/* <div>
        <Container maxWidth="sm" style={{ backgroundColor: "aqua" }}>
          <h1>React MUI | Layout Container</h1>
        </Container>
        <Container maxWidth="md" style={{ backgroundColor: "aqua" }}>
          <h1>React MUI | Layout Container</h1>
        </Container>
        <Container maxWidth="ld" style={{ backgroundColor: "aqua" }}>
          <h1>React MUI | Layout Container</h1>
        </Container>
        <Container maxWidth="xs" style={{ backgroundColor: "aqua" }}>
          <h1>React MUI | Layout Container</h1>
        </Container>
        <Container fixed style={{ backgroundColor: "aqua" }}>
          <h1>React MUI | Layout Container</h1>
        </Container>
      </div> */}

      <h1>React MUI | Grid</h1>
      <Grid item xs={12} container spacing={2}>
        <Grid item lg={3} xs={12}>
          <h1 style={{ backgroundColor: "pink" }}>Box 1</h1>
        </Grid>
        <Grid item lg={3} xs={12}>
          <h1 style={{ backgroundColor: "green" }}>Box 2</h1>
        </Grid>
        <Grid item lg={3} xs={12}>
          <h1 style={{ backgroundColor: "green" }}>Box 3</h1>
        </Grid>
        <Grid item lg={3} xs={12}>
          <h1 style={{ backgroundColor: "green" }}>Box 4</h1>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
