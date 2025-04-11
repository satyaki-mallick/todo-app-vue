<template>
  <header class="app-header">
    <nav class="header-nav">
      <RouterLink to="/" class="header-navlink">Shorter TF Trades</RouterLink>
      <RouterLink to="/test" class="header-navlink" >Daily TF Trades</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView/>
  </main>
</template>

<script>
import DailyTrades from "@/views/DailyTrades.vue";
import ShorterTrades from "@/views/ShorterTrades.vue";

export default {
  name: 'App',
  components: {
    DailyTrades,
    ShorterTrades
  }
}
</script>

<style>

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #2F035D;
}
.header-nav {
  display: flex;
  align-items: center;
  color: white;
  gap: calc(32rem / 16);
}

.header-navlink {
  font-weight: var(--weight-lightest);
  transition: all 250ms ease;
}
</style>
