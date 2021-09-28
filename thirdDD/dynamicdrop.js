function populate(s1, s2) {
    s1 = document.getElementById(s1);
    s2 = document.getElementById(s2);

    s2.innerHTML = "";

    if (s1.value == "NIGERIA") {
        var optionArr = [
            "|Select State",
            "BAYELSA|BAYELSA",
            "CROSS RIVER|CROSS RIVER",
            "EDO|EDO",
            "EKITI|EKITI",
            "ONDO|ONDO",
            "OSUN|OSUN",
            "LAGOS|LAGOS",
            "OGUN|OGUN",
            "OYO|OYO",
            "BENUE|BENUE",
            "KOGI|KOGI",
            "RIVERS|RIVERS",
            "FCT|FCT",
            "KWARA|KWARA",
            "NIGER|NIGER",
            "NASARAWA|NASARAWA",
            "TARABA|TARABA",
            "PLATEAU|PLATEAU",
            "GOMBE|GOMBE",
            "ADAMAWA|ADAMAWA",
            "KADUNA|KADUNA",
            "BORNO|BORNO",
            "IMO|IMO",
            "BAUCHI|BAUCHI",
            "KANO|KANO",
            "JIGAWA|JIGAWA",
            "YOBE|YOBE",
            "KATSINA|KATSINA",
            "KEBBI|KEBBI",
            "ZAMFARA|ZAMFARA",
            "SOKOTO|SOKOTO",
            "OTHERS|OTHERS",
            "ABIA|ABIA",
            "AKWA IBOM|AKWA IBOM",
            "ANAMBRA|ANAMBRA",
            "EBONYI|EBONYI",
            "ENUGU|ENUGU",
            "DELTA|DELTA"
        ];
    }

    for (var option in optionArr) {
        var pair = optionArr[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    } 
}