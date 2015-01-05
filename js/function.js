jQuery(document).ready(function($){

    $('#new-status form').submit(function(e) {
        e.preventDefault();

        $.ajax({
            url: 'status/status.php',
            type: 'POST',
            dataType: 'json',
            data: {
                text: $('#new-status').find('textarea').val() 
            },
            success: function(data) {
            	console.log( data );
                // $('#statuses').append('<li>' + data.text + '</li>');
                // $('#new-status').find('textarea').val('');
            }
        });
    });

});