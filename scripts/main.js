var alphabet = {
    "а": "a",
    "б": "b",
    "в": "v",
    "г": "g",
    "д": "d",
    "е": "е",
    "ж": "zh",
    "з": "z",
    "и": "i",
    "й": "y",
    "к": "k",
    "л": "l",
    "м": "m",
    "н": "n",
    "о": "o",
    "п": "p",
    "р": "r",
    "с": "s",
    "т": "t",
    "у": "u",
    "ф": "f",
    "х": "kh",
    "ц": "ts",
    "ч": "ch",
    "ш": "sh",
    "щ": "shch",
    "ъ": "",
    "ы": "y",
    "ь": "'",
    "э": "e",
    "ю": "yu",
    "я": "ya"
}

function Qtransliterate(node) {
    var text = node.nodeValue;
    var res = "";
    for (c  in text) {
        var t = text.charAt(c);
        if (isNaN(t*1) && /[а-яА-ЯЁё]/.test(t)) {
            var r = alphabet[t.toLowerCase()];
            if (t == t.toUpperCase())
            r = r.charAt(0).toUpperCase() + r.slice(1);
//            console.log(t + " " + r);
            res += r;
        }
        else {
            res += t;
        }
    }
    console.log(res);
    node.nodeValue = res;
}

function rec(node) {
    Qtransliterate(node);
    (node.childNodes).forEach(rec);
}

window.onload = function() {
    rec(document.body);
};
