function innerPosition(language) {
    return `
    <p class="header__info-position">${language.position}</p>
    `
}
function innerHeaderDescription(language) {
    return `
    <p class="header__info-text">${language.headerDescription}</p>
    `
}
function innerExperience(language) {
    return `
    <h3 class="experience__title accordion">${language.experience}</h3>
    <div class="panel">
        <p class="experience__description">${language.frontend}</p>
        <p class="experience__description">${language.logistic}</p>
        <p class="experience__description">${language.citrus}</p>
    </div>
    `
}

function innerEducation(language) {
    return `
    <h3 class="education__title accordion">${language.education}</h3>
    <div class="panel">
        <p class="education__description">${language.educationSkills}</p>
    </div>
    `
}

function innerSecondEducation(language) {
    return `
    <h3 class="second-education__title accordion">${language.secondEducation}</h3>
    <div class="panel">
        <p class="second-education__description">HILLEL IT SCHOOL - FRONT END BASIC
        2022
        <br>
        HILLEL IT SCHOOL - FRONT END PRO
        2022</p>
    </div>
    `
}

function innerSkills() {
    return `
    <h3 class="skills__title accordion">HARD SKILLS</h3>
    <div class="panel">
        <ul class="skills__list">
            <li class="skills__item">HTMl</li>
            <li class="skills__item">CSS Grid, Flex</li>
            <li class="skills__item">SCSS</li>
            <li class="skills__item">JavaScript</li>
            <li class="skills__item">React</li>
            <li class="skills__item">jQuery</li>
            <li class="skills__item">Ajax</li>
            <li class="skills__item">Node.js</li>
            <li class="skills__item">Webpack</li>
            <li class="skills__item">Gulp</li>
            <li class="skills__item">Redux</li>
            <li class="skills__item">Git, Github</li>
            <li class="skills__item">Bootstrap 5</li>
            <li class="skills__item">Adaptive layout</li>
        </ul>
    </div>
    `
}

function innerSoftSkills(language) {
    return `
    <h3 class="skills-soft__title accordion">SOFT SKILLS</h3>
    <div class="panel">
        <ul class="skills-soft__list">
            <li class="skills-soft__item">${language.softSkills[0]}</li>
            <li class="skills-soft__item">${language.softSkills[1]}</li>
            <li class="skills-soft__item">${language.softSkills[2]}</li>
            <li class="skills-soft__item">${language.softSkills[3]}</li>
            <li class="skills-soft__item">${language.softSkills[4]}</li>
            <li class="skills-soft__item">${language.softSkills[5]}</li>
            <li class="skills-soft__item">${language.softSkills[6]}</li>
        </ul>
    </div>  
    `
}

function innerContact(language) {
    return `
    <ul class="skills-contact__list">
        <li class="skills-contact__item">
            <a target="_blank" class="skills-contact__link" href="tel:${language.contact.phone}"><img src="image/free-icon-phone-call-4041480.png" alt="phone"></a>
        </li>
        <li class="skills-contact__item">
            <a target="_blank" class="skills-contact__link" href="mailto:${language.contact.email}"><img src="image/free-icon-mail-9628495.png" alt="phone"></a>
        </li>
        <li class="skills-contact__item">
            <a target="_blank" class="skills-contact__link" href="${language.contact.linkedIn}"><img src="image/free-icon-linkedin-665212.png" alt="phone"></a>
        </li>
        <li class="skills-contact__item">
            <a target="_blank" class="skills-contact__link" href="${language.contact.github}"><img src="image/free-icon-github-2564671.png" alt="phone"></a>
        </li>
    </ul>    
    `
}

function innerHobby(language) {
    return `
    <h3 class="skills-hobby__title accordion">${language.hobby.name}</h3>
    <div class="panel">
        <ul class="skills-hobby__list">
            <li class="skills-hobby__item">${language.hobby.hobby0}</li>
            <li class="skills-hobby__item">${language.hobby.hobby1}</li>
            <li class="skills-hobby__item">${language.hobby.hobby2}</li>
            <li class="skills-hobby__item">${language.hobby.hobby3}</li>
        </ul>
    </div>  
    `
}