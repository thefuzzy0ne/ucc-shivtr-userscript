// ==UserScript==
// @name         UCC Guild Web site width maximiser
// @namespace    https://github.com/thefuzzy0ne/ucc-shivtr-userscript
// @version      0.1
// @description  Fixes the space problem on the Shivtr.com UCC guild web site.
// @author       Tameabull, Netherguarde-Keep EU
// @match        https://ucc.shivtr.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var css = "#container { width: 95%; } "
            + "#admanager { display: none; }"
    GM_addStyle(css)
})();