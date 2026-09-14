//your JS code here. If required.
function myFunc() {
	let name = document.getElementById("name").value;
	let age = document.getElementById("age").value;
	if(name === "" || age === ""){
		alert("Please enter valid details.");
		return;
	}
	let result = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(Number(age) > 18){
				resolve()
			}else{
				reject()
			}
		},4000)

})
	result.then(()=>{
		alert(`Welcome, ${name} You can vote.`);
	}).catch(()=>{
		alert(`Oh sorry ${name} You aren't old enough.`)
	})
}