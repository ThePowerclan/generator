/* Author FSWHO */

/* Generate Name */
function generateName(){
    const firstnames = ["Hope", "Launa", "Katherine", "Walker", "Moses", "Tayna", "Rosia", "Yahira", "Tommy", "Johannes", "Jacob", "Robbie", "Sheron", "Robin", "William", "George", "JOE"];
    const lastnames = ["Chauncey", "Maier", "Huber", "Gruber", "Lechner", "Graner", "Saner", "Cantor", "Cleland", "Maltby", "Mace", "Carlile"];

    const RandomName = `${firstnames[Math.floor(Math.random() * firstnames.length)]} ${lastnames[Math.floor(Math.random() * lastnames.length)]}`;
    return RandomName;
}

/* Generate Password */
function generatePassword(){
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890#*?@!$%&/()";
    var psw_places = document.querySelector("#password-get").value;

    var psw_places = document.querySelector("#password-get").value;
    var RandomPassword = "";

    for(var i = 1; i <= psw_places; i++){
        var randomValue = Math.floor(Math.random() * chars.length);
        RandomPassword += chars.substring(randomValue, randomValue + 1);
        
    }

    return RandomPassword;
}

/* Generate Birth Date */
function generateDate(){
    var day = Math.floor(Math.random() * (28 - 1) + 1);
    var month = Math.floor(Math.random() * (12 - 1) + 1);
    var year = Math.floor(Math.random() * (2020 - 1960) + 1960);

    var date = `${day}.${month}.${year}`;

    return date;
}

/* Generate City */
function generateCity(){

    const cities = ["Vienna", "Berlin", "Madrid", "Lissabon", "Koppenhagen", "Amsterdam", "Budapest", "Bern", "Bratislava", "Zagreb", "Bukarest", "Sofia"
    , "Washington", "Los Angeles", "San Francisco", "London", "Manchester", "New Delih", "Brasilia", "Buenos Aires", "Mexico City", "Ottawa", "Dublin", "Peking",
    "Tokio", "Athen", "Paris", "Athen", "Brüssel", "Kairo", "Kabul", "Nassau", "Jerusalem", "Rom", "Wellington", "Stockholm", "Helsinki", "Belgrad"
    ];

    const RandomCity = `${cities[Math.floor(Math.random() * cities.length)]}`;
    return RandomCity;
}

/* Generate String */
function generateString(){
    var chars = "abcdefghijklmnopqrstuvwxyz";
    var str_places = document.querySelector("#string-get").value;

    var str_places = document.querySelector("#string-get").value;
    var RandomString = "";

    for(var i = 1; i <= str_places; i++){
        var randomValue = Math.floor(Math.random() * chars.length);
        RandomString += chars.substring(randomValue, randomValue + 1);
        
    }

    return RandomString;
}

/* Generate Number */
function generateNumber(){

    var numbers = "1234567890";

    var number_places = document.querySelector("#number-get").value;
    var RandomNumber = "";

    for(var i = 1; i <= number_places; i++){
        var randomValue = Math.floor(Math.random() * numbers.length);
        RandomNumber += numbers.substring(randomValue, randomValue + 1);
        
    }

    return RandomNumber;
}

/* needed for txt file */
function save_txt(){
    var name = document.getElementById("gen-name").textContent;
    var password = document.getElementById("gen-password").textContent;
    var BirthDate = document.getElementById("gen-birthdate").textContent;
    var City = document.getElementById("gen-city").textContent;
    var RandomStrings = document.getElementById("gen-string").textContent;
    var Number = document.getElementById("gen-number").textContent;

    var data = [];
    data.push("Name: " + name);
    data.push("Password: " + password);
    data.push("Birth Date: " + BirthDate);
    data.push("City: " + City);
    data.push("Random Strings: " + RandomStrings);
    data.push("Number: " + Number);

    var data_string = JSON.stringify(data);
    var file = new Blob([data_string], {type:"text"});

    var anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = "values.txt";
    anchor.click();
}

/* Function to set all values to html when btn is clicked */
function generate(){

    if(document.getElementById("name-checkbox").checked){
        document.getElementById("gen-name").textContent = generateName();
    }

    if(document.getElementById("name-checkbox").checked === false){
        document.getElementById("gen-name").textContent = "Not Selected";
    }

    if(document.getElementById("password-checkbox").checked){
        document.getElementById("gen-password").textContent = generatePassword();
    }

    if(document.getElementById("password-checkbox").checked === false){
        document.getElementById("gen-password").textContent = "Not Selected";
    }

    if(document.getElementById("BirthDate-checkbox").checked){
        document.getElementById("gen-birthdate").textContent = generateDate();
    }

    if(document.getElementById("BirthDate-checkbox").checked === false){
        document.getElementById("gen-birthdate").textContent = "Not Selected"
    }

    if(document.getElementById("city-checkbox").checked){
        document.getElementById("gen-city").textContent = generateCity();
    }

    if(document.getElementById("city-checkbox").checked === false){
        document.getElementById("gen-city").textContent = "Not Selected"
    }

    if(document.getElementById("string-checkbox").checked){
        document.getElementById("gen-string").textContent = generateString();
    }

    if(document.getElementById("string-checkbox").checked === false){
        document.getElementById("gen-string").textContent = "Not Selected"
    }

    if(document.getElementById("number-checkbox").checked){
        document.getElementById("gen-number").textContent = generateNumber();
    }

    if(document.getElementById("number-checkbox").checked === false){
        document.getElementById("gen-number").textContent = "Not Selected"
    }
}
