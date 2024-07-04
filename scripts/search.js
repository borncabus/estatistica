// script/search.js

// Função para buscar materiais
function searchMaterials() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const materialsList = document.getElementById('materialsList');
    const buttons = materialsList.getElementsByTagName('a');

    // Loop através de todos os botões de materiais
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        const buttonText = button.textContent.toLowerCase();

        // Verificar se o texto do botão contém o termo de busca
        if (buttonText.includes(input)) {
            button.style.display = '';
        } else {
            button.style.display = 'none';
        }
    }
}

// Adicionar um evento de 'enter' na caixa de busca
document.getElementById('searchInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchMaterials();
    }
});
