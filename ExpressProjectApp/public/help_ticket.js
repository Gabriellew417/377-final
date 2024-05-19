var host = window.location.origin;
console.log(host)


async function loadTicketData() {
    await fetch(`${host}/ticket_data`)
    .then(res => res.json())
    .then(res => {
        console.log(res)

        const ticket_receipt = document.getElementById('ticket-receipt');
        ticket_receipt.innerHTML = ''

        //When ticket is submitted, the receipt for the current ticket is shown 
        if (res.length > 0){
            const currentTicket = res[0]
            const currentTicketElement = document.createElement('div')
            currentTicketElement.className = 'ticket';

            currentTicketElement.innerHTML = `
            <h2>Current Ticket</h2>
            <p>On ${currentTicket.date}, <strong>${currentTicket.name}</strong> wrote: </p>
            <br>
            <p><strong>${currentTicket.description}</strong></p>
            `;
            ticket_receipt.appendChild(currentTicketElement);

        //Gives users the option to view previous ticket without previous user name. 
            if (res.length > 1){
                const prevTicket = res[1];
                const prevTicketElement = document.createElement('div');

                prevTicketElement.className = 'ticket';
                prevTicketElement.style.display = 'none';
                prevTicketElement.innerHTML = `
                <h2>Previous Ticket</h2>
                <p>On ${prevTicket.date}, <strong>Anonymous</strong> wrote: </p>
                <br>
                <p><strong>${prevTicket.description}</strong></p>
                `;
                ticket_receipt.appendChild(prevTicketElement);

                const prevButton = document.createElement('button');
                prevButton.textContent = 'Show Previous Ticket';

                prevButton.onclick = function(){
                    currentTicketElement.style.display = 'none';
                    prevTicketElement.style.display = 'block';
                    prevButton.style.display = 'none';

                };
                ticket_receipt.appendChild(prevButton);
            }
        }
    })
}

async function createTicket() {
    console.log("Creating ticket")
    await fetch(`${host}/ticket_input`,{
        method: 'POST',
        body: JSON.stringify({
            "name":`${document.getElementById('name').value}`,
            "date":`${document.getElementById('date').value}`,
            "description":`${document.getElementById('message').value}`,
        }),
        headers: {
            'Content-type': "application/json"
        }
    })
    .then((res) => res.json())
    .then((res) =>{
    })
    alert("Ticket Submitted Successfully! Your receipt will be displayed.");
    await loadTicketData();

}
