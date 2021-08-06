const body = document.querySelector("body");
const overlay = document.querySelector("#overlay");

// Sidebar toggle
const side_menu_toggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const close_sidebar_menu = document.querySelector("aside .close-sidebar-btn");

if (side_menu_toggle) {
    side_menu_toggle.addEventListener("click", (e) => {
        e.preventDefault();
        sidebar.classList.add("show");
        overlay.style.display = "block";
    })
}

if (close_sidebar_menu) {
    close_sidebar_menu.addEventListener("click", (e) => {
        e.preventDefault();
        sidebar.classList.remove("show");
    });
}
if (overlay) {
    overlay.addEventListener("click", (e) => {
        sidebar.classList.remove("show");
        overlay.style.display = "none";
    });
}

// Show, hide password
const toggle_password_btns = document.querySelectorAll("i.toggle-password");

if (toggle_password_btns) {
    toggle_password_btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            btn.classList.toggle("fa-eye");
            btn.classList.toggle("fa-eye-slash");
            const element = btn.nextElementSibling;
            element.type = element.type === "password" ? "text" : "password";
        })
    });
}

// Swip on nav link Function
function swip_category(nav, first_container, second_container) {
    if (nav.classList.contains("active")) {
        first_container.classList.add("show");
        second_container.classList.remove("show");
    } else {
        first_container.classList.remove("show");
        second_container.classList.add("show");
    }
}

// income & expense categories
const income_nav = document.querySelector(".categories-section .income-nav");
const expense_nav = document.querySelector(".categories-section .expense-nav");
const income_categories_container = document.querySelector(".categories-section .income-categories-container")
const expenses_categories_container = document.querySelector(".categories-section .expense-categories-container")

// Swip categories
if (income_nav && expense_nav) {
    swip_category(income_nav, income_categories_container, expenses_categories_container);
    income_nav.addEventListener("click", (e) => {
        income_nav.classList.add("active");
        expense_nav.classList.remove("active");
        swip_category(income_nav, income_categories_container, expenses_categories_container);
    });

    expense_nav.addEventListener("click", (e) => {
        income_nav.classList.remove("active");
        expense_nav.classList.add("active");
        swip_category(income_nav, income_categories_container, expenses_categories_container);
    });
}

// Swip categoriy pie graph
const income_category_pie_nav = document.querySelector(".income-category-pie-nav");
const expense_category_pie_nav = document.querySelector(".expense-category-pie-nav");
const income_category_pie_container = document.querySelector(".income-category-pie-container");
const expense_category_pie_container = document.querySelector(".expense-category-pie-container");

if (income_category_pie_nav && expense_category_pie_nav) {
    swip_category(income_category_pie_nav, income_category_pie_container, expense_category_pie_container);
    income_category_pie_nav.addEventListener("click", (e) => {
        income_category_pie_nav.classList.add("active");
        expense_category_pie_nav.classList.remove("active");
        swip_category(income_category_pie_nav, income_category_pie_container, expense_category_pie_container);
    });

    expense_category_pie_nav.addEventListener("click", (e) => {
        income_category_pie_nav.classList.remove("active");
        expense_category_pie_nav.classList.add("active");
        swip_category(income_category_pie_nav, income_category_pie_container, expense_category_pie_container);
    });
}