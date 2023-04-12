<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                EMPLEADOS
            </div>
            <div class="card-body">
                 <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="empleado in empleados" :key="empleado.id">    
                            <td>{{ empleado.id }}</td>
                            <td>{{ empleado.nombre }}</td>
                            <td>{{ empleado.correo }}</td>
                            <td>

                                <div class="btn-group" role="group" aria-label="">
                                    <router-link :to="{name: 'editar',params:{id:empleado.id}}" class="btn btn-primary" >Editar</router-link> |
                                    <button type="button" v-on:click="borrarEmpleado(empleado.id)" class="btn btn-danger">Borrar</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                 </table>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'listar',
    data(){
        return {
          empleados : []  
        }
    },
    created:function(){
        this.consultarEmpleado();
    }, 
    methods:{
        //http://localhost//FB%20REPLICA/crud/php/
        consultarEmpleado:function(){
            fetch('http://localhost//FB%20REPLICA/crud/php/')
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=> {
                console.log(datosRespuesta)
                this.empleados=[]
                if(typeof datosRespuesta[0].success==='undefined'){
                    this.empleados=datosRespuesta;
                }
            })
            .catch(console.log)
        }, 
        borrarEmpleado(id){
            console.log(id);

            fetch('http://localhost//FB%20REPLICA/crud/php/?borrar='+id)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=> {
                console.log(datosRespuesta)
                window.location.href='listar'
            })
            .catch(console.log)
        }
        
    }
}
</script>