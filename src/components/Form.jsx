import { useState } from "react";
import Outputtable from "./Outputtable";
import { Button, Box, Container, FormControl, TextField, InputLabel, Select, MenuItem } from "@mui/material";
import { transparentColorBox } from "../theme/styles";

function Form() {

    const [output, setOutput] = useState("");
    const [bill, setBill] = useState(0);
    const [customerAmount, setCustomerAmount] = useState(0);
    const [denomination, setDenomination] = useState("new");

    const inputProps = {
        min: 1,
        step: 1
    }

    function renderTable(bill, customerAmount, denomination) {
        return <Outputtable bill={bill} amount={customerAmount} denomination={denomination} />
    }
    
    function submitForm(event) {
        event.preventDefault();
        bill === customerAmount ?  setOutput("Seriously -_-") : setOutput(renderTable(bill, customerAmount, denomination))
    }    

    return ( 
        <>
            <Box sx={transparentColorBox} component="form" onSubmit={(event) => submitForm(event)} >
                <Container maxWidth="md" >
                    <FormControl sx={{ m: 1, minWidth: 260 }} >
                            <InputLabel id="denomination-label">Denomination</InputLabel>
                            <Select labelId="denomination-label" value={denomination} label="Denomination" id="denomination" onChange={(e) => setDenomination(e.target.value)}>
                                <MenuItem value="new">New Currency Denomination</MenuItem>
                                <MenuItem value="old">Old Currency Denomination</MenuItem>
                            </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} >
                            <TextField error={bill < 0} required inputProps={inputProps} type="number" id="billAmount" label="Bill Amount" variant="standard" onChange={(e) => {if(e.target.value) setBill(parseInt(e.target.value))}} />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} >
                            <TextField error={bill > customerAmount} required inputProps={inputProps} type="number" id="customerAmount" label="Customer Amount" variant="standard" onChange={(e) => {if(e.target.value) setCustomerAmount(parseInt(e.target.value))}} />
                    </FormControl>
                </Container>
                <Container maxWidth="md" align="center" sx={{ mt: 5}}>
                    <Button variant="contained" type="submit">Get Balance</Button>
                </Container>
            </Box>
            <Box sx={transparentColorBox}>
                <Container maxWidth="md" >
                    {output}
                </Container>
            </Box>
        </>
     );
}

export default Form;