const app = Vue.createApp({
    // data, functions to react event. we can specify template
    // template: '<h2>I am a template  </h2>'
    data() {
        return {
            showBooks : true,
            title: 'the final empire',
            author: 'marco',
            age: 12,
        }
    },
    methods: {
        changeTitle(newTitle) {
            this.title = newTitle // note: usage of this
        },
        toggleShowBooks(){
            this.showBooks = !(this.showBooks)
        }
    }
})

app.mount('#app') // cannot use this variable outside #app