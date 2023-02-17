
languageBtn.addEventListener('click', onBtnLanguageClick)

innerHtml(arrayInfoEN);
accordion();

function onBtnLanguageClick(e) {
    if (e.target === btnUa) {
        language = arrayInfoUA
    }
    if (e.target === btnEn) {
        language = arrayInfoEN
    }
    innerHtml(language)
    accordion();
}
function innerHtml(language) {
    headerContact.innerHTML = innerContact(language);
    headerDescription.textContent = language.name;
    headerDescription.insertAdjacentHTML('beforeend', innerPosition(language))
    headerDescription.insertAdjacentHTML('beforeend', innerHeaderDescription(language))
    experience.innerHTML = innerExperience(language);
    experience.insertAdjacentHTML('beforeend', innerEducation(language));
    experience.insertAdjacentHTML('beforeend', innerSecondEducation(language));
    skills.innerHTML = innerSkills();
    skills.insertAdjacentHTML('beforeend', innerSoftSkills(language));
}







