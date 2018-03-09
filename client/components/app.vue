<template>
    <div class="wrapper">
        <Add></Add>
        <News></News>
    </div>
</template>
<script>
import News from './news.vue';
import Add from './add.vue';

export default {
  data() {
      return {
          name: 'Ilya'
      }
  },
  components: {
      Add,
      News
  }
}
</script>
