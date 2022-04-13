import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Container, LinearProgress } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Product() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productData = async () => {
      const result = await axios.get(
        `https://fakestoreapi.com/products${window.location.pathname}`,
      );

      setProduct(result.data);
      setIsLoading(false);
    };

    productData();
  }, []);

  return isLoading ? (
    <Container sx={{ width: '40%', paddingTop: 55 }}>
      <LinearProgress />
    </Container>
  ) : (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3} sx={{ paddingTop: 2 }}>
        <Card elevation={0} sx={{ maxWidth: 700, paddingTop: 3 }}>
          <CardMedia
            component="img"
            height="400"
            image={product.image}
            alt={product.title}
            sx={{ objectFit: 'contain', paddingBottom: 4 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <br />
            <Typography variant="body2" color="text.secondary">
              {`Category: ${product.category}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Rating: ${product.rating.rate}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`In stock: ${product.rating.count}`}
            </Typography>
            <br />
            <Typography variant="h6" component="div">
              {`Price: $${product.price}`}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Product;
