const { createApp } = Vue;

createApp({
    data() {
        return {

            apiURL: "../server/server.php",
            todolist: []
        }
    },

    mounted() {
        this.getToDoList();
    },
    
    methods: {

        getToDoList() {
            axios.get(this.apiURL).then((response) => {
                this.todolist = response.data;
                console.log(response.data);
            });
        }

    }
}).mount('#app');