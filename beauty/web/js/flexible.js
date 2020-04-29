!function (a, b) {
    function c() {
        var b = f.getBoundingClientRect().width;
        b / i > 540 && (b = 540 * i);
        var c = b / 10;
        f.style.fontSize = c + "px", k.rem = a.rem = c
    }

    var d, e = a.document, f = e.documentElement, g = e.querySelector('meta[name="viewport"]'), h = e.querySelector('meta[name="flexible"]'), i = 0, j = 0, k = b.flexible || (b.flexible = {});
    if (g) {
        console.warn("将根据已有的meta标签来设置缩放比例");
        var l = g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
        l && (j = parseFloat(l[1]), i = parseInt(1 / j))
    }

    a.addEventListener("resize", function () {
        clearTimeout(d), d = setTimeout(c, 300)
    }, !1), a.addEventListener("pageshow", function (a) {
        a.persisted && (clearTimeout(d), d = setTimeout(c, 300))
    }, !1), "complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px" : e.addEventListener("DOMContentLoaded", function () {
        e.body.style.fontSize = 12 * i + "px"
    }, !1), c()
}(window, window.lib || (window.lib = {}));