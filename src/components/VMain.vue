<template>
  <div id="main">
    <v-menu/>
    <v-charts/>
  </div>
</template>

<script>
import VCharts from './VCharts'
import VMenu from './VMenu'

export default {
  components: {
    VMenu, VCharts
  }
}
</script>

<style scoped>
#main {
  display: grid;
  grid-template-columns: 180px 1fr;
  grid-template-areas: "areaA areaB";
}

#menu {
  grid-area: areaA;
}

#charts {
  grid-area: areaB;
}
</style>
