import { users } from "./data.js";

const form = document.getElementById("formAddUser");
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

function addUser(evento) {
    evento.preventDefault();

    const id = users.length ? users[users.length - 1].id + 1 : 1;

    users.push({
        id: id,
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value,
        nativeLang: "Español",
        city: document.getElementById("city").value.trim()
    });

    form.reset();
    drawTable();
}

function start() {
    drawTable();
}

form.addEventListener("submit", addUser);
document.addEventListener("DOMContentLoaded", start);
