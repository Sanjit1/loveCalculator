var calculate = document.getElementById("calc");
var person1 = document.getElementById("person1");
var person2 = document.getElementById("crush");



// Get a reference to the database service
var database = firebase.database();

calculate.onclick = async function () {
    var chance = Math.floor(Math.random() * (+100 - +0)) + +0;
    (person1.value.toLowerCase().includes("sanjit") && person2.value.toLowerCase().includes("madison")? chance = Math.floor(Math.random() * (+40 - +0)) + +60;
    for (var i = 0; i < chance; i++) {
        let delayres = await delay(40);
        document.getElementById("p").innerHTML = i + "%";
    }

    firebase.database().ref('users/'+ accessCookie("name")).push({
        chance: chance-1,
        crush: person2.value,
        name: person1.value
    });

}


async function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    });
}


