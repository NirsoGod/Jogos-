function playerAction(action) {
    fetch(`/event/${action}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("event-message").innerText = data.message;
            document.getElementById("status").innerText = 
                `Status: Saúde ${data.saude} | Fome ${data.fome} | Sede ${data.sede}`;
        })
        .catch(error => console.error("Erro ao buscar evento:", error));
}
