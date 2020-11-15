<template>
  <!-- Took awhile to figure out how to get a modal working. 
    Viable solution came from here https://github.com/bootstrap-vue/bootstrap-vue/issues/3365
    Was taking wrong approach by using multiple modals in For loop instead of updating data in a single instance -->

  <b-modal hide-header hide-footer scrollable size="xl" no-fade centered
    id="movieDetailsModal" 
    @hidden="closeModal"
    :title='movieData.Title' >

    <b-container fluid >
      <b-row class="pb-2">
        <b-col cols="auto">
          <img :src='movieData.Poster'>
        </b-col>
        <b-col>
          <b-container fluid>
            <b-row>
              <b-col>
                <h2>{{ movieData.Title }}</h2>
                <p class="mb-4">{{ movieData.Plot }}</p>
                <div v-if="movieData.Genre" class="mb-4">
                  <b-badge 
                    v-for="(genre, index) in movieData.Genre.split(',')" 
                    :key="index"
                    class="p-2 mr-2">
                    {{ genre.trim() }}
                  </b-badge>
                </div>

                <b-list-group v-if="movieData.Actors" class="mb-4">
                  <b-list-group-item button
                    v-for="(actor, index) in movieData.Actors.split(',')" 
                    :key="index"
                    class="p-2 mr-2">
                    {{ actor.trim() }}
                  </b-list-group-item>
                </b-list-group>

              </b-col>
            </b-row>
          </b-container>
      </b-row>
    </b-container>
    <div class="modal-footer">
     <button type="button" @click="deleteBtn(movieData.id)" class="btn btn-danger mr-auto">Delete</button>
     <button type="button" @click="$bvModal.hide('movieDetailsModal')" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
  </b-modal>
</template>

<script>

export default {
  props: {
    movieData: Object,
  },
  methods: {
    closeModal: function() {
      this.$emit('close');
    },
    deleteBtn: function(id) {
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
        if (confirmation) {
          this.$emit('remove', id);
        }
      })
      
    }
  }
}
</script>