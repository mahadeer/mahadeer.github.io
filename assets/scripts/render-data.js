var __data__ = null;
var designation = $("#designation");

function RenderData(data) {
    __data__ = data;
    designation.html(`${data.role}, ${data.company}`);
    BuildSkillsSection(data.skills);
    BuildCreditsSection(data.credits);
    /* Register jQuery events */
    $('.explore-icon').click(BuildExploreStackModal);
}

function CalculateExperience(experience) {
    var dateStarted = new Date(experience.since);
    var dateEnded = (experience.upto) ? new Date(experience.upto) : new Date();
    return (dateEnded.getFullYear() - dateStarted.getFullYear()) + "." + (dateEnded.getMonth() - dateStarted.getMonth()) + " yrs"; // month zero based, explicitly eliminating +1
}

function BuildSkillsSection(skills) {
    var finalHTML = skills.map(skill => {
        var exploreHTML = `
        <a class="explore-icon" rel="tooltip" title="Explore stack" data-placement="auto" data-toggle="modal" data-target="#explore-stack" data-stack="${skill.key}">
            <img class="social-icon" src="assets/images/social/more.svg" alt="..." />
        </a>
        `;
        if (skill.stack.length == 0) {
            exploreHTML = "";
        }
        return BuildSkillTemplate(skill, exploreHTML);
    });
    skillsSection.html(`<ul class="skill-bars">${finalHTML.join("")}</ul>`);
}

function BuildSkillTemplate(skill, exploreHTML) {
    var experience = CalculateExperience(skill.experience);
    return `
            <li>
                <div class="percentile" style="width: ${skill.skillOut100}%;">
                    <span>${skill.skillOut100}%</span>
                </div>
                <strong>${skill.language || skill.framework} <small class="text-muted">${experience}</small> ${exploreHTML}</strong>
            </li>
        `;
}

function BuildCreditsSection(credits) {
    var finalHTML = Object.keys(credits).map(key => {
        var keyTemplate = credits[key].map(val => {
            if (typeof val == "object") {
                return `<li>
                    <a href="${val.link}">${val.name}</a>
                    <span class="text-muted">${val.attrition}</span>
                </li>`;
            } else {
                return `<li>${val}</li>`;
            }
        });
        return `
            <strong>${key}</strong>
            <ul>${keyTemplate.join("")}</ul>
        `;
    });
    creditsSection.html(`<ul class="credits-content">${finalHTML.join("")}</ul>`);
}

function BuildExploreStackModal(e) {
    var stackClicked = e.delegateTarget.dataset.stack;
    var stackContent = $("#stack-content");
    var stackLoader = $("#stack-loader");
    stackContent.html("");
    stackLoader.fadeIn();
    var finalHTML = __data__.skills
        .filter(skill => skill.key == stackClicked)
        .map(skill => skill.stack)[0]
        .map(stack => {
            return BuildSkillTemplate(stack, "");
        });
    stackContent.html(`<ul class="skill-bars">${finalHTML.join("")}</ul>`);
    $("#stack-loader").fadeOut("slow");
}