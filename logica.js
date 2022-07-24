// velocidade maxima de ate 70
// a cada 5km acima do limite voce ganha 1 ponto
// Math.floor()
// caso os pontos maior que 12 -> "Carteira suspendida"

verificarVelocidade(130);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if ( velocidade <= velocidadeMaxima)
        console.log('Ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if ( pontos >= 12) 
            console.log('Carteira Suspensa');
        else 
            console.log('Pontos', pontos);
    }

}