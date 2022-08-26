import getBalance from "../utils/getBalance";
// import { colors } from "../theme/root";
import { transparentColorBox } from "../theme/styles";
import { Box, Container, TableContainer, TableBody, TableHead, TableCell, TableRow, Table, Paper } from "@mui/material";

function Outputtable( { visibility, bill, amount, denomination } ) {
    
    function getDenominationArray(denomination) {
        const NEW_CURRENCY = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
        const OLD_CURRENCY = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
        return (denomination === "new" ? NEW_CURRENCY : OLD_CURRENCY);
    }

    const CURRENT_CURRENCY = getDenominationArray(denomination)
    const balanceObject = getBalance(amount, bill, CURRENT_CURRENCY);

    return ( 
        <>
            <Box sx={{...transparentColorBox, visibility: visibility? "unset" : "hidden"}}>
                <Container maxWidth="md" >
                    <h2>Balance Currency Breakout</h2>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Denomination</TableCell>
                                    {Object.keys(balanceObject).map((element) => <TableCell align="center" key={element} >{element}</TableCell>)}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Number of Notes</TableCell>
                                    {Object.values(balanceObject).map((element, index) => <TableCell align="center" key={Object.keys(balanceObject)[index]} >{element}</TableCell>)}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </Box>
        </>
     );
}

export default Outputtable;