<template>
    <div class="article">
        <h3 class="article__author">{{author}}</h3>
        <template v-if="hidden">
            <p class="article__preview">{{preview}}</p>
            <button type="button" class="btn btn-primary" @click="hidden=false">Показать</button>
        </template>
        <template v-else>
            <p class="article__content">{{content}}</p>
            <button type="button" class="btn btn-warning" @click="hidden=true">Скрыть</button>
        </template>
    </div>
</template>

<script>
export default {
  props: ['author', 'content'],
  data() {
    const preview = `${this.content.substring(0, 25)}...`;
    return {
        hidden: true,
        preview
    }
  }
}
</script>

