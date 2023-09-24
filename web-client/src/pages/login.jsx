import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FormControl from "@mui/material/FormControl";
import "../css/login.css";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import "../css/SocialButtons.css";

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
          backgroundColor: "#e7e7e7", // Customize the selected button color
        }),
      }}
      {...props}
    />
  );
}

function CustomTab(props) {
  return (
    <Tab
      sx={{
        padding: "0px",
        minWidth: "auto",
        textTransform: "none",
        "&.react-tabs__tab--selected": {
          backgroundColor: "transparent", // Remove the selected tab background color
          borderBottom: "2px solid white", // Add a bottom border for the selected tab
        },
      }}
      {...props}
    />
  );
}

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {
  const [userType, setUserType] = React.useState("customer");

  const handleUserTypeChange = (newUserType) => {
    setUserType(newUserType);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      name: data.get("name"),
      customer: userType,
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh"}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
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
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square padding={'0.5rem 1.5rem'}>
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
            <Tabs className="Tabs" style={{width:'80%', paddingBottom:'10px'}}>
              <TabList style={{display:'flex', justifyContent:'center'}}>
                <Tab>Signup</Tab>
                <div
                  style={{
                    height: "30px",
                    border: "1.4px solid rgb(130, 130, 130)",
                  }}
                ></div>
                <Tab>Login</Tab>
              </TabList>
              <TabPanel>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1, display: 'flex', flexDirection:'column'}}
                >
                  <FormControl
                    component="fieldset"
                    sx={{ mt: 0, mb: 2, display: "flex", alignItems: "center" }}
                  >
                    <div
                      style={{ marginTop: "0px", display: "flex", justifyContent:'space-between', gap: "2px" }}
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
                        ></CircularButton>
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
                        ></CircularButton>
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
                          onClick={() => handleUserTypeChange("fashionHouse")}
                        ></CircularButton>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "500",
                            fontWeight: "600",
                          }}
                        >
                          Fashion House
                        </span>
                      </div>
                    </div>
                  </FormControl>
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
                        height: "40px",
                        boxSizing: "border-box"
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        lineHeight: "15px",
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
                        height: "40px",
                        boxSizing: "border-box",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        lineHeight: "15px",
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
                        height: "40px",
                        boxSizing: "border-box",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        lineHeight: "15px",
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
                        height: "40px",
                        boxSizing: "border-box",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        lineHeight: "15px",
                      },
                    }}
                  />
                  <TextField
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
                  />
                  <FormControlLabel
                    control={<Checkbox value="tnc" color="primary" />}
                    label="I have read terms and conditions"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 0 }}
                  >
                    Sign Up
                  </Button>

                  <hr />
                  <Typography
                    variant="subtitle2"
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                      zIndex: 1,
                      fontWeight:'600'
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

              <TabPanel>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt:'7rem'}}
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
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                  {/* <Copyright sx={{ mt: 5 }} /> */}
                </Box>
              </TabPanel>
            </Tabs>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
