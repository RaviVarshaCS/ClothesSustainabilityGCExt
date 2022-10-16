// Send a message containing the page details back to the event page
chrome.runtime.sendMessage({
    'productName': "pants",
    'susIndex': 8,
    'infoLink': "https://oldnavy.gap.com/"
});