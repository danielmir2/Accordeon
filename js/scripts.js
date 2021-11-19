window.onload = () => {

    // ### code ok ###
    let detailsAll = document.querySelectorAll("details");

    for (let details of detailsAll) {

        details.addEventListener("mouseover", function () {
            details.setAttribute("open", true);
        });

        details.addEventListener("mouseout", function () {
            details.removeAttribute("open");
        });

    }
}