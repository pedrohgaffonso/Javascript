function obternoticias () {
    let noticias = []
    let desc = document.querySelectorAll('h3.clamp')
    for (let i=0; i<desc.length; i++){
        noticias.push(desc[i].textContent);
    }
    return noticias;
}

// Via console.log
let desc = document.querySelectorAll('h3.clamp')
for (let i=0; i<desc.length; i++){
    console.log(desc[i].textContent);
}

// Esta função retorna as noticias secundarias de cada section do site https://finance.yahoo.com/news/