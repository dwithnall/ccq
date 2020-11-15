<template>
<div>
  <ul>
      <li>ID: {{ movieData.id }}</li>
      <li>Name: {{ movieData.Title }}</li>
    </ul>
<div>
</template>

<script>

export default {
  props: {
    movieData: Object
  }
}
</script>