/* eslint-disable */
<template>
    <div >
        <h1>Your Search here : </h1>
            <input class="hi" v-model="message" placeholder="Search here"/>
            <br/> 
            <div>
                <button id="btn" @click="handleClick">Search here</button>
            </div>
            <p class="ho">{{message}}</p>
            <div>
                <img :src="avatar" id="img"/>
                <!-- <p>Following : {{ dat.following }}</p>
                <p>{{ dat }}</p> -->
            </div>
            <div>
                <button id="btn" @click="modal = !modal">Show details</button>
                <div v-show="modal"  >
                    <DetailsComp :dat="dat"/>
                </div>
            </div>
        </div>
</template>
<script>
import axios from "axios"
import router from '@/router'
import DetailsComp from './DetailsComp.vue'
// Optionally import default styling

export default {
    name:'SearchComp',
    components:{DetailsComp},
    data(){
        return{
            modal:false,
            message:'',
            dat:'',
            avatar:"https://avatars.githubusercontent.com/u/55929607?v=4"
        }
    },
    // mounted(){
        //     this.handleGit()
        // },
        methods:{
            handleClick(){
            this.handleGit()
        },
        handleGit(){
            axios.get(`https://api.github.com/users/${this.message}`, { 
                headers: {
                    'Accept' : 'application/vnd.github.v3+json'
                }})
                // .then(response => response.json()) //Converting the response to a JSON object
                .then( res => {
                    console.log(this.dat)
                    this.dat=res.data
                    this.avatar = res.data.avatar_url
                })
		.catch( error => {console.error(error)
        router.push({name:'NotFound'})
    });
        }
    }
}
</script>
<style >

.hi{
    width: 250px;
    height:40px;
    color: green;
    border-radius: 10px;
}
.ho{
    color:black
}
#img{
    border-radius: 50%;
    max-width: 10%;
    margin-top: 30px;
    
}
#btn{
    margin-top: 30px;
background-color: black; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
#btn:hover{
    color:black;
    background-color: grey;
    border-radius: 20;
    font-weight: bold;
}
</style>