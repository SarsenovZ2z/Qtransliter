// var alphabet = {
//     "а": "a",
//     "б": "b",
//     "в": "v",
//     "г": "g",
//     "д": "d",
//     "е": "е",
//     "ж": "zh",
//     "з": "z",
//     "и": "i",
//     "й": "y",
//     "к": "k",
//     "л": "l",
//     "м": "m",
//     "н": "n",
//     "о": "o",
//     "п": "p",
//     "р": "r",
//     "с": "s",
//     "т": "t",
//     "у": "u",
//     "ф": "f",
//     "х": "kh",
//     "ц": "ts",
//     "ч": "ch",
//     "ш": "sh",
//     "щ": "shch",
//     "ъ": "",
//     "ы": "y",
//     "ь": "'",
//     "э": "e",
//     "ю": "yu",
//     "я": "ya"
// }
//
// function Qtransliterate(node) {
//     var text = node.nodeValue;
//     var res = "";
//     for (c  in text) {
//         var t = text.charAt(c);
//         if (isNaN(t*1) && /[а-яА-ЯЁё]/.test(t)) {
//             var r = alphabet[t.toLowerCase()];
//             if (t == t.toUpperCase())
//             r = r.charAt(0).toUpperCase() + r.slice(1);
// //            console.log(t + " " + r);
//             res += r;
//         }
//         else {
//             res += t;
//         }
//     }
//     console.log(res);
//     node.nodeValue = res;
// }
//
// function rec(node) {
//     Qtransliterate(node);
//     (node.childNodes).forEach(rec);
// }
//
// window.onload = function() {
//     rec(document.body);
// };

function ff(id, i) {
    console.log(id);
    if (id) {
        var url = "http://codeforces.com/contest/962/challenge/"+id;
        setTimeout(function() {
            window.open(url, "_blank");
        }, (i-1)*10000);
    }
}

function ff2(url, i) {
    console.log(url);
    setTimeout(function() {
        window.open(url, "_blank");
    }, (i-1)*10000*201);
}

function page_fn() {
    var standings = document.getElementsByClassName("standings")[0].getElementsByTagName("tr");
    for(var i=1;i<standings.length-1;++i) {
        ff(standings[i].getElementsByTagName("td")[5].getAttribute("acceptedsubmissionid"), i);
    }
    setTimeout(function() {
        window.close();
    }, (standings.length-1)*10000);
}

function hack() {
    var hform = document.getElementsByClassName("challenge-form")[0];
    var test = hform.getElementsByClassName("testcaseTextarea")[0];
    test.value = "2\n 1 2";
    hform.submit();
}

if (window.location.href.includes("http://codeforces.com/contest/962/hacks")) {
    window.stop();
    window.close();
}
window.addEventListener("load", function() {
    window.stop();
    var location = window.location.href;
    if (location.includes("http://codeforces.com/contest/962/standings")) {
        window.onbeforeunload = function() {
            return false;
        }
    }
    if (location=="http://codeforces.com/contest/962/standings") {
        for (var i = 15;i<=26;++i) {//pages from 1 to 1]
            var url = location+"/page/"+(i);
            ff2(url, i-15);
        }
    }
    else if (location.includes("http://codeforces.com/contest/962/standings/page/")) {
        page_fn();
    }
    else if (location.includes("http://codeforces.com/contest/962/challenge/")) {
        hack();
    }
    else if (location.includes("http://codeforces.com/contest/962/hacks")) {
        window.close();
    }
});
