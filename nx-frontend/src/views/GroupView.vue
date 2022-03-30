<template>
  <div class="group">
    <Navbar/>
  <div class="addgroup">
    Créer un groupe:
    <form class="row g-3">
    <div class="col-auto">
      <label for="inputGroupName" class="visually-hidden">Nom du groupe</label>
      <input class="form-control" id="inputGroupName" placeholder="Nom du groupe">
    </div>
    

    <label for="exampleDataList" class="form-label">Ajouter un membre</label>
    <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
    <datalist id="datalistOptions">
      <option value="San Francisco"></option>
      <option value="New York"></option>
      <option value="Seattle"></option>
      <option value="Los Angeles"></option>
      <option value="Chicago"></option>
    </datalist>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-3">Créer</button>
    </div>
  </form>
  </div>
  <div class="list-group">
    <div v-for="group in groups" :key="group.Name" class="mylist">

      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ group.Name }}</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">{{ group.members }}</p>
        <small class="text-muted"></small>
      </a>

    </div>
</div>
  <div class="addgroup">

  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'GroupView',
  components: {
    Navbar
},
data(){
    return {
      groups: []
    }
  },
  mounted() {
      fetch("http://localhost:3000/groups")
        .then(res => res.json())
        .then(data => this.groups = data)
        .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>

  .mylist{
    position: relative;
    margin-top: 10px;
    margin-left: 30%;
    margin-right: 30%;
    text-align: center;
  }
  .group{
    background-color: rgba(0, 0, 0, 0.788);
    height: 100vh;
  }
  .list-group{
    margin-top: 50px;
  }

</style>
