import React from 'react';

function Formulario(){
    return(
        <div class="content-box-blue">
            <h1>Formulario</h1>
            <div class="content-box-red">
                <form>
                Nombre: <br/><input type="text"></input>
                <br></br>
                Apellido: <br/><input type="text"></input>
                    <br></br>
                    Telefono: <br/><input type="password"></input>
                    <br></br>
                    Ciudad: <br/><input type="text"></input>
                    <br></br>
                    Correo electronico: <br/> <input type="text"></input>
                    <br></br>
                    <br></br>
                    
                    <h2>Productos a comprar</h2>
                    <input type="checkbox"></input> Manilla
                    <br/>
                    <input type="checkbox"></input> Anillo
                    <br/>
                    <input type="checkbox"></input> Collar
                    <br/>
                    <input type="checkbox"></input> Camandula
                    <br></br>
                    <br></br>

                    <textarea placeholder="sugerencias"></textarea>
                </form>
            </div>
        </div>       
    );
}

export default Formulario;