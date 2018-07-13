<template>
  <b-container>
  <input v-model="email">
  <p>A list of names that rhyme: {{namesThatRhyme.join(', ')}}</p>
<label>
  <input type="checkbox" value="Daniel" v-model="namesThatRhyme"/>
  Daniel
</label>
<label>
  <input type="checkbox" value="Nathaniel" v-model="namesThatRhyme"/>
  Nathaniel
</label>
<label>
  <input type="checkbox" value="Hubert" v-model="namesThatRhyme"/>
  Hubert
</label>
<button v-show="email" class="btn">Login</button>

  </b-container>

</template>

<script>
export default{
  name:'Vmodel',
  data: function(){
  return{
    email:'',
    namesThatRhyme: []
  }
},
};

</script>

<style>

</style>
