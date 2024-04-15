

function main(numero1, numero2, operacion){
    
    if(numero1%1==0 && numero2%1==0){
        if(operacion=="suma"){
            return suma(numero1,numero2);
        }else if (operacion=="resta"){
            return resta(numero1,numero2);
        }else if (operacion=="multiplicacion"){ 
            return multiplicacion(numero1,numero2);
        }else if(operacion=="division"){
            if(numero2 == 0){
                return "numero 2 invalido, no es posible dividir entre 0";
            }else{
                return division(numero1,numero2);
            }
            
        }else{
            return "valor errado";
        }
    }else{
        return "has ingresado valores distintos a numeros";
    }
    
}

function suma(numero1, numero2){
    return numero1+numero2;
}

function resta(numero1, numero2){
    return numero1-numero2;
}

function multiplicacion(numero1, numero2){
    return numero1*numero2;
}

function division(numero1, numero2){
    return numero1/numero2;
}

console.log(main(2,2.50,"multiplicacion"));