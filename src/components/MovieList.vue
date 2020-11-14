<template>
<section id="movie-cards">

  <b-container fluid >  
    <b-row>
      <b-col sm="6" md="4" lg="3" xl="2"
        v-for="movie in movieList"
        :key="movie.id"
        @click="remove(movie.id)"
      >
        <b-card 
          :title="movie.Title"
          :img-src="movie.Poster"
        >
      </b-col>
    </b-row>
  </b-container>
</section>
</template>

<script>

export default {
  props: {
    movieList: Array
  },
  methods: {
    // Delete element from movie array
    remove: function(id) {
      console.log(this.movieList.findIndex(movie => movie.id === id))
      this.movieList.splice(this.movieList.findIndex(movie => movie.id === id), 1)
    }
  }
}
</script>

<style scoped>
  .card-img {
    height:400px;
    object-fit: cover;
  }
</style>