function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

function clickMenu() {
    if(itens.style.display == 'none') {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

function typeWriter(element) {
    const textoArray = element.innerHTML.split('');
    element.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            element.innerHTML += letra
        }, 75 * i)
    });
}

const titulo = document.getElementById('title-h1')
typeWriter(titulo)
