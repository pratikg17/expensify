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
                    image= {props.item.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>

                    <Typography gutterBottom variant="h5" component="h2">
                     <p>{props.item.name}</p>
                    </Typography>

                    <Typography>
                    {/* 7 Steps to Manage Your Money.  */}
                    </Typography> 


                  </CardContent>
                  <CardActions>
                    <Button size="small" component={Link}
          to={{ pathname: props.item.link }}
          target="_blank"
          rel="noopener noreferrer">View</Button>
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
            
        
        {/* <image>{props.item.image}</image> */}

    
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

  var itemCard = [
    {
      name: "Steps to Manage Your Money",
      link: "https://money.usnews.com/money/personal-finance/articles/steps-to-manage-your-money",
      image:"https://www.usnews.com/dims4/USNEWS/8e51506/2147483647/crop/2116x1411%2B0%2B0/resize/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fce%2F2c%2F89d823224868bab85870983a570d%2Fgettyimages-1367126307.jpg"
    },
    {
      name: "23 Legit Ways to Make Extra Cash",
      link: "https://financebuzz.com/ways-to-save-money-g?utm_source=GoogleAdWords&utm_medium=paid-search-g&utm_campaign=US_SideHustle_ROAS_6523447166_127728955648&utm_content=548714535996&utm_term=how%20to%20save%20money&mt=e&device=c&devicemodel=&targetid=kwd-92619869&target=&keyword=how%20to%20save%20money&campaignid=6523447166&adgroupid=127728955648&gclid=CjwKCAjwsJ6TBhAIEiwAfl4TWEklJdjJ6An9UCSO6mCozNrsDlwS1jxke14HDETpY9gDcS-E0N0UnxoCZJsQAvD_BwE",
      image:"https://images.financebuzz.com/1018x537/filters:quality(75)/images/2018/01/23/navina-side-hustle-mid_MPfEDfV.jpg"
    },
    {
      name: "Top 10 Money Management Tips",
      link: "https://smartasset.com/checking-account/top-10-money-management-tips",
      image:"https://dr5dymrsxhdzh.cloudfront.net/blog/images/ac0d827e4/2017/08/rsz_istock-517970686.jpg",
    },
    {
      name: "8 Financial Tips for Young Adults",
      link: "https://www.investopedia.com/articles/younginvestors/08/eight-tips.asp",
      image:"https://tpc.googlesyndication.com/simgad/8555323546526820719?",
    },
    {
      name: "Top 10 Financial Tips",
      link: "https://www.thebalance.com/top-ten-financial-tips-1289309",
      image:"https://www.nerdwallet.com/assets/blog/wp-content/uploads/2018/08/free-financial-advice-1920x1152.jpeg",
    },
    {
      name: "Financial Future Planning - Budgeting for Retirement",
      link: "https://capformgroup.com/contact/",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJMp2pJDIXNPyjG6iGgdS6159FPxaXNiWrw&usqp=CAU",
    },
    {
      name: "Ultimate Guide to Creating a Budget",
      link: "https://www.moneymanagement.org/budget-guides/create-a-budget?sc_camp=C1AA724A1A6F42DB8B97EB72E4F8CF53&gclid=CjwKCAjwsJ6TBhAIEiwAfl4TWA73Fa6dAxkXn8LfEIDObbaGzmKG93gZYsFQscExa45h8YT83n7SHhoCT7gQAvD_BwE",
      image:"https://www.moneymanagement.org/budget-guides/create-a-budget?sc_camp=C1AA724A1A6F42DB8B97EB72E4F8CF53&gclid=CjwKCAjwsJ6TBhAIEiwAfl4TWA73Fa6dAxkXn8LfEIDObbaGzmKG93gZYsFQscExa45h8YT83n7SHhoCT7gQAvD_BwE",
  },
    {
      name: "How to plan a household budget",
      link: "https://experience.dropbox.com/get-organized/household-budget?_tk=paid_sem_goog_biz_nb_int20&_camp=14262642399&_kw=managing%20personal%20finance|e&_ad=538977118048||c&gclid=CjwKCAjwsJ6TBhAIEiwAfl4TWBu9bCR0vhS4RQ-CyJRr9D69CXUCk7toRaP803x6VpgHTzc9AjmhvhoC3EAQAvD_BwE",
      image:"https://aem.dropbox.com/cms/content/dam/dropbox/dmep/assets/articles/householdbudget@2x.png/_jcr_content/renditions/householdbudget@2x.article-hero.1920.1280.webp",
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

          {itemCard.map((item, i) => (
              <ItemCard key={i} item={item} />
            ))}

          {/* <ItemCard /> */}
          {/* <ItemCard />
          <ItemCard /> */}

      </main>
           
      “You have to know where your money is going.”  </DefaultLayout>
  )
}

export default Help