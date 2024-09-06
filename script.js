function typeWriter(elementId, text, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

const tituloTexto = "Abouther!";
const paragrafoTexto = "O Abouther é uma plataforma dedicada a destacar e promover esportes femininos. Nosso objetivo é dar visibilidade às mulheres no esporte, oferecendo cobertura e reconhecimento às suas conquistas e histórias inspiradoras. Ao focar exclusivamente nos esportes femininos, buscamos incentivar uma maior inclusão e celebrar as vitórias e desafios das atletas. Junte-se a nós para apoiar e valorizar o talento feminino no mundo dos esportes.";

document.addEventListener('DOMContentLoaded', function() {
    typeWriter("titulo", tituloTexto, 100, () => {
        typeWriter("paragrafo", paragrafoTexto, 0, () => {
            const btn = document.getElementById("prossiga");
            btn.style.opacity = 1;
            btn.style.visibility = 'visible';
        });
    });

   
    const imagemContainer = document.querySelector('.imagem-container');
    setTimeout(() => {
        imagemContainer.style.animationPlayState = 'running'; 
    }, 500); 
});