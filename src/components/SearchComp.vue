/* eslint-disable */
<template>
    <div >
        <h1 class="title">Find on Github: </h1>
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
                    <button id="btn" @click="modal = true, repos = false">Show details</button>
                </transition>
                <transition name="fade" v-if=" show===true">
                    <button id="btn" @click="repos = true, modal= false">Show Repos</button>
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
  position: relative;
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

.hi:hover {
  background-color: #333;
  color: #fff;
}

.hi::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: #333;
  transform: skew(-20deg);
  z-index: -1;
  transition: all 0.3s ease-in-out;
}

.hi:hover::before {
  left: 0;
  transform: skew(-20deg) translateX(100%);
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.hi::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #333;
  animation: pulse 1s infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  opacity: 0;
}

.hi:hover::after {
  width: 4rem;
  height: 4rem;
  opacity: 1;
}
.ho{
    color:black
}
#img {
  border-radius: 50%;
  max-width: 50%;
  margin-top: 30px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  filter: grayscale(100%);
}

/* Media query for mobile devices */
@media only screen and (max-width: 600px) {
  #img {
    max-width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
}

#img:hover {
  transform: scale(1.2) rotate(10deg);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  filter: grayscale(0%);
}

#img::before {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background-image: radial-gradient(ellipse at center, #fff 0%, #fff 50%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

#img:hover::before {
  opacity: 1;
}

#img::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.3);
  width: 0;
  height: 0;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.3s ease;
}

#img:hover::after {
  width: 100%;
  height: 100%;
  opacity: 1;
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
  width: 0%;
  height: 3px;
  background-color: #666;
  transform-origin: left;
  transition: width 0.3s ease-out;
}

.title:hover::before {
  width: 100%;
  transform-origin: right;
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