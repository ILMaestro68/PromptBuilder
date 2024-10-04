document.getElementById("generatePrompt").addEventListener("click", function() {
    const characterDescription = document.getElementById("characterDescription").value;
    const characterCustomDescription = document.getElementById("characterCustomDescription").value;

    const cameraPosition = document.getElementById("cameraPosition").value;
    const cameraCustomPosition = document.getElementById("cameraCustomPosition").value;

    const cameraMovement = document.getElementById("cameraMovement").value;
    const cameraCustomMovement = document.getElementById("cameraCustomMovement").value;

    // Geração do Prompt
    let prompt = `Descrição Física: ${characterDescription}. `;
    if (characterCustomDescription) {
        prompt += `Detalhe Personalizado: ${characterCustomDescription}. `;
    }

    prompt += `Posição da Câmara: ${cameraPosition}. `;
    if (cameraCustomPosition) {
        prompt += `Detalhe Personalizado: ${cameraCustomPosition}. `;
    }

    prompt += `Movimento de Câmara: ${cameraMovement}. `;
    if (cameraCustomMovement) {
        prompt += `Detalhe Personalizado: ${cameraCustomMovement}. `;
    }

    // Exibir o Prompt Gerado
    document.getElementById("promptOutput").textContent = prompt;
});
