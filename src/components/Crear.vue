<template>
    <div class="card container">
        <div class="card-header">
            AGREGAR NUEVO EMPLEADO
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="agregarRegistro">
                <div class="form-group">
                  <label for="nombre">Nombre</label>
                  <input type="text"
                    class="form-control" required name="nombre" v-model="empleado.nombre" id="nombre" aria-describedby="helpId" placeholder="">
                  <small id="helpId" class="form-text text-muted">Escribe el nombre del Empleado</small>
                </div>
                <div class="form-group">
                  <label for="correo">Correo</label>
                  <input type="email"
                    class="form-control" required name="correo" v-model="empleado.correo" id="correo" aria-describedby="helpId" placeholder="">
                  <small id="helpId" class="form-text text-muted">Escribe el Correo</small>
                </div>
                <div class="btn-group" role="group" aria-label="">

                    <button type="submit" class="btn btn-primary">Agregar</button> |
                    
                    <router-link :to="{name:'listar'}" class="btn btn-warning">Cancelar</router-link>
                </div>
            </form>
        </div>
    </div>


</template>

<script>

export default {
    name: 'crear',
    data(){
        return{
            empleado:{}
        }
    }, 
    methods: {
        agregarRegistro(){
            console.log(this.empleado);
            var datosEnviar = {nombre:this.empleado.nombre, correo:this.empleado.correo}

            fetch('http://localhost//FB%20REPLICA/crud/php/?insertar=1', {
                method: 'POST', 
                body:JSON.stringify(datosEnviar)
            })
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta=>{
                console.log(datosRespuesta);
                window.location.href='listar'
            }))
        }
    }
}
</script>