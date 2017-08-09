/**
 * Created by anton on 03-Nov-16.
 */
function getSummary(selector) {
    let button = $(selector);
    button.on('click', function () {
        let highlighted = $('#content').find('strong').text();
        let summary = $('<div>').attr('id', 'summary');
        let container = $('#content').parent();
        summary.append('<h2>Summary</h2>');
        summary.append(`<p>${highlighted}</p>`)
        container.append(summary);
    });
}

