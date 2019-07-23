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
    }


    const initialActiveTab = setActiveTab.bind(captionLinks[0]);
    initialActiveTab();

    captionLinks.forEach(link => {
        link.addEventListener("click", setActiveTab);
    });

    
}
