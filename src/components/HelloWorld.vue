<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"
      >Vite Documentation as</a
    >
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="count++" class="btn btn-success">
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>


<script>
// import { defineProps, reactive } from 'vue'

// defineProps({
//   msg: String
// })

// const state = reactive({ count: 0 })

// export default {
//   props: ["msg"],
//   data: () => ({
//     count: 0,
//   }),
// };

import { ref } from "vue";
export default {
  props: {
    msg: String,
  },
  setup(props) {
    const count = ref(0);
    return {
      count,
      props,
    };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>