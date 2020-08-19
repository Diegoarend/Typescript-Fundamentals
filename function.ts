function adds(n1:number, n2:number){
    return n1 + n2
}

// void que quer dizer que a função não retorna nada, apesar de funcionar normalmente 
//não existen o js somente no ts
function printResults(num:number) :void {
    console.log('Result:' +num)
}

printResults(adds(5,12))

let combineValues: (a:number, b:number) => number;
combineValues=adds

let printfunction: Function;

printfunction=printResults

// estamos dizendo que a função recebera 2 parâmetros sendo numbers e um terceiro que é uma callback que receberá um
// número como parâmetro e que não nos importamos se ela irá retornar um valor ou não (é diferente do void do print)
function addAndHandle(n1:number, n2:number, cb: (num:number) => void){
    const result = n1+ n2 
    cb(result)
}

addAndHandle(1,2,result => {
    console.log(result)
})