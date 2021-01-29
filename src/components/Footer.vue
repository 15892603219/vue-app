<template>
  <footer>
    <div v-for="menu in menuList" :key="menu.path">
      <router-link :to="menu.path">{{ menu.name }}</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer",
  
}


</script>