        
        
        // JavaScript to load the header from loading.html
        document.addEventListener("DOMContentLoaded", function() {
            fetch('../../../../App/Pages/components/loading.html')
                .then(response => response.text())
                .then(data => {
                    // console.log(data);
                    document.getElementById('loading').innerHTML = data;
                });
        });