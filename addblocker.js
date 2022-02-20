import { blocked_sites } from 'blocklist.js'

chrome.webRequest.onBeforeRequest.addListner(
    function(details) {
        return {cancel: true}
    },
    {urls: blocked_sites},
    ["blocking"]
)