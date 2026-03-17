/* ===== LOAD EVENT ======= */
window.addEventListener("load",() =>{
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display="none",500);
});




/* ===== TYPING ANIMATION ===== */
const text = 
[
    "I am Web Designer",
    "I am Web Developer",
    "I am ASP.NET Developer"
]

let i = 0
let j = 0
let current = ""
let isDeleting = false

function type()
{
    current = text[i]
    if(!isDeleting)
    {
        document.querySelector(".typing").textContent = current.substring(0,j++)
    }
    else
    {
        document.querySelector(".typing").textContent = current.substring(0,j--)
    }

    if(!isDeleting && j === current.length)
    {
        isDeleting = true
        setTimeout(type,1000)
        return
    }

    if(isDeleting && j === 0)
    {
        isDeleting = false
        i++
        if(i === text.length)
        {
            i=0
        }
    }
    setTimeout(type,isDeleting ? 60 : 120)
}
type()


/* ===== MOBILE MENU VIEW ===== */
const menuBtn = document.querySelector(".menu-btn")
const menu = document.querySelector("nav ul")

menuBtn.onclick = () =>
{
    menu.classList.toggle("active")
}


/* ===== PARTICLES ===== */
particlesJS("particles-js",
    {
        particles:
        {
            number:{value:80},
            size:{value:3},
            color:{value:"#00f7ff"},
            line_linked : {
                enable : true,
                distance:150,
                color:"#00f7ff",
                opacity:0.4
            },
            move:{speed:2}
        }
})





/* ======== SKILLS SECTION ======== */
const cards = document.querySelectorAll(".skill-card");

cards.forEach(card => 
    {

    card.addEventListener("mousemove", e => 
        {
            let rect = card.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            let centerX = rect.width / 2;
            let centerY = rect.height / 2;

            let rotateX = -(y - centerY) / 10;
            let rotateY = (x - centerX) / 10;

            card.style.transform =`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

        });

    card.addEventListener("mouseleave", () => 
        {
            card.style.transform = "rotateX(0) rotateY(0)";

        });

});




/* ====== GITHUB PROJECT ===== */
async function loadGitHubProjects() {

    const username = "Manthan2214";

    const container = document.getElementById("github-projects");
    const comingSoon = document.getElementById("coming-soon");

    try {

        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await response.json();

        // REMOVE "Loading Projects..."
        container.innerHTML = "";

        if (repos.length > 0) {
            if (comingSoon) comingSoon.style.display = "none";
        }

        repos
        .filter(repo => !repo.fork)
        .slice(0,6)
        .forEach(repo => {

            const card = document.createElement("div");
            card.className = "project-card";

            card.innerHTML = `
            <div class="project-image">
                <img src="https://opengraph.githubassets.com/1/${username}/${repo.name}">
            </div>

            <div class="project-content">
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description available"}</p>

                <div class="project-buttons">
                    <a href="${repo.html_url}" target="_blank" class="btn-github">GitHub</a>
                    <a href="#" class="btn-demo">Live Demo</a>
                </div>
            </div>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading GitHub projects:", error);
    }
}
loadGitHubProjects();



/* ======= CONTACT FORM ===== */
// if (window.location.search.includes("success"))
// {
//     document.getElementById("form-success").style.display="block";
// }
