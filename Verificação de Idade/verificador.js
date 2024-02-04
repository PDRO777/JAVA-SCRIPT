function verificador(){
    var dataNascimento = document.querySelector("#input-numero")
    var res = window.document.querySelector("#res")
    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear()

    if (dataNascimento.value == 0 || dataNascimento.value > anoAtual){
        window.alert("[ERRO] Verifique os dados e tente novamente!!")
    } else{
        var sexo = document.getElementsByName("checkbox")
        var idade = anoAtual - Number(dataNascimento.value)
        var genero = ''
        var img = document.createElement("img")
        
        img.setAttribute("id", "fotos")
        
        if (sexo[0].checked){
            
            genero = "Homem"
            
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-m.jpg')
                img.style.width = "250px" 
                img.style.height = "250px"
                img.style.borderRadius = "50%"
                img.style.padding = "15px"
            } else if (idade < 21){
                //adolecente
                img.setAttribute('src', 'foto-jovem-m.jpg')
                img.style.width = "250px" 
                img.style.height = "250px"
                img.style.borderRadius = "50%"
                img.style.padding = "15px"
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
                img.style.width = "250px" 
                img.style.height = "250px"
                img.style.borderRadius = "50%"
                img.style.padding = "15px"                     
            } else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
                img.style.width = "250px" 
                img.style.height = "250px"
                img.style.borderRadius = "50%"
                img.style.padding = "15px" 
            }
        
        }else if (sexo[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-f.jpg')
                img.style.width = "250px" 
                img.style.height = "250px"
                img.style.borderRadius = "50%"
                img.style.padding = "15px"
            } else if (idade < 21){
                //adolecente
                img.setAttribute('src', 'foto-jovem-f.jpg')
                img.style.width = "250px" 
                img.style.height = "250px"
                img.style.borderRadius = "50%"
                img.style.padding = "15px"
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.jpg')
                img.style.width = "250px" 
                img.style.height = "250px"
                img.style.borderRadius = "50%"
                img.style.padding = "15px"                     
            } else{
                //idoso
                img.setAttribute('src', 'foto-idosa-f.jpg')
                img.style.width = "250px" 
                img.style.height = "250px"
                img.style.borderRadius = "50%"
                img.style.padding = "15px" 
            }
        } 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}