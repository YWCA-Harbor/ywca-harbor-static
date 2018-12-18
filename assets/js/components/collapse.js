document.addEventListener('DOMContentLoaded', function() {
    if(window.location.pathname === '/contact-us.html') {
        enableCollapse('contactUsResources');
    }
});

function enableCollapse(querySelector) {
    // grab the accordion by its ID
    var myAccordion = document.getElementById(querySelector);

    // grab the collapsible triggers for this accordion
    var myAccordionTriggers = myAccordion.querySelectorAll('[data-toggle="collapse"]');

    // initialize the component for each collapse trigger
    for (var i = 0; i < myAccordionTriggers.length; i++){
        new Collapse(myAccordionTriggers[i], {
        parent: myAccordion // this is the above defined object
    });
}
}