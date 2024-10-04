document.getElementById("fetchData").addEventListener("click", async function() {
    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"  // Substitua pela chave correta
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: "Escreva um texto criativo para uma página de web",
                max_tokens: 100
            })
        });

        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Verificar se a resposta contém o objeto 'choices'
        if (data && data.choices && data.choices.length > 0) {
            document.getElementById("result").textContent = data.choices[0].text;
        } else {
            document.getElementById("result").textContent = "Nenhum resultado foi retornado pela API.";
        }
    } catch (error) {
        document.getElementById("result").textContent = "Ocorreu um erro ao chamar a API. Verifique o console para mais detalhes.";
        console.error("Erro:", error);
    }
});
