const setup = () => {
    let evenement = {
        naam: "Codeer Workshop Javascript",
        datum: new Date(2025, 3, 15), // 15 april 2025
        locatie: "Kortrijk",
        deelnemers: ["John", "Maria", "Ahmed", "Sophie"]
    }

    console.log("naam evenement: " + evenement.naam)
    console.log("datum evenement: " +  evenement.datum.getDate() + "-"
    + (evenement.datum.getMonth() + 1) + "-"
    + evenement.datum.getFullYear())
    console.log("locatie: " + evenement.locatie)
    console.log("deelnemers: " + evenement.deelnemers.join(','))

}
window.addEventListener("load", setup);