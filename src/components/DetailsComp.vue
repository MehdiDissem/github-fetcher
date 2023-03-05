<template>
    <div class="firstDiv">
        <h1>{{ dat.bio }}</h1>
        <div class="table-container">
    <table class="table table-hover">
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
.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.table {
  border-collapse: collapse;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
}

.table th,
.table td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}

.table th {
  background-color: #eee;
  font-weight: bold;
}

.table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}
.table-hover tbody tr:hover {
    background-color: #f5f5f5;
  }

  h1 {
    font-size: 3rem;
    color: #333;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin: 2rem 0;
    text-shadow: 1px 1px 2px #888;
  }
</style>


