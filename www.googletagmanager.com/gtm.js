(function() {
    "use strict";
    const n = function() {};
    const t = function() {};
    const e = t.prototype;
    e.get = n;
    e.set = n;
    e.send = n;
    const c = window;
    const o = c.GoogleAnalyticsObject || "ga";
    const i = c[o];
    const f = function() {
        const n = arguments.length;
        if (n === 0) return;
        const t = Array.from(arguments);
        let e;
        let c = t[n - 1];
        if (c instanceof Object && c.hitCallback instanceof Function) e = c.hitCallback;
        else if (c instanceof Function) e = () => {
            c(f.create())
        };
        else {
            const n = t.indexOf("hitCallback");
            if (n !== -1 && t[n + 1] instanceof Function) e = t[n + 1]
        }
        if (e instanceof Function === false) return;
        try {
            e()
        } catch (n) {}
    };
    f.create = function() {
        return new t
    };
    f.getByName = function() {
        return new t
    };
    f.getAll = function() {
        return [new t]
    };
    f.remove = n;
    f.loaded = true;
    c[o] = f;
    const s = c.dataLayer;
    if (s instanceof Object) {
        if (s.hide instanceof Object && typeof s.hide.end === "function") {
            s.hide.end();
            s.hide.end = () => {}
        }
        if (typeof s.push === "function") {
            const n = function(n) {
                if (n instanceof Object === false) return;
                if (typeof n.eventCallback !== "function") return;
                setTimeout(n.eventCallback, 1);
                n.eventCallback = () => {}
            };
            s.push = new Proxy(s.push, {
                apply: function(t, e, c) {
                    n(c[0]);
                    return Reflect.apply(t, e, c)
                }
            });
            if (Array.isArray(s)) {
                const t = s.slice();
                for (const e of t) n(e)
            }
        }
    }
    if (i instanceof Function && Array.isArray(i.q)) {
        const n = i.q.slice();
        i.q.length = 0;
        for (const t of n) f(...t)
    }
})();