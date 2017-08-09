/**
 * Created by anton on 01-Nov-16.
 */
function solves(tickets, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let arrOfTickets = [];
    for (let ticket of tickets) {
        let [destination, price, status] = ticket.split("|");
        let currentTicket = new Ticket(destination, Number(price), status);
        arrOfTickets.push(currentTicket);
    }

    if(sortCriteria == "destination"){
        arrOfTickets.sort(function (a, b) {
            if(a.destination > b.destination) return 1;
            else return -1;
        });
    }
    else if(sortCriteria == 'price'){
        arrOfTickets.sort((a,b)=> a.price - b.price);
    }
    else{
        arrOfTickets.sort(function (a, b) {
            if(a.status > b.status) return 1;
            else return -1;
        });
    }
    let ticket = new Ticket();

    return arrOfTickets;
}

console.log(solves(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'));

