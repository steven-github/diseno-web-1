var jq = $(document);

jq.ready(function () { }

);

function LoadCalendar(iddatetimepicker) {
    
    jq.find(iddatetimepicker).datetimepicker({
        format: 'YYYY-MM-DD'
    });
}


function ExecuteAjax(url, model, divShow) {

    var that = this;

    var myform = $(this);
    var disabled = myform.find(':input:disabled').removeAttr('disabled');


    return $.ajax({
        url: url,
        type: "POST",
        data: model,
        async: false,
        success: function (result) {
            if (result.success) {
                var msg = "Se insertó correctamente";
                alertify.success(msg);
            } else if (result.error) {
                var msg = "Hubo un problema con la transacción";
                alertify.error(msg);
            } else {
                var msg = "Hubo un problema con la transacción";
                alertify.error(msg);
            }
            return result;
        }


    });

    function ExecuteAjaxRedirect(url) {

        var that = this;

        var myform = $(this);
        var disabled = myform.find(':input:disabled').removeAttr('disabled');

        return $.ajax({
            url: url,
            type: "GET",
            data: null,
            async: false,
        });
    }
}

function Execute_lst(route) {
    var that = this;
    var myform = $(this);

    var lst = $.ajax({
        url: route
        , type: 'POST'
        , async: false
    }).responseText;

    return JSON.parse(lst);
}