window.addEventListener('DOMContentLoaded', async function () {
    var resp = await fetch("/public/bio.json");
    var bio = await resp.json();
    new NavBar({
        target: document.getElementById("nav-bar"),
        props: {
            iconUrl: "/public/images/icons/favicon.png",
            navItems: [
                "bio",
                "skills",
                "experience",
                "education",
                "showcase"
            ]
        }
    });
    new AboutMe({
        target: document.getElementById("bio"),
        props: {
            profileUrl: "/public/images/me.jpeg",
            me: bio.me,
            role: bio.role,
            company: bio.company
        }
    });
    new Section({
        target: document.getElementById("skills"),
        props: {
            InfoCard: InfoCard,
            ContentCard: Skills,
            infoProps: {
                title: "Skills",
                description: "I am inspired by creating great work with people who are as passionate as I am about building something awesome."
            },
            contentProps: {
                skills: bio.skills
            }
        }
    });
    new Section({
        target: document.getElementById("experience"),
        props: {
            InfoCard: InfoCard,
            ContentCard: Experience,
            infoProps: {
                title: "Experience",
                description: "A mind that is stretched by a new experience can never go back to its old dimensions."
            },
            contentProps: {
                experience: bio.experience
            }
        }
    });
    new Section({
        target: document.getElementById("education"),
        props: {
            InfoCard: InfoCard,
            ContentCard: Education,
            infoProps: {
                title: "Education",
                description: "All my life I have been driven by my strong belief that education is important. I try to learn something new every single day."
            },
            contentProps: {
                education: bio.education
            }
        }
    });
    new Section({
        target: document.getElementById("showcase"),
        props: {
            InfoCard: InfoCard,
            ContentCard: Showcase,
            infoProps: {
                title: "Showcase",
                description: "Projects matured enough to go to the production"
            },
            contentProps: {
                showcase: bio.showcase
            }
        }
    });
    // new Section({
    //     target: document.getElementById("contact"),
    //     props: {
    //         InfoCard: InfoCard,
    //         ContentCard: Skills,
    //         infoProps: {
    //             title: "Contact",
    //             description: "Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it."
    //         },
    //         contentProps: {
    //             skills: bio.skills
    //         }
    //     }
    // });
    new Credits({
        target: document.getElementById("credits"),
    });
});