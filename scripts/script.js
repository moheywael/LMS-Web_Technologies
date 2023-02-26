
// ============ variables
//Desktop Version
const navLink = document.querySelector(".elearning")
const menu = document.querySelector(".sidebar__body__nav-links__elearning-menu ")

const semesterWorkLink = document.querySelector(".sidebar__body__nav-links .semesterwork")
const semesterMenu = document.querySelector(".sidebar__body__nav-links__semesterwork-menu ")

const semesterWorkLinkMobile = document.querySelector(".semesterwork-mobile-btn")
const semesterMenuMobile = document.querySelector(".monile-menu .sidebar__body__nav-links__semesterwork-menu")

//Mobile Version
const navLinkMobile = document.querySelector(".side-menu-mobile li .elearning")
const menuMobile = document.querySelector(".side-menu-mobile .sidebar__body__nav-links__elearning-menu ")

// Activity Center For Desktop Version
const activityCenter = document.querySelector(".sidebar__body__activity-center-container__activity-center")

// Activity Center For Mobile Version
const activityCenterMobileElement = document.querySelector(".header__mobile-version__activity-center-container__activity-center")

// file uploaded section
const fileUploadedBtn = document.querySelector(".header__mobile-version__activity-center-container__activity-center__body-container__files-uploaded-container__header")
const fileUploadedBtnAngle = document.querySelector(".header__mobile-version__activity-center-container__activity-center__body-container__files-uploaded-container__header i")
const fileUploadedBody = document.querySelector(".header__mobile-version__activity-center-container__activity-center__body-container__files-uploaded-container__body")

// buttons
const headerMenuBtn = document.querySelector(".header__mobile-version__header-menu")
const sideMenuBtn = document.querySelector(".header__mobile-version__side-menu")

// menus
const headerMenuMobile = document.querySelector(".header-menu-mobile")
const sideMenuMobile = document.querySelector(".side-menu-mobile")


// 
const preloaderOverlay = document.querySelector(".preloader-overlay")


// ========================================================

semesterWorkLinkMobile.addEventListener("click", () => {
    semesterMenuMobile.classList.toggle("active")
})

fileUploadedBtn.addEventListener("click", () => {
    fileUploadedBody.classList.toggle("active")
    fileUploadedBtnAngle.classList.toggle("rotate")
})

semesterWorkLink.addEventListener("click", () => {
    semesterMenu.classList.toggle("active")
})

navLink.addEventListener("click", () => {
    menu.classList.toggle("active")
    document.querySelector(".elearning .fa-angle-down").classList.toggle("rotate")
})

navLinkMobile.addEventListener("click", () => {
    menuMobile.classList.toggle("active")
    document.querySelector(".elearning .fa-angle-down").classList.toggle("rotate")
})

activityCenter.addEventListener("click", (e) => {
    document.querySelector(".activity-center").classList.toggle("active")
})

// =================================

activityCenterMobileElement.addEventListener("click", (e) => {
    e.stopPropagation()
    activityCenterMobileElement.classList.add("active")

})

// err: why header btutton not open header menu ?
headerMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    activityCenterMobileElement.classList.contains("active") ? activityCenterMobileElement.classList.remove("active") : "";
    headerMenuMobile.classList.contains("active") ? headerMenuMobile.classList.remove("active") : "";
    sideMenuMobile.classList.add("active")
})

sideMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    activityCenterMobileElement.classList.contains("active") ? activityCenterMobileElement.classList.remove("active") : "";
    sideMenuMobile.classList.contains("active") ? sideMenuMobile.classList.remove("active") : "";
    headerMenuMobile.classList.add("active")
})

// =================================

// Stopping Their propegation

headerMenuMobile.addEventListener("click", (e) => {
    e.stopPropagation()
})

sideMenuMobile.addEventListener("click", (e) => {
    e.stopPropagation()
})

// err: why side btutton not open side menu ?

document.addEventListener("click", (e) => {
    e.stopPropagation()

    // it is working
    sideMenuMobile.classList.contains("active") ? sideMenuMobile.classList.remove("active") : "";

    // activityCenterMobileElement.classList.contains("active") ? activityCenterMobileElement.classList.remove("active") : "";

    if (activityCenterMobileElement.classList.contains("active")) {
        activityCenterMobileElement.classList.remove("active")
        fileUploadedBody.classList.remove("active")
    }

    headerMenuMobile.classList.contains("active") ? headerMenuMobile.classList.remove("active") : "";

})

window.addEventListener("load", () => {
    setTimeout(() => {
        // preloaderOverlay.style.display = "none"
        preloaderOverlay.remove()
    }, 2000)
})



sideMenuMobile.addEventListener("click", (e) => {
    e.stopPropagation()
})

function addingEventListener(parentElement, childElement, func, classToAdd, classFunc) {
    parentElement.addEventListener(func, (e) => {
        childElement.classList.classFunc
    })
}