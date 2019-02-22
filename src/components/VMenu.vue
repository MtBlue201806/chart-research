<template>
  <div id="menu">
    <p class="menu-label">CHART LIST</p>
    <ul class="menu-list">
      <li><a href="#">Apex Charts</a></li>
      <li><a href="#">Charts.js</a></li>
      <li><a href="#">C3.js</a></li>
      <li><a href="#">protly</a></li>
      <li><a href="#">hoge</a></li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#menu {
  padding: 2rem 1rem;
}

.menu-label {
  color: #7a7a7a;
  font-size: 12px;
  letter-spacing: .1rem;
  text-transform: uppercase;
}

.menu-list {
  padding: 10px 0;
  font-size: 14px;
  color: #4a4a4a;
  line-height: 20px;
  
}

.menu-list li {
  padding: 8px 12px;
}

.menu-list li:hover {
  background: #eef3f5;
}


</style>
