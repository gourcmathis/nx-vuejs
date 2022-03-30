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
          <a class="nav-link active" aria-current="page" href="/group">Groups</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    <button onclick="window.location.href='/login'" class="btn btn-outline-light" type="submit" >Connexion</button>
    <button onclick="window.location.href='/'" class="btn btn-outline-light" type="submit">Deconnexion</button>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>
  .btn.btn-outline-light {
      margin-left: 5px;
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