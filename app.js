//pode armazenar qualquer valor sem que o type acuse erro 
var userInput;
//para atribuir uma variável do tipo unkown para uma variável de outro tipo é preciso antes fazer uma checagem de tipo
//se fosse any ao invés de unkown este erro não iria ocorrer 
var userName;
userInput = 5;
userInput = 'max';
if (typeof userInput === 'string') {
    userName = userInput;
}
