<template>
    <h1>Hi</h1>
    <p>{{ dat }}</p>
</template>

<script>
export default {
name:"DetailsComp",
props: ['dat'],
create(){
    console.log(this.dat)
}
}
</script>