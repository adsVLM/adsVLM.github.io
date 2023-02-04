function leiaMais() {
    const tresPontos = document.getElementById('tresPontos');
    const mostrarMais = document.getElementById('mostrarMais');
    const btnLeiaMais = document.getElementById('btnLeiaMais');

    if (tresPontos.style.display === 'none') {
        tresPontos.style.display = 'inline';
        mostrarMais.style.display = 'none';
        btnLeiaMais.innerHTML = 'Ler mais';
    } else {
        tresPontos.style.display = 'none';
        mostrarMais.style.display = 'inline';
        btnLeiaMais.innerHTML = 'Ler menos';
    }
}

function verMais() {
    const tresPonto = document.getElementById('tresPonto');
    const verMais = document.getElementById('verMais');
    const btnVerMais = document.getElementById('btnVerMais');

    if (tresPonto.style.display === 'none') {
        tresPonto.style.display = 'inline';
        verMais.style.display = 'none';
        btnVerMais.innerHTML = 'Ver mais';
    } else {
        tresPonto.style.display = 'none';
        verMais.style.display = 'inline';
        btnVerMais.innerHTML = 'Ver menos';
    }
}