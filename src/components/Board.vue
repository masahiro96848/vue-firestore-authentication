<template>
    <div class="board">
        <Post v-for="(post, index) in posts"
            :key="post.id"
            :name="post.name"
            :summary="post.summary"
            :postIndex="index"
        />
        <AddPost />
    </div>

</template>

<script>
import AddPost from './AddPost.vue'
import Post from './Post.vue'
import { mapState } from 'vuex'
export default {
    components: {
        AddPost, 
        Post
    },
    computed: {
        ...mapState([
            'posts'
        ])
    },
}
</script>