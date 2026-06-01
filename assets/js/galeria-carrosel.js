document.addEventListener("DOMContentLoaded", function () {
    
    const itensGaleria = [
        {
            img: "assets/img/chefe-pizzaria.jpg",
            titulo: "Nosso Chef",
            descricao: "Mestre pizzaiolo com 20 anos de experiência"
        },
        {
            img: "assets/img/Margherita.png",
            titulo: "Margherita",
            descricao: "Molho de tomate fresco, mussarela premium e manjericão"
        },
        {
            img: "assets/img/Pepperoni.png",
            titulo: "Pepperoni ",
            descricao: "O clássico queridinho com muito sabor e picância na medida"
        },
        {
            img: "assets/img/Quattro Formaggi.jpg",
            titulo: "Quattro Formaggi",
            descricao: "Uma combinação perfeita de quatro queijos especiais"
        },
        {
            img: "assets/img/Vegetariana.png",
            titulo: "Vegetariana",
            descricao: "Pimentões, cogumelos, azeitonas, cebola e tomate frescos"
        },
        {
            img: "assets/img/Calabresa.png",
            titulo: "Calabresa",
            descricao: "Calabresa defumada com cebola fresca e orégano"
        }
    ];

    let indexAtual = 0;

    
    const imgPrincipal = document.getElementById("galeriaPrincipal");
    const tituloPrincipal = document.getElementById("galeriaTitulo");
    const descricaoPrincipal = document.getElementById("galeriaDescricao");
    
    const btnPrev = document.getElementById("galeriaPrev");
    const btnNext = document.getElementById("galeriaNext");
    
    const dots = document.querySelectorAll(".galeria-dot");
    const thumbs = document.querySelectorAll(".thumb-item");

    
    function atualizarGaleria(novoIndex) {
        
        if (novoIndex < 0) {
            indexAtual = itensGaleria.length - 1;
        } else if (novoIndex >= itensGaleria.length) {
            indexAtual = 0;
        } else {
            indexAtual = novoIndex;
        }

        
        imgPrincipal.style.opacity = "0.4";
        
        setTimeout(() => {
            imgPrincipal.src = itensGaleria[indexAtual].img;
            tituloPrincipal.textContent = itensGaleria[indexAtual].titulo;
            descricaoPrincipal.textContent = itensGaleria[indexAtual].descricao;
            imgPrincipal.style.opacity = "1";
        }, 150);

        
        dots.forEach(dot => dot.classList.remove("ativo"));
        if(dots[indexAtual]) dots[indexAtual].classList.add("ativo");

        
        thumbs.forEach(thumb => thumb.classList.remove("ativo"));
        if(thumbs[indexAtual]) thumbs[indexAtual].classList.add("ativo");
    }

    
    btnPrev.addEventListener("click", () => {
        atualizarGaleria(indexAtual - 1);
    });

    btnNext.addEventListener("click", () => {
        atualizarGaleria(indexAtual + 1);
    });

    
    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const indexAlvo = parseInt(e.target.getAttribute("data-index"));
            atualizarGaleria(indexAlvo);
        });
    });

    
    thumbs.forEach(thumb => {
        thumb.addEventListener("click", (e) => {
            const targetDiv = e.target.closest(".thumb-item");
            const indexAlvo = parseInt(targetDiv.getAttribute("data-index"));
            atualizarGaleria(indexAlvo);
        });
    });
});