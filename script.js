document.getElementById("uForm").addEventListener("submit", function (event) {
    event.preventDefault();
const name=document.getElementById('name').value.trim();
const age=document.getElementById('age').value.trim();
const agenumber=parseInt(age,10);
	
function validateAge(name, age) {
    return new Promise((resolve, reject) => {
        if (age > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
        } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
        }
    });
}
validateAge(name, age)
        .then((message) =>{
            setTimeout(() => {
                alert(message)},4000)})
        .catch((error) => {
            setTimeout(() => {
                alert(error)}, 4000);
        })
})

