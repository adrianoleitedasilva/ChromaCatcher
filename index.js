const btnSelecionar = document.querySelector("#btnSelecionar");
const btnLimpar = document.querySelector("#btnLimpar");
const corList = document.querySelector(".todasAsCores");
const btnExportar = document.querySelector("#btnExportar");

let coresSelecionadas = JSON.parse(localStorage.getItem("cores")) || [];

let currentPopup = null;

// Função para copiar para a Área de Trabalho
const copiar = async (text, element) => {
    try {
        await navigator.clipboard.writeText(text);
        element.innerText = "Copiado!";
        // Resseting element text after 1 second
        setTimeout(() => {
            element.innerText = text;
        }, 1000);
    } catch (error) {
        alert("Copiado para a Área de Transferência!");
    }
};

// Função que vai exportar as cores para um .txt
const exportarCores = () => {
    const corTexto = corSelecao.join("\n");
    const blob = new Blob([corTexto], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Minhas_Cores_Selecionadas.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};
