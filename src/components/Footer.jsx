import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Container, Box, Fade } from "@mui/material";

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      setShowFooter(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box>
      <Fade in={showFooter}>
        <AppBar position="fixed" sx={{ top: "auto", bottom: 0, background: 'hsl(240, 21%, 12%)', height: 50}}>
          <Toolbar>
            <Typography color="hsl(266, 100%, 67%)" fontSize={15}>
              © 2025 Portfolio Yago
            </Typography>
          </Toolbar>
        </AppBar>
      </Fade>
    </Box>
  );
}
