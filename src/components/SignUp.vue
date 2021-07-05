<template>
  <div class="signUp">
      <div>
          <h4>Company Name</h4> 
      </div> 
      <div class="signupForm">
    
           <center>
 <h5>Sign Up</h5>
    <q-input
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'First Name Required']"
          outlined
          v-model="firstName"
          label="First Name"
        />
        <q-input
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Last Name Required']"
          outlined
          v-model="lastName"
          label="Last Name"
        />
        <q-input
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'E-mail Required']"
          outlined
          v-model="email"
          label="Email"
        />
          <q-input
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Password Required']"
          outlined
          type="password"
          v-model="password"
          label="Password"
        />
        <q-input
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Phone Number Required']"
          outlined
          v-model="phoneNumber"
          label="Phone Number"
        />

    </center>
      <q-btn
        class="signUp-button"
        color="primary"
        @click="onSubmit()"
        label="Sign Up"
      />

      <h6 class="bottom-line">
        Already have an account?
        <router-link style="text-decoration: none;" to="/signin">Sign In</router-link>
      </h6>
    </div>
  </div>
</template>

<script>
import  {firebaseAuth,firebaseDb} from 'boot/firebase'
import axios from 'axios'
export default {
    name:"SignUp",
data(){
    return {
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      phoneNumber:'',
    };
},methods:{
    onSubmit(){  
        const data={
            firstName:this.firstName,
            lastName:this.lastName,
            email:this.email,
            password:this.password,
            phoneNumber:this.phoneNumber
        }

        firebaseAuth.createUserWithEmailAndPassword(this.email,this.password)
        .then(response=>{
            alert(`Account created for ${response.user.email}`);
            this.$router.push('/welcome');
            let userId= firebaseAuth.currentUser.uid
            firebaseDb.ref('users/'+ userId).set(this.data)    //POSTING DATA USING FIREBASEDB
            },
               
            err=>{
                alert(err.message);
            },
            
        )
        
        // axios.post('/users.json',data)
        // .then(res=>console.log(res))           // posting data using axios.
        // .catch(error=>console.log(error))
        
  console.log('register the user')
    }
}
};
</script>
<style scoped>
.signUp {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: auto;
    text-align: center;
    
   
} 
h4{
    margin-top:-1px;
    font-weight: bolder;
    margin-bottom: -10px;
    }
.signupForm {
    margin:20px;
  position: relative;
  vertical-align: middle;
}
.signupForm .q-input {
  
  width:350px;
  position: relative;
  padding-top: 12px;
  padding-bottom: 13px;
} 
.bottom-line {
  color: blue;
  margin-top: 10px;
  position: relative;
  font-size: 15px;
}
.signUp-button {
    padding:10px;
  width: 200px;
  margin-top:7px;
}
.pw {
  padding-bottom: 100px;
}
.q-img{
    position:absolute;

}
</style>