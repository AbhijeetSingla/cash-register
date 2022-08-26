import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'No Copyright © '}
        <Link color="inherit" href="https://abhijeetsingla.netlify.app">
          Made by Abhijeet Singla
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
function Footer() {
    return (
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            top: "100vh",
            position: "sticky",
            backgroundColor: (theme) => theme.palette.mode === 'light'? theme.palette.grey[200] : theme.palette.grey[800]}}
        >
          <Container maxWidth="md" align="center">
            <Typography variant="body1">
              Social Links{' '}
                <Link color="inherit" href="https://github.com/abhijeetsingla">Github</Link>{' '}
                <Link color="inherit" href="https://linkedin.com/in/abhijeetsingla1553">LinkedIn</Link>{' '}
                <Link color="inherit" href="mailto:abhijeetsingla1553@gmail.com">Email</Link>{' '}
            </Typography>
            <Copyright />
          </Container>
        </Box>
    );
  }


export default Footer;