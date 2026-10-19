import { users } from "./data.js";

const table = document.getElementById("usersTable");
const count = document.getElementById("count");

function drawTable() {
    const rows = users.map((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.nativeLang}</td>
            <td>${item.city}</td>
        `;

        return row;
    });

    table.replaceChildren(...rows);

    count.textContent = users.length;
}

function start() {
    drawTable();
}

document.addEventListener("DOMContentLoaded", start);
