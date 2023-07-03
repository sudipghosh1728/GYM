const selected = document.querySelector("#level");
selected.addEventListener("input", lvl);
var badge = document.getElementsByTagName("i");


function lvl(e) {
    for (i = 0; i < 15; i++) {
        badge[i].classList.replace("bi-lightning-charge-fill", "bi-lightning-charge");
    }

    if (e.target.value == "Beginner") {
        for (i = 0; i < 15; i += 3) {
            badge[i].classList.replace("bi-lightning-charge", "bi-lightning-charge-fill");
        }
    }

    if (e.target.value == "Intermediate") {
        for (i = 1; i <= 15; i++) {
            if (i % 3 != 0) {
                badge[i - 1].classList.replace("bi-lightning-charge", "bi-lightning-charge-fill");
            }
        }
    }
    if (e.target.value == "Advanced") {
        for (i = 0; i < 15; i++) {
            badge[i].classList.replace("bi-lightning-charge", "bi-lightning-charge-fill");
        }
    }
}