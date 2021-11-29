<template>
    <div class="board">
        <h2 class="text-center">掲示板</h2>
        
        <AddPost />
        <h2 class="text-center">投稿一覧</h2>
        <Post v-for="(post, index) in posts"
            :key="post.id"
            :name="post.name"
            :summary="post.summary"
            :postIndex="index"
        />
    </div>

</template>

<script>
import AddPost from './AddPost.vue'
import Post from './Post.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    components: {
        AddPost, 
        Post
    },
    created() {
        this.getPosts()
    },
    computed: {
        ...mapState([
            'posts'
        ])
    },
    methods: {
    getPosts() {
        axios.get(
            "https://firestore.googleapis.com/v1/projects/firestore-authntication-todo/databases/(default)/documents/postss"
        )
        .then(res => {
            console.log(res.data.documents);
        });
        }
    }
}
</script>