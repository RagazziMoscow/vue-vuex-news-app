<template>
  <div class="news">
    <ul class="news__list list-group">
        <li class="news__item list-group-item" v-for="article in news" v-bind:key="article.id">
            <Article v-bind:author="article.author"
                     v-bind:content="article.content">
            </Article>
        </li>
    </ul>
  </div>
</template>

<script>
import Article from './article.vue';

export default {
  computed: {
    news() {
      return this.$store.state.news;
    }
  },
  components: {
      Article
  }
}
</script>

