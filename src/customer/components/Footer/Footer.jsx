import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            ShredUp
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              About US
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Careers
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Blogs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Useful Links from boldfit(policies etc to be included)
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              About US
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Careers
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Blogs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Latest(check ecom websites)
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              About US
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Careers
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Blogs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            keep this or remove it later
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              About US
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Careers
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Blogs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Partners
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 ShredUp. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made by Geethansh P(Add github)
            
          </Typography>
          
           
        </Grid>
      
      </Grid>
    </div>
  );
};
export default Footer;
