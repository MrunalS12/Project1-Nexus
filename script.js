<script>
function validateForm() 
     username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") 
        document.getElementById("error-message").innerText = "Please fill in all fields.";
        return false;
    &rbrace; else 
        document.getElementById("error-message").innerText = "";
        return true;
    &rbrace;
&rbrace;
</script>
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
   
});
