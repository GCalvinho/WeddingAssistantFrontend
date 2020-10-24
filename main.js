$( window ).on('load', function() {
    initCountdown();
    hideDetails();
    controlDetails();
});

function initCountdown(){
hideCards();
$("#waitingCountDown").show();
setTimeout(function() { $("#waitingCountDown").attr('style','display:none !important'); }, 2000);
$("#countdown").hide();
setTimeout(function() { $("#countdown").fadeIn( "slow" ); }, 2000);

    $('#countdown').countdown({
        // Target date
        date: '10/23/2020 14:48:59',
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
            $("#contdownSection").hide();
            showCards();
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

function hideCards(){
    $('#weddingCards').hide();
};

function showCards(){
    $('#weddingCards').fadeIn( "slow" );
};


