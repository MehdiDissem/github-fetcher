<template>
    <div class="firstDiv">
        <h1>{{ dat.bio }}</h1>
        <div>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Key</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(value, key) in dat" :key="key">
              <td>{{ key }}</td>
              <td>{{ value }}</td>
              </tr>
            </tbody>
        </table>

    </div>

    </div>
</template>

<script>
export default {
name:"DetailsComp",
props: ['dat'],
create(){
    console.log("From the details component : ",this.dat)
}
}
</script>
<style>

</style>