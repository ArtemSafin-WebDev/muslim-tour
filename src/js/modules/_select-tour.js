let activeLink = document.querySelector(".page-header__caption-link.active");

if (activeLink) {
    function moveActiveLinkToBeginning() {
        activeLink.parentElement.insertBefore(
            activeLink,
            activeLink.parentElement.firstChild
        );
    }

    function moveActiveMenuItemToBeginning() {
        const activeTabItem = document.querySelector(
            ".tab-menu.active .tab-menu__tab--is-active"
        );

        if (activeTabItem) {
            const activeTabItemScrollingContainer =
                activeTabItem.parentElement.parentElement;
            const activeTabOffsetLeft = activeTabItem.offsetLeft;
            const paddingLeft = parseFloat(
                window
                    .getComputedStyle(activeTabItem.parentElement)
                    .getPropertyValue("padding-left")
            );
            activeTabItemScrollingContainer.scrollLeft =
                activeTabOffsetLeft - paddingLeft;
        }
    }

    moveActiveMenuItemToBeginning();

    window.addEventListener("resize", moveActiveMenuItemToBeginning);
}
