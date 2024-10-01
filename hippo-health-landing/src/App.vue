<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
:root {
  --primary-blue: #4A90E2;
  --secondary-blue: #5CA0E6;
  --primary-purple: #9B59B6;
  --secondary-purple: #AF7AC5;
  --light-grey: #F5F5F5;
  --dark-grey: #333333;
  --white: #FFFFFF;
}

/* You can add other global styles here */
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: var(--dark-grey);
  background-color: var(--white);
  margin: 0;
  padding: 0;
}

/* ... other global styles ... */
</style>

