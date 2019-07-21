const captionLinks = Array.prototype.slice.call(document.querySelectorAll('.page-header__caption-link'))

if (captionLinks && captionLinks.length >= 2) {
    let activeLink;
    let activeTabMenuIndex;
    const tabMenus = Array.prototype.slice.call(document.querySelectorAll('.page-header__bottom .tab-menu'))

    captionLinks.forEach((element, index) => {
        if (element.classList.contains('active')) {
            activeLink = element;
            activeTabMenuIndex = index;
        }
        
        element.addEventListener('click', function(event) {
            event.preventDefault();
            if (this !== activeLink) {
                activeLink.classList.remove('active');
                activeLink = this;
                activeLink.classList.add('active');
                tabMenus[activeTabMenuIndex].classList.remove('active');
                console.log('Removed from', tabMenus[activeTabMenuIndex])
                activeTabMenuIndex = index;
                tabMenus[activeTabMenuIndex].classList.add('active');
                console.log('Added to', tabMenus[activeTabMenuIndex])
            }
        })
    });

    if (!activeLink) {
        activeLink = captionLinks[0];
        activeTabMenuIndex = 0;
    }


    tabMenus.forEach((element, index) => {
        if (index === activeTabMenuIndex) {
            element.classList.add('active')
        } else {
            element.classList.remove('active')
        }
    })
}