window.onload = function () {
    let header = document.getElementsByTagName("header")[0];
    header.addEventListener("click", toggleDropdowns, true);
}

function show(element) {
    element.classList.add("show");
}

function hide(element) {
    element.classList.remove("show");
}

function isVisible(element) {
    return element.classList.contains("show");
}

function toggleDropdowns(event) {
    let target = event.target;
    let dropdownContainer = target.closest(".dropdown-container");

    if (dropdownContainer) {
        if (!target.closest(".dropdown-content")) {
            event && event.preventDefault();
            if (isVisible(dropdownContainer.getElementsByClassName("dropdown-content")[0]) &&
                !target.closest(".x-closeable")) {
                hideDropdowns(false);
            }
            else {
                hideDropdowns(target.closest(".x-closeable"))
                showDropdown(dropdownContainer);
            }
        }
        else {
            if (target.closest(".x-close-dropdown")) {
                event && event.preventDefault();
                hideDropdowns(true);
            }
        }
    }
    else {
        hideDropdowns(false);
    }
}

function showDropdown(container) {
    let button = container.getElementsByTagName("a")[0];
    let content = container.getElementsByClassName("dropdown-content")[0];
    let overlay = document.getElementsByClassName("overlay")[0];
    show(button);
    show(content);
    show(overlay);
}

function hideDropdowns(fromXCloseable) {
    let elements = document.querySelectorAll(".show");

    if (fromXCloseable) {
        for (element of elements) {
            hide(element);
        }
    }
    else {
        for (element of elements) {
            if (!element.closest(".x-closeable")) {
                hide(element);
            }
        }
    }
    
}