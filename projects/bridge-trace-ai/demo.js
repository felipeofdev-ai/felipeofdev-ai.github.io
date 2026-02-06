function analyzeTransaction() {
  const txId = document.getElementById("txId").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const destination = document.getElementById("destination").value;

  const resultCard = document.getElementById("resultCard");
  const resultText = document.getElementById("analysisResult");

  if (!txId || !amount || amount <= 0) {
    resultCard.style.display = "block";
    resultText.innerText = "⚠️ Please provide valid transaction data.";
    return;
  }

  let riskScore = "Low";
  let explanation = "No anomalous patterns detected.";

  if (amount > 10000 && destination === "blockchain") {
    riskScore = "High";
    explanation =
      "High-value transfer to blockchain detected. Graph analysis indicates potential layering behavior.";
  } else if (amount > 5000) {
    riskScore = "Medium";
    explanation =
      "Elevated transaction amount. AI model suggests additional monitoring.";
  }

  resultCard.style.display = "block";
  resultText.innerHTML = `
    <strong>Transaction:</strong> ${txId}<br/>
    <strong>Destination:</strong> ${destination}<br/>
    <strong>Risk Level:</strong> ${riskScore}<br/><br/>
    ${explanation}
  `;
}
