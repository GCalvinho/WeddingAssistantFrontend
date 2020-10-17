$( window ).on('load', function() {
    initCountdown();
    hideDetails();
    controlDetails();
});

function initCountdown(){
    $('#countdown').countdown({
        // Target date
        date: '12/24/2020 23:59:59',
        // time zone
        offset: +1,
        // Countdown text
        day: 'Dia',
        days: 'Dias',
        hour: 'Hora',
        hours: 'Horas',
        minute: 'Minuto',
        minutes: 'Minutos',
        second: 'Segundo',
        seconds: 'Segundos',
        hideOnComplete: true
        }, function () {
            //alert('Merry Christmas!');
            // lock vanishes
            // details appear
        });
}

function hideDetails(){
    $(".expanded").hide();
}


function controlDetails(){
    $(".expand").click(function(){
        $(".expanded").toggle();
    });
}



