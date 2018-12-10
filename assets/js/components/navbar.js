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

        // Display and Flip Brand Logo
        setTimeout((function(j) {
            // Edge case
            if(typeof $navLogos[j] === 'undefined') {
                return;
            }

            var el = $navLogos[j];
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
                    if(innerVar === $navLogos.length) {
                        mainNavBrandAnimation('main-logo-animation');
                    }
                }, nestedTimer * i);
            }, nestedTimer * i);
        }).bind(null, i), timer * i);
    }
}

function mainNavBrandAnimation(classSelector) {
    var $navLogos = document.getElementsByClassName(classSelector);

    for (var i = 0; i < $navLogos.length; i++) {
        var el = $navLogos[i];
        el.style.display = 'inherit';
        el.className += ' flip-in';
    }
}

function toggleDropdownMobile() {
    var $dropDown = document.getElementsByClassName('nav-dropdown');

    for(var i = 0; i < $dropDown.length; i++) {
        var el = $dropDown[i];
        var $dropDownLink = document.getElementsByClassName(el.classList[1])[0];
        listenFor($dropDownLink);
    }
}

function listenFor(el) {
    el.addEventListener('click', function(){
        var $activeEl = document.getElementsByClassName('nav-dropdown active');

        for(var i = 0; i < $activeEl.length; i++) {
            var $active = $activeEl[i];

            if($active !== el) {
                $active.className = $active.className.replace(/\bactive\b/g, '');
            }
        }

        if (el.classList.contains('active')) {
            el.className = el.className.replace(/\bactive\b/g, '');
        } else {
            el.className += ' active';
        }
    });
}
