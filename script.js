async function generatePrompt() {
    var mediaType = document.getElementById("mediaType").value;
    var mediaTypeExtra = document.getElementById("mediaTypeExtra").value;
    var visualStyle = document.getElementById("visualStyle").value;
    var visualStyleExtra = document.getElementById("visualStyleExtra").value;
    var character = document.getElementById("character").value;
    
    var gender = document.getElementById("gender").value;
    var genderExtra = document.getElementById("genderExtra").value;
    var age = document.getElementById("age").value;
    var ageExtra = document.getElementById("ageExtra").value;
    var hair = document.getElementById("hair").value;
    var hairExtra = document.getElementById("hairExtra").value;
    var eyes = document.getElementById("eyes").value;
    var eyesExtra = document.getElementById("eyesExtra").value;
    var body = document.getElementById("body").value;
    var bodyExtra = document.getElementById("bodyExtra").value;
    var height = document.getElementById("height").value;
    var heightExtra = document.getElementById("heightExtra").value;
    var appearanceExtra = document.getElementById("appearanceExtra").value;
    
    var environment = document.getElementById("environment").value;
    var environmentExtra = document.getElementById("environmentExtra").value;
    var colorLighting = document.getElementById("colorLighting").value;
    var colorLightingExtra = document.getElementById("colorLightingExtra").value;
    var action = document.getElementById("action").value;
    var actionExtra = document.getElementById("actionExtra").value;
    var proportions = document.getElementById("proportions").value;
    var proportionsExtra = document.getElementById("proportionsExtra").value;
    
    var cameraPosition = document.getElementById("cameraPosition").value;
    var cameraPositionExtra = document.getElementById("cameraPositionExtra").value;
    var cameraMovement = document.getElementById("cameraMovement").value;
    var cameraMovementExtra = document.getElementById("cameraMovementExtra").value;

    // Criação do prompt em Português
    var promptPT = `Cria uma ${mediaType} detalhada de ${character}, de sexo ${gender} (${genderExtra}), com ${age} anos (${ageExtra}). `;
    promptPT += `Ele/ela tem cabelo ${hair} (${hairExtra}) e olhos ${eyes} (${eyesExtra}). `;
    promptPT += `A complexão física é ${body} (${bodyExtra}), altura é ${height} (${heightExtra}). ${appearanceExtra}. `;
    promptPT += `O estilo deve ser ${visualStyle}. ${visualStyleExtra}. `;
    promptPT += `O ambiente é ${environment}, ${colorLighting}. `;
    promptPT += `${character} está ${action}. `;
    promptPT += `A imagem deve ter ${proportions}. ${proportionsExtra}. `;
    promptPT += `A câmara está posicionada ${cameraPosition}. ${cameraPositionExtra}. `;
    if(mediaType === "short video") {
        promptPT += `O movimento da câmara é ${cameraMovement}. ${cameraMovementExtra}.`;
    }

   async function generatePrompt() {
    // Exibição do prompt gerado
    document.getElementById("result").innerHTML = `<strong>Prompt Gerado:</strong><br>${promptPT}`;

    // Chamada à API OpenAI para melhorar o prompt
    try {
        const aiResponse = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer sk-d5EY8hoQcoHCjN_-6bSj9CS1A5Wnoowfp1idZ_MuoiT3BlbkFJnkrx2OEF2W3tSEp7OAQxSXhHewjZ4Fh9yMTHFPLKEA"
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: promptPT,
                max_tokens: 150,
                n: 1,
                stop: null,
                temperature: 0.7
            })
        });

        // Verificar se a resposta HTTP é bem-sucedida
        if (!aiResponse.ok) {
            throw new Error(`Erro HTTP: ${aiResponse.status}`);
        }

        // Processar a resposta da API
        const aiData = await aiResponse.json();
        
        // Verificar se há escolhas válidas na resposta
        if (aiData.choices && aiData.choices.length > 0) {
            const aiText = aiData.choices[0].text;

            // Exibição da resposta da IA
            document.getElementById("aiResult").innerHTML = `<strong>Prompt Aprimorado pela IA:</strong><br>${aiText}`;
        } else {
            throw new Error("A resposta da API não contém escolhas válidas.");
        }

    } catch (error) {
        console.error("Erro ao chamar a API OpenAI:", error);
        document.getElementById("aiResult").innerHTML = "<strong>Erro:</strong> Não foi possível aprimorar o prompt.";
    }
}
