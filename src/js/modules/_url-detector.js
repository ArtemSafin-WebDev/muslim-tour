const link = document.querySelector(".dv__select-link");

const select = document.querySelector(".dv__select");
const dvTabs = document.querySelector(".dv__tabs");

if (link && select && dvTabs) {
    let tourID = 1;
    let month = null;
    let baseURL = '';

    function setURL() {
        link.href = `${baseURL}?tourID=${tourID}` + (month ? `&monthID=${month}` : "");
    }

    function hasMonth(element) {
        if (element.querySelector(".dv_sm")) {
            return true;
        } else {
            return false;
        }
    }

    function gatherInfo() {
        console.log('Gathering info')
        const tourInfo = select.querySelector(`[data-id="${tourID}"]`);
        if (tourInfo) {
            baseURL = tourInfo.getAttribute('data-url');
            console.log('Setting Base URL', baseURL);
        }
        if (hasMonth(tourInfo)) {
            const b = tourInfo.querySelector("b");
            let newMonth;
            if (b) {
                newMonth = b.getAttribute("data-month");
            }
            if (!newMonth) {
                newMonth = tourInfo.querySelector(".dv_sm li:first-child > div")
                    .dataset.month;
            }
            month = newMonth;
        }
    }

    gatherInfo();

    setURL();

    select.addEventListener("tourmonthclick", function(event) {
        const tourInfo = select.querySelector(`[data-id="${tourID}"]`);
        if (hasMonth(tourInfo)) {
            month = event.detail;
        } else {
            month = null;
        }

        setURL();
    });

    dvTabs.addEventListener("tourtypeclick", function(event) {
        tourID = event.detail;
        const tourInfo = select.querySelector(`[data-id="${tourID}"]`);
        if (!hasMonth(tourInfo)) {
            month = null;
        }

        gatherInfo();
        setURL();
    });
}
