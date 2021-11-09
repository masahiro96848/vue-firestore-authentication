<template>
    <div class="post">
        <div class="postheader">
            <p class="post-name">{{ name }}</p>
            <p class="post-summary">{{ summary }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        summary: {
            type: String,
            required: true,
        },
        posts: {
            type: Array,
        },
        postIndex: {
            type: Number,
            require: true,
        }
    }
}
</script>

<style>
.postheader {
    text-align: center;
}
</style>