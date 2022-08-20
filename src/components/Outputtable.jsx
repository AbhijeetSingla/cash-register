import getBalance from "../utils/getBalance";

function Outputtable( { visibility, bill, amount, denomination } ) {
    
    const NEW_CURRENCY = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    const OLD_CURRENCY = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    const CURRENT_CURRENCY = denomination === "new" ? NEW_CURRENCY : OLD_CURRENCY
    const balanceObject = getBalance(amount, bill, CURRENT_CURRENCY);

    return ( 
        <>
            <div style={{visibility: visibility? "unset" : "hidden"}}>
                <table>
                    <thead>Balance Currency Breakout</thead>
                    <tr><th>Number</th> {Object.values(balanceObject).map((element) => <td>{element}</td>)} </tr>
                    <tr><th>Notes</th> {Object.keys(balanceObject).map((element) => <td>{element}</td>)} </tr>
                </table>
            </div>
        </>
     );
}

export default Outputtable;