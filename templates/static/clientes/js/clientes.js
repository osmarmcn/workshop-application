

function add_carro(){

    carro = document.getElementById("form-carro")

    info = `
        <br>
        <div class='row'>
            <div class='col-md'>
                <input type='text'placeholder='carro' class='form-control' name='carro'/>

            </div>
            <div class='col-md'>
                <input type='text'placeholder='Placa' class='form-control' name='placa'/>

            </div>
            <div class='col-md'>
                <input type='number'placeholder='ano' class='form-control' name='ano'/>

            </div>

        </div>
    
    `
    carro.innerHTML += info
    

}




function exibir_form(tipo){


    add_cliente = document.getElementById("adicionar-cliente1")
    att_cliente = document.getElementById('att_cliente')
        

    if (tipo == "1"){
        add_cliente.style.display = "block"
        att_cliente.style.display = "none"

    }else if(tipo == "2"){

        att_cliente.style.display = "block"
        add_cliente.style.display = "none"


        

       
    }


}