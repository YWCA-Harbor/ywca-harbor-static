document.addEventListener('DOMContentLoaded', function() {
    toggleDropdownMobile();

    // Occur only in index page
    if(document.location.pathname === '/') {
        navBrandAnimation('logo-animation', 2500, 400);
    } else {
        mainNavBrandAnimation('main-logo-animation');
    }
});

function navBrandAnimation(classSelector, timer, nestedTimer) {
    var $navLogos = document.getElementsByClassName(classSelector);

    for (var i = 0; i <= $navLogos.length; i++) {
        var innerVar = 0;
        (function() {
            if(typeof $navLogos[i] === 'undefined') {
                return;
            }

            var el = $navLogos[i];

            // Display and Flip Brand Logo
            setTimeout(function() {
                el.style.display = 'inherit';
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
                        mainNavBrandAnimation('main-logo-animation') : 'Don\'t do anything';
                    }, nestedTimer * i);
                }, nestedTimer * i);
            }, timer * i);
        })(i);
    }
}

function mainNavBrandAnimation(classSelector) {
    var $navLogos = document.getElementsByClassName(classSelector);

    for (var el of $navLogos) {
        el.style.display = 'inherit';
        el.className += ' flip-in';
    }
}

function toggleDropdownMobile() {
    if(window.innerWidth >= 768) {
        return;
    }

    var $dropDown = document.getElementsByClassName('nav-dropdown');

    for(var el of $dropDown) {
        var $dropDownLink = document.getElementsByClassName(el.classList[1])[0];
        listenFor($dropDownLink);
    }
}

function listenFor(el) {
    el.addEventListener('click', function(){
        if (el.classList.contains('active')) {
            el.className = el.className.replace(/\bactive\b/g, '');
        } else {
            el.className += ' active';
        }
    });
}