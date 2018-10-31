'use strict';

/* Dynamic Section */
var skillsSection = $("#skills");
var creditsSection = $("#credits");

$(document).ready(() => {
    $.getJSON("assets/scripts/data.json", RenderData)
        .fail(FetchFailed)
        .complete(() => {
            $('[rel="tooltip"]').tooltip({trigger: "hover"});
            $("#loader").fadeOut("slow");
        });
});

function FetchFailed(err) {
    var template = `
        <div class="failed-error">
            <h4>Sorry, some internal server error. Please try again later.</h4>
        </div>
    `;
    skillsSection.html(template);
    creditsSection.html(template);
}