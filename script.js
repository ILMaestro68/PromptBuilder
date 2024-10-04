function generatePrompt() {
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

    // Criação do prompt em Inglês
    var promptEN = `Create a detailed ${mediaType} of ${character}, gender ${gender} (${genderExtra}), aged ${age} (${ageExtra}). `;
    promptEN += `They have ${hair} hair (${hairExtra}) and ${eyes} eyes (${eyesExtra}). `;
    promptEN += `The body type is ${body} (${bodyExtra}), height is ${height} (${heightExtra}). ${appearanceExtra}. `;
    promptEN += `The style should be ${visualStyle}. ${visualStyleExtra}. `;
    promptEN += `The setting is ${environment}, ${colorLighting}. `;
    promptEN += `${character} is ${action}. `;
    promptEN += `The image should be ${proportions}. ${proportionsExtra}. `;
    promptEN += `Camera is positioned ${cameraPosition}. ${cameraPositionExtra}. `;
    if(mediaType === "short video") {
        promptEN += `The camera movement is ${cameraMovement}. ${cameraMovementExtra}.`;
    }
    
    // Exibição do resultado
    document.getElementById("result").innerHTML = `<strong>Prompt em Português:</strong><br>${promptPT}<br><br><strong>Prompt em Inglês:</strong><br>${promptEN}`;
}
