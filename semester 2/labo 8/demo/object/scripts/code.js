const setup = () => {
    // Create an object
    let student = {}; // een leeg object
    student.firstName = "John";
    student.lastName = "Doe";
    student.age = new Date (2000,1,1);
    student.eyeColor = "blue";

    console.log (student.firstName);

    let student1 = {
        firstName: "John",
        lastName: "Doe",
        age: new Date (2000,1,1),
        eyeColor: "blue"
    };
    console.log (student1.firstName);

    // uitbreiding
    let student2 = {
        firstName: "John",
        lastName: "Doe",
        address : {
            zipCode : 8500,
            city : "Kortrijk"
        }
    };
    console.log (student2.address.zipCode);

    let students = [
        {
            firstName: "John",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        },
        {
            firstName: "VIVES",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        }
    ];

    console.log(students[0].firstName);

    tekst = JSON.stringify(students)
    console.log(tekst);
    students1 = JSON.parse(tekst)
    console.log(students1)

}
window.addEventListener("load", setup);