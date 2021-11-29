const app = new Vue({
    el: "#root",
    data: {
        content: [
            {
                testo: "Fare la lista della spesa",
                done: false
            },
            {
                testo: "Pagare l'affitto",
                done: false
            },
            {
                testo: "Andare in palestra",
                done: false
            },
        ],
        inputValue: ""
    },
    methods: {
        addToDo: function() {
            if(this.inputValue != "") {
                this.content.push({
                    testo: this.inputValue,
                    done: false
                });
                this.inputValue = "";
            }
        },
        removeToDo: function(index) {
            this.content.splice(index, 1);
        },
        lineThrough: function(content) {
            if(content.done == false) {
                content.done = true;
            } else {
                content.done = false;
            }
        }
    }
})