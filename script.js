document.addEventListener("DOMContentLoaded", function() {
    // Quando a página estiver totalmente carregada, adicionamos o evento ao botão
    const generateBtn = document.getElementById("generateBtn");
    generateBtn.addEventListener("click", generatePrompt);
});

async function generatePrompt() {
    // Pegar os valores do formulário
    var mediaType = document.getElementById("mediaType").value;
    var mediaTypeExtra = document.getElementById("mediaTypeExtra").value;
    
    // Criação do prompt em Português
    var promptPT = `Cria uma ${mediaType} detalhada. ${mediaTypeExtra}`;

    // Exibição do prompt gerado
    document.getElementById("result").innerHTML = `<strong>Prompt Gerado:</strong><br>${promptPT}`;

    // Chamada à API OpenAI para melhorar o prompt
    try {
        const aiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer sk-d5EY8hoQcoHCjN_-6bSj9CS1A5Wnoowfp1idZ_MuoiT3BlbkFJnkrx2OEF2W3tSEp7OAQxSXhHewjZ4Fh9yMTHFPLKEA"
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content: promptPT}],
                max_tokens: 150,
                temperature: 0.7
            })
        });

        // Verificar se a resposta HTTP é bem-sucedida
        if (!aiResponse.ok) {
            throw new Error(`Erro HTTP: ${aiResponse.status}`);
        }

        const aiData = await aiResponse.json();
        if (aiData.choices && aiData.choices.length > 0) {
            const aiText = aiData.choices[0].message.content;
            document.getElementById("aiResult").innerHTML = `<strong>Prompt Aprimorado pela IA:</strong><br>${aiText}`;
        } else {
            throw new Error("A resposta da API não contém escolhas válidas.");
        }

    } catch (error) {
        console.error("Erro ao chamar a API OpenAI:", error);
        document.getElementById("aiResult").innerHTML = "<strong>Erro:</strong> Não foi possível aprimorar o prompt.";
    }
}
