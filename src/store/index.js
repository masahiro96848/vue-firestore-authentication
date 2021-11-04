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
		addList(state, payload) {
			state.posts.push({
				name: payload.name,
				post: payload.post
			})
		}
	},
	actions: {
		addList(context, payload) {
			context.commit('addList', payload)
		}
	},
	getters: {
	}
})

export default store