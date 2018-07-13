<template>
<div class="col-6 offset-md-3">
    <div class="form-group">
        <label for="email">Your Email Address</label>
        <input type="text" id="email" class="form-control" v-model="userData.email">
        <label for="password">Enter Password</label>
        <input type="password" id="password" class="form-control" v-model="userData.password">
    </div>
    <div class="mt-3">
        <button class="btn btn-primary" @click="submitted">Submit!
</button>
    </div>
    <div class="card" v-for="item in List" v-bind:key="item.email">
        <div class="card-body">
            <h4 class="card-title">Form Data</h4>
            <p>Mail: <b>{{ item.email }}</b></p>
            <p>Password: <b>{{item.password }}</b></p>
        </div>
    </div>
    <div style="margin-top:10px;">
        <b>V-text</b>
    </div>
    <div class="card">
        <div class="card-header">
            <p>v-text</p>
        </div>
        <div class="card-body" v-text="message"></div>
    </div>
    <div style="margin-top:30px;">
        <b>V-html</b>
    </div>
    <div class="card">
        <div class="card-header">
            <p>v-html</p>
        </div>
        <div class="card-body" v-html="value"></div>
    </div>
    <div style="margin-top:30px;">
        <b>V-show</b>
    </div>
    <div class="card">
        <div class="card-header" v-show="viewed">
            <p>v-show</p>
        </div>
        <div class="card-body">hii</div>
    </div>
    <div style="margin-top:30px;">
        <b>V-if---V-else</b>
    </div>
    <div class="card">
        <div class="card-header">
            <p>v-if--v-else</p>
        </div>
        <div class="card-body">
            <p v-if="viewed">viewed is true</p>
            <p v-else="viewed">viewed is false</p>
        </div>
    </div>
    <div style="margin-top:30px;">
      <b>V-for</b>
    </div>
    <div class="card col-md-6">
      <div class="card-body">
      <div class="row" v-for="item in List" v-bind:key="item.name">
        <div class="">
          <b-img :src="item.image" width="35"></b-img>
        </div>
        <div class="offset-md-1">
          <div>
            <span>{{item.name}}</span>
          </div>
          <div>
           {{item.contact}}
          </div>
        </div>
      </div>
      </div>
    </div>
    <div style="margin-top:30px;">
<b>V-bind</b>
    </div>
    <div class="card">
      <div class="card-body">
        <div>
      <span :title="title"><b>{{message.toUpperCase()}}</b></span>
     </div>
      <b-img :src="url" :title="title"></b-img>
      <div class="row">
<button class="btn" @click="available = !available">Available</button>
<button class="btn" style="margin-left:30px;" @click="nearby =!nearby">NearBy</button>
</div>
    <!-- example one -->
<!-- <div @click="available = !available" :class="{available}">
  <span>Suganya</span>
</div> -->
<!-- example-two -->
<div :class="example">
  <span>suganya</span>
</div>
    </div>
    </div>
    <div class="card">
      <div class="card-header">
        hello{{fullname}}
      </div>
      <div class="card-body">
         <b-form-input v-model="first"
                  type="text"
                  placeholder="First Name"></b-form-input>
         <b-form-input v-model="last"
                  type="text"
                  placeholder="Last name"></b-form-input>
          <b-form-input v-model="fullname"
                  type="text"
                  placeholder="Full name"></b-form-input>
      </div>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            message: 'hello',
            title:'suganya'+new Date(),
            value: 'Welcome to the tutorial <small>which is all about Vue.js</small>',
            url:'https://vuejs.org/images/logo.png',
            viewed: true,
            available:false,
            nearby:true,
            isSubmitted: false,
            first:'',
            last:'',
            List: [],
            userData: {
                image: '',
                email: '',
                password: '',
            },
            List:[
              {image:'/static/monsters/05.png',name:'suganya',contact:'sugan@gmail.com'}
            ],
        }
    },
    watch:{
      fullname:function(){
        this.autosave();
      }
    },
    methods: {
        submitted: function () {
            let data = {
                email: this.userData.email,
                password: this.userData.password,
            };
            this.List.push(data);
            this.userData.email = '';
            this.userData.password = '';
        },
      autosave:function(){
        console.log('saving data');
      }
    },
    computed:{
      example:function(){
        return{
          available:this.available,
          nearby:this.nearby,
        }
      },
      fullname:function(){
        return this.first+ " " +this.last
      }
    }
};
</script>

<style>
.card-style {
    width: 500px;
}
.available span{
 color:darkblue;
}
span{
color:rgb(243, 8, 165);
}
.nearby span:after{
  content:"sanju";
  margin-left:80px;
}
</style>
