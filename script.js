document.getElementById("fetchData").addEventListener("click", async function() {
    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer proj-7UrleDFJJAOM0DtprziTb9Jb21s_Tytz1qwLAsCXX2WKNZKmUvm8Y96OfIEMmlDmuiNZhWhqu1T3BlbkFJmt29TjfrezR9MgOVuw790AGdhgUSC7kIJeKpmK8ZSIVYmFlua6M_1u1zsNRk1vH2RJtTygfYkA"
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: "Escreva um texto criativo para uma página de web",
                max_tokens: 100
            })
        });

        const data = await response.json();
        document.getElementById("result").textContent = data.choices[0].text;  // Exibe o texto gerado pela API
    } catch (error) {
        document.getElementById("result").textContent = "Ocorreu um erro ao chamar a API.";
        console.error("Erro:", error);
    }
});
