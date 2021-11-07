<template>
    <div class="mb-3 w-50 mx-auto">
        <form action="" @submit.prevent="addPost">
            <input 
                type="text" 
                class="form-control" 
                placeholder="名前"
                v-model="name"
            >
            <textarea name="" class="form-control" id="" cols="30" rows="10" v-model="summary"></textarea>
            <button type="submit" class="btn btn-primary mx-auto d-block">
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
            summary: '',
        }
    },
    methods: {
        addPost() {
            this.$store.dispatch('addPost', {name: this.name})
            this.name = ""
            this.$store.dispatch('addPost', {name: this.summary})
            this.summary = ""
        }
    }
}
</script>