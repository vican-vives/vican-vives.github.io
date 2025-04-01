const setup = () => {
    let student1={
        voornaam : "Jan",
        familienaam : "Janssens",
        geboorteDatum : new Date("1993-12-31"),
        adres : { // een object
            straat : "Kerkstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        isIngeschreven : true,
        namenVanExen : ["Sofie", "Berta", "Philip", "Albertoooo"], // een array
        aantalAutos : 2
    }
    console.log(typeof student1.voornaam)
    let json = JSON.stringify(student1)
    console.log(json);
    let object = JSON.parse(json)
    console.log(typeof object.voornaam)
}
window.addEventListener("load", setup);