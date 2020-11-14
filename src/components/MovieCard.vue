<template>
<div>
<p>hello</p>
<b-card 
  title="{movieDetails.movie.Title}"
  img-src="{movieDetails.movie.Poster}"
>
</b-card>
<div>
</template>

<script>

export default {
  props: {
    movieDetails: Object
  }
}
</script>