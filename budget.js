
var arryinc = [];
var arryexp = [];
arryinc.className = 'finalinc'
arryexp.className = 'finalexp'
function fourth() {
    var box = document.getElementById("box").value;
    var x = document.createTextNode(box);

    var z = document.createElement("li");
    var y = document.getElementById("scroll").value;
    var a = document.getElementById("income");
    var b = document.getElementById("expenses")
    var c = document.getElementById("box1").value;
    var e = document.createTextNode(c);
    var d = document.createElement("span")
    var span = document.createElement("span")
    var close = document.createTextNode("\u00D7")
    var previnc = document.getElementById("incomes").innerText;
    var prevexp = document.getElementById("expense").innerText;
    // var total = document.getElementById("total");
    d.appendChild(e)
    z.appendChild(x)
    span.appendChild(close)
    z.className = 'list'
    if (x == "" || c == "") {
        alert("you have to write something")
    }
    else {
        z.appendChild(d)
    }

    if (y == '+') {
        var inc = a.appendChild(z)
        inc.appendChild(span)
        arryinc.push(c)
        var last = arryinc[arryinc.length - 1];
        for (var i = 0; i < arryinc.length; i++) {
            if (i = arryinc.length) {
                previnc = parseFloat(last) + parseFloat(previnc);
                console.log(previnc);
                var totalinc = document.getElementById("incomes").innerHTML = previnc;

            }
        }
    }
    else {
        var exp = b.appendChild(z)
        exp.appendChild(span)
        arryexp.push(c)
        var lst = arryexp[arryexp.length - 1];
        for (var i = 0; i < arryexp.length; i++) {
            if (i = arryexp.length) {
                prevexp = parseFloat(lst) + parseFloat(prevexp);
                console.log(prevexp);
                var totalexp = document.getElementById("expense").innerHTML = prevexp;

            }
        }
    }
    var toi = document.getElementById("incomes").innerText;
    var tol = document.getElementById("expense").innerText
    document.getElementById("per").innerHTML = (tol / toi) * 100 + "%";
    document.getElementById("total").innerHTML = parseFloat(toi) - parseFloat(tol);
    span.className = "close"

    var closed = document.getElementsByClassName("close")
    for (var i = 0; i < closed.length; i++) {
        closed[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none"

        }


    }
  
}