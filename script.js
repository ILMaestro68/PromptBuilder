document.getElementById("fetchData").addEventListener("click", async function() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        document.getElementById("result").textContent = data.title;  // Exibe o título do post
    } catch (error) {
        document.getElementById("result").textContent = "Ocorreu um erro ao chamar a API.";
        console.error("Erro:", error);
    }
});
