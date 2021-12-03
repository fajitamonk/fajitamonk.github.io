/* https://www.youtube.com/watch?v=GJKOm9gR4Xw&ab_channel=WaelYasmina */

const projects = document.querySelectorAll(".project-card");

document.addEventListener("scroll", function() {
    const clientHeight = document.documentElement.clientHeight;
    const projectsY = projects[1].getBoundingClientRect().y;


    if (clientHeight > projectsY) {
        projects[0].style.animation =
            "fadeInUp 1.5s forwards";
        projects[1].style.animation =
            "fadeInUp 1.5s 0.2s forwards";
        projects[2].style.animation =
            "fadeInUp 1.5s 0.4s forwards";
        projects[3].style.animation =
            "fadeInUp 1.5s 0.6s forwards";
    } else {
        projects[0].style.animation =
            " 1.5s forwards";
        projects[1].style.animation =
            " 1.5s 0.2s forwards";
        projects[2].style.animation =
            " 1.5s 0.4s forwards";
        projects[3].style.animation =
            " 1.5s 0.6s forwards";
    }
});