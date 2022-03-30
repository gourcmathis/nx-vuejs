<template>
  <div class="home">
    <Navbar/>
    <div class="container">
        
        <div class="search"> <i class="fa fa-search"></i> <input type="text" class="form-control" placeholder="Quel film souhaitez vous trouver ?"> <button class="btn btn-light"><img src="../assets/search.svg" alt="Bootstrap" width="25" height="25"></button> </div>
            
    <div v-for="movie in movies" :key="movie.imdbID" class="movie">
        <div class="container mt-5">
	            <div class="row justify-content-center">

		        </div>

				<div class="card movie_card">
		  <img :src= movie.Poster class="card-img-top" >
		  <div class="card-body">
		  	<i class="seen_button" data-toggle="tooltip" data-placement="bottom" title="Déja vu">
                  <img class="seen_cross" src="../assets/x.svg" alt="Bootstrap" width="25" height="25">
		  	</i>
		    <h5 class="card-title">{{ movie.Title }}</h5>
		   		<span class="movie_info">{{ movie.Year }}</span>
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
      movies: []
    }
  },
  mounted() {
      fetch("http://localhost:3000/movies")
        .then(res => res.json())
        .then(data => this.movies = data)
        .catch(err => console.log(err.message))
  }
}

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:weight@100;200;300;400;500;600;700;800&display=swap");


*{
			font-family: 'Poppins', sans-serif;
			 -webkit-user-select: none;
    		-moz-user-select: -moz-none;
    		-o-user-select: none;
    		user-select: none;
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
		.seen_button{
			background-color: #f0f0f0;
   			position: absolute;
			width: 50px;
			height: 50px;
			border-radius: 50%;
			right: 20px;
			bottom: 111px;
			font-size: 27px;
			padding-left: 21px;
			padding-top: 16px;
			color: #FFFFFF;
			cursor: pointer;
		}
        .seen_cross{
            position: absolute;
            height: 50px;
            width: 50px;
            padding-bottom: 250px;
            margin-top: -25px;
            margin-left: -34px;
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
}


</style>
