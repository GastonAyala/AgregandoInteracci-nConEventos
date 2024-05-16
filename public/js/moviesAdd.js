window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    const tileinput = document.querySelector('#titulo');

    function generateColor() {
        const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let code = "";
        for (let i = 0; i < 6; i++) {
            code += hexArray[Math.floor(Math.random() * 16)]
        }
        return `#${code}`;
    }

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    titulo.addEventListener('mouseenter', function () {
        this.style.color = generateColor()
    })

    let estadoSecreto = 0;
    tileinput.addEventListener('keypress', function (e) {
        switch (true) {
            case estadoSecreto === 0 && e.key === 's':
                estadoSecreto = 1
                break;
            case estadoSecreto === 1 && e.key === 'e':
                estadoSecreto = 2
                break;
            case estadoSecreto === 2 && e.key === 'c':
                estadoSecreto = 3
                break;
            case estadoSecreto === 3 && e.key === 'r':
                estadoSecreto = 4
                break;
            case estadoSecreto === 4 && e.key === 'e':
                estadoSecreto = 5
                break; 
            case estadoSecreto === 5 && e.key === 't':
                estadoSecreto = 6
                break; 
            case estadoSecreto === 6 && e.key === 'o':
                estadoSecreto = 0
                alert('SECRETO MAGICO')
                break;
            default: 
                estadoSecreto = 0
                break;
        }
        console.log(estadoSecreto)
    })
}