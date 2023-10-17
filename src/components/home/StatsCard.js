import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { routes } from '../../routes/routes';
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const CustomCard = ({ data }) => {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {data.title}
        </Typography>
      </CardContent>
      <CardActions sx={{ textAlign: "right" }}>
        <Link to={data.path}>
          <Button sx={{paddingTop: "0px"}}>
            Learn
          </Button>
        </Link>
      </CardActions>
    </Card>)
}

export default function StatsCard() {
  return (
    <Container sx={{ paddingTop: "16px", paddingBottom: "16px" }}>
      <Grid container gap={2} direction={'row'} justifyContent="center" >
        {
          routes?.map((e, i) =>
            e.title !== "Home" &&
            <Grid item xs={12} sm={6} md={4} key={i}>
              <CustomCard data={e} />
            </Grid>
          )
        }

      </Grid>
    </Container>
  );
}