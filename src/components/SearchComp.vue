/* eslint-disable */
<template>
    <div >
        <h1 class="title">Your Search here : </h1>
            <input class="hi" v-model="message" placeholder="Search here"/>
            <br/> 
            <div>
                <button id="btn" @click="handleClick">Search here</button>
            </div>
            <div>
                <img :src="avatar" id="img"/>
                <!-- <p>Following : {{ dat.following }}</p>
                <p>{{ dat }}</p> -->
                <p id="name">{{ dat.name }}</p>
                <transition name="fade">
                <p v-if="dat.hireable === true" class="hireable">This person is available for hire!</p>
                <p v-else-if="dat.hireable === false" class="not-hireable">This person is not available for hire.</p>
                </transition>
            </div>
            <div>
                <transition name="fade" v-if=" show===true">
                    <button id="btn" @click="modal = !modal, repos = repos">Show details</button>
                </transition>
                <transition name="fade" v-if=" show===true">
                    <button id="btn" @click="repos = !repos, modal= !modal">Show Repos</button>
                </transition>
                <div v-show="modal"  >
                    <DetailsComp :dat="dat"/>
                </div>
                <div v-show="repos"  >
                    <ReposComp :repositories="repositories"/>
                </div>
            </div>
        </div>
</template>
<script>
import axios from "axios"
import router from '@/router'
import DetailsComp from './DetailsComp.vue'
import ReposComp from "./ReposComp.vue"
// Optionally import default styling

export default {
    name:'SearchComp',
    components:{DetailsComp,ReposComp},
    data(){
        return{
            modal:false,
            message:'',
            dat:'',
            avatar:"https://avatars.githubusercontent.com/u/55929607?v=4",
            show:false,
            repos:false,
            repositories:''
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
                    this.show= true
                    axios.get(`https://api.github.com/users/${this.message}/repos`, { 
                headers: {
                    'Accept' : 'application/vnd.github.v3+json'
                }}).then(res => {this.repositories=res.data, console.log(this.repositories)}).catch(err => console.log(err))
                })
		.catch( error => {console.error(error)
        router.push({name:'NotFound'})
    });
        }
    }
}
</script>
<style >

.hi {
    padding: 0.8rem 1.2rem;
    border-radius: 5rem;
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    font-size: 1.2rem;
    color: #333;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    outline: none;
    margin: 1rem 0;
  }
  .hi:focus {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
    transform: scale(1.02);
  }
.ho{
    color:black
}
#img {
  border-radius: 50%;
  max-width: 10%;
  margin-top: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

#img:hover {
  transform: scale(1.2);
}
#btn {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

#btn:hover {
  background-color: #3e8e41;
  color: white;
}

.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.title {
  font-size: 40px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 4px;
  position: relative;
  overflow: hidden;
}

.title::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color: #666;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-out;
}

.title:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

@media (max-width: 767px) {
  .title {
    font-size: 24px;
  }
}

#name {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 10px;
    color: #2c3e50;
}

.cool-message {
  animation-name: slidein;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

@keyframes slidein {
  from {
    transform: translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.hireable,
.not-hireable {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  padding: 5px 15px;
  margin-top: 20px;
  animation: pulse 1.5s infinite;
}

.hireable {
  background-color: #27ae60;
  color: white;
}

.hireable::before {
  content: "✅ ";
  transform: scale(1);
}

.not-hireable {
  background-color: #c0392b;
  color: white;
}

.not-hireable::before {
  content: "❌ ";
  transform: scale(1.5);
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>