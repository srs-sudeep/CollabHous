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

export default function Login() {
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
      navigate("/dashboard", { replace: true });
      // history.push("dashboard"); // Redirect to the dashboard page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
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
            backgroundColor={"#c0cdf7"}
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
                  <div
                    style={{
                      // marginRight: "17px",
                      position: "relative",
                      top:'40px',
                      fontSize: "45px",
                      fontWeight: "bold",
                      fontFamily: "Times New Roman",
                    }}
                  >
                    Login
                  </div>
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
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        style={{
                          // height: "50px",
                          boxSizing: "border-box",
                          borderRadius: "14px",
                          backgroundColor: "white",
                          border: "5px solid #c0cdf7",
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
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        style={{
                          // height: "50px",
                          boxSizing: "border-box",
                          borderRadius: "14px",
                          backgroundColor: "white",
                          color: "#c0cdf7",
                          border: "5px solid #c0cdf7",
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
                        sx={{ mt: 3, mb: 3, backgroundColor:'#13157c', borderRadius:'10px',}}
                      >
                        Login
                      </Button>
                      <Grid container>
                        <Grid item xs>
                          <Link href="#" variant="body2" style={{color:'#13157c'}}>
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
