"option strict"

class Student {
    name;
    favcolor;
    favnumber;

    constructor(name, favcolor, favnumber) {
        this.name = name;
        this.favcolor = favcolor;
        this.favnumber = favnumber;
    }

    log() {
        console.log(this.name, this.favcolor, this.favnumber);
    }
}

let students = [
    new Student("Fred", "green", 8),
    new Student("Wilma", "red", 1),
    new Student("Barney", "blue", 7),
    new Student("Betty", "orange", 3),
    new Student("Pebbles", "pink", 2)

];

const save = () => {
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let number = document.getElementById("number").value;

    let student = new Student(name, color, +number); //Number(var) or +var // returns var as a number
    students.push(student);
    console.log(students);
    //console.log(name, color, number);
    //students.push(new Student(name, color, number));

}

const table = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    
    for (let s of students) {
        let row = "<tr>"
        row += `<td>${s.name}</td>`;
        row += `<td>${s.favcolor}</td>`;
        row += `<td>${s.favnumber}</td>`;
        row += "</tr>";
        tbody.innerHTML += row; 
    }
}
