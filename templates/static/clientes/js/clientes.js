

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