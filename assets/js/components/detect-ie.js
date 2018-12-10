// https://stackoverflow.com/a/10965073
if (window.attachEvent && !window.addEventListener) {
    // IE version at 8 and below
    var $body = document.body;
    $body.innerHTML = '<!-- #failureIE --> <div id="failureIE"> You are using an <strong>outdated</strong> browser. Please <a href="//browsehappy.com/">upgrade your browser</a> to improve your experience. </div> <!-- #failureIE -->';
}
