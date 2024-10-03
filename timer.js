const endDate = "30 december 2025 12:00 AM"
document.getElementById("end-date").innerText = endDate;

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = end - now;
    console.log(diff);
}

clock()