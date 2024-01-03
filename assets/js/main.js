

function updateProfileData(profileData) {
   const name = document.getElementById('profile-name')
   name.innerText = profileData.name

    const profileJob = document.getElementById('profile-job')
    profileJob.innerText = profileData.job

    const profileLocation = document.getElementById('profile-location')
    profileLocation.innerText = profileData.location

    const profilePhone = document.getElementById('profile-phone')
    profilePhone.innerText = profileData.phone

    const profileMail = document.getElementById('profile-mail')
    profileMail.innerText = profileData.email

}



(async () => {
    const profileData = await getProfileData()
    updateProfileData(profileData)


})()
