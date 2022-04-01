<template>
  <div class="group">
    <Navbar/>
  <h2 class="titre1">Créer un groupe:</h2>
  <div class="addgroup">
    <form class="row g-3">
    
    <div class="col-auto">
      <label for="inputGroupName" class="visually-hidden">Nom du groupe</label>
      <input  class="form-control" id="inputGroupName" placeholder="Nom du groupe">
    </div>
    
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-3">Créer</button>
    </div>
    <h1 class="titre2">Mes groupes:</h1>
  </form>
  </div>
  <div class="list-group">
    <!-- <div v-for="group in data.groups" :key="group.groupname" class="mylist">

      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ group.groupname }}</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">{{ group.members }}</p>
        <small class="text-muted"></small>
      </a>

    </div> -->
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
// setup() {
//       const data = reactive({
//           groupname:''
          
//       });

//       const submit = async () => {
//           await fetch('http://localhost:8000/groups/create/username={username}', {
//           });
//       }

//       return {
//           data,
//           submit
//       }
// }
}
</script>

<style scoped>

  .titre1 {
    margin-bottom: 20px;
    margin-top: 40px;
    margin-left: 23%;
    margin-right: 30%;
    color: white;
  }

  .titre2 {
    margin-top: 40px;
    margin-left: -60%;
    color: white;
  }
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

  .addgroup {
    margin-left: 40%;
    margin-right: 30%;
  }

</style>
