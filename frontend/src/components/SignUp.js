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
        width: "64px",
        height: "64px",
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: "#c0cdf7",
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
          backgroundColor: "#c0cdf7", // Customize the hover effect color
        },
        ...(props.selected && {
          filter: "invert(100%)", // Customize the selected button color
          backgroundColor: "#d4d241",
        }),
      }}
      {...props}
    />
  );
}

export default function Signup() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const defaultTheme = createTheme();
  const [selectedTab, setSelectedTab] = useState(0); // 0 for Signup, 1 for Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleTabChange = (newTabIndex) => {
    setSelectedTab(newTabIndex);
  };

  //   const [userType, setUserType] = React.useState("customer");
  const [userType, setUserType] = React.useState("customer");

  const handleUserTypeChange = (newUserType) => {
    setUserType(newUserType);
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
      // setSelectedTab(1); // Set the selected tab to the login tab
      navigate("/login", { replace: true });
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
        <Grid
          container
          component="main"
          sx={{ height: "100vh", backgroundColor: "#c0cdf7" }}
        >
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={6}
            sx={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIm-vmAbsiwbb-MjgFDsqdsdAlRkBS-NHVGxIOYC1XGmR92Equ5vcLc6PXHUFX7R5YgLc&usqp=CAU)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#13157c",
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
            sx={{ backgroundColor: "#c0cdf7" }}
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
                <TabPanel>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmitSignUp}
                    method="post"
                    sx={{ mt: 1, display: "flex", flexDirection: "column" }}
                  >
                    <FormControl
                      component="fieldset"
                      sx={{
                        mt: 0,
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          marginTop: "0px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          width: "100%",
                        }}
                      >
                        <Typography
                          sx={{
                            marginRight: "0px",
                            position: "relative",
                            /* top: -10px; */
                            fontSize: "45px",
                            fontWeight: "900",
                            color: "#153091",
                            fontFamily: "Times New Roman",
                          }}
                        >
                          Signup
                        </Typography>
                        <div
                          style={{
                            marginTop: "0px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "baseline",
                            gap: "2px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              width: "30%",
                            }}
                          >
                            <CircularButton
                              selected={userType === "customer"}
                              onClick={() => handleUserTypeChange("customer")}
                            >
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                                alt=""
                                width="30px"
                              />
                            </CircularButton>
                            <span
                              style={{
                                fontSize: "12px",
                                fontWeight: "500",
                                fontWeight: "600",
                              }}
                            >
                              Customer
                            </span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "30%",
                            }}
                          >
                            <CircularButton
                              selected={userType === "influencer"}
                              onClick={() => handleUserTypeChange("influencer")}
                            >
                              <img
                                src="https://icons.veryicon.com/png/o/miscellaneous/icon_1/horn-19.png"
                                alt=""
                                width="30px"
                              />
                            </CircularButton>
                            <span
                              style={{
                                fontSize: "12px",
                                fontWeight: "500",
                                fontWeight: "600",
                              }}
                            >
                              Influencer
                            </span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              width: "30%",
                            }}
                          >
                            <CircularButton
                              selected={userType === "fashionHouse"}
                              onClick={() =>
                                handleUserTypeChange("fashionHouse")
                              }
                            >
                              <img
                                src="https://static.thenounproject.com/png/999966-200.png"
                                alt=""
                                width="30px"
                              />
                            </CircularButton>
                            <span
                              style={{
                                fontSize: "12px",
                                fontWeight: "500",
                                fontWeight: "600",
                                textAlign: "center",
                              }}
                            >
                              FashionHouse
                            </span>
                          </div>
                        </div>
                      </div>
                    </FormControl>
                    <div style={{ height: "40px" }}></div>
                    <TextField
                      margin="none"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      name="name"
                      autoComplete="name"
                      autoFocus
                      InputProps={{
                        style: {
                          height: "50px",
                          boxSizing: "border-box",
                          borderRadius: "14px",
                          backgroundColor: "white",
                          border: "2px solid #c0cdf7",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          lineHeight: "20px",
                        },
                      }}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      InputProps={{
                        style: {
                          height: "50px",
                          boxSizing: "border-box",
                          borderRadius: "14px",
                          backgroundColor: "white",
                          border: "2px solid #c0cdf7",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          lineHeight: "20px",
                        },
                      }}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="mobile"
                      label="Mobile"
                      name="mobile"
                      autoComplete="mobile"
                      autoFocus
                      InputProps={{
                        style: {
                          height: "50px",
                          boxSizing: "border-box",
                          borderRadius: "14px",
                          backgroundColor: "white",
                          border: "2px solid #c0cdf7",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          lineHeight: "20px",
                        },
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
                      InputProps={{
                        style: {
                          height: "50px",
                          boxSizing: "border-box",
                          borderRadius: "14px",
                          backgroundColor: "white",
                          border: "2px solid #c0cdf7",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          lineHeight: "20px",
                        },
                      }}
                    />
                    {/* <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirm password"
                        label="Confirm Password"
                        type="confirm password"
                        id="confirm password"
                        autoComplete="current-password"
                        InputProps={{
                          style: {
                            height: "40px",
                            boxSizing: "border-box",
                          },
                        }}
                        InputLabelProps={{
                          style: {
                            lineHeight: "15px",
                          },
                        }}
                      /> */}
                    <FormControlLabel
                      control={<Checkbox value="tnc" color="primary" />}
                      label="I have read terms and conditions"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 3,
                        mb: 0,
                        backgroundColor: "#13157c",
                        borderRadius: "10px",
                      }}
                    >
                      Sign Up
                    </Button>

                    <hr />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textAlign: "center",
                        backgroundColor: "#c0cdf7",
                        zIndex: 1,
                        fontWeight: "600",
                      }}
                    >
                      OR
                    </Typography>
                    <div className="social-buttons">
                      <button className="google">
                        <span className="icon google-icon"></span>
                      </button>
                      <button className="facebook">
                        <span className="icon facebook-icon"></span>
                      </button>
                      <button className="twitter">
                        <span className="icon twitter-icon"></span>
                      </button>
                    </div>
                  </Box>
                </TabPanel>
                {/* <TabPanel>   
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
                    </Box>
                </TabPanel> */}
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
