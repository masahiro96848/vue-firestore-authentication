<template>
    <div class="board">
        <Post v-for="(item, index) in posts" 
            :key="item.id"
            :name="item.name"
            :summary="item.summary"
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