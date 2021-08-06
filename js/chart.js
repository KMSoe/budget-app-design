// Income, Expense Multiple Line Graph
const labels = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
];

const data = {
    labels: labels,
    datasets: [{
        label: "Income",
        backgroundColor: "#08fa08",
        borderColor: "#08fa08",
        data: [0, 160000, 150000, 130000, 130000, 30000, 30000, 115000],
    },
    {
        label: "Expense",
        backgroundColor: "#fa0808",
        borderColor: "#fa0808",
        data: [0, 94000, 121000, 75000, 65000, 33000, 35000, 110000],
    },
    ]
};

const table_config = {
    type: "line",
    data,
    options: {}
};

var table = new Chart(
    document.getElementById("income-expense-multi-line"),
    table_config
);

// Income Category Pie
const total_inc_cat_pie_data = {
    labels: ["Salary", "Part-time Job", "Pocket-money"],
    datasets: [{
        labels: ["Salary", "Part-time Job", "Pocket-money"],
        backgroundColor: ["#e33010", "#e7ab3c", "#3ce7e7"],
        data: [69.8, 22.8, 7.38], // 520000, 170000, 55000
        hoverOffset: 1
    }]
};

const total_inc_cat_config_pie = {
    type: "doughnut",
    data: total_inc_cat_pie_data,
    options: {
        aspectRatio: .8,
    }
};

var total_inc_cat_pie_chart = new Chart(
    document.getElementById("income-category-pie"),
    total_inc_cat_config_pie
);

// Expense Category Pie
// rental - 140000, food - 141000, drink- 5000, transportation - 32000, bill- 71000, beauty- 38000, 
// Health- 41000, Shopping- 75000
const total_exp_cat_pie_data = {
    labels: ["Home & Hostel Fee", "Food", "Drink", "Transportation", "Bill", "Beauty", "Health", "Shopping"],
    datasets: [{
        backgroundColor: ["#0068b2", "#e7ab3c", "#b7a8a3", "#d2f50a", "#85bb65", "#866b8d", "#e41809", "#b63333"],
        data: [25.78, 26, 1, 5.89, 13.08, 7, 7.55, 13.81],
        hoverOffset: 2
    }]
};

const total_exp_cat_config_pie = {
    type: "doughnut",
    data: total_exp_cat_pie_data,
    options: {
        aspectRatio: .8,
    }
};

var total_inc_exp_pie_chart = new Chart(
    document.getElementById("expense-category-pie"),
    total_exp_cat_config_pie
);

// var expense_category_pie_chart = new Chart(
//     document.getElementById("expense-category-pie"),
//     config_pie
// );