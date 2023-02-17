const arrayInfoUA = {
    name:
        'Юрій Дучев',
    position:
        'Frontend Developer',
    headerDescription:
        'Маю досвід розробки сайта юрдичної компанії. Також зараз розробляю проект магазину крипто-гаманців. Є безперебійне світло та інтернет, тож у робочий час буду завжди на зв’язку. \n' +
        '\n' +
        'Знаю теорію та на практиці закріпив прийоми роботи з різними інструментами веб-розробки.\n' +
        '\n' +
        'Хочу застосовувати свої знання та продовжувати розвивати навички в галузі веб-розробки. Буду радий стати частиною команди та принести користь бізнесу.',
    experience:
        'ДОСВІД',
    frontend:
        'Front END - Фріланс\n' +
        '2022\n' +
        'розробляв сторінки магазинів, працював у команді по окремих частинах сайту, ставив ТЗ дизайнеру',
    logistic:
        'ЛОГІСТИКА - ЗА НАЙМОМ\n' +
        '06.2019 - 02.2022\n' +
        '\n' +
        '- консолідував, аналізував та оперував інформацією між відділами компаній для синхронної та злагодженої роботи та досягнення ключових показників ефективності. ',
    citrus:
        '\n' +
        '"Цитрус" - Інженер з персонального транспорту\n' +
        '01.2017 - 02.2019\n' +
        'Одеса:\n' +
        '- перевіряв і усував дефекти товару на місці в стислі терміни,\n' +
        '- допомагав виробнику в оптимізації процесів.  \n' +
        '\n' +
        'Київ:\n' +
        '- організував, налагодив роботу з  нуля та результативність служби в Київській області.',
    education:
        'ОСВІТА',
    educationSkills:
        'ІНСТИТУТ ХОЛОДУ, КРІОТЕХНОЛОГІЙ ТА ЕКОЕНЕРГЕТИКИ ІМЕНІ В.С. МАРТИНОВСЬКОГО ОНАХТ\n' +
        '2009 - 2014\n' +
        '\n' +
        'Факультет кріогенної техніки та технології',
    secondEducation:
        'ДОДАТКОВА ОСВІТА',
    softSkills:
        [
            'Бажання створювати та творити ',
            'Вміння працювати як в команді та на результат',
            'Наполегливість',
            'Здатність вирішувати суперечки',
            'Самодисципліна',
            'Вмію вкладатися в дедлайни',
            'Набутий навик дивитися на монітор більше 8 годин  в день і при цьому бути ефективним'
        ],
    contact: {
        contact: 'КОНТАКТИ',
        country: 'Україна, Одеса',
        phone: '+380953313102',
        email: 'dzewrpifzc@gmail.com',
        linkedIn: 'https://www.linkedin.com/in/reversegtlt/?originalSubdomain=ua',
        github: 'https://github.com/ReverseGTLT',
    }
}

const arrayInfoEN = {
    name:
        'Yurii Duchev',
    position:
        'Frontend Developer',
    headerDescription:
        'I have experience in developing a website for a law firm. I am also currently developing a project for a crypto-wallet store. There is uninterrupted light and the Internet, so I will always be in touch during working hours. \n' +
        '\n' +
        'I know the theory and in practice I have consolidated the techniques of working with various web development tools.\n' +
        '\n' +
        'I want to apply my knowledge and continue to develop my skills in the field of web development. I will be glad to be a part of the team and bring benefit to the business.',
    experience:
        'EXPERIENCE',
    frontend:
        'Front END - Freelance\n' +
        '2022\n' +
        'developed shop pages, worked in a team on separate parts of the site, set technical specifications for the designer',
    logistic:
        'LOGISTICS - FOR HIRE\n' +
        '06.2019 - 02.2022\n' +
        '\n' +
        '- consolidated, analyzed and operated information between company departments for synchronous and coordinated work and achievement of key performance indicators. ',
    citrus:
        '\n' +
        'Citrus - Personal transport engineer\n' +
        '01.2017 - 02.2019\n' +
        'Odessa:\n' +
        '- checked and eliminated product defects on the spot in a short period of time,\n' +
        '- helped the manufacturer in optimizing processes.  \n' +
        '\n' +
        'Kyiv:\n' +
        '- organized and improved the work from scratch and the effectiveness of the service in the Kyiv region.',
    education:
        'EDUCATION',
    educationSkills:
        'INSTITUTE OF COLD, CRYOTECHNOLOGY AND ECO-ENERGY NAMED BY V.S. MARTYNOVSKY ONAKHT\n' +
        '2009 - 2014\n' +
        '\n' +
        'Faculty of cryogenic engineering and technology',
    secondEducation:
        'ADDITIONAL EDUCATION',
    softSkills:
        ['The desire to create and create',
        'The ability to work as a team and for results',
        'Persistence',
        'The ability to resolve disputes',
        'Self-discipline',
        'I know how to stick to deadlines',
        'The acquired skill to look at the monitor for more than 8 hours a day and at the same time be efficient'],
    contact: {
        contact: 'CONTACTS',
        country: 'Ukraine, Odessa',
        phone: '+380953313102',
        email: 'dzewrpifzc@gmail.com',
        linkedIn: 'https://www.linkedin.com/in/reversegtlt/?originalSubdomain=ua',
        github: 'https://github.com/ReverseGTLT',
    }
}

const btnUa = document.querySelector('.language__btn-ua');
const headerContact = document.querySelector('.header__contact');
const btnEn = document.querySelector('.language__btn-en');
const languageBtn = document.querySelector('.language__btn');
const headerDescription = document.querySelector('.header__info-description');
const experience = document.querySelector('.experience');
const skills = document.querySelector('.skills');
let language = '';
languageBtn.addEventListener('click', onBtnLanguageClick)

innerHtml(arrayInfoEN)
function onBtnLanguageClick(e) {
    if (e.target === btnUa) {
        language = arrayInfoUA
    }
    if (e.target === btnEn) {
        language = arrayInfoEN
    }
    innerHtml(language)
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


//
const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}