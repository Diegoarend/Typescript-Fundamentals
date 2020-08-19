//Union type
//vamos permitir que sejam somandos numeros e strings
//apesar de com o union aceitarmos mais de um parâmetro o typescript pode exigir que façamos um runtime check
// para adequar a lógica 

type Combinable = number | string;
function combine(input1:number | string , input2:Combinable) {
    let result
    if (typeof input1==='number' && typeof input2 === 'number'){ 
    result = input1 + input2
} else {  result = input1.toString() + input2.toString()
}
return result }

const combinedAges = combine(3,5)

const combinedNames = combine('max','wiliam')