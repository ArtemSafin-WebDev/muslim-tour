const captionLinks = Array.prototype.slice.call(
    document.querySelectorAll(".page-header__caption-link")
);

if (captionLinks && captionLinks.length >= 2) {
    let activeLink;
    let activeTab;
    const pageHeader = document.querySelector(".page-header__bottom");

    function setActiveTab(event) {
        if (this === activeLink) return;
        if (event) {
            event.preventDefault();
        }
        const hash = this.hash.substr(1);
        if (activeLink) {
            activeLink.classList.remove("active");
        }
        activeLink = this;
        activeLink.classList.add("active");
        if (activeTab) {
            activeTab.classList.remove("active");
        }
        const newActiveTab = pageHeader.querySelector(`[data-name='${hash}']`);
        if (newActiveTab) {
            activeTab = newActiveTab;
            activeTab.classList.add('active');
        }

        moveActiveLinkToBeginning();
    }

    function moveActiveLinkToBeginning() {
        activeLink.parentElement.insertBefore(activeLink, activeLink.parentElement.firstChild);
    }


    const initialActiveTab = setActiveTab.bind(captionLinks[0]);
    initialActiveTab();

    captionLinks.forEach(link => {
        link.addEventListener("click", setActiveTab);
    });



    function moveActiveMenuItemToBeginning() {
        const activeTabItem = document.querySelector('.tab-menu.active .tab-menu__tab--is-active');

        const activeTabItemScrollingContainer = activeTabItem.parentElement.parentElement;
        const activeTabOffsetLeft = activeTabItem.offsetLeft;
        const paddingLeft = parseFloat(window.getComputedStyle(activeTabItem.parentElement).getPropertyValue('padding-left'))

        // console.log('Scroll Width', containerScrollWidth);
        // console.log('Offset left', activeTabOffsetLeft);
        // console.log('Padding left', paddingLeft)
        // console.log(activeTabOffsetLeft - paddingLeft)

        activeTabItemScrollingContainer.scrollLeft = activeTabOffsetLeft - paddingLeft;
        
    }

    moveActiveMenuItemToBeginning();


    const debouncedmoveActiveMenuItemToBeginning = _.debounce(moveActiveMenuItemToBeginning, 300);

    window.addEventListener('resize', debouncedmoveActiveMenuItemToBeginning);

    
}
