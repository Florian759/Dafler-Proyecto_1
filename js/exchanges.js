import { exchanges, lang, levels, type, users } from "./data.js";

const table = document.getElementById("exchange-table");
const count = document.getElementById("count");
const languageHTML = document.getElementById("language");
const levelHTML = document.getElementById("level");
const modalityHTML = document.getElementById("modality");
const userHTML = document.getElementById("user");

function drawTable() {
    const rows = exchanges.map((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.service}</td>
            <td>${item.title}</td>
            <td>${item.lang}</td>
            <td>${item.level}</td>
            <td>${item.modality}</td>
            <td>${item.user}</td>
            <td>${item.date}</td>
            <td><button class="btn btn-danger btn-sm">Eliminar</button></td>
        `;

        row.querySelector("button").addEventListener("click", () => deleteExchange(item.id));

        return row;
    });

    table.replaceChildren(...rows);

    count.textContent = exchanges.length;
}

function deleteExchange(id) {
    const index = exchanges.findIndex((exchange) => exchange.id === id);
    exchanges.splice(index, 1);
    drawTable();
}

function fillLangs() {
    lang.forEach((item) => {
        languageHTML.add(new Option(item, item));
    });
}

function fillLevels() {
    levels.forEach((item) => {
        levelHTML.add(new Option(item, item));
    });
}

function fillModalities() {
    type.forEach((item) => {
        modalityHTML.add(new Option(item, item));
    });
}

function fillUsers() {
    users.forEach((item) => {
        userHTML.add(new Option(item.name, item.id));
    });
}

function start() {
    fillLangs();
    fillLevels();
    fillModalities();
    fillUsers();

    drawTable();
}



document.addEventListener("DOMContentLoaded", start);