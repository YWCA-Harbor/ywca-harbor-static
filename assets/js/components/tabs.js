document.addEventListener('DOMContentLoaded', function() {
    if(window.location.pathname === '/pages/programs/human-wellness.html') {
        enableTabs('HWTabs');
    } else if(window.location.pathname === '/pages/programs/seasonal.html') {
        enableTabs('SeasonsTabs');
    }
});

function enableTabs(querySelector) {
    // first, reference the .nav component that holds all tabs
    var myTabs = document.getElementById(querySelector);

    // Initialize a JavaScript reference for the "target" option
    var myTabsCollection = myTabs.getElementsByTagName('a');

    // Initialize the component for all items in the collection
    for (var i = 0; i < myTabsCollection.length; i++) {
        new Tab(myTabsCollection[i]);
    }
}
