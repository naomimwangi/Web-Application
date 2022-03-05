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
//validating gender input
function getGender() {
    if(genders[0] == true){
        let gender = "Male"
    }
    else if(genders[1] == true){
        let gender = "Female"
    }
    switch (gender) {
        case "Male":
            if (d == 1) {
                alert("You were born on " + days[0] + " and Your akan name is " + male[0]);
            }
            else if (d == 2) {
                alert("You were born on " + days[1] + " and Your akan name is " + male[1]);
            }
            else if (d == 3) {
                alert("You were born on " + days[2] + " and Your akan name is " + male[2]);
            }
            else if (d == 4) {
                alert("You were born on " + days[3] + " and Your akan name is " + male[3]);
            }
            else if (d == 5) {
                alert("You were born on " + days[4] + " and Your akan name is " + male[4]);
            }
            else if (d == 6) {
                alert("You were born on " + days[5] + " and Your akan name is " + male[5]);
            }
            else if (d == -0) {
                alert("You were born on " + days[6] + " and Your akan name is " + male[6]);
            }
            break;
        case "female":
            if (d == 1) {
                alert("You were born on " + days[0] + " and Your akan name is  " + female[0]);
            }
            else if (d == 2) {
                alert("You were born on " + days[1] + " and Your akan name is " + female[1]);
            }
            else if (d == 3) {
                alert("You were born on " + days[2] + " and Your akan name is " + female[2]);
            }
            else if (d == 4) {
                alert("You were born on " + days[3] + " and Your akan name is " + female[3]);
            }
            else if (d == 5) {
                alert("You were born on " + days[4] + " and Your akan name is " + female[4]);
            }
            else if (d == 6) {
                alert("You were born on " + days[5] + " and Your akan name is " + female[5]);
            } else if (d == -0) {
                alert("You were born on " + days[6] + " and Your akan name is " + female[6]);
            }
    }    
}







