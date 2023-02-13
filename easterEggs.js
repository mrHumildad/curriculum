///// calculate age in years and days
const birthDate = new Date(253536050000)
const now = Date.now()
const years = document.getElementById("years")
const days = document.getElementById("days")
let ageMs = now - birthDate
daysMs = ageMs % 31536000000 
years.innerText = Math.round(ageMs/31536000000)
days.innerText = Math.round(daysMs/86400000)
///


