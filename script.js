
//toggle sidebar
document.getElementById("active").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.display === "flex") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "flex";
    }
});

document.addEventListener("click", function (event) {
    const sidebar = document.getElementById("sidebar");
    const menuButton = document.getElementById("active");

    if (sidebar.style.display === "flex" && !sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.style.display = "none"; 
    }
});

let lastScroll = 0;
const sidebar = document.getElementById('sidebar');
const sidebarButton = document.querySelector('.open-sidebar');
let sidebarHidden = false; 

//toggle with button
function toggleSidebar() {
    if (sidebarHidden) {
        sidebar.classList.remove('hidden');
        sidebarHidden = false;
    } else {
        sidebar.classList.add('hidden');
        sidebarHidden = true;
    }
}

window.addEventListener('scroll', handleScroll);
sidebarButton.addEventListener('click', toggleSidebar);

//lightmode||darkmode

