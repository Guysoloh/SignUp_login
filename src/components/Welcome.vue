<template>
  <div>
      <h5>
          <center>
              Welcome
             {{firstName}}
             <br>

              <p> This is your email:{{email}}</p>

              
              </center></h5>
  </div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return {
            email:'',
            firstName:''
        }
    },
// created(){
//     axios.get('/user.json')
//    .then(res => {
//           console.log(res)
//           const data = res.data
//           const users = []
//           for (let key in data) {
//             const user = data[key]
//             user.id = key
//             users.push(user)
//           }
//            console.log(users)
//           this.email = users[0].email
//           this.firstName=users[0].firstName       })
//         .catch(error => console.log(error))
//  }
}</script>

