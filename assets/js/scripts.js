let tab_buttons = document.getElementsByClassName("tab-buttons")[0];
if (tab_buttons) {
    let btn = tab_buttons.querySelectorAll(".btn");
    btn.forEach((e, index) => {

        e.addEventListener("click", () => {
            btn.forEach(e2 => {
                if (e2.classList.contains("btn-dark")) {
                    e2.classList.add("btn-outline-dark")
                    e2.classList.remove("btn-dark")

                }
            })
            if (e.classList.contains("btn-outline-dark")) {
                e.classList.add("btn-dark");
                e.classList.remove("btn-outline-dark");
                let tab_id = e.getAttribute("data-tab-id")
                change_tab_section("tab_box", tab_id)
            }

        })

    })
}

function change_tab_section(tab_class, tab_id) {
    let tab_element = document.querySelectorAll("." + tab_class);
    tab_element.forEach(e => {
        if (!e.classList.contains("d-none")) {
            e.classList.add("d-none")
        }
    })
    if (document.getElementById(tab_id).classList.contains("d-none")) {
        document.getElementById(tab_id).classList.remove("d-none");
    }
}


// copyright year

const d = new Date();
let year = d.getFullYear();
let footer_current_year = document.querySelector("#footer .footer_current_year");
if (footer_current_year) {
    footer_current_year.innerText = year
}


$(document).ready(function () {
    function changeImageSrc() {
        if ($(window).width() < 768) { // Mobile view (you can adjust the width threshold as needed)
            $('.banner-image').attr('src', './assets/images2/ScoopedBannerv2.png');
        }
        if ($(window).width() > 768) {
            // PC view
            $('.banner-imagess').attr('src', './assets/images2/ScoopedBanner.png');
        }
    }

    // Call function on page load
    changeImageSrc();

    // Call function on window resize
    $(window).resize(function () {
        changeImageSrc();
    });
});
