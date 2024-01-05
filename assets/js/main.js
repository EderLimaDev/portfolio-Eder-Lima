function updateProfileData(profileData) {
  const photo = document.getElementById("profile-photo");
  photo.src = profileData.photo;

  const name = document.getElementById("profile-name");
  name.innerText = profileData.name;

  const profileJob = document.getElementById("profile-job");
  profileJob.innerText = profileData.job;

  const profileLocation = document.getElementById("profile-location");
  profileLocation.innerText = profileData.location;

  const profilePhone = document.getElementById("profile-phone");
  profilePhone.innerText = profileData.phone;
  profilePhone.href = `tel:${profileData.phone}`;

  const profileMail = document.getElementById("profile-mail");
  profileMail.innerText = profileData.email;
  profileMail.href = `mailto:${profileData.email}`;
}

function updateLanguagesSection(profileData) {
  const languages = document.querySelector(".profile-languages");
  languages.innerHTML = profileData.languages
    .map((language) => `<li>${language}</li>`)
    .join(" ");
}

function updatePortfolioProjects(profileData) {
  const projectsPortfolio = document.getElementById('portfolio-projects')
  projectsPortfolio.innerHTML = profileData.portfolio.map((projects) => {
    return `<li>
    <h3 class="title github">${projects.name}</h3>
    <a href="${projects.url}" target="_blank" >${projects.url}</a
    >
  </li>`
  }).join(' ')
}

function updateProfessionalExperience(profileData) {
  const professionalExperience = document.getElementById("personal-experience");
  professionalExperience.innerHTML = profileData.professionalExperience.map(
    (experience) => {
      return  `
        <li>
            <h3 class="title">${experience.name}</h3>
            <p class="period">${experience.period}</p>
            <p>${experience.description}</p>
        </li>`
    }).join(' ')
}

function updateSkillsSection(profileData) {
  const profileSkillsTools = document.getElementById('profile-skills-tools')
  profileSkillsTools.innerHTML = profileData.skills.hardSkills.map((hardSkill) => {
    return `
    <li><img src='${hardSkill.logo}' alt='${hardSkill.name} logo' /></li>
    `
  }).join(' ')

  const personalSkills = document.getElementById('personal-profile-skills')
  personalSkills.innerHTML = profileData.skills.softSkills.map((softSkill) => {
    return `
    <li>${softSkill}</li>`
  }).join(' ')


}




(async () => {
  const profileData = await getProfileData();
  updateProfileData(profileData);
  updateLanguagesSection(profileData);
  updateProfessionalExperience(profileData);
  updateSkillsSection(profileData);
  updatePortfolioProjects(profileData);
})();
