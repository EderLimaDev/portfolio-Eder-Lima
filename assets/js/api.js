
// Fetch no arquivo json que está na pasta Data para preencher dinamicamente


async function getProfileData() {
   const url = "https://raw.githubusercontent.com/EderLimaDev/portfolio-Eder-Lima/main/data/profile.json";
   const response = await fetch(url)
   const profileData = await response.json()
   return profileData
  
}
  
