<template>
<Navbar/>
<body class="text-center">

<main class="form-signin">
  <form @submit.prevent="handleLogin">
    <h1 class="h3 mb-3 fw-normal">Connectez vous</h1>

    <div class="form-floating">
      <input v-model.trim="user.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Adresse mail</label>
    </div>
    <div class="form-floating">
      <input v-model.trim="user.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Mot de passe</label>
    </div>

    <label>
        Pas encore de compte ?
        <a href="/register">S'enregistrer</a>
        <p></p>
      </label>
    <button class="w-100 btn btn-lg btn-primary" >Se connecter</button>
  </form>
</main>


    
  </body>
</template>
<script>

// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
// import { reactive } from 'vue'
import User from '../models/user';

export default {
  name: 'LoginView',
  components: {Navbar},

  data() {
    return {
      user: new User('', ''),
      
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/');
    }
  },
  methods: {
    handleLogin() {
      // this.loading = true;
      // this.$validator.validateAll().then(isValid => {
      //   if (!isValid) {
      //     this.loading = false;
      //     return; 
      //   }
        if (this.user.email && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/');
            }
          )
          // .catch(error => {
          //   console.log('ERROR', error)
          // })
        };
    }
  }
};


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