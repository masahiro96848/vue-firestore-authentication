import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedPosts = localStorage.getItem('board-posts')

const store =  new Vuex.Store({
	state: {
		posts: savedPosts ? JSON.parse(savedPosts):[
			
		]
	},
	mutations: {
		addPost(state, payload) {
			state.posts.push({
				name: payload.name,
				summary: payload.summary
			})
		}
	},
	actions: {
		addPost(context, payload) {
			context.commit('addPost', payload)
		}
	},
	getters: {
	}
})

store.subscribe((mutation, state) => {
	localStorage.setItem('board-posts', JSON.stringify(state.posts))
})

export default store