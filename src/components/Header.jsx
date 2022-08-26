import { Box, Typography, Container } from '@mui/material';
import { primaryColorBox } from '../theme/styles';

function Header() {

    return ( 
        <>
            <Box component="header" sx={primaryColorBox}>
                <Container maxWidth="md" >
                    <Typography variant="h1" component="h1" align="center">
                        Cash Register
                    </Typography>
                </Container>
            </Box>
            <Container sx={{mt: "2rem"}} maxWidth="md" >
                This app tells you the exact amount of notes to return to the customer according to the bill amount and received amount, also it lets you select between the current denomination structure or the old one(why is this userful? IDK).
            </Container>
        </>
     );
}

export default Header;