parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dPdB":[function(require,module,exports) {
function e(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var n=function(){var n,t=document.querySelector("#app"),c=document.createRange(),r=["Rock","Paper","Scissors","Lizard","Spock"],o=function(e){return e.reduce(function(e,n){return e[n]=!0,e},{})},s=(e(n={},"Rock",{beats:o(["Lizard","Scissors"]),loses:o(["Spock","Paper"])}),e(n,"Paper",{beats:o(["Spock","Rock"]),loses:o(["Scissors","Lizard"])}),e(n,"Scissors",{beats:o(["Paper","Lizard"]),loses:o(["Rock","Spock"])}),e(n,"Lizard",{beats:o(["Paper","Spock"]),loses:o(["Scissors","Rock"])}),e(n,"Spock",{beats:o(["Scissors","Rock"]),loses:o(["Paper","Lizard"])}),n),a=function(e){for(var n=e.target.dataset.value,o=n;o===n;)o=r[Math.floor(Math.random()*r.length)];t.innerHTML="";var a,i=(a=o,s[n].beats[a]);t.appendChild(c.createContextualFragment(function(e){var n=e.userSelection,t=e.houseSelection,c=e.userWon?"YOU WIN":"YOU LOSE";return'<div class="flex flex-row-l flex-column justify-around items-center pa4-l w-100 h-100">\n    <div class="flex flex-column items-center justify-center w-33-l tc">\n    <p class="f2 white b">You Picked</p>\n    <button id='.concat(n,'></button>\n    </div>\n    <div class="flex flex-column-l flex-row items-center justify-center w-33-l">\n        <p class="f2 white b ma2">').concat(c,'</p>\n        <a class="bg-white pa4 no-underline gray br4 b tc" href=".">Play Again</a>\n    </div>\n    <div class="flex flex-column items-center justify-center w-33-l tc">\n        <p class="f2 white b">The House Picked</p>\n        <button id=').concat(t,"></button>\n    </div>\n    </div>")}({userSelection:n,houseSelection:o,userWon:i})))};document.querySelectorAll("button").forEach(function(e){return e.addEventListener("click",a)})};n();
},{}]},{},["dPdB"], null)
//# sourceMappingURL=/app.e151b659.js.map