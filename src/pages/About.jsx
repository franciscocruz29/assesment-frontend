import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Container, Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function About() {
  return (
    <>
      <Container>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          sx={{ fontWeight: 'bold', padding: 4 }}
        >
          About me
        </Typography>
      </Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <Card elevation={0} sx={{ maxWidth: 700, paddingTop: 1 }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                sx={{ fontWeight: 'bold' }}
              >
                Francisco Huertas Cruz
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ paddingBottom: 2 }}
              >
                {'> No hay diseño sin disciplina. No hay disciplina sin inteligencia <'}
              </Typography>
              <br />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ paddingBottom: 1 }}
              >
                Tres cosas que he aprendido en Make It Real:
                <br />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                1. Simplificar los problemas en lugar de complicarlos.
                <br />
                2. Tener capacidad de adaptación, lo que hoy sirve, mañana puede quedarse obsoleto.
                <br />
                3. Ser perseverante, tolerar la frustraccion.
                <br />
              </Typography>
              <br />
              <br />
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ fontWeight: 'bold', paddingBottom: 1 }}
              >
                franciscohuertas25@gmail.com
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                align="center"
                sx={{ fontWeight: 'bold' }}
              >
                <Link
                  target="_blank"
                  href="https://github.com/franciscocruz29"
                  underline="none"
                >
                  GitHub
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default About;
