
        function filterProducts(category) {
            const products = document.querySelectorAll('.product-item');
            let found = false;

            products.forEach(product => {
                if (category === 'all' || product.dataset.category === category) {
                    product.style.display = 'block';
                    found = true;
                } else {
                    product.style.display = 'none';
                }
            });

            document.getElementById('noResults').style.display = found ? 'none' : 'block';
        }

        document.getElementById('productSearch').addEventListener('input', function () {
            const query = this.value.toLowerCase();
            const products = document.querySelectorAll('.product-item');
            let found = false;

            products.forEach(product => {
                const name = product.querySelector('h3').textContent.toLowerCase();
                if (name.includes(query)) {
                    product.style.display = 'block';
                    found = true;
                } else {
                    product.style.display = 'none';
                }
            });

            document.getElementById('noResults').style.display = found ? 'none' : 'block';
        });

        