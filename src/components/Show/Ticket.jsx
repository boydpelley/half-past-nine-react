// TO ADD:
// The free button returns text that says, just show up !
// Paid one will include a link to buy virtual tix (if applicable) or link to venue facebook account etc.

function FreeShow() {
    return (
        <div className="freeShowPopUp">
        
        </div>
    )
}

// Might have to make another component inside of this one not too sure yet.
function PaidShow() {
    return (
        <div className="paidShowPopUp">

        </div>
    )
}


function Ticket(isPaid) {
    if (!isPaid) {
        return <FreeShow />
    } else {
        return <PaidShow />
    }
}

export default Ticket;