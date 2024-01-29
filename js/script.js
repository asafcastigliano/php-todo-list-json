const { createApp } = Vue;

createApp({
    data() {
        return {

            apiURL: "../server/server.php",
            todolist: []
        }
    },
    
    methods: {

        getToDoList() {
            aaxios.get(this.apiURL).then((response) => {
                this.todolist = response.data;
            });
        }

    }
}).mount('#app');