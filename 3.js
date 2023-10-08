document.addEventListener("DOMContentLoaded", function () {
    const agecalculatorForm = document.getElementById("agecalculator");
    const ageresult = document.getElementById("ageresult");

    agecalculatorForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const dobInput = document.getElementById("dob").value;
        const dob = new Date(dobInput);
        const today = new Date();

        if (isNaN(dob)) {
            ageresult.textContent = "Please enter a valid date of birth.";
        } else {
            const ageInMilliseconds = today - dob;
            const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
            const age = Math.floor(ageInYears);

            ageresult.textContent = `${age} years`;
        }
    });
});
