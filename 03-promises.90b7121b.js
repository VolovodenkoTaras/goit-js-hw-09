!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("6JpON");function a(e,t){return new Promise((function(n,o){var i=Math.random()>.3;setTimeout((function(){i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector("form").addEventListener("submit",(function(t){t.preventDefault();for(var n=t.target.elements,o=n.delay,i=n.amount,u=n.step,c=Number(o.value),l=0;l<i.value;l+=1)a(l,c).then((function(t){var n=t.position,o=t.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"),{opacity:.8,timeout:250,cssAnimationDuration:1500})})).catch((function(t){var n=t.position,o=t.delay;e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"),{opacity:.8,timeout:250,cssAnimationDuration:1500})})),c+=Number(u.value);t.target.reset()}))}();
//# sourceMappingURL=03-promises.90b7121b.js.map
