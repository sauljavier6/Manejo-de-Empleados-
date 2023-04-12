<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" >Empleados</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page" >
              <span class="material-icons-outlined">
                home
              </span>
            </router-link>

        </li>
        <li class="nav-item">
            <router-link to="/about" class="nav-link" >
              <span class="material-icons-outlined">
                info
              </span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/crear" class="nav-link">
              <span class="material-icons-outlined">
                person_add
              </span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/listar" class="nav-link">
              <span class="material-icons-outlined">
                visibility
              </span>
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<span class="material-icons-outlined">
  person_add
  </span>