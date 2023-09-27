import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PodcastCard from "./PodcastCard";
import "../css/SocialButtons.css";
import { styled, alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import { StyledEngineProvider } from "@mui/styled-engine";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FormControl from "@mui/material/FormControl";
import "../css/login.css";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

function CircularButton(props) {
  return (
    <Button
      variant="contained"
      sx={{
        width: "70px",
        height: "70px",
        border: "2px solid black",
        borderRadius: "50%",
        backgroundColor: "white",
        color: "black",
        fontSize: "12px",
        margin: "15px",
        // fontWeight: "bold",
        // padding:'10px',
        mr: 2,
        mt: 0,
        mb: "7px",
        backgroundImage:
          "url(./person.png)" /* Replace 'your-image-url.jpg' with your image URL */,
        backgroundSize: "cover" /* Adjust background size as needed */,
        backgroundPosition: "center",
        "&:hover": {
          backgroundColor: "#e7e7e7", // Customize the hover effect color
        },
        ...(props.selected && {
          // backgroundColor: "#1976d2",
          filter: "invert(100%)", // Customize the selected button color
        }),
      }}
      {...props}
    />
  );
}





export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const defaultTheme = createTheme();
  const [selectedTab, setSelectedTab] = useState(0); // 0 for Signup, 1 for Login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleTabChange = (newTabIndex) => {
    setSelectedTab(newTabIndex);
  };

  //   const [userType, setUserType] = React.useState("customer");
  const [userType, setUserType] = React.useState("customer");

  const handleUserTypeChange = (newUserType) => {
    setUserType(newUserType);
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    try {
      // const email = data.get("email");
      // const password = data.get("password");

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      console.log(response.data.msg);
      // console.log(email);
      // window.location.href = "dashboard";
      navigate("/dashboard", {replace:true});
      // history.push("dashboard"); // Redirect to the dashboard page
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitSignUp = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const email = data.get("email");
      const password = data.get("password");
      const name = data.get("name");
      const mobile = data.get("mobile");
      const customer = userType;
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        { name, email, mobile, password, customer }
      );
      console.log(response.data);
      alert("Registered Successfully");
      setSelectedTab(1); // Set the selected tab to the login tab
    } catch (error) {
      console.error(error);
    }
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      name: data.get("name"),
      mobile: data.get("mobile"),
      customer: userType,
    });
  };
  //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed

  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  

  return (
    <div>
     
      <ThemeProvider theme={defaultTheme}>
        {/* <div className='Navbar'>
        <div className='left-nav'>
        
        </div>
        <div className='mid-nav'></div>
        <div className='right-nav'></div>
      </div> */}
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={6}
            sx={{
              backgroundImage:
                "url(https://cdn.ddecor.com/media/catalog/product/G/a/Gallery_2018_20Classic_20Metallics_20II_144555_7.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            component={Paper}
            elevation={6}
            square
            padding={"0.5rem 1.5rem"}
          >
            <Box
              sx={{
                my: 0,
                mx: 4,
                mt: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <Tabs
                className="Tabs"
                style={{ width: "80%", paddingBottom: "10px" }}
                selectedIndex={selectedTab}
                onSelect={handleTabChange}
              >
                <TabList style={{ display: "flex", justifyContent: "center" }}>
                  <Tab>Login</Tab>
                  {/* <div
                    style={{
                      height: "30px",
                      border: "1.4px solid rgb(130, 130, 130)",
                    }}
                  ></div>
                  <Tab>Login</Tab>*/}
                  </TabList> 
                
                <TabPanel>
                  {selectedTab === 0 && (
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmitLogin}
                      method="post"
                      sx={{ mt: "7rem" }}
                    >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e)=>{
                          setEmail(e.target.value);
                        }}
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e)=>{
                          setPassword(e.target.value);
                        }}
                      />
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Login
                      </Button>
                      <Grid container>
                        <Grid item xs>
                          <Link href="#" variant="body2">
                            Forgot password?
                          </Link>
                        </Grid>
                      </Grid>
                      {/* <Copyright sx={{ mt: 5 }} /> */}
                    </Box>
                  )}
                </TabPanel>
              </Tabs>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
//     console.log(response.data);
//     window.location.href='dashboard';
//   } catch (error) {
//     console.error(error);
//   }
// };