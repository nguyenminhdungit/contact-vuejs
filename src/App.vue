<template>
  <div class="container h-100 p-4 pt-0">
    <div class="row h-100 d-flex justify-content-center align-items-center">
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <FormRegister />
      </div>
    </div>
  </div>
</template>

<script>
import FormRegister from './components/Form.vue'

export default {
  name: 'App',
  components: {
    FormRegister
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}



/* global settings */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

body {
  font-size: 16px;
  line-height: 1.5;
  -webkit-tap-highlight-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: black;
  background-color: #deeee1;

}

::after,
::before {
  box-sizing: border-box;
}

img {
  vertical-align: middle;
  max-width: 100%;
}

ul {
  list-style: none;
}

h1 {
  font-weight: 700;
  color: var(--white);
}

h2 {
  font-weight: 600;
  color: var(--white);
}

h3,
h4,
h5,
h6 {
  font-weight: 500;
  color: var(--white);
}

a {
  text-decoration: none;
}

p {
  font-size: 16px;
  margin: 0;
}

hr {
  margin: 0;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
