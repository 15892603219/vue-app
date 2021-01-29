<template>
  <div class="home">
    <ul>
      <li v-for="tv in tvlist" :key="tv.id">
        {{tv.name}}
      </li>
      {{msg}}
      
    </ul>
    
  </div>
</template>

<script>

export default {
  name: "Music",
  data() {
    return {
      tvList: [],
      msg:"聊天",
    };
  },
  methods: {
    
  },
};
</script>