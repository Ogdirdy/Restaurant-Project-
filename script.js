// Modal Functionality
function openModal(title, description, image) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    document.getElementById("modalImage").src = image;
    document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function (event) {
    let modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Filter Menu Function
function filterMenu() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let menuSections = document.querySelectorAll(".menu-section");

    menuSections.forEach(section => {
        let sectionTitle = section.querySelector("h1"); // Get the section title
        let menuItems = section.querySelectorAll(".menu-item");
        let foundInSection = false;

        menuItems.forEach(item => {
            let itemName = item.querySelector("h2").innerText.toLowerCase();
            if (itemName.includes(input)) {
                item.style.display = "block";
                foundInSection = true;
            } else {
                item.style.display = "none";
            }
        });

        // Hide the section title if no items match
        if (foundInSection) {
            section.style.display = "flex";
            sectionTitle.style.display = "block"; // Show the section title
        } else {
            section.style.display = "none";
            sectionTitle.style.display = "none"; // Hide the section title
        }
    });
}

// Keyboard Event Handling
function handleKeyDown(event) {
    if (event.key === 'Enter') {
        // Trigger the modal opening or any other action
        let menuItem = event.target.closest(".menu-item");
        if (menuItem) {
            let title = menuItem.querySelector("h2").innerText;
            let description = menuItem.querySelector("p").innerText;
            let image = menuItem.querySelector("img").src;
            openModal(title, description, image);
        }
    }
}

document.addEventListener('keydown', handleKeyDown);

let headerLinks = document.querySelectorAll('.header-links a');

headerLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
        headerLinks.forEach(otherLink => {
            if (otherLink !== link) {
                otherLink.style.opacity = '0.6';
            }
        });
    });

    link.addEventListener('mouseout', function () {
        headerLinks.forEach(otherLink => {
            otherLink.style.opacity = '1';
        });
    });
});

document.querySelector('.home-link').classList.add('active');
