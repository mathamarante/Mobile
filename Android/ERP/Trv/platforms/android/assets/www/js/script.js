function formataCNPJ(lcClCnpj) {
    if (lcClCnpj.trim() == "") {
        return "";
    }
    else {
        return lcClCnpj.substring(0, 2) + "." + lcClCnpj.substring(2, 5) + "." + lcClCnpj.substring(5, 8) + "/" + lcClCnpj.substring(8, 12) + "-" + lcClCnpj.substring(12);
    }
}

function formataCEP(lcClNcep) {
    if (lcClNcep.trim() == "") {
        return "";
    }
    else {
        return lcClNcep.substring(0, 5) + "-" + lcClNcep.substring(5);
    }
}

function formataCPF(lcClNcpf) {
    if (lcClNcpf.trim() == "") {
        return "";
    }
    else {
        return lcClNcpf.substring(0, 3) + "." + lcClNcpf.substring(3, 6) + "." + lcClNcpf.substring(6, 9) + "-" + lcClNcpf.substring(9);
    }
}

function brMoney(v) {
    if (isNaN(v)) { v = 0; }

    v = (Math.round((v - 0) * 100)) / 100;
    v = (v == Math.floor(v)) ? v + ".00" : ((v * 10 == Math.floor(v * 10)) ? v + "0" : v);
    v = String(v);

    var ps = v.split('.');
    var whole = ps[0];
    var sub = ps[1] ? ',' + ps[1] : ',00';
    var r = /(\d+)(\d{3})/;

    while (r.test(whole)) {
        whole = whole.replace(r, '$1' + '.' + '$2');
    }

    v = whole + sub;

    if (v.charAt(0) == '-') {
        return '-R$' + v.substr(1);
    }

    return "R$ " + v;
}

function brMoneyCasasDecimais(v) {
    if (isNaN(v)) { v = 0; }

    //v = (Math.round((v - 0) * 100)) / 100;
    v = (v == Math.floor(v)) ? v + ".000" : ((v * 10 == Math.floor(v * 10)) ? v + "0" : v);
    v = String(v);

    var ps = v.split('.');
    var whole = ps[0];
    var sub = ps[1] ? ',' + ps[1] : ',000';
    var r = /(\d+)(\d{3})/;

    while (r.test(whole)) {
        whole = whole.replace(r, '$1' + '.' + '$2');
    }

    v = whole + sub;

    if (v.charAt(0) == '-') {
        return '-R$' + v.substr(1);
    }

    return "R$ " + v;
}

function jsonDate(lcJsDate) {
    if (lcJsDate == null) { return ""; }

    var ldFuDate = new Date(parseInt(lcJsDate.substr(6)));
    var lcSqDate = ldFuDate.toISOString().slice(0, 10).replace(/-/g, "");
    var lcBrDate = lcSqDate.substr(6) + "/" + lcSqDate.substr(4, 2) + "/" + lcSqDate.substr(0, 4);

    return lcBrDate;
}

function brDecimal(v) {
    v = (Math.round((v - 0) * 100)) / 100;
    v = (v == Math.floor(v)) ? v + ".00" : ((v * 10 == Math.floor(v * 10)) ? v + "0" : v);
    v = String(v);

    var ps = v.split('.');
    var whole = ps[0];
    var sub = ps[1] ? ',' + ps[1] : ',00';
    var r = /(\d+)(\d{3})/;

    while (r.test(whole)) {
        whole = whole.replace(r, '$1' + '.' + '$2');
    }

    v = whole + sub;

    if (v.charAt(0) == '-') {
        return '-' + v.substr(1);
    }

    return v;
}

function escondeNegativos(lnNrNega) {
    if (lnNrNega < 1) { return ""; }
    else { return lnNrNega.toString().trim(); }
}

function escondeDataZerada(lcWkData) {
    if (lcWkData == "01/01/1900" || lcWkData == null) { return ""; }
    else { return lcWkData.toString().trim(); }
}

function objetoDataParaStringData(ldWkData) {
    var lnWkDias = ldWkData.getDate(), lnWkMese = ldWkData.getMonth() + 1;
    var lcWkDias = "", lcWkMese = "", lcWkAnos = ldWkData.getFullYear().toString().trim();

    if (lnWkDias < 10) { lcWkDias = "0" + lnWkDias.toString().trim(); }
    else { lcWkDias = lnWkDias.toString().trim(); }

    if (lnWkMese < 10) { lcWkMese = "0" + lnWkMese.toString().trim(); }
    else { lcWkMese = lnWkMese.toString().trim(); }

    return lcWkDias + "/" + lcWkMese + "/" + lcWkAnos;
}

function proximoDiaUtil(ldWkData) {
    var lnNrDias = 0;

    if (ldWkData.getDay() == 6) { lnNrDias = 2; }
    else { lnNrDias = 1; }

    return ldWkData.setDate(ldWkData.getDate() + lnNrDias);
}

function htmlDataParaObjetoData(lcWkData) {
    var lmWkData = lcWkData.split("-");
    return new Date(lmWkData[0], lmWkData[1] - 1, lmWkData[2]);
}

function OkTecladoAndroid2(lcTxAtua, lcTxFocu) {
    $("#" + lcTxAtua).on("keyup", function (e) {
        var theEvent = e || window.event;
        var keyPressed = theEvent.keyCode || theEvent.which;
        if (keyPressed == 13) {
            document.getElementById(lcTxFocu).focus();
        }
        return true;
    });
}

function OkTecladoAndroid3(lcTxAtua, lcTxFocu, lcAhClic) {
    $("#" + lcTxAtua).on("keyup", function (e) {
        var theEvent = e || window.event;
        var keyPressed = theEvent.keyCode || theEvent.which;
        if (keyPressed == 13) {
            document.getElementById(lcTxFocu).focus();
            
            if (typeof document.getElementById(lcAhClic).onclick == "function") {
                document.getElementById(lcAhClic).onclick.apply(document.getElementById(lcAhClic));
            }
        }
        return true;
    });
}