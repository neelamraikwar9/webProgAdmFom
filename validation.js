function validateForm(){
    let name = document.getElementById("name").value.trim(); 
    let motherName = document.getElementById("motherName").value.trim(); 
    let subject = document.getElementById("subject").value; 
    let fee = document.getElementById("fee").value.trim(); 
    let registered = document.querySelector('input[name="registered"]:checked'); 
    let background = document.getElementById("background").value.trim(); 

    if(name === "" || motherName === "" || subject === "" || fee === "" || !registered || background === ""){
        alert("All fields are required"); 
        return false; 
    } 
    if(fee <= 0 ){
        alert("Fee must be a positive number.")
        return false; 
    }
    return true; 
    
}