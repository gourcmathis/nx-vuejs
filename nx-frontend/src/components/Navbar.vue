<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-mycolor" href="/">Netflex</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <h4><a class="nav-link active" aria-current="page" href="/group">Groups</a></h4>
        </li>   
      </ul>
    <div v-if="!currentUser">
      <router-link to="/login" class="nav-link">
        <button class="btn btn-outline-light" type="submit" >Connexion</button>
      </router-link>
    </div>
    <div v-if="currentUser">
      <router-link to="/" class="nav-link">
        <button class="btn btn-outline-light" @click.prevent="logOut">Deconnexion</button>
      </router-link>
    </div>
   
    </div>
  </div>
</nav>
</template>

<script>
export default {
   computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
  .btn.btn-outline-light {
      margin-left: 5px;
  }

  h4 {
    margin-bottom: -5px;
    padding-left: 10px;
  }

  .navbar-mycolor {
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 2rem;
    text-decoration: none;
    white-space: nowrap;
    color: rgb(229, 9, 20);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  header h1 {
    color: #dfdfdf;
    font-size: 48px;
  }
  header a {
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;
  }
  header a.router-link-active {
    color: #444;
    font-weight: bold;
  }
</style>