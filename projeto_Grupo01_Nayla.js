/* 
    AULA 09 - MESA 1 - CHECKPOINT 1
    INTEGRANTES: Dafne Barbosa, Guiovany da Luz, Nayla Ueda, Thaisa Sicco, Leonardo Fernandes, Rafael de Paula
*/ 

/*
 ENUNCIADO:
 Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/

function microondas(prato, tempo){
    if(prato==1||prato=="pipoca"){
        if(10<=tempo&&tempo<20||tempo=="padrao"){
            console.log("Prato pronto, bom apetite!!!");
        } else if(tempo<10){
            console.log("tempo insuficiente!!!");
        } else if(20<=tempo&&tempo<30){
            console.log("comida queimou!!!");
        } else {
            console.log("kabumm!!!");
        }
    } else if(prato==2||prato=="macarrao"||prato=="macarrão"){
        if(8<=tempo&&tempo<16||tempo=="padrao"){
            console.log("Prato pronto, bom apetite!!!");
        } else if(tempo<8){
            console.log("tempo insuficiente!!!");
        } else if(16<=tempo&&tempo<24){
            console.log("comida queimou!!!");
        } else {
            console.log("kabumm!!!");
        }
    } else if(prato==3||prato=="carne"){
        if(15<=tempo&&tempo<30||tempo=="padrao"){
            console.log("Prato pronto, bom apetite!!!");
        } else if(tempo<15){
            console.log("tempo insuficiente!!!");
        } else if(30<=tempo&&tempo<45){
            console.log("comida queimou!!!");
        } else {
            console.log("kabumm!!!");
        }
    } else if(prato==4||prato=="feijao"||prato=="feijão"){
        if(12<=tempo&&tempo<24||tempo=="padrao"){
            console.log("Prato pronto, bom apetite!!!");
        } else if(tempo<12){
            console.log("tempo insuficiente!!!");
        } else if(24<=tempo&&tempo<36){
            console.log("comida queimou!!!");
        } else {
            console.log("kabumm!!!");
        }
    } else if(prato==5||prato=="brigadeiro"){
        if(8<=tempo&&tempo<16||tempo=="padrao"){
            console.log("Prato pronto, bom apetite!!!");
        } else if(tempo<8){
            console.log("tempo insuficiente!!!");
        } else if(16<=tempo&&tempo<24){
            console.log("comida queimou!!!");
        } else {
            console.log("kabumm!!!");
        }
    } else {
        console.log("prato inexistente!!!");
    }
}

prato = 1;
tempo = 5;
console.log(`\nPrato = ${prato} e tempo = ${tempo}`);
microondas(prato,tempo);

prato = 2;
tempo = 20;
console.log(`\nPrato = ${prato} e tempo = ${tempo}`);
microondas(prato,tempo);

prato = 3;
tempo = 65;
console.log(`\nPrato = ${prato} e tempo = ${tempo}`);
microondas(prato,tempo);

prato = 4;
tempo = 35;
console.log(`\nPrato = ${prato} e tempo = ${tempo}`);
microondas(prato,tempo);

prato = 5;
tempo = 50;
console.log(`\nPrato = ${prato} e tempo = ${tempo}`);
microondas(prato,tempo);