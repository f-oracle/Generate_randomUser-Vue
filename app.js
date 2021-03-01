const app = Vue.createApp({

    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/75.jpg',
        }
    },
    methods: {
       async  getUser() {
            // this get a random data using fetch with the random user api
           const res = await fetch('https://randomuser.me/api')
           const { results } = await res.json()

        //    console.log(results)
        
           
           this.firstName= results[0].name.first
           this.lastName= results[0].name.last
           this.email= results[0].email
           this.gender= results[0].gender
          this.picture= results[0].picture.large
        },
    },
})

app.mount('#app')