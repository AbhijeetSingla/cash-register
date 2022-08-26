import { useState } from "react";
import Outputtable from "./Outputtable";
import { Button, Box, Container, FormControl, TextField, InputLabel, Select, MenuItem } from "@mui/material";
// import { colors } from "../theme/root";
import { transparentColorBox } from "../theme/styles";

function Form() {

    const [visibility, setVisibility] = useState(false);
    const [bill, setBill] = useState(0);
    const [customerAmount, setCustomerAmount] = useState(0);
    const [denomination, setDenomination] = useState("new");
    
    function submitForm(event) {
        event.preventDefault();
        setVisibility(true);
    }    
    
    return ( 
        <>
            <Box sx={transparentColorBox} >
                <Container maxWidth="md" >
                    <FormControl sx={{ m: 1, minWidth: 260 }} >
                            <InputLabel id="denomination-label">Denomination</InputLabel>
                            <Select labelId="denomination-label" value={denomination} label="Denomination" id="denomination" onChange={(e) => setDenomination(e.target.value)}>
                                <MenuItem value="new">New Currency Denomination</MenuItem>
                                <MenuItem value="old">Old Currency Denomination</MenuItem>
                            </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} >
                            <TextField id="billAmount" label="Bill Amount" variant="standard" onChange={(e) => setBill(e.target.value)} />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} >
                            <TextField id="customerAmount" label="Customer Amount" variant="standard" onChange={(e) => setCustomerAmount(e.target.value)} />
                    </FormControl>
                </Container>
                <Container maxWidth="md" align="center" sx={{ mt: 5}}>
                    <Button variant="contained" type="submit" onClick={(event) => submitForm(event)}>Get Balance</Button>
                </Container>
            </Box>
            <Outputtable visibility={visibility} bill={bill} amount={customerAmount} denomination={denomination} />
        </>
     );
}

export default Form;