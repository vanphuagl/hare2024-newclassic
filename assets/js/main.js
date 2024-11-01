"use strict";

// ===== get height app =====
const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty(
        "--app-height",
        `${document.documentElement.clientHeight}px`
    );
};
window.addEventListener("resize", appHeight);

// ===== home =====
const homeFunc = () => {

}

window.onload = () => {
    appHeight();
    homeFunc();
};