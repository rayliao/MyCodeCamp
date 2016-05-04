var apiURL = 'https://en.wikipedia.org/w/api.php';

var wiki = new Vue({
    el: '#wiki',
    data: {
        message: 'Hello Vue.js',
        pages: null
    },
    methods: {
        search: function(){
            var self = this;
            var query = this.query.trim();
            if(!query) return;

            $.ajax({
                url: apiURL,
                data: 'format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + query,
                dataType: 'jsonp',
                success: function(data) {
                   self.pages = data.query.pages;
                   console.log(self.pages);
                }
            });
        }
    }
});