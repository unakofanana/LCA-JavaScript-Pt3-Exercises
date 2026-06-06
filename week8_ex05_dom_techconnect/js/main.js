let developers = [];
let cardView = true;

fetch("../developers.json")
    .then(response => response.json())
    .then(data => {

        developers = data;

        renderDevelopers(developers);
    });

function renderDevelopers(list) {

    const container =
        document.getElementById("developerContainer");

    container.innerHTML = "";

    document.getElementById("developerCount")
        .textContent =
        "Developers Displayed: " + list.length;

    list.forEach(dev => {

        const card = document.createElement("div");

        card.className = "col-md-4";

        card.innerHTML = `
            <div class="card p-3">
                <img src="${dev.avatar}" width="100">

                <h4>${dev.name}</h4>

                <p>${dev.role}</p>

                <p>${dev.skills.join(", ")}</p>

                <button
                    class="btn btn-warning hire-btn">
                    ${dev.availableForHire
                        ? "Available For Hire"
                        : "Not Available"}
                </button>
            </div>
        `;

        container.appendChild(card);
    });

    document
        .querySelectorAll(".hire-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    this.classList.toggle("btn-success");
                }
            );
        });
}

document
    .getElementById("searchInput")
    .addEventListener("input", function () {

        const value =
            this.value.toLowerCase();

        const filtered =
            developers.filter(dev =>
                dev.name.toLowerCase().includes(value) ||
                dev.role.toLowerCase().includes(value) ||
                dev.skills.join(" ")
                    .toLowerCase()
                    .includes(value)
            );

        renderDevelopers(filtered);
    });

document
    .getElementById("developerForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            document.getElementById("name").value;

        const role =
            document.getElementById("role").value;

        const skills =
            document.getElementById("skills")
            .value
            .split(",");

        if (
            name === "" ||
            role === "" ||
            skills.length === 0
        ) {
            alert("Fill in all fields");
            return;
        }

        developers.push({
            id: developers.length + 1,
            name,
            role,
            skills,
            avatar:
                "https://placehold.co/100x100",
            availableForHire: true
        });

        renderDevelopers(developers);

        this.reset();
    });

document
    .getElementById("toggleViewBtn")
    .addEventListener("click", function () {

        cardView = !cardView;

        document
            .getElementById("developerContainer")
            .classList.toggle("table-view");
    });