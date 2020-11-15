<template>
<section id="movie-cards">
<!-- Fairly standard fluid grid layout. Issues with image scaling partially resolved using cover. Break points between lg & xl could do with some work -->
  <b-container fluid >  
    <b-row>
      <b-col 
        sm="6" md="4" lg="3" xl="2"
        class="mb-2"
        v-for="movie in movieList"
        :key="movie.id"
        @click="showDetails(movie)"
      >
        <b-card 
          class="h-100" 
          :title="movie.Title"
          :img-src="movie.Poster"
        >
        
      </b-col>
    </b-row>
  </b-container>

  <MovieDetails :movieData="movieData" @close="handleClose" @remove="handleRemove"></MovieDetails>

</section>
</template>

<script>

import MovieDetails from './MovieDetails.vue'

export default {
  props: {
    movieList: Array
  },
  components: {
    MovieDetails
  },
  data() {
    return {
      movieData: {}
    }
  },
  methods: {
    // Delete element from movie array
    handleRemove: function(id) {
      console.log("handleRemove", id)

      this.movieList.splice(this.movieList.findIndex(movie => movie.id === id), 1)
      this.$bvModal.hide('movieDetailsModal')
    },
    remove: function(id) {
      this.$bvModal.msgBoxConfirm('Are you sure?', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
      .then(confirmation => {
        console.log(confirmation);
        if (confirmation) {
          this.movieList.splice(this.movieList.findIndex(movie => movie.id === id), 1)
          this.$bvModal.hide('movieDetailsModal')
        }
      })
    },
    // Show the detail modal
    showDetails: function(movie) {
      this.movieData = movie
      this.$bvModal.show('movieDetailsModal')
    },
    // Clear the modal data on close
    handleClose: function() {
      console.log("handleClose")
      this.movieData = {}
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