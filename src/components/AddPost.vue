<template>
    <div class="form">
        <form action="" @submit.prevent="addPost">
            <input 
                type="text" 
                class="name" 
                placeholder="名前"
                v-model="name"
            >
            <textarea name="" id="" cols="30" rows="10" v-model="post"></textarea>
            <button type="submit" class="">
                投稿する
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            post: '',
        }
    },
    methods: {
        addPost() {
            this.$store.dispatch('addPost', {name: this.name})
        }
    }
}
</script>