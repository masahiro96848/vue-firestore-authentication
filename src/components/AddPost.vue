<template>
    <div class="mb-3 w-50 mx-auto">
        <form action="" @submit.prevent="addPost">
            <input 
                type="text" 
                class="form-control" 
                placeholder="名前"
                v-model="name"
            >
            <textarea name="" placeholder="投稿内容を入力" class="form-control" id="" cols="30" rows="10" v-model="summary"></textarea>
            <button type="submit" class="btn btn-primary  mx-auto mt-3 d-block">
                投稿する
            </button>
        </form>
    </div>
</template>

<script> 
import axios from 'axios'
export default {
    data() {
        return {
            name: '',
            summary: '',
        }
    },
    methods: {
        addPost() {
            axios.post(
                "https://firestore.googleapis.com/v1/projects/firestore-authntication-todo/databases/(default)/documents/comments",
                {
                    fields: {
                        name: {
                            stringValue: this.name
                        },
                        summary: {
                            stringValue: this.summary
                        }
                    }
                }
            )
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            })
            this.$store.dispatch('addPost', {name: this.name, summary: this.summary})
            this.name = ""
            this.summary = ""
        }
    }
}
</script>