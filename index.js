//setting variables
let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"]

//reference formula: d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7

//html linking
let genders = document.getElementsByClassName('gender')
let date = document.getElementsByClassName('date').value
let month = document.getElementsByClassName('month').value
let year = document.getElementsByClassName('year').value

//calculating day value
function calculateDayValue() {
    CC = parseInt(year.substring(0, 2));
    YY = parseInt(year.substring(2, 4));
    MM = parseInt(month);
    DD = parseInt(date);
    d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
    console.log (d);
    return (math.floor(d));
}






