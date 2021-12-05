import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

const Header = ({ email, photoURL, signOut }) => (
  <AppBar
    position="static"
    enableColorOnDark
    color="primary"
    sx={{ marginBottom: "20px" }}
  >
    <Toolbar>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Button
          variant="outlined"
          sx={{ my: 2, color: "white", display: "block" }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ flexGrow: 0 }}>
        {email ? (
          <>
            <IconButton sx={{ p: 0 }}>
              <Avatar src={photoURL} />
            </IconButton>
            <Button sx={{ color: "white" }} onClick={signOut}>
              Sign out
            </Button>
          </>
        ) : (
          <>
            <Link href="/auth">
              <Button sx={{ color: "white" }}>Sign in</Button>
            </Link>
          </>
        )}
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
