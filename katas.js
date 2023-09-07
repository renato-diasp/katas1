// 1
// function cubo10(){
//   let cubo = 1
//   while(cubo <= 10){
//     console.log(cubo ** 3)
//     cubo++
//   }
  
//  }

//  cubo10()

// 2
// function divisiveisPor(limite, divisor){
//   let divisiveisRestoZero = []
//   for(let i = 1; i <= limite; i++){
//     if(i % divisor === 0){
//       divisiveisRestoZero.push(i)
//     }
//   }
//   return divisiveisRestoZero
//  }

//  alert(divisiveisPor(100,10))

// 3
// function posicaoLetra(palavra, numero){
//   console.log(`A letra retornada é ${palavra[numero]}, pois está na posição ${numero}`) 
  
//  }

// posicaoLetra('String', 3)

// 4
// function palavraRecortada(palavra, numero){
//   let recorte = palavra.slice(0, numero)
//   return recorte
//  }

//  console.log(palavraRecortada("algoritmo", 4))

// 5
// function palavraResto(palavra, numero){
//   let recorte = palavra.slice(numero)
//   return recorte
//  }

//  console.log(palavraResto("algoritmos", 2))

// 6
// function contaVogais(palavra){
//   let vogais = ""
//   for(let i = 0; i < palavra.length; i++){
//     if(palavra[i] === "a" || palavra[i] === "e" || palavra[i] === "i" || palavra[i] === "o" || palavra[i] === "u")    vogais += palavra[i]
//   }
//   alert(`${vogais.length}, pois existem ${vogais.length} na palavra ${palavra}`)
//  contaVogais("abacaxi")

// 7
// function textoDeTrasPraFrente (palavra) {
//   let palavraInvertida = ""
//   for(let i = palavra.length - 1; i >= 0; i--){
//     palavraInvertida += palavra[i]
//   }

//   return palavraInvertida
// }

// alert(textoDeTrasPraFrente("abacaxi"))

// 8
// function removeEspacos(frase){
//   let novaPalavra = "" 
//   for( let i = 0; i < frase.length; i++){
//     novaPalavra += frase[i].replace(/\s+/g, "")
//   }
//   console.log(novaPalavra)
//  }

//  removeEspacos("Minha cabeça vai explodir")


// 9
// function textoCriptografado(frase){
//   let fraseCriptografada = ""
//   for(let i = 0; i < frase.length; i++){
//     if(frase[i] === "a" || frase[i] === "A"){
//       fraseCriptografada += frase[i].replace(/a/gi, "x")

//     }else if(frase[i] === "e" || frase[i] === "E"){
//       fraseCriptografada += frase[i].replace(/e/gi, "y")

//     }else if(frase[i] === "i" || frase[i] === "I"){
//       fraseCriptografada += frase[i].replace(/i/gi, "w")

//     }else if(frase[i] === "o" || frase[i] === "O"){
//       fraseCriptografada += frase[i].replace(/o/gi, "k")

//     }else if(frase[i] === "u" || frase[i] === "U"){
//       fraseCriptografada += frase[i].replace(/u/gi, "z")
//     }else{
//       fraseCriptografada += frase[i]
//     }
//   }

//   return fraseCriptografada
//  }

//  alert(textoCriptografado("Uma frase ultra secreta que precisa ser criptografada"))



