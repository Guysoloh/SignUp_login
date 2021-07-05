<template>

  <div class="login"></div>
  <div>
      <h4>Welcome Back, Login Here.</h4>
  </div>
  <div class="loginForm">
    <center>     
        <q-input
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'E-mail Required']"
            class="text-input"
            outlined
            v-model="email"
          
            label="E-mail"
          />
       
      
          <q-input
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Password Required']"
            class="text-input"
            outlined
            type="password"
            v-model="password"
            label="Password"
          />
          
            <q-btn
          class="loginButton"
          color="primary"
          @click="loginUser()"
          label="Login"
        />

        <h6 class="bottom-line">
          Don't have an account?
          <router-link style="text-decoration: none;" to="/signup"
            >Sign Up Here</router-link
          >
        </h6>
          <h6 class="forgotPassword">
            <router-link style="text-decoration: none;" to="/forgotPassword"
              >Forgot Your Password?</router-link
            >
          </h6>
        </center>
      </div> 
</template>

<script>
import {firebaseAuth} from "boot/firebase"
export default {
     name: "Login",
  data() {
    return {
      email: null,
      password: null
    };
  },methods:{
      loginUser(){
        firebaseAuth.signInWithEmailAndPassword(this.email, this.password)
       
        .then(response=>{
          this.$router.push('/welcome')
          console.log(response)
        })
          
        .catch(error => {console.log(error.message)})
       
      }
      
   
  }


};
</script>
<style scoped>
.login{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: auto;
    text-align: center;
    
    

}
h4 {
  text-align: center;
}
.text-input {
  width: 300px;
  align-content: center;
  /* left: 50%; */
}
.loginForm {
  align-items: auto;
  position: relative;
 
}
.login-field {
  padding-bottom: 17px;
}
.login-field1 {
  padding-bottom: 0px;
}


.forgotPassword {
  color: blue;
  margin-bottom: 10px;
  margin-top: 0px;
  position: relative;
  font-size: 15px;
  font: optional;

}
.bottom-line {
  color: blue;
  margin-bottom: 10px;
  margin-top: 10px;
  position: relative;
  font-size: 15px;
  font: optional;
}
.login-button {
  width: 300px;
}
</style>