<template>
    <div >
        <h1>Your Search here : </h1>
            <input class="hi" v-model="message" placeholder="Search here"/>
             <br/> 
            <div>
                <button @click="handleClick">Search here</button>
            </div>
            <p class="ho">{{message}}</p>
        </div>

</template>
<script>
export default {
    name:'SearchComp',
    data(){
        return{
            message:''
        }
    },
    methods:{
        handleClick(){
            console.log(this.message)
            this.handleGit()
        },
        handleGit(){
            fetch(`https://api.github.com/users/${this.message}`, { 
                 headers: {
                      'Accept' : 'application/vnd.github.v3+json'
                  }})
		// .then(response => response.json()) //Converting the response to a JSON object
		.then( res => {
            res.json()
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