function brMoney(v) {
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

function jsonDate(lcJsDate) {
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

function parseDate(s) {
    var b = s.split(/\D/);
    return new Date(b[0], --b[1], b[2]);
}

function brData(ldWkData) {
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