function validar(){
    var vn = document.getElementById("name");
    var vnome = vn.value;
    var vp = document.getElementById("preco");
    var vpreco = vp.value;
    var vq = document.getElementById("quantidade");
    var vquantidade = vq.value;
    var vv = document.getElementById("validade");
    var vvalidade = vv.value;
    var vs = document.getElementById("lista");
    var vlista = vs.value;
    var vf = document.getElementById("Foto");
    var vfoto = vf.value;



    if(vnome.length < 2){
        alert("O Nome precisa conter no mínimo 2 caracteres!!!");
        return false;
    }
    else if(vpreco < 0){
            alert("O Preço do produto tem que ser positivo");
            return false;
}
    else if(vquantidade <= 0){
            alert("A quantidade precisa ser maior que 0");
            return false;
}
    else if(vvalidade <= 0){
            alert("Insira uma data de validade de pelo menos uma semana");
            return false;

    }
    else if(vfoto == ""){
        alert("insira uma foto para o produto");
        return false;
        
}
    else if(vlista == ""){
        alert("Selecione uma categoria ao produto");          
        return false;
}
    else 
    return true;
}









