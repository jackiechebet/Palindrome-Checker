document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("text-input");
    const checkBtn = document.getElementById("check-btn");
    const result = document.getElementById("result");

    checkBtn.addEventListener("click", function() {
        const text = textInput.value.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        
        if (text === "") {
            alert("Please input a value");
            return;
        }

        const reversedText = text.split('').reverse().join('');
        
        if (text === reversedText) {
            result.textContent = textInput.value + " is a palindrome";
        } else {
            result.textContent = textInput.value + " is not a palindrome";
        }
    });
});
