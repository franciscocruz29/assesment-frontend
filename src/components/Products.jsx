import { useEffect, useState } from 'react';
import axios from 'axios';
// Material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
// Components
import CountDownTimer from './CountDownTimer';

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productData = async () => {
      const result = await axios.get('https://fakestoreapi.com/products');

      setProducts(result.data);
      setIsLoading(false);
    };

    productData();
  }, []);

  return isLoading ? (
    <Container sx={{ width: '40%', paddingTop: 55 }}>
      <LinearProgress />
    </Container>
  ) : (
    <>
      <Container>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          sx={{ fontWeight: 'bold', padding: 4 }}
        >
          Products
        </Typography>
      </Container>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 400, paddingTop: 2 }}>
              <CardMedia
                component="img"
                alt={product.title}
                height="200"
                image={product.image}
                sx={{ objectFit: 'contain' }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ height: 110 }}
                >
                  {product.title}
                </Typography>
              </CardContent>
              <CardActions>
                <CountDownTimer id={`${product.id}`} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Products;
