/**
 * Created by anton on 25-Nov-16.
 */
function attachEvents() {
    const baseUrl = "https://baas.kinvey.com/appdata/kid_S1SWJirfe/biggestCatches/"
    const username = 'antonio';
    const password = 'a';
    const base64Auth = btoa(`${username}:${password}`);
    const authorizationHeader = {Authorization: `Basic ${base64Auth}`};
    const catchesContainer = $('#catches');

    $("#aside").find("button.load").on("click", loadCatches);
    $("#aside").find("button.add").on("click", addNewCatch);

    function loadCatches() {
        $.get({
            url: baseUrl,
            headers: authorizationHeader
        })
            .then(displayCatches)
            .catch(displayError)
    }

    function displayError(err) {
        alert(err.status + `(${err.statusText})`);
    }

    function displayCatches(catches) {
        catchesContainer.empty();
        for(let curr of catches){
            visualiseCatch(curr);
        }
    }
    
    function visualiseCatch(currentCatch) {
        let div = $('<div>')
            .addClass('catch')
            .attr("data-id", currentCatch._id)
            .append($('<label>').text("Angler"))
            .append($('<input>')
                .addClass('angler')
                .attr("type", "text")
                .val(currentCatch.angler))
            .append($('<label>').text("Weight"))
            .append($('<input>')
                .addClass('weight')
                .attr("type", "number")
                .val(currentCatch.weight))
            .append($('<label>').text("Species"))
            .append($('<input>')
                .addClass('species')
                .attr("type", "text")
                .val(currentCatch.species))
            .append($('<label>').text("Location"))
            .append($('<input>')
                .addClass('location')
                .attr("type", "text")
                .val(currentCatch.location))
            .append($('<label>').text("Bait"))
            .append($('<input>')
                .addClass('bait')
                .attr("type", "text")
                .val(currentCatch.bait))
            .append($('<label>').text("Capture Time"))
            .append($('<input>')
                .addClass('captureTime')
                .attr("type", "number")
                .val(currentCatch.captureTime))

        div
            .append($('<button>')
                .addClass('update')
                .text("Update")
                .on("click", () => updateCatch(currentCatch._id)))
            .append($('<button>')
                .addClass('delete')
                .text("Delete")
                .on("click", () => deleteCatch(currentCatch._id)));

        catchesContainer.append(div);

    }

    function updateCatch(catchId) {
        let newData = getInputData(catchId, true);
        if(newData){
            $.ajax({
                method: "PUT",
                url: baseUrl + catchId,
                headers: authorizationHeader,
                data: newData,
                contentType: 'application/json'
            })
                .then(loadCatches)
                .catch(displayError)
        }

    }

    function getInputData(selector, put = false) {
        if(put){
             selector = $('#catches').find('[data-id="' + selector + '"]');
        }

        let angler = $(selector).find('.angler').val();
        let weight = $(selector).find('.weight').val();
        let species = $(selector).find('.species').val();
        let location = $(selector).find('.location').val();
        let bait = $(selector).find('.bait').val();
        let captureTime = $(selector).find('.captureTime').val();

        if(angler !== '' && weight !== '' && species !== '' && location !== '' && bait !== '' && captureTime !== ''){
            captureTime = Number(captureTime);
            weight = Number(weight);
            if(Number.isInteger(captureTime) && Number.isInteger(weight)){
                return JSON.stringify({
                    'angler': angler,
                    'weight': weight,
                    'species': species,
                    'location': location,
                    'bait': bait,
                    'captureTime': captureTime
                });
            }
        }

        return false;

    }

    function deleteCatch(catchId) {
        $.ajax({
            method: "DELETE",
            url: baseUrl + catchId,
            headers: authorizationHeader
        })
            .then(loadCatches)
            .catch(displayError);
    }


    function addNewCatch() {
      let data = getInputData($('#addForm'))
        if(data){
          $.ajax({
              method: "POST",
              url: baseUrl,
              headers: authorizationHeader,
              data: data,
              contentType: 'application/json'
          })
              .then(loadCatches)
              .catch(displayError);
        }
    }
}