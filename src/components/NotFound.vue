<template>
    <h1>USER NOT FOUND</h1>
    <button id="btn" @click="handleReturn">Try Again</button>
</template>
<script>
import router from '@/router'
export default {
    methods:{
        handleReturn(){
            router.push({name:"SearchComp"})
        }
    }
}
</script>
<style>
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