function OkTecladoAndroidFocu(lcTxAtua, lcTxFocu) {
    $("#" + lcTxAtua).on("keyup", function (e) {
        var theEvent = e || window.event;
        var keyPressed = theEvent.keyCode || theEvent.which;
        if (keyPressed == 13) {
            document.getElementById(lcTxFocu).focus();
        }
        return true;
    });
}

function OkTecladoAndroidBotao(lcTxAtua, lcAhClic) {
    $("#" + lcTxAtua).on("keyup", function (e) {
        var theEvent = e || window.event;
        var keyPressed = theEvent.keyCode || theEvent.which;
        if (keyPressed == 13) {
            document.getElementById(lcAhClic).focus();

            if (typeof document.getElementById(lcAhClic).onclick == "function") {
                document.getElementById(lcAhClic).onclick.apply(document.getElementById(lcAhClic));
            }
        }
        return true;
    });
}