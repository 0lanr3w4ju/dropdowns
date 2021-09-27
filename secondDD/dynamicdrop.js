function populate(s1, s2) {
    s1 = document.getElementById(s1);
    s2 = document.getElementById(s2);

    s2.innerHTML = "";

    if (s1.value == "BAYELSA") {
        var optionArr = [
            "|Select LGA",
            "BRASS|BRASS",
            "EKEREMOR|EKEREMOR",
            "KOLOKOMA/OPOKUMA|KOLOKOMA/OPOKUMA",
            "NEMBE|NEMBE",
            "OGBIA|OGBIA",
            "SAGBAMA|SAGBAMA",
            "SOUTHERN-IJAW|SOUTHERN-IJAW",
            "HOTEL RESERVATION SERVICES|HOTEL RESERVATION SERVICES",
            "YENEGOA|YENEGOA",
            "KEMBE|KEMBE"
        ];
    }

    if (s1.value == "CROSS RIVER") {
        optionArr = [
            "|Select LGA",
            "ABI|ABI",
            "AKAMKPA|AKAMKPA",
            "AKPABUYO|AKPABUYO",
            "BAKASSI|BAKASSI",
            "BEKWARA|BEKWARA",
            "BIASI|BIASI",
            "BOKI|BOKI",
            "CALABAR-MUNICIPAL|CALABAR-MUNICIPAL",
            "CALABAR-SOUTH|CALABAR-SOUTH",
            "ETUNK|ETUNK",
            "IKOM|IKOM",
            "OBANLIKU|OBANLIKU",
            "OBUBRA|OBUBRA",
            "OBUDU|OBUDU",
            "ODUKPANI|ODUKPANI",
            "OGOJA|OGOJA",
            "YAKURR|YAKURR",
            "YAKURR|YAKURR",
        ];
    }

    if (s1.value == "EDO") {
        optionArr = [
            "|Select LGA",
            "AKOKO-EDO|AKOKO-EDO",
            "EGOR|EGOR",
            "ESAN-CENTRAL|ESAN-CENTRAL",
            "ESAN-NORTH-EAST|ESAN-NORTH-EAST",
            "ESAN-NORTH-SOUTH|ESAN-NORTH-SOUTH",
            "ESAN-WEST|ESAN-WEST",
            "ETSAKO-CENTRAL|ETSAKO-CENTRAL",
            "ETSAKO-EAST|ETSAKO-EAST",
            "ETSAKO-WEST|ETSAKO-WEST",
            "IGUEBEN|IGUEBEN",
            "IKPOBA-OKHA|IKPOBA-OKHA",
            "OREDO|OREDO",
            "ORHIONWON|ORHIONWON",
            "OVIA-NORTH-EAST|OVIA-NORTH-EAST",
            "OVIA-SOUTH-WEST|OVIA-SOUTH-WEST",
            "OWAN-EAST|OWAN-EAST",
            "OWAN-WEST|OWAN-WEST",
            "YAKURR|YAKURR",
            "UHUNMWONDE|UHUNMWONDE"
        ];
    }

    if (s1.value == "EKITI") {
        optionArr = [
            "|Select LGA",
            "ADO-EKITI|ADO-EKITI",
            "AIYEDIRE|AIYEDIRE",
            "EFON|EFON",
            "EKITI-EAST|EKITI-EAST",
            "EKITI-SOUTH-WEST|EKITI-SOUTH-WEST",
            "EKITI-WEST|EKITI-WEST",
            "EMURE|EMURE",
            "IDO-OSI|IDO-OSI",
            "IJERO|IJERO",
            "IKERE|IKERE",
            "IKOLE|IKOLE",
            "ILEJEMEJE|ILEJEMEJE",
            "IREPODUN/IFELODUN| IREPODUN/IFELODUN",
            "ISE-ORUN|ISE-ORUN",
            "MOBA|MOBA",
            "OYE|OYE"
        ];
    }

    if (s1.value == "ONDO") {
        optionArr = [
            "|Select LGA",
            "AKOKO-NORTH-EAST|AKOKO-NORTH-EAST",
            "AKOKO-NORTH-WEST|AKOKO-NORTH-WEST",
            "AKOKO-SOUTH-WEST|AKOKO-SOUTH-WEST",
            "AKOKO-SOUTH-EAST|AKOKO-SOUTH-EAST",
            "AKOKO-SOUTH|AKOKO-SOUTH",
            "AKOKO-NORTH|AKOKO-NORTH",
            "ESE-ODO|ESE-ODO",
            "IDANRE|IDANRE",
            "IFREDORE|IFREDORE",
            "ILAJE|ILAJE",
            "ILAJE-WEST|ILAJE-WEST",
            "ILE-OLUJI-OKEIGBO|ILE-OLUJI-OKEIGBO",
            "IRELE|IRELE",
            "OKITIPUPA|OKITIPUPA",
            "ONDO-WEST|ONDO-WEST",
            "ONDO-EAST|ONDO-EAST",
            "OSE|OSE",
            "OWO|OWO",
            "AKURE NORTH|AKURE NORTH"
        ];
    }

    if (s1.value == "OSUN") {
        optionArr = [
            "|Select LGA",
            "ATAKUMOSA|ATAKUMOSA",
            "ATAKUMOSA EAST|ATAKUMOSA EAST",
            "AYEDADE|AYEDADE",
            "AYEDIRE|AYEDIRE",
            "BOLUWADURO|BOLUWADURO",
            "BORIPE|BORIPE",
            "EDE|EDE",
            "EDE NORTH|EDE NORTH",
            "EGBEDORE|EGBEDORE",
            "EJIGBO|EJIGBO",
            "IFE|IFE",
            "IFE EAST|IFE EAST",
            "IFE NORTH|IFE NORTH",
            "IFE SOUTH|IFE SOUTH",
            "IFEDAYO|IFEDAYO",
            "IFELODUN|IFELODUN",
            "ILA|ILA",
            "ILESHA|ILESHA",
            "ILESHA WEST|ILESHA WEST",
            "IREPODUN|IREPODUN",
            "IREWOLE|IREWOLE",
            "ISOKAN|ISOKAN",
            "IWO|IWO",
            "OBOKUN|OBOKUN",
            "ODO-OTIN|ODO-OTIN",
            "OLA OLUWA|OLA OLUWA",
            "OLORUNDA|OLORUNDA",
            "ORI-ADE|ORI-ADE",
            "OROLU|OROLU",
            "OSOGBO|OSOGBO"
        ];
    }

    if (s1.value == "LAGOS") {
        optionArr = [
            "|Select LGA",
            "AGEGE|AGEGE",
            "AJEROMI-IFELODUN|AJEROMI-IFELODUN",
            "ALIMOSHO|ALIMOSHO",
            "AMUWO-ODOFIN|AMUWO-ODOFIN",
            "APAPA|APAPA",
            "BADAGRY|BADAGRY",
            "EPE|EPE",
            "ETI-OSA|ETI-OSA",
            "IBEJU-LEKKI|IBEJU-LEKKI",
            "IFAKO-IJAIYE|IFAKO-IJAIYE",
            "IKEJA|IKEJA",
            "IKORODU|IKORODU",
            "KOSOFE|KOSOFE",
            "LAGOS ISLAND|LAGOS ISLAND",
            "LAGOS MAINLAND|LAGOS MAINLAND",
            "MUSHIN|MUSHIN",
            "OJO|OJO",
            "OSHODI-ISOLO|OSHODI-ISOLO",
            "SHOMOLU|SHOMOLU",
            "SURULERE|SURULERE"
        ];
    }

    if (s1.value == "OGUN") {
        optionArr = [
            "|Select LGA",
            "ABEOKUTA_NORTH|ABEOKUTA_NORTH",
            "ABEOKUTA_SOUTH|ABEOKUTA_SOUTH",
            "ADO-ODO/OTA|ADO-ODO/OTA",
            "YEWA-NORTH|YEWA-NORTH",
            "YEWA-SOUTH|YEWA-SOUTH",
            "EWEKORO|EWEKORO",
            "IDARAPO|IDARAPO",
            "IFO|IFO",
            "IJEBU-EAST|IJEBU-EAST",
            "IJEBU-NORTH|IJEBU-NORTH",
            "IJEBU NORTH-EAST|IJEBU NORTH-EAST",
            "IJEBU-ODE|IJEBU-ODE",
            "IKENNE|IKENNE",
            "ALARO|ALARO",
            "IMEKO-AFON|IMEKO-AFON",
            "IPOKIA|IPOKIA",
            "OBAFEMI-OWODE|OBAFEMI-OWODE",
            "ODEDA|ODEDA",
            "ODOGBOLU|ODOGBOLU",
            "OGUN WATERSIDE|OGUN WATERSIDE",
            "REMO-NORTH|REMO-NORTH",
            "SHAGAMU|SHAGAMU"
        ];
    }

    if (s1.value == "OYO") {
        optionArr = [
            "|Select LGA",
            "AFIJIO|AFIJIO",
            "AKINYELE|AKINYELE",
            "ATIBA|ATIBA",
            "EGBEDA|EGBEDA",
            "IBADAN CENTRAL|IBADAN CENTRAL",
            "IBADAN NORTH-EAST|IBADAN NORTH-EAST",
            "IBADAN NORTH WEST|IBADAN NORTH WEST",
            "IBADAN SOUTH EAST|IBADAN SOUTH EAST",
            "IBADAN SOUTH WEST|IBADAN SOUTH WEST",
            "IBARAPA CENTRAL|IBARAPA CENTRAL",
            "IBARAPA EAST|IBARAPA EAST",
            "IBARAPA NORTH|IBARAPA NORTH",
            "IDO|IDO",
            "IFEDAYO|IFEDAYO",
            "IFELOJU|IFELOJU",
            "IREPO|IREPO",
            "ISEYIN|ISEYIN",
            "ITESIWAJU|ITESIWAJU",
            "IWAJOWA|IWAJOWA",
            "KAJOLA|KAJOLA",
            "LAGELU|LAGELU",
            "ODO-OLUWA|ODO-OLUWA",
            "OGBOMOSO-NORTH|OGBOMOSO-NORTH",
            "OGBOMOSO-SOUTH|OGBOMOSO-SOUTH",
            "OLORUNSOGO|OLORUNSOGO",
            "OLUYOLE|OLUYOLE",
            "ONA-ARA|ONA-ARA",
            "ORELOPE|ORELOPE",
            "ORI-IRE|ORI-IRE",
            "OYO-EAST|OYO-EAST",
            "OYO-WEST|OYO-WEST",
            "SAKI-EAST|SAKI-EAST",
            "SAKI-WEST|SAKI-WEST",
            "SURULERE|SURULERE"
        ];
    }

    if (s1.value == "BENUE") {
        optionArr = [
            "|Select LGA",
            "ADO|ADO",
            "AGATU|AGATU",
            "APA|APA",
            "BURUKU|BURUKU",
            "GBOKO|GBOKO",
            "GUMA|GUMA",
            "GWER-EAST|GWER-EAST",
            "GWER-WEST|GWER-WEST",
            "KASTINA-ALA|KASTINA-ALA",
            "KONSHISHA|KONSHISHA",
            "KWANDE|KWANDE",
            "LOGO|LOGO",
            "MAKURDI|MAKURDI",
            "OBI|OBI",
            "OGBADIBO|OGBADIBO",
            "OHIMINI|OHIMINI",
            "OJU|OJU",
            "OKPOKWO|OKPOKWO",
            "OTUKPO|OTUKPO",
            "TARKA|TARKA",
            "VANDEIKYA|VANDEIKYA",
            "UKUM|UKUM",
            "USHONGO|USHONGO"
        ];
    }

    if (s1.value == "KOGI") {
        optionArr = [
            "|Select LGA",
            "ADAVI|ADAVI",
            "AJAOKUTA|AJAOKUTA",
            "ANKPA|ANKPA",
            "BASSA|BASSA",
            "DEKINA|DEKINA",
            "IHAJI|IHAJI",
            "IDAH|IDAH",
            "IGALAMELA|IGALAMELA",
            "IJUMU|IJUMU",
            "KABBA/BUMU|KABBA/BUMU",
            "KOGI|KOGI",
            "LOKOJA|LOKOJA",
            "MOPA-MURO-MOPI|MOPA-MURO-MOPI",
            "OFU|OFU",
            "OGORI/MAGONGO|OGORI/MAGONGO",
            "OKEHI|OKEHI",
            "OKENE|OKENE",
            "OLAMABORO|OLAMABORO",
            "OTUKPO|OTUKPO",
            "OMALA|OMALA",
            "OYI|OYI",
            "YAGBA-EAST|YAGBA-EAST",
            "YAGBA-WEST|YAGBA-WEST"
        ];
    }

    if (s1.value == "RIVERS") {
        optionArr = [
            "|Select LGA",
            "UGEP-NORTH|UGEP-NORTH",
            "ABUA/ODUAL|ABUA/ODUAL",
            "ANKPA|ANKPA",
            "AHOADA-EAST|AHOADA-EAST",
            "AHOADA-WEST|AHOADA-WEST",
            "AKUKUTORU|AKUKUTORU",
            "ANDONI|ANDONI",
            "ASARI-TORU|ASARI-TORU",
            "BONNY|BONNY",
            "DEGEMA|DEGEMA",
            "ELEME|ELEME",
            "ELFANE|ELFANE",
            "EMUOHA|EMUOHA",
            "ETCHE|ETCHE",
            "GOKANA|GOKANA",
            "IKWERRE|IKWERRE",
            "KHANA|KHANA",
            "OBIO/AKPOR|OBIO/AKPOR",
            "OGBA/EGBEMA/NDONI|OGBA/EGBEMA/NDONI",
            "OGU/BOLO|OGU/BOLO",
            "OKRIKA|OKRIKA",
            "OMUMA|OMUMA",
            "OPOBO/NKORO|OPOBO/NKORO",
            "OYIGBO|OYIGBO",
            "PORT-HARCOURT|PORT-HARCOURT",
            "TAI|TAI"
        ];
    }

    if (s1.value == "FCT") {
        optionArr = [
            "|Select LGA",
            "ABAJI|ABAJI",
            "AMAC|AMAC",
            "BWARI|BWARI",
            "GWAGWALADA|GWAGWALADA",
            "KUJE|KUJE",
            "KWALI|KWALI"
        ];
    }

    if (s1.value == "KWARA") {
        optionArr = [
            "|Select LGA",
            "ASA|ASA",
            "BARUTEN|BARUTEN",
            "EDU|EDU",
            "EKITI|EKITI",
            "IFELODUN|IFELODUN",
            "ILORIN-EAST|ILORIN-EAST",
            "ILORIN-SOUTH|ILORIN-SOUTH",
            "ILORIN-WEST|ILORIN-WEST",
            "IREPODUN|IREPODUN",
            "ISIN|ISIN",
            "KAIAMA|KAIAMA",
            "MORO|MORO",
            "OFFA|OFFA",
            "OKE-ERO|OKE-ERO",
            "OYUN|OYUN",
            "PATEGI|PATEGI"
        ];
    }

    if (s1.value == "NIGER") {
        optionArr = [
            "|Select LGA",
            "AGALE|AGALE",
            "AGWARA|AGWARA",
            "BIDA|BIDA",
            "BORGU|BORGU",
            "BOSSO|BOSSO",
            "CHANCHAGA|CHANCHAGA",
            "EDATI|EDATI",
            "GBAKO|GBAKO",
            "GUARA|GUARA",
            "KATCHA|KATCHA",
            "KONTAGORA|KONTAGORA",
            "LAPAI|LAPAI",
            "LAVUM|LAVUM",
            "MAGAMA|MAGAMA",
            "MARIGA|MARIGA",
            "MASHEGU|MASHEGU",
            "MOKWA|MOKWA",
            "MUYA|MUYA",
            "PAIKORO|PAIKORO",
            "RAFI|RAFI",
            "RIINU|RIINU",
            "SHIRORO|SHIRORO",
            "SULEJA|SULEJA",
            "TAFA|TAFA",
            "WUSHISHI"
        ];
    }

    if (s1.value == "NASARAWA") {
        optionArr = [
            "|Select LGA",
            "AKWANGA|AKWANGA",
            "AWE|AWE",
            "DOMA|DOMA",
            "KARU|KARU",
            "KEANA|KEANA",
            "KEFFI|KEFFI",
            "KOKOMA|KOKOMA",
            "LAFIA|LAFIA",
            "NASARAWA|NASARAWA",
            "NASSARA EGGON|NASSARA EGGON",
            "KAIAMA|KAIAMA",
            "OBI|OBI",
            "TOTO|TOTO",
            "OKE-ERO|OKE-ERO",
            "WAMBA|WAMBA"
        ];
    }

    if (s1.value == "TARABA") {
        optionArr = [
            "|Select LGA",
            "ARDO-KOLA|ARDO-KOLA",
            "BALI|BALI",
            "DOMA|DOMA",
            "DONGA|DONGA",
            "GASHIKA|GASHIKA",
            "GASSOL|GASSOL",
            "IBI|IBI",
            "JALINGO|JALINGO",
            "KARIM-LAMIDO|KARIM-LAMIDO",
            "KURMI|KURMI",
            "LAU|LAU",
            "OBI|OBI",
            "SARDAUNA|SARDAUNA",
            "TAKUM|TAKUM",
            "USSA|USSA",
            "WUKARI|WUKARI",
            "YORRO|YORRO",
            "ZING|ZING"
        ];
    }

    if (s1.value == "PLATEAU") {
        optionArr = [
            "|Select LGA",
            "BARKIN-LADI|BARKIN-LADI",
            "BASSA|BASSA",
            "BOKKOS|BOKKOS",
            "JOS-EAST|JOS-EAST",
            "JOS-NORTH|JOS-NORTH",
            "JOS-SOUTH|JOS-SOUTH",
            "KANAM|KANAM",
            "KANKE|KANKE",
            "LANGTANG-NORTH|LANGTANG-NORTH",
            "LANGTANG-SOUTH|LANGTANG-SOUTH",
            "MANGU|MANGU",
            "MIKANG|MIKANG",
            "PANKSHIN|PANKSHIN",
            "QUAN'ANPAN|QUAN'ANPAN",
            "USSA|USSA",
            "RIYOM|RIYOM",
            "SHENDAM|SHENDAM",
            "WASE|WASE"
        ];
    }

    if (s1.value == "GOMBE") {
        optionArr = [
            "|Select LGA",
            "AKKO|AKKO",
            "BALANGA|BALANGA",
            "BILIRI|BILIRI",
            "DUKKU|DUKKU",
            "FUNAKAYE|FUNAKAYE",
            "GOMBE|GOMBE",
            "KJALTUNGO|KJALTUNGO",
            "KWAMI|KWAMI",
            "NAFADA|NAFADA",
            "SHOMGOM|SHOMGOM",
            "YAMALTU/DEBA|YAMALTU/DEBA"
        ];
    }

    if (s1.value == "ADAMAWA") {
        optionArr = [
            "|Select LGA",
            "DEMSA|DEMSA",
            "FUFORE|FUFORE",
            "GANYE|GANYE",
            "GIREI|GIREI",
            "GOMBI|GOMBI",
            "GOMBE|GOMBE",
            "GUYUK|GUYUK",
            "HONG|HONG",
            "JADA|JADA",
            "JIMETA|JIMETA",
            "LAMURDE|LAMURDE",
            "MADAGALI|MADAGALI",
            "MAIHA|MAIHA",
            "MAYO-BELWA|MAYO-BELWA",
            "MICHIKA|MICHIKA",
            "MUBI NORTH|MUBI NORTH",
            "MUBI SOUTH|MUBI SOUTH",
            "NUMAN|NUMAN",
            "SHELLENG|SHELLENG",
            "SONG|SONG",
            "TOUNGO|TOUNGO",
            "YOLA|YOLA"
        ];
    }

    if (s1.value == "KADUNA") {
        optionArr = [
            "|Select LGA",
            "BIRNIN-GWARI|BIRNIN-GWARI",
            "CHIKUN|CHIKUN",
            "GIWA|GIWA",
            "GWAGWADA|GWAGWADA",
            "IGABI|IGABI",
            "IKARA|IKARA",
            "JABA|JABA",
            "JEMA'S|JEMA'S",
            "KACHIA|KACHIA",
            "KADUNA-NORTH|KADUNA-NORTH",
            "KAGARKO|KAGARKO",
            "KAJURU|KAJURU",
            "KAURU|KAURU",
            "KOKA/KAWO|KOKA/KAWO",
            "KUBAH|KUBAH",
            "KUDAN|KUDAN",
            "LERE|LERE",
            "MAKARFI|MAKARFI",
            "SABON-GARI|SABON-GARI",
            "SANGA|SANGA",
            "SOBA|SOBA",
            "TUNDUN-WADA/MAKERA|TUNDUN-WADA/MAKERA",
            "ZANGO-KATAF|ZANGO-KATAF",
            "ZARIA|ZARIA",
            "KADUNA-SOUTH|KADUNA-SOUTH"
        ];
    }

    if (s1.value == "BORNO") {
        optionArr = [
            "|Select LGA",
            "ABADAN|ABADAN",
            "ASKIRA-UBA|ASKIRA-UBA",
            "BAMA|BAMA",
            "BAYO|BAYO",
            "BIU|BIU",
            "CHIBOK|CHIBOK",
            "JABA|JABA",
            "DAMBOA|DAMBOA",
            "DIKWA|DIKWA",
            "GUBIO|GUBIO",
            "GUZAMALA|GUZAMALA",
            "GWOZA|GWOZA",
            "HAWUL|HAWUL",
            "JERE|JERE",
            "KAGA|KAGA",
            "KALA/BALGE|KALA/BALGE",
            "KUKAWA|KUKAWA",
            "KONDUGA|KONDUGA",
            "KWAYA-KUSAR|KWAYA-KUSAR",
            "MAFA|MAFA",
            "MAGUMERI|MAGUMERI",
            "MAIDUGURI|MAIDUGURI",
            "MARTE|MARTE",
            "MOBBAR|MOBBAR",
            "MONGUNO|MONGUNO",
            "NGALA|NGALA",
            "NGANZAI|NGANZAI",
            "SHANI|SHANI"
        ];
    }

    if (s1.value == "IMO") {
        optionArr = [
            "|Select LGA",
            "ABOH-MBAISE|ABOH-MBAISE",
            "AHIAZU-MBAISE|AHIAZU-MBAISE",
            "EHIME_MBANO|EHIME_MBANO",
            "EZINIHITTE|EZINIHITTE",
            "IDEATO-NORTH|IDEATO-NORTH",
            "IDEATO-SOUTH|IDEATO-SOUTH",
            "IHITTE/UBOMA|IHITTE/UBOMA",
            "IKEDURU|IKEDURU",
            "ISIALA-MBANO|ISIALA-MBANO",
            "ISU|ISU",
            "MBAITOLI|MBAITOLI",
            "NGOR-OKPALA|NGOR-OKPALA",
            "NJABA|NJABA",
            "NKWERRE|NKWERRE",
            "NWANGELE|NWANGELE",
            "OBOWO|OBOWO",
            "OGUTTA|OGUTTA",
            "OHAJI-EGBEMA|OHAJI-EGBEMA",
            "OKIGWE|OKIGWE",
            "MAFA|MAFA",
            "ONUIMO|ONUIMO",
            "ORLU|ORLU",
            "ORSU|ORSU",
            "MOBBAR|MOBBAR",
            "ORU-EAST|ORU-EAST",
            "ORU-WEST|ORU-WEST",
            "OWERRI MUNICIPAL|OWERRI MUNICIPAL",
            "OWERRI-NORTH|OWERRI-NORTH",
            "OWERRI-WEST|OWERRI-WEST"
        ];
    }

    if (s1.value == "BAUCHI") {
        optionArr = [
            "|Select LGA",
            "GIADE|GIADE",
            "ITAS/GADAU|ITAS/GADAU",
            "JAMA'ARE|JAMA'ARE",
            "KATAGUM|KATAGUM",
            "KIRFI|KIRFI",
            "MISAU|MISAU",
            "NINGI|NINGI",
            "SHIRA|SHIRA",
            "TAFAWA-BALEWA|TAFAWA-BALEWA",
            "TORO|TORO",
            "WARJI|WARJI",
            "ZAKI|ZAKI",
            "ALKALERI|ALKALERI",
            "BAUCHI|BAUCHI",
            "BOGORO|BOGORO",
            "DAMBAN|DAMBAN",
            "DARAZO|DARAZO",
            "DASS|DASS",
            "GAMAWA|GAMAWA",
            "GANJUWA|GANJUWA"
        ];
    }

    if (s1.value == "KANO") {
        optionArr = [
            "|Select LGA",
            "AJINGI|AJINGI",
            "ALBASU|ALBASU",
            "BAGWAI|BAGWAI",
            "BEBEJI|BEBEJI",
            "BICHI|BICHI",
            "BUNKURE|BUNKURE",
            "DALA|DALA",
            "DAMBATTA|DAMBATTA",
            "DAWAKIN-KUDU|DAWAKIN-KUDU",
            "DAWAKIN-TOFA|DAWAKIN-TOFA",
            "DOGUWA|DOGUWA",
            "FAGGAE|FAGGAE",
            "GABASAWA|GABASAWA",
            "GARKO|GARKO",
            "GARUN-MALLAM|GARUN-MALLAM",
            "GAYA|GAYA",
            "GEZAWA|GEZAWA",
            "GWALE|GWALE",
            "GWARZO|GWARZO",
            "KABO|KABO",
            "KANO-MUNICIPAL|KANO-MUNICIPAL",
            "KARAYE|KARAYE",
            "KIBIYA|KIBIYA",
            "KIRU|KIRU",
            "KUMBOTSO|KUMBOTSO",
            "KUNCHI|KUNCHI",
            "KURA|KURA",
            "MADOBI|MADOBI",
            "MAKODA|MAKODA",
            "MINJIBIR|MINJIBIR",
            "NASARAWA|NASARAWA",
            "RANO|RANO",
            "RIMIN-GADO|RIMIN-GADO",
            "RUGE|RUGE",
            "SHANONO|SHANONO",
            "SUMAILA|SUMAILA",
            "TAKAI|TAKAI",
            "TARAUNI|TARAUNI",
            "TOFA|TOFA",
            "TSANYAWA|TSANYAWA",
            "TUNDUN-WADA|TUNDUN-WADA",
            "UNGOGO|UNGOGO",
            "WARAWA|WARAWA",
            "WUDIT|WUDIT"
        ];
    }

    if (s1.value == "JIGAWA") {
        optionArr = [
            "|Select LGA",
            "AUYO|AUYO",
            "BABURA|BABURA",
            "BIRNIN-KUDU|BIRNIN-KUDU",
            "BIRNIWA|BIRNIWA",
            "BOSUWA|BOSUWA",
            "BUJI|BUJI",
            "DUTSE|DUTSE",
            "GAGARAWA|GAGARAWA",
            "GARKI|GARKI",
            "GUMEL|GUMEL",
            "GURI|GURI",
            "GWARAM|GWARAM",
            "GWIWA|GWIWA",
            "HADEJIA|HADEJIA",
            "JAHUN|JAHUN",
            "KAFIN-HAUSA|KAFIN-HAUSA",
            "KAUGAMA|KAUGAMA",
            "KAZAURE|KAZAURE",
            "KIRIKASAMMA|KIRIKASAMMA",
            "KIYAWA|KIYAWA",
            "MAIGATARI|MAIGATARI",
            "MALAM-MADURI|MALAM-MADURI",
            "MIGA|MIGA",
            "RINGIM|RINGIM",
            "RONI|RONI",
            "SULE-TANKARKAR|SULE-TANKARKAR",
            "TAURA|TAURA",
            "YANKWASHI|YANKWASHI"
        ];
    }

    if (s1.value == "YOBE") {
        optionArr = [
            "|Select LGA",
            "BADE|BADE",
            "BURSALI|BURSALI",
            "DAMATURU|DAMATURU",
            "FIKA|FIKA",
            "FUNE|FUNE",
            "BUJI|BUJI",
            "GEIDAM|GEIDAM",
            "GOGARAM|GOGARAM",
            "GUJIBA|GUJIBA",
            "GULANI|GULANI",
            "JAKUSKO|JAKUSKO",
            "GWARAM|GWARAM",
            "KARASUWA|KARASUWA",
            "HADEJIA|HADEJIA",
            "MACHINA|MACHINA",
            "NANGERE|NANGERE",
            "NGURUNGURUKAUGAMA",
            "POTISKUM|POTISKUM",
            "TARMUA|TARMUA",
            "YUNUSARI|YUNUSARI",
            "YUSUFARI|YUSUFARI"
        ];
    }

    if (s1.value == "KATSINA") {
        optionArr = [
            "|Select LGA",
            "BAKORI|BAKORI",
            "BATAGARAWA|BATAGARAWA",
            "BATSARI|BATSARI",
            "BAURE|BAURE",
            "BINDAWA|BINDAWA",
            "CHARANCHI|CHARANCHI",
            "DANJA|DANJA",
            "DANDUME|DANDUME",
            "DAN MUSA|DAN MUSA",
            "DAURA|DAURA",
            "DUTSI|DUTSI",
            "DUSTSINMA|DUSTSINMA",
            "FASKARI|FASKARI",
            "FUNTUA|FUNTUA",
            "INGAWA|INGAWA",
            "KAFUR|KAFUR",
            "KAITA|KAITA",
            "KANKARA|KANKARA",
            "KANKIA|KANKIA",
            "KASTINA|KASTINA",
            "KURFI|KURFI",
            "KUSADA|KUSADA",
            "KIBIYA|KIBIYA",
            "MAI-ADUA|MAI-ADUA",
            "KUMBOTSO|KUMBOTSO",
            "MALUMFASHI|MALUMFASHI",
            "KURA|KURA",
            "MANI|MANI",
            "MAKODA|MAKODA",
            "MASHI|MASHI",
            "NASARAWA|NASARAWA",
            "MATAZU|MATAZU",
            "MUSAWA|MUSAWA",
            "RIMI|RIMI",
            "SABUWA|SABUWA",
            "SUMAILA|SUMAILA",
            "SAFANA|SAFANA",
            "TARAUNI|TARAUNI",
            "SANDAMU|SANDAMU",
            "ZANGO|ZANGO"
        ];
    }

    if (s1.value == "KEBBI") {
        optionArr = [
            "|Select LGA",
            "ALEIRO|ALEIRO",
            "AREWA|AREWA",
            "ARGUNGU|ARGUNGU",
            "AUGIE|AUGIE",
            "BAGUDO|BAGUDO",
            "BIRNI-KEBBI|BIRNI-KEBBI",
            "BUMZA|BUMZA",
            "DANDI|DANDI",
            "DANKO|DANKO",
            "FAKAI|FAKAI",
            "GWANDU|GWANDU",
            "JEGA|JEGA",
            "KALGO|KALGO",
            "KOKO-BESSE|KOKO-BESSE",
            "MAIYAMA|MAIYAMA",
            "NGASKI|NGASKI",
            "SAKABA|SAKABA",
            "SHANGA|SHANGA",
            "SURU|SURU",
            "WASAGU|WASAGU",
            "YAURI|YAURI",
            "ZURU|ZURU"
        ];
    }

    if (s1.value == "ZAMFARA") {
        optionArr = [
            "|Select LGA",
            "ANKA|ANKA",
            "BAKURA|BAKURA",
            "BUKKUYUM|BUKKUYUM",
            "BUNGUDO|BUNGUDO",
            "GUMI|GUMI",
            "GUSAU|GUSAU",
            "ISA|ISA",
            "KAURA-NAMODA|KAURA-NAMODA",
            "KIYAWA|KIYAWA",
            "MARADUN|MARADUN",
            "MARU|MARU",
            "SHINKAFI|SHINKAFI",
            "TALATA-MAFARA|TALATA-MAFARA",
            "TSAFE|TSAFE",
            "ZURMI|ZURMI"
        ];
    }

    if (s1.value == "SOKOTO") {
        optionArr = [
            "|Select LGA",
            "BINJI|BINJI",
            "BODINGA|BODINGA",
            "DANGE-SHUNI|DANGE-SHUNI",
            "GADA|GADA",
            "GORONYO|GORONYO",
            "GUDU|GUDU",
            "GWADABAWA|GWADABAWA",
            "ILLELA|ILLELA",
            "ISA|ISA",
            "KEBBE|KEBBE",
            "KWARE|KWARE",
            "RABA|RABA",
            "SABO-BIRNI|SABO-BIRNI",
            "SHAGARI|SHAGARI",
            "SILAME|SILAME",
            "SOKOTO-NORTH|SOKOTO-NORTH",
            "SOKOTO-SOUTH|SOKOTO-SOUTH",
            "TAMBUWAL|TAMBUWAL",
            "TANGAZA|TANGAZA",
            "TURETA|TURETA",
            "WAMAKKO|WAMAKKO",
            "WURNO|WURNO",
            "YABO|YABO"
        ];
    }

    if (s1.value == "OTHERS") {
        optionArr = [
            "|Select LGA",
            "|OTHERS"
        ];
    } 

    if (s1.value == "ABIA") {
        optionArr = [
            "|Select LGA",
            "ABA NORTH|ABA NORTH",
            "OBIOMA NGWA|OBIOMA NGWA",
            "OHAFIA|OHAFIA",
            "OSISIOMA|OSISIOMA",
            "UGWUNAGBO|UGWUNAGBO",
            "UKWA EAST|UKWA EAST",
            "UKWA WEST|UKWA WEST",
            "UMUAHIA NORTH|UMUAHIA NORTH",
            "UMUAHIA SOUTH|UMUAHIA SOUTH",
            "ABA SOUTH|ABA SOUTH",
            "AROCHUKWU|AROCHUKWU",
            "BENDE|BENDE",
            "IKWUANO|IKWUANO",
            "ISIALA-NGWA NORTH|ISIALA-NGWA NORTH",
            "ISIALA-NGWA SOUTH|ISIALA-NGWA SOUTH",
            "UMUNNEOCHI|UMUNNEOCHI",
            "ISIKWUATO|ISIKWUATO",
            "NNEOCHI|NNEOCHI"
        ];
    }

    if (s1.value == "AKWA IBOM") {
        optionArr = [
            "|Select LGA",
            "ABAK|ABAK",
            "EASTERN-OBOLO|EASTERN-OBOLO",
            "EKET|EKET",
            "EKPE-ATANI|EKPE-ATANI",
            "ESSIEN-UDIM|ESSIEN-UDIM",
            "ESIT EKITI|ESIT EKITI",
            "ETIM-EKPO|ETIM-EKPO",
            "ETINAM|ETINAM",
            "IBENO|IBENO",
            "IBESIKPO-ASUTAN",
            "IBIONO-IBOM|IBIONO-IBOM",
            "IKA|IKA",
            "IKONO|IKONO",
            "IKOT-ABASI|IKOT-ABASI",
            "IKOT-EKPENE|IKOT-EKPENE",
            "INI|INI",
            "ITU|ITU",
            "MBO|MBO",
            "MKPAT-ENIM|MKPAT-ENIM",
            "NSIT-IBOM|NSIT-IBOM",
            "NSIT-UBIUM|NSIT-UBIUM",
            "OBOT-AKARA|OBOT-AKARA",
            "OKOBO|OKOBO",
            "ONNA|ONNA",
            "ORON|ORON",
            "ORO-ANAM|ORO-ANAM",
            "UDUNG-UKO|UDUNG-UKO",
            "UKANEFUN|UKANEFUN",
            "ORU OFFONG ORUKO|ORU OFFONG ORUKO",
            "URUAN|URUAN",
            "UQUO IBENO|UQUO IBENO",
            "UYO|UYO"
        ];
    }

    if (s1.value == "ANAMBRA") {
        optionArr = [
            "|Select LGA",
            "AGUATA|AGUATA",
            "ANAMBRA|ANAMBRA",
            "ANAMBRA-WEST|ANAMBRA-WEST",
            "ANIOCHA|ANIOCHA",
            "AWKA NORTH|AWKA NORTH",
            "AWKA SOUTH|AWKA SOUTH",
            "AYAMELUM|AYAMELUM",
            "DUNUKOFIA|DUNUKOFIA",
            "EKWUSIGO|EKWUSIGO",
            "IDEMILI-NORTH|IDEMILI-NORTH",
            "IDEMILI-SOUTH|IDEMILI-SOUTH",
            "IHIALA|IHIALA",
            "NJIKOKA|NJIKOKA",
            "NNEWI-NORTH|NNEWI-NORTH",
            "NNEWI-SOUTH|NNEWI-SOUTH",
            "OGBARU|OGBARU",
            "ONITSHA-NORTH|ONITSHA-NORTH",
            "ONITSHA-SOUTH|ONITSHA-SOUTH",
            "ORUMBA-NORTH|ORUMBA-NORTH",
            "ORUMBA-SOUTH|ORUMBA-SOUTH",
            "OYI|OYI"
        ];
    }

    if (s1.value == "EBONYI") {
        optionArr = [
            "|Select LGA",
            "ABAKALIKI|ABAKALIKI",
            "AFIKPO-NORTH|AFIKPO-NORTH",
            "AFIKPO-SOUTH|AFIKPO-SOUTH",
            "EBONYI|EBONYI",
            "EZZA-NORTH|EZZA-NORTH",
            "EZZA-SOUTH|EZZA-SOUTH",
            "IKWO|IKWO",
            "ISHIELU|ISHIELU",
            "IVO|IVO",
            "IZZI|IZZI",
            "OHAUKWU|OHAUKWU",
            "OHAOZARA|OHAOZARA",
            "ONICHA|ONICHA"
        ];
    }

    if (s1.value == "ENUGU") {
        optionArr = [
            "|Select LGA",
            "ANINRI|ANINRI",
            "AWGU|AWGU",
            "ENUGU-EAST|ENUGU-EAST",
            "ENUGU-NORTH|ENUGU-NORTH",
            "ENUGU-SOUTH|ENUGU-SOUTH",
            "EZEAGU|EZEAGU",
            "IGBO-ETITI|IGBO-ETITI",
            "IGBO-EZE-NORTH|IGBO-EZE-NORTH",
            "IGBO-EZE-SOUTH|IGBO-EZE-SOUTH",
            "ISI-UZO|ISI-UZO",
            "NKANU-EAST|NKANU-EAST",
            "NKANU-WEST|NKANU-WEST",
            "NSUKKA|NSUKKA",
            "OJI-RIVER|OJI-RIVER",
            "UDENU|UDENU",
            "UDI|UDI",
            "UZO-UWANI|UZO-UWANI"
        ];
    }

    if (s1.value == "DELTA") {
        optionArr = [
            "|Select LGA",
            "ANIOCHA-NORTH|ANIOCHA-NORTH",
            "ANIOCHA-SOUTH|ANIOCHA-SOUTH",
            "BOMADI|BOMADI",
            "BURUTU|BURUTU",
            "ETHIOPE-EAST|ETHIOPE-EAST",
            "ETHIOPE-WEST|ETHIOPE-WEST",
            "IKA-NORTH-EAST|IKA-NORTH-EAST",
            "IKA-SOUTH|IKA-SOUTH",
            "ISOKO-NORTH|ISOKO-NORTH",
            "ISOKO-SOUTH|ISOKO-SOUTH",
            "NOKWA-EAST|NOKWA-EAST",
            "NOKWA-WEST|NOKWA-WEST",
            "OKPE|OKPE",
            "OSHIMILI-NORTH|OSHIMILI-NORTH",
            "OSHIMILI-SOUTH|OSHIMILI-SOUTH",
            "PATANI|PATANI",
            "SAPELE|SAPELE",
            "UDU|UDU",
            "UGHELI-NORTH|UGHELI-NORTH",
            "UGHELI-SOUTH|UGHELI-SOUTH",
            "UKWUANI|UKWUANI",
            "UVWIE|UVWIE",
            "WARRI-CENTRAL|WARRI-CENTRAL",
            "WARRI-NORTH|WARRI-NORTH",
            "WARRI-SOUTH|WARRI-SOUTH"
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