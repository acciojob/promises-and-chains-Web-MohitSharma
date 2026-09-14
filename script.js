//your JS code here. If required.
function myFunc() {
	let name = documnet.getElementById("name");
	let age = Number(document.getELementById("age").value);
	if(name === "" || age === ""){
		alert("Please enter valid details.");
		return;
	}
	let result = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age > 18){
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