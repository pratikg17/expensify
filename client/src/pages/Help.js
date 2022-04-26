import React from 'react'
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import ReactPlayer from "react-player";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import DefaultLayout from "../components/DefaultLayout";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";

import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';


function Item(props) {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "background.paper",
        m: 10,
        p: 5,
        justifyContent: "center",
      }}
    >
      <Paper>
        <h2>Start Your Financial Journey</h2>
        <p>{props.item.name}</p>
        <ReactPlayer
          playing
          controls
          muted
          height={"400px"}
          width={"1000px"}
          url={props.item.link}
        />

        <Button
          component={Link}
          to={{ pathname: props.item.link }}
          target="_blank"
          rel="noopener noreferrer"
          className="CheckButton"
        >
          Watch on Youtube
        </Button>
      </Paper>
    </Box>
  );
}

function ItemCard(props) {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "background.paper",
        m: 10,
        p: 5,
        justifyContent: "center",
      }}
    >
                 <Card>
                  <CardMedia
                    component="img"
                    height={"400px"}
                    width={"1000px"}
                    sx={{
                      // 16:9
                      // pt: '56.25%',
                    }}
                    image="https://www.usnews.com/dims4/USNEWS/8e51506/2147483647/crop/2116x1411%2B0%2B0/resize/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fce%2F2c%2F89d823224868bab85870983a570d%2Fgettyimages-1367126307.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Begin your saving journey today
                    </Typography>

                    <Typography>
                    7 Steps to Manage Your Money. 
                    </Typography> 


                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
            
        {/* <p>{props.item.name}</p> */}
    
    </Box>
  );
}


function Help() {
  var items = [
    {
      name: "Why You Need To Track Your Expenses NOW!",
      link: "https://www.youtube.com/watch?v=O0ZG2LPY9Qk",
    },
    {
      name: "How To Manage Your Money Like The 1%",
      link: "https://www.youtube.com/watch?v=L8W1tbEVyOM",
    },
    {
      name: "How To Manage Your Money (50/30/20 Rule)",
      link: "https://www.youtube.com/watch?v=HQzoZfc3GwQ",
    },
    {
      name: "Tracking Expenses and Budgeting ⎥ Financial Literacy",
      link: "https://www.youtube.com/watch?v=os4SGNxFLUg",
    },
    {
      name: "A Minimalist Approach to Personal Finance",
      link: "https://www.youtube.com/watch?v=zVcwvCL2C2c",
    },
    {
      name: "How to Properly Manage Your Money Like the Rich | Tom Ferry",
      link: "https://www.youtube.com/watch?v=wJB90G-tsgo",
    },
    {
      name: "You Will Never Be Poor Again | START DOING THIS TODAY!!!",
      link: "https://www.youtube.com/watch?v=j1p2PbfNk0c",
    },
    {
      name: "How the Rich Use Debt and Taxes to Get Richer - Robert Kiyosaki",
      link: "https://www.youtube.com/watch?v=aDheNy_Swbk",
    },
  ];
  
  return (  

    <DefaultLayout>
      
      <main>        
          <Carousel indicators={true}  navButtonsAlwaysVisible>
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>

          <ItemCard />
          <ItemCard />
          <ItemCard />

      </main>
           
      Help</DefaultLayout>
  )
}

export default Help