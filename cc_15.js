//Task 1 
document.addEventListener("DOMContentLoaded", function () {
    const riskDashboard = document.getElementById("riskDashboard");
    console.log("Risk Dashboard Loaded");
});

//Task 2 
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");
    riskCard.innerHTML = `<strong>Risk Name:</strong> ${riskName}<br>
                          <strong>Risk Level:</strong> ${riskLevel}<br>
                          <strong>Department:</strong> ${department}`;

//Task 4
  if (riskLevel === "Low") {
         riskCard.classList.add("low-risk");
        } else if (riskLevel === "Medium") {
        riskCard.classList.add("medium-risk");
        } else if (riskLevel === "High") {
        riskCard.classList.add("high-risk");
        }
                
    riskDashboard.appendChild(riskCard);

//Task 3
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.addEventListener("click", function () {
        riskCard.remove();
    });

    riskCard.appendChild(resolveButton);
    riskDashboard.appendChild(riskCard);
}

document.getElementById("riskForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const riskName = document.getElementById("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("department").value;
    addRiskItem(riskName, riskLevel, department);
    this.reset();
})

// Test Cases
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Market Fluctuations", "High", "Finance");
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");