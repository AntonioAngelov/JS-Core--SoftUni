/**
 * Created by anton on 26-Nov-16.
 */
function attachEvents(){
    const appId = "kid_BJ_Ke8hZg";
    const username = "guest";
    const password = "pass";
    const rpcUrl = "https://baas.kinvey.com/rpc/";
    const appdataUrl = "https://baas.kinvey.com/appdata/";
    const base64Auth = btoa(username + ':' + password);
    const authorizationHeader = {Authorization: `Basic ${base64Auth}`};

    $('#getVenues').click(loadVenues);

    function loadVenues() {
        let date = $('#venueDate').val();
        $.ajax({
            method: "POST",
            url: rpcUrl + appId + '/custom/' + `calendar?query=${date}`,
            headers: authorizationHeader
        })
            .then(displayVenues)
            .catch(displayError);
    }

    function clear() {
        $('#venue-info').find('.venue').remove();
    }

    function displayVenues(ids) {
        clear()
        for(let id of ids){
           $.ajax({
               method: "GET",
               url: appdataUrl + appId + '/venues/' + id,
               headers: authorizationHeader
           })
               .then(visualiseVenue)
               .catch(displayError);
        }
    }

    function displayError(err) {
        console.dir(err.status + `(${err.statusText})`);
    }

    function visualiseVenue(venue) {
        let venueID = venue._id;
        let name = venue.name;
        let description = venue.description;
        let startingHour = venue.startingHour;
        let price = venue.price;

        let showDetailsBtn = $('<input class="info" type="button" value="More info">').click(() => showDetails(venueID))
        let currVenueContainer = $(`<div class="venue" id=${venueID}>`);
        currVenueContainer
            .append($(`<span class="venue-name">`).text(name)
                .prepend(showDetailsBtn));


        let detailsContainer = $(`<div class="venue-details" style="display: none;">`);

        let purchaseBtn = $(`<td><input class="purchase" type="button" value="Purchase">`)
            .click(() => getConfirmation(name, $(`#${venueID}`).find('.quantity').val(), price, venueID));
        let table = $('<table>');
        table
            .append($('<tr>')
                .append($('<th>Ticket Price</th>'))
                .append($('<th>Quantity</th>'))
                .append($('<th>')))
            .append($('<tr>')
                .append($(`<td class="venue-price">${price} lv</td>`))
                .append($('<td>')
                    .append($('<select class="quantity">')
                        .append($('<option value="1">1</option>'))
                        .append($('<option value="2">2</option>'))
                        .append($('<option value="3">3</option>'))
                        .append($('<option value="4">4</option>'))
                        .append($('<option value="5">5</option>'))))
                .append(purchaseBtn))

        detailsContainer
            .append(table)
            .append($(`<span class="head">Venue description:</span>`))
            .append($(`<p class="description">${description}</p>`))
            .append($(`<p class="description">Starting time: ${startingHour}</p>`));

        currVenueContainer.append(detailsContainer);
        $('#venue-info').append(currVenueContainer);
    }

    function showDetails(id) {
        $(`#${id}`).find('.venue-details').css("display", "block");
    }
    
    function getConfirmation(name, quantity, price, id) {
        $('#venue-info').children().remove();

        let confirmBtn = $('<input type="button" value="Confirm">').click(() => attEventConfirm(quantity, id));


        $('#venue-info')
            .append($('<span class="head">Confirm purchase</span>'))
            .append($('<div class="purchase-info">')
                .append($(`<span>${name}</span>`))
                .append($(`<span>${quantity} x ${price}</span>`))
                .append($(`<span>Total: ${quantity * price} lv</span>`))
                .append(confirmBtn));

    }

    function attEventConfirm(quantity, id) {
        $.ajax({
            method: "POST",
            url: rpcUrl + appId + '/custom/' + `purchase?venue=${id}}&qty=${quantity} `,
            headers: authorizationHeader
        })
            .then(showFinalScreen)
            .catch(displayError)
    }

    function showFinalScreen(obj) {
        let htmlFragment = obj.html;

        $('#venue-info')
            .text('You may print this page as your ticket')
            .append(htmlFragment);
    }

}