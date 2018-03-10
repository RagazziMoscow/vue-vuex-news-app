<template>
  <form class="news_add add">
    <div class="form-group col-md-12">
      <label for="input-author">Автор:</label>
      <input type="text"
             class="form-control"
             id="input-author"
             placeholder="Автор"
             v-model="author">
    </div>

    <div class="form-group col-md-12">
      <label for="content-area">Новость:</label>
      <textarea class="form-control"
                id="content-area"
                rows="3"
                v-model="content">
      </textarea>
    </div>

    <div class="form-row col-md-12">
      <div class="col-auto">
        <div class="form-check">
          <input class="form-check-input"
                 type="checkbox"
                 id="agree-check"
                 v-model="agree">
          <label class="form-check-label" for="agree-check">
            Согласен
          </label>
        </div>
      </div>
      <div class="col-auto">
        <button type="button"
                class="btn"
                v-bind:class="{'btn-success': ready, 'btn-warning': !ready}"
                v-bind:disabled="!ready"
                @click="addArticle">
                Добавить
        </button>
      </div>
    </div>
  </form>
</template>


<script>
import { ADD_ARTICLE } from '../store/constants';

export default {
  data() {
      return {
        agree: false,
        author:'',
        content: ''
      }
  },
  computed: {
    authorIsEmpty() {
      return (this.author.trim() === '');
    },
    contentIsEmpty() {
      return (this.content.trim() === '');
    },
    ready() {
      return (this.agree && !this.authorIsEmpty && !this.contentIsEmpty);
    }
  },
  methods: {
    addArticle() {
      const author = this.author;
      const content = this.content;

      this.$store.commit(ADD_ARTICLE, {author, content});
      
      this.author = '';
      this.content = '';
    }
  }
}
</script>

