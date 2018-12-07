document.addEventListener('DOMContentLoaded', function() {
    // Occur only in index page
    if(document.location.pathname === '/') {
        navBrandAnimation('logo-animation', 2500, 400);
    } else {
        navBrandAnimation('main-logo-animation', 5000, 5000);
    }
});

function navBrandAnimation(classSelector, timer, nestedTimer) {
    var $navLogos = document.getElementsByClassName(classSelector);

    for (var i = 0; i <= $navLogos.length; i++) {
        var innerVar = 0;
        (function() {
            var el = $navLogos[i];

            // Display and Flip Brand Logo
            setTimeout(function() {
                el.style.display = 'inline-block';
                el.className += ' flip-in';

                // Flip Out Brand Logo
                setTimeout(function() {
                    el.className += ' flip-out';
                    //  and Hide
                    setTimeout(function() {
                        innerVar++;
                        el.style = '';
                        el.className = classSelector;
                        innerVar === $navLogos.length ?
                        navBrandAnimation('main-logo-animation', 25000, 9000) : 'Don\'t do anything';
                    }, nestedTimer * i);
                }, nestedTimer * i);
            }, timer * i);
        })(i);
    }
}
