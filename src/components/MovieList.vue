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

  <!-- Took awhile to figure out how to get a modal working. 
    Viable solution came from here https://github.com/bootstrap-vue/bootstrap-vue/issues/3365
    Was taking wrong approach by using multiple modals in For loop instead of updating data in a single instance -->

  <b-modal hide-footer scrollable size="xl" no-fade centered
    id="movieDetailsModal" 
    @hidden="clearMovieData"
    :title='movieData.Title' >

    <b-container fluid>
      <b-row>
        <b-col cols="auto">
          <img :src='movieData.Poster'>
        </b-col>
        <b-col>
          <b-container fluid>
            <b-row>
              <b-col>
                <h2>{{ movieData.Title }}</h2>
                <p>{{ movieData.Plot }}</p>
              </b-col>
            </b-row>
          </b-container>
      </b-row>
    </b-container>
    <div class="modal-footer">
     <button type="button" @click="remove(movieData.id)" class="btn btn-danger mr-auto">Delete</button>
     <button type="button" @click="$bvModal.hide('movieDetailsModal')" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
  </b-modal>

</section>
</template>

<script>

export default {
  props: {
    movieList: Array
  },
  data() {
    return {
      movieData: {}
    }
  },
  methods: {
    // Delete element from movie array
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
    clearMovieData: function() {
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