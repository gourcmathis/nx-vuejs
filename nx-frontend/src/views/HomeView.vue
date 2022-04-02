<template>
  <div class="home">
    <Navbar/>
    <div class="container">
        <!-- <select class="form-select" aria-label="Default select example">
			<option selected>Genre</option>
			<option value="1">Drame</option>
			<option value="2">Action</option>
			<option value="3">Aventure</option>
		</select> -->
        <div class="search"> <i class="fa fa-search"></i> <input type="text" v-model="searchQuery" class="form-control" placeholder="Quel film souhaitez vous trouver ?"> <button class="btn btn-light glass"><img src="../assets/search.svg" alt="Bootstrap" width="25" height="25"></button> </div>
            
    <div v-for="movie in resultQuery" :key="movie.title" class="movie">
        <div class="container mt-5">
			<div class="card movie_card">
				<button class="visibilitybut"><img class="visibility" src="../assets/visibility.png"></button>
		  		<img :src= movie.image class="card-img-top" >
		  		<div class="card-body">
		    		<h5 class="card-title">{{ movie.title }}</h5>
		   			<span class="movie_info">{{ movie.year }}</span>
				
		  		</div>
			</div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar
  },
  data(){
    return {
      movies: [],
	  searchQuery:null
    }
  },
  mounted() {
      fetch("http://localhost:8000/films/", {
	  })
        .then(res => res.json())
        .then(data => this.movies = data)
        .catch(err => console.log(err.message))
  },
  computed: {
  resultQuery(){
      if(this.searchQuery){
      return this.movies.filter((movie)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => movie.title.toLowerCase().includes(v))
      })
      }else{
        return this.movies;
      }
    }
  }
  
}

</script>

<style scoped>


*{
			font-family: 'Poppins', sans-serif;
			 -webkit-user-select: none;
    		-moz-user-select: -moz-none;
    		-o-user-select: none;
    		user-select: none;
		}

		.visibility {
			border-radius: 50%;
			border-color: transparent;
			height: 45px !important;
			margin-left: -8px;
			margin-top: -3px;
			position: relative;
			z-index: 10;

		}

		.visibilitybut {
			background-color: rgba(255, 255, 255, 0.555);
			border-radius: 50%;
			border-color: transparent;
			height: 45px !important;
			width: 45px !important;
			margin-left: 200px;
			margin-top: -10px;
			z-index: 10;
			position: absolute;
		}

		.visibility .btn {
			background-color: white;
			border-radius: 50%;
			border-color: transparent;

		}
		

		.noHover{
    		pointer-events: none;
		}

		.glass {
			font-size: 12px;
			width: 20px;
			display: flex inline;
			padding-left: -10px;
			padding-right: -10px;
		}

        div.movie {
            display: inline-block;
           
        }


		img {
  			-webkit-user-drag: none;
  			-moz-user-drag: none;
  			-o-user-drag: none;
		}
		img {
			pointer-events: none;
		}
		.movie_card{
			padding: 0 !important;
			width: 15rem;
			margin:14px; 
			border-radius: 10px;
			box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 15px 0 rgba(0, 0, 0, 0.19);
		}
		
		.movie_card img{
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			height: 20rem;
		}

		
		
		.movie_info{
			color: #5e5c5c;
		}

		.movie_info i{
			font-size: 20px;
		}
		.card-title{
			width: 100%;
			height: 4rem;
		}
		
        





.search {
    position: relative;
    box-shadow: 0 0 40px rgba(51, 51, 51, .1);
    margin-top: 100px;
    margin-left: 20%;
    margin-right: 20%;
    text-align: center;
}

.search input {
    height: 60px;
    text-indent: 25px;
    border: 2px solid #d6d4d4
}

.search input:focus {
    box-shadow: none;
    border: 2px solid 
}

.search .fa-search {
    position: absolute;
    top: 20px;
    left: 16px
}

.search button {
    position: absolute;
    top: 5px;
    right: 5px;
    height: 50px;
    width: 50px;
    background: white;
}

.home {
  background-color: rgba(0, 0, 0, 0.932);
  height: 100%;

}


</style>
