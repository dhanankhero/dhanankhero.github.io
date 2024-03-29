function tfinit() {
    var a = document.getElementById("tf-reset");
    a.onclick = function () {
        clearWords();
    };
    var b = document.getElementById("tf-submit");
    b.onclick = function () {
        countWords();
    };
    var c = document.getElementById("tfEmbedCode");
    c.onclick = function () {
        this.form.tfEmbedCode.focus();
        this.form.tfEmbedCode.select();
    };
}
function clearWords() {
    document.getElementById("oldText").value = "";
    document.getElementById("newText2").innerHTML =
        '<h3>Hasil analisa</h3>';
}
function sortByFrequency(a) {
    var b = {};
    a.forEach(function (a) {
        b[a] = 0;
    });
    var c = a.filter(function (a) {
        return ++b[a] == 1;
    });
    return c.sort(function (a, c) {
        return b[c] - b[a];
    });
}
function countWords() {
    newText = document.getElementById("oldText").value;
    if (newText == "") {
        var a = "no";
    } else {
        var a = "yes";
    }
    newText = newText.replace(/(\r\n|\n|\r)/gm, " ");
    newText = newText.replace(/\.\s+/g, " ");
    newText = newText.replace(/[,;\:"\?\!\$%#_\{\}/&\=\+\(\)\^\[\]\<\>\*\|]/g, " ");
    newText = newText.replace(/[\›\·\.\—\«\»\©\®\¶\¿\±\¬\¢\£\¤\¥\§\¯\°\-\–\\]/g, " ");
    newText = newText.replace(new RegExp("”", "g"), " ");
    newText = newText.replace(/\s+/g, " ");
    newText = newText.replace(/\.\./g, " ");
    newText = newText.replace(/\.\.\./g, " ");
    newText = newText.replace(new RegExp("' ", "g"), " ");
    newText = newText.replace(new RegExp(" '", "g"), " ");
    while (newText.substring(0, 1) == " ") {
        newText = newText.substring(1, newText.length);
    }
    while (newText.substring(newText.length - 1, newText.length) == " ") {
        newText = newText.substring(0, newText.length - 1);
    }
    while (newText.substring(newText.length - 1, newText.length) == ".") {
        newText = newText.substring(0, newText.length - 1);
    }
    newText = newText.toLowerCase();
    var b = newText.split(" ");
    var c = b.length - 1;
    while (c > -1) {
        if (b[c] == "") {
            b.splice(c, 1);
        }
        c--;
    }
    var d = b.length;
    var e = ["mampu" ,"tentang" ,"di seberang" ,"setelah" ,"semua" ,"hampir" ,"juga" ,"di antara" ,"dan" ,"adalah" ,"karena" ,"sudah" ,"tetapi" ,"bisa" ,"tidak bisa" ,"sayang" ,"melakukan" ,"baik" ,"lain" ,"pernah" ,"setiap" ,"untuk" ,"dari" ,"mendapatkan" ,"mendapat" ,"miliknya" ,"bagaimana" ,"bagaimanapun" ,"aku akan" ,"aku" ,"menjadi" ,"bukan" ,"paling tidak" ,"biarkan" ,"suka" ,"mungkin" ,"mungkin tidak" ,"paling" ,"harus" ,"tidak boleh" ,"tidak juga" ,"mati" ,"sering" ,"hanya" ,"lainnya" ,"milik kita" ,"memiliki" ,"agak" ,"berkata" ,"mengatakan" ,"dia akan" ,"dia" ,"seharusnya" ,"tidak seharusnya" ,"sejak" ,"beberapa" ,"daripada" ,"itu" ,"lalu" ,"di sana" ,"ada" ,"mereka akan" ,"mereka" ,"mereka telah" ,"ini" ,"tis" ,"terlalu" ,"dua" ,"keinginan" ,"dulu" ,"tidak" ,"kami akan" ,"kami" ,"di" ,"apa" ,"kapan" ,"di mana" ,"yang" ,"sementara" ,"siapa" ,"mengapa" ,"dengan" ,"akan" ,"tidak akan" ,"belum" ,"kamu"];
    var f = [];
    var g = 0;
    var c = b.length - 1;
    while (c > -1) {
        var h = e.length - 1;
        while (h > -1) {
            if (b[c] == e[h]) {
                f[g] = b[c];
                g++;
                b.splice(c, 1);
            }
            h--;
        }
        c--;
    }
    var c = b.length - 1;
    while (c > -1) {
        if (b[c].length < 3) {
            f[g] = b[c];
            g++;
            b.splice(c, 1);
        }
        c--;
    }
    var i = b.length;
    var j = f.length;
    var k = {};
    for (var c = 0; c < b.length; c++) {
        var l = b[c];
        k[l] = k[l] ? k[l] + 1 : 1;
    }
    var m = {};
    for (var c = 0; c < f.length; c++) {
        var n = f[c];
        m[n] = m[n] ? m[n] + 1 : 1;
    }
    var c = b.length - 1;
    while (c > -1) {
        var h = b.length - 1;
        while (h > -1) {
            if (c != h) {
                if (b[c] == b[h]) {
                    b.splice(h, 1);
                }
            }
            h--;
        }
        c--;
    }
    var o = b.length;
    var c = f.length - 1;
    while (c > -1) {
        var h = f.length - 1;
        while (h > -1) {
            if (c != h) {
                if (f[c] == f[h]) {
                    f.splice(h, 1);
                }
            }
            h--;
        }
        c--;
    }
    var p = f.length;
    var q = [];
    for (var r in k) {
        q.push([r, k[r]]);
        q.sort(function (a, b) {
            return a[1] - b[1];
        }).reverse();
    }
    var s = [];
    for (var t in m) {
        s.push([t, m[t]]);
        s.sort(function (a, b) {
            return a[1] - b[1];
        }).reverse();
    }
    var u = ((i * 100) / d).toFixed(2);
    var v = ((j * 100) / d).toFixed(2);
    var w = "";
    w += "<h3>Hasil analisa</h3>\n";
    w += "<p><b>Total kata terhitung: " + d + " kata</b></p>\n\n";
    w += "<p>Keywords: " + i + " kata (" + u + "%)<br />\n";
    w += "Kata umum: " + j + " kata (" + v + "%)</p>\n\n";
    var x = document.getElementById("commonWords").checked;
    var y = -1;
    var z = -1;
    if (x == true) {
        var A = '<table id="tfTableA" class="tfalt"><tr><td class="tfodd" style="vertical-align:top;"><strong>Primary<br>Keywords</strong></td><td class="tfodd"><strong>Qty</strong></td></tr>';
        for (property in q) {
            if (y == -1) {
                A += '<tr><td class="tfeven">' + q[property][0] + '</td><td class="tfeven">' + q[property][1] + "</td></tr>";
            } else {
                A += '<tr><td class="tfodd">' + q[property][0] + '</td><td class="tfodd">' + q[property][1] + "</td></tr>";
            }
            y = y * -1;
        }
        A += "</table>";
        var B = '<table id="megatable1"><tr><td style="vertical-align:top;">' + A + "</td></tr></table>";
    } else {
        var A = '<table id="tfTableA" class="tfalt"><tr><td class="tfodd"><strong>Keywords</strong></td><td class="tfodd";"><strong>Qty<br>&nbsp;</strong></td></tr>';
        for (property in q) {
            if (y == -1) {
                A += '<tr><td class="tfeven" ;">' + q[property][0] + '</td><td class="tfeven";">' + q[property][1] + "</td></tr>";
            } else {
                A += '<tr><td class="tfodd";">' + q[property][0] + '</td><td class="tfodd";">' + q[property][1] + "</td></tr>";
            }
            y = y * -1;
        }
        A += "</table>";
        var C = '<table id="tfTableB" class="tfalt"><tr><td class="tfodd"><strong>Kata umum</strong></td><td class="tfodd";"><strong>Qty</strong></td></tr>';
        for (property in s) {
            if (z == -1) {
                C += '<tr><td class="tfeven";">' + s[property][0] + '</td><td class="tfeven";">' + s[property][1] + "</td></tr>";
            } else {
                C += '<tr><td class="tfodd";">' + s[property][0] + '</td><td class="tfodd";">' + s[property][1] + "</td></tr>";
            }
            z = z * -1;
        }
        C += "</table>";
        var B = '<table id="megatable1"><tr><td style="vertical-align:top;">' + A + '</td><td>  </td><td style="vertical-align:top;">' + C + "</td></tr></table>";
    }
    newText = w + B + '<p id="tfToolLink">&nbsp;</p>';
    if (a == "no") {
        newText =
            '';
    }
    document.getElementById("newText2").innerHTML = newText;
    if (a != "no") {
        window.location.hash = "newText2";
    }
}
window.onload = tfinit;
var newText;
