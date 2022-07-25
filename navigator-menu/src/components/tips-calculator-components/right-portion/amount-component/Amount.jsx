

function Amount({name, amount}){

    return(
        <div id="amount-container">
            <p><strong>{name}</strong><br />/ person</p>
            <h1 id="tip-amount-person">$ {amount}</h1>
        </div>
    )
}

export default Amount;