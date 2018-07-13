<template>
<b-container>
  <form ref="form" @submit.prevent="submit">
      <input type="text" name="name">
      <input type="number" name="age">
      <button type="submit">Submit</button>
    </form>
</b-container>
</template>

<script>
import axios from 'axios'
export default{
  data: function() {
  	return {
    	 name: '',
       age:'',
       show: false
    }
  },
  methods: {
      submit: function () {
        const formData = new FormData(this.$refs['form']); // reference to form element
        const data = {}; // need to convert it before using not with XMLHttpRequest
        for (let [key, val] of formData.entries()) {
          Object.assign(data, { [key]: val })
        }
        console.log(data);
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
          .then(res => console.log(res.request.response))
      }
    }
};

</script>
