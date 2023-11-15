 function  disableBtn(){
        // Assuming you have a predefined password
        let predefinedPassword = "hello";
        // Prompt the user for input
        document.getElementById("password").disabled = false;
        let inputValue = prompt("Please enter your password:");
    
        // Check if the entered password matches the predefined password
        if (predefinedPassword=== inputValue) {
            // If the passwords match, enable the button
            document.getElementById("password").disabled = false;
        
             return "22MCA20937BA7.pdf";
            
        }else {
            // If the passwords do not match, disable the button
            document.getElementById("password").disabled = true;
            return null;
        }
    }
