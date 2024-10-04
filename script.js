document.getElementById("fetchData").addEventListener("click", async function() {
    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer YOUR_API_KEY" // Substitua pela sua chave da API
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: "Escreva um texto criativo para uma página de web",
                max_tokens: 100
            })
        });

        const data = await response.json();
        document.getElementById("result").textContent = data.choices[0].text;
    } catch (error) {
        document.getElementById("result").textContent = "Ocorreu um erro ao chamar a API.";
        console.error("Erro:", error);
    }
});
