const allInput = document.querySelectorAll(".inp");
console.log(allInput);
const messageBtn = document.querySelector("#message");

messageBtn.addEventListener("click",()=>{
    let allInputsFilled = true;

    allInput.forEach(input => {
        if (!input.value.trim()) {
            allInputsFilled = false;
        }
    });

    if (allInputsFilled) {
        window.alert("Thank you!");
        allInput.forEach(input => {
            input.value = "";
        });
    } else {
        window.alert("Please fill in all inputs.");
    }
})