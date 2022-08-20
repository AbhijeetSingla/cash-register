import { useState } from "react";
import Outputtable from "./Outputtable";

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
            <form action="" onSubmit={(event) => submitForm(event)} >
                <div>
                    <select name="denomination" id="denomination" onChange={(e) => setDenomination(e.target.value)}>
                        <option value="new">New Currency Denomination</option>
                        <option value="old">Old Currency Denomination</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="billAmount">Bill Amount: </label>
                    <input type="number" name="billAmount" id="billAmount" onChange={(e) => setBill(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="customerAmount">Customer Amount: </label>
                    <input type="number" name="customerAmount" id="customerAmount" onChange={(e) => setCustomerAmount(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Get Balance</button>
                </div>
            </form>
            <Outputtable visibility={visibility} bill={bill} amount={customerAmount} currency={denomination} />
        </>
     );
}

export default Form;