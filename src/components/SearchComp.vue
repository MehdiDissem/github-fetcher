<template>
    <div >
        <h1>Your Search here : </h1>
            <input class="hi" v-model="message" placeholder="Search here"/>
             <br/> 
            <div>
                <button @click="handleClick">Search here</button>
            </div>
            <p class="ho">{{message}}</p>
            <div>
                <img :src="avatar"/>
                <p>{{ dat }}</p>

            </div>
        </div>

</template>
<script>
import axios from "axios"
export default {
    name:'SearchComp',
    data(){
        return{
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
                .then( res => {console.log(this.dat)
                    this.dat=res.data
                    this.avatar = res.data.avatar_url
                })
		.catch( error => console.error(error));
        }
    }
}
</script>
<style scoped>
.hi{
    width: 250px;
    height:40px;
    color: green;
    border-radius: 10px;
}
.ho{
    color:black
}
</style>