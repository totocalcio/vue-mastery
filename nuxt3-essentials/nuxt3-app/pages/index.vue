<script setup lang="ts">
// useFetchで/server/api/[...].jsのAPIを呼び出す
// [...].jsではすべてのAPIを補足する
// 引数"/api/tickers/?limit=10"がevent.node.req.urlとして渡される
const { data } = await useFetch<any>("/api/tickers/?limit=10");
</script>

<template>
  <main>
    <h1>Index Page</h1>
    <table border="1 px solid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>Details</th>
        </tr>
      </thead>
      <tr v-for="currency in data.data" :key="data.data.id">
        <td>{{ currency.name }}</td>
        <td>{{ currency.symbol }}</td>
        <td>{{ currency.price_usd }}</td>
        <td>
          <!-- {{ currency.id }} -->
          <NuxtLink :to="'/currency/' + currency.id">{{
            currency.id
          }}</NuxtLink>
        </td>
      </tr>
    </table>
  </main>
</template>
