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

(async () => {
  const profileData = await getProfileData();
  updateProfileData(profileData);
  updateLanguagesSection(profileData);
  updateProfessionalExperience(profileData);
})();
