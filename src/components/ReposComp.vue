<template>
    <div class="firstDiv">
      <h1>Repositories</h1>
      <div class="table-container">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Language</th>
              <th scope="col">Stars</th>
              <th scope="col">Forks</th>
              <th scope="col">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(repo, index) in repositories" :key="index">
              <td><a :href="repo.html_url" target="_blank">{{ repo.name }}</a></td>
              <td>{{ repo.description }}</td>
              <td>{{ repo.language }}</td>
              <td>{{ repo.stargazers_count }}</td>
              <td>{{ repo.forks_count }}</td>
              <td>{{ formatDateTime(repo.updated_at) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>

<script>
import moment from 'moment';
export default {
    name:'ReposComp',
    props:['repositories'],
    methods:{
        formatDateTime(dateTimeString) {
      const now = moment();
      const dateTime = moment(dateTimeString);
      const diff = now.diff(dateTime, 'days');

      if (diff === 0) {
        return dateTime.fromNow();
      } else {
        return dateTime.format('MMM D, YYYY');
      }
    }
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


  /* Media queries for mobile devices */
  @media only screen and (max-width: 600px) {
    .table {
      width: 100%;
    }
    .table th,
    .table td {
      display: block;
      width: 100%;
      text-align: center;
    }
    .table th {
      text-align: center;
    }
  }

  h1 {
  font-size: 2rem;
  color: #333;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 1rem 0;
  text-shadow: 1px 1px 2px #888;
}

/* Media queries for mobile devices */
@media only screen and (max-width: 600px) {
  h1 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }
}
</style>

