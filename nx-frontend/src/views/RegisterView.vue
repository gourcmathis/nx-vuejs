<template>
<Navbar/>
<body class="text-center">
    
<main class="form-signin">
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Créer un compte</h1>

    <div class="form-floating">
      <input v-model="data.username" class="form-control" id="floatingInput" placeholder="Nom">
      <label for="floatingInput">Nom</label>
    </div>
    <div class="form-floating">
      <input v-model="data.email" type="email" class="form-control" id="floatingMail" placeholder="nom@exemple.com">
      <label for="floatingInput">Adresse mail</label>
    </div>
    <div class="form-floating">
      <input v-model="data.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Mot de passe</label>
    </div>
      
    <button class="w-100 btn btn-lg btn-primary" type="submit">S'enregistrer</button>
  </form>
</main>


    
  </body>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import { reactive } from 'vue'

export default {
  name: 'RegisterView',
  components: {
    Navbar
  },
  setup() {
      const data = reactive({
          username:'',
          email: '',
          password: ''
      });

      const submit = async () => {
          await fetch('http://localhost:8000/sign_up', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(data)
          });
      }

      return {
          data,
          submit
      }
  }
}

</script>

<style scoped>
html,
body {
  height: 100vh;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>
