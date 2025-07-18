const products = [
            {
                id: 1,
                name: "Wireless Bluetooth Headphones",
                price: 89.99,
                oldPrice: 129.99,
                description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
                category: "electronics",
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                rating: 4.5,
                featured: true
            },
            {
                id: 2,
                name: "Smart Watch Pro",
                price: 199.99,
                oldPrice: 249.99,
                description: "Track your fitness, receive notifications, and more with this advanced smartwatch.",
                category: "electronics",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                rating: 4.2,
                featured: true
            },
            {
                id: 3,
                name: "Premium Leather Wallet",
                price: 49.99,
                description: "Genuine leather wallet with multiple card slots and RFID protection.",
                category: "fashion",
                image: "https://images.unsplash.com/photo-1541112324160-e8a425b58dac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FsbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                rating: 4.7,
                featured: false
            },
            {
                id: 4,
                name: "Stainless Steel Water Bottle",
                price: 24.99,
                oldPrice: 34.99,
                description: "Keep your drinks hot or cold for hours with this durable stainless steel bottle.",
                category: "home",
                image: "https://images.unsplash.com/photo-1602143407151-7111562e207a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                rating: 4.3,
                featured: true
            },
            {
                id: 5,
                name: "Wireless Charging Pad",
                price: 29.99,
                description: "Charge your Qi-enabled devices wirelessly with this sleek charging pad.",
                category: "electronics",
                image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpcmVsZXNzJTIwY2hhcmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                rating: 4.0,
                featured: false
            },
            {
                id: 6,
                name: "Organic Cotton T-Shirt",
                price: 24.99,
                oldPrice: 34.99,
                description: "Comfortable and eco-friendly t-shirt made from 100% organic cotton.",
                category: "fashion",
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                rating: 4.6,
                featured: true
            },
            {
                id: 7,
                name: "Smart LED Light Bulb",
                price: 19.99,
                description: "Control your lights from anywhere with this smart LED bulb compatible with Alexa and Google Home.",
                category: "home",
                image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e4f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxlZCUyMGxpZ2h0JTIwYnVsYnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                rating: 4.1,
                featured: false
            },
            {
                id: 8,
                name: "Portable Bluetooth Speaker",
                price: 59.99,
                oldPrice: 79.99,
                description: "Take your music anywhere with this waterproof portable Bluetooth speaker.",
                category: "electronics",
                image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                rating: 4.4,
                featured: true
            }
        ];

        // Shopping cart functionality
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let currentProduct = null;
        let currentQuantity = 1;

        // DOM elements
        const productGrid = document.getElementById('product-grid');
        const recommendedProducts = document.getElementById('recommended-products');
        const cartBtn = document.getElementById('cart-btn');
        const cartDropdown = document.getElementById('cart-dropdown');
        const cartItems = document.getElementById('cart-items');
        const cartCount = document.getElementById('cart-count');
        const cartTotal = document.getElementById('cart-total');
        const checkoutBtn = document.getElementById('checkout-btn');
        const quickViewModal = document.getElementById('quick-view-modal');
        const closeQuickView = document.getElementById('close-quick-view');
        const quickViewImage = document.getElementById('quick-view-image');
        const quickViewTitle = document.getElementById('quick-view-title');
        const quickViewPrice = document.getElementById('quick-view-price');
        const quickViewOldPrice = document.getElementById('quick-view-old-price');
        const quickViewDiscount = document.getElementById('quick-view-discount');
        const quickViewDescription = document.getElementById('quick-view-description');
        const productQty = document.getElementById('product-qty');
        const increaseQty = document.getElementById('increase-qty');
        const decreaseQty = document.getElementById('decrease-qty');
        const addToCartBtn = document.getElementById('add-to-cart-btn');
        const checkoutModal = document.getElementById('checkout-modal');
        const closeCheckout = document.getElementById('close-checkout');
        const checkoutItems = document.getElementById('checkout-items');
        const checkoutSubtotal = document.getElementById('checkout-subtotal');
        const checkoutShipping = document.getElementById('checkout-shipping');
        const checkoutTotal = document.getElementById('checkout-total');
        const checkoutForm = document.getElementById('checkout-form');
        const confirmationModal = document.getElementById('confirmation-modal');
        const closeConfirmation = document.getElementById('close-confirmation');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const searchBtn = document.getElementById('search-btn');
        const searchBar = document.getElementById('search-bar');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            renderProducts();
            renderRecommendedProducts();
            updateCart();
            
            // Set up event listeners
            setupEventListeners();
        });

        // Render featured products
        function renderProducts() {
            productGrid.innerHTML = '';
            const featuredProducts = products.filter(product => product.featured);
            
            featuredProducts.forEach(product => {
                const productCard = createProductCard(product);
                productGrid.appendChild(productCard);
            });
        }

        // Render recommended products
        function renderRecommendedProducts() {
            recommendedProducts.innerHTML = '';
            // In a real app, recommendations would be based on user behavior or preferences
            const recommended = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);
            
            recommended.forEach(product => {
                const productCard = createProductCard(product);
                recommendedProducts.appendChild(productCard);
            });
        }

        // Create a product card element
        function createProductCard(product) {
            const card = document.createElement('div');
            card.className = 'product-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300';
            
            const discountBadge = product.oldPrice 
                ? `<div class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    ${Math.round((1 - product.price / product.oldPrice) * 100)}% OFF
                   </div>`
                : '';
            
            card.innerHTML = `
                <div class="relative">
                    <div class="blur-load bg-gray-100 h-48 overflow-hidden">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" loading="lazy">
                    </div>
                    ${discountBadge}
                </div>
                <div class="p-4">
                    <h3 class="font-semibold text-lg mb-1">${product.name}</h3>
                    <div class="flex items-center mb-2">
                        <div class="flex text-yellow-400 text-sm">
                            ${renderStars(product.rating)}
                        </div>
                    </div>
                    <div class="flex items-center">
                        <span class="text-indigo-600 font-bold text-lg">$${product.price.toFixed(2)}</span>
                        ${product.oldPrice ? `<span class="text-gray-400 line-through text-sm ml-2">$${product.oldPrice.toFixed(2)}</span>` : ''}
                    </div>
                </div>
            `;
            
            // Add click event to show quick view
            card.addEventListener('click', () => showQuickView(product));
            
            return card;
        }

        // Render star ratings
        function renderStars(rating) {
            let stars = '';
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            
            for (let i = 0; i < fullStars; i++) {
                stars += '<i class="fas fa-star"></i>';
            }
            
            if (hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            }
            
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            for (let i = 0; i < emptyStars; i++) {
                stars += '<i class="far fa-star"></i>';
            }
            
            return stars;
        }

        // Show quick view modal
        function showQuickView(product) {
            currentProduct = product;
            currentQuantity = 1;
            
            quickViewImage.src = product.image;
            quickViewImage.alt = product.name;
            quickViewTitle.textContent = product.name;
            quickViewPrice.textContent = `$${product.price.toFixed(2)}`;
            quickViewDescription.textContent = product.description;
            productQty.value = currentQuantity;
            
            if (product.oldPrice) {
                quickViewOldPrice.textContent = `$${product.oldPrice.toFixed(2)}`;
                quickViewOldPrice.style.display = 'inline';
                const discount = Math.round((1 - product.price / product.oldPrice) * 100);
                quickViewDiscount.textContent = `${discount}% OFF`;
                quickViewDiscount.style.display = 'inline';
            } else {
                quickViewOldPrice.style.display = 'none';
                quickViewDiscount.style.display = 'none';
            }
            
            quickViewModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        // Update cart UI
        function updateCart() {
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p class="text-gray-500 text-center py-4">Your cart is empty</p>';
                cartCount.textContent = '0';
                cartTotal.textContent = '$0.00';
                return;
            }
            
            let total = 0;
            
            cart.forEach(item => {
                const product = products.find(p => p.id === item.id);
                total += product.price * item.quantity;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'flex items-center py-2 border-b border-gray-100';
                cartItem.innerHTML = `
                    <div class="w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-3">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-grow">
                        <h4 class="font-medium">${product.name}</h4>
                        <div class="flex justify-between text-sm text-gray-500">
                            <span>$${product.price.toFixed(2)} × ${item.quantity}</span>
                            <span>$${(product.price * item.quantity).toFixed(2)}</span>
                        </div>
                    </div>
                    <button class="text-gray-400 hover:text-red-500 ml-2 remove-item" data-id="${product.id}">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                
                cartItems.appendChild(cartItem);
            });
            
            cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartTotal.textContent = `$${total.toFixed(2)}`;
            
            // Add event listeners to remove buttons
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const productId = parseInt(button.dataset.id);
                    removeFromCart(productId);
                });
            });
            
            // Save cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        // Add item to cart
        function addToCart(productId, quantity = 1) {
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({ id: productId, quantity });
            }
            
            updateCart();
            showCartNotification(productId, quantity);
        }

        // Remove item from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
        }

        // Show notification when item is added to cart
        function showCartNotification(productId, quantity) {
            const product = products.find(p => p.id === productId);
            const notification = document.createElement('div');
            notification.className = 'fixed bottom-4 right-4 bg-white shadow-lg rounded-md p-4 flex items-center border-l-4 border-indigo-500 transform translate-x-full opacity-0 transition-all duration-300';
            notification.innerHTML = `
                <div class="w-10 h-10 bg-gray-100 rounded-md overflow-hidden mr-3">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                </div>
                <div>
                    <p class="font-medium">Added to cart</p>
                    <p class="text-sm text-gray-500">${product.name} (${quantity}x)</p>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Show notification
            setTimeout(() => {
                notification.classList.remove('translate-x-full');
                notification.classList.remove('opacity-0');
            }, 10);
            
            // Hide notification after 3 seconds
            setTimeout(() => {
                notification.classList.add('translate-x-full');
                notification.classList.add('opacity-0');
                
                // Remove from DOM after animation
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 3000);
        }

        // Update checkout modal
        function updateCheckoutModal() {
            checkoutItems.innerHTML = '';
            
            if (cart.length === 0) {
                checkoutItems.innerHTML = '<p class="text-gray-500 text-center py-4">Your cart is empty</p>';
                return;
            }
            
            let subtotal = 0;
            
            cart.forEach(item => {
                const product = products.find(p => p.id === item.id);
                subtotal += product.price * item.quantity;
                
                const checkoutItem = document.createElement('div');
                checkoutItem.className = 'flex items-center py-2 border-b border-gray-100';
                checkoutItem.innerHTML = `
                    <div class="w-12 h-12 bg-gray-100 rounded-md overflow-hidden mr-3">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-grow">
                        <h4 class="font-medium text-sm">${product.name}</h4>
                        <div class="flex justify-between text-xs text-gray-500">
                            <span>$${product.price.toFixed(2)} × ${item.quantity}</span>
                            <span>$${(product.price * item.quantity).toFixed(2)}</span>
                        </div>
                    </div>
                `;
                
                checkoutItems.appendChild(checkoutItem);
            });
            
            const shipping = subtotal > 50 ? 0 : 5.99;
            const total = subtotal + shipping;
            
            checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;
            checkoutShipping.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
            checkoutTotal.textContent = `$${total.toFixed(2)}`;
        }

        // Set up event listeners
        function setupEventListeners() {
            // Cart button toggle
            cartBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                cartDropdown.classList.toggle('hidden');
            });
            
            // Close cart dropdown when clicking outside
            document.addEventListener('click', () => {
                cartDropdown.classList.add('hidden');
            });
            
            // Prevent cart dropdown from closing when clicking inside
            cartDropdown.addEventListener('click', (e) => {
                e.stopPropagation();
            });
            
            // Checkout button
            checkoutBtn.addEventListener('click', () => {
                cartDropdown.classList.add('hidden');
                updateCheckoutModal();
                checkoutModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
            
            // Close quick view modal
            closeQuickView.addEventListener('click', () => {
                quickViewModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
            
            // Quantity controls
            increaseQty.addEventListener('click', () => {
                currentQuantity++;
                productQty.value = currentQuantity;
            });
            
            decreaseQty.addEventListener('click', () => {
                if (currentQuantity > 1) {
                    currentQuantity--;
                    productQty.value = currentQuantity;
                }
            });
            
            productQty.addEventListener('change', () => {
                const value = parseInt(productQty.value);
                if (!isNaN(value) && value > 0) {
                    currentQuantity = value;
                } else {
                    productQty.value = currentQuantity;
                }
            });
            
            // Add to cart button
            addToCartBtn.addEventListener('click', () => {
                if (currentProduct) {
                    addToCart(currentProduct.id, currentQuantity);
                    quickViewModal.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Close checkout modal
            closeCheckout.addEventListener('click', () => {
                checkoutModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
            
            // Checkout form submission
            checkoutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // In a real app, you would process the payment here
                // For this demo, we'll just show a confirmation
                checkoutModal.classList.add('hidden');
                confirmationModal.classList.remove('hidden');
                
                // Clear the cart
                cart = [];
                updateCart();
            });
            
            // Close confirmation modal
            closeConfirmation.addEventListener('click', () => {
                confirmationModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
            
            // Mobile menu toggle
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Search bar toggle
            searchBtn.addEventListener('click', () => {
                searchBar.classList.toggle('hidden');
            });
            
            // Close modals when clicking outside
            document.addEventListener('click', (e) => {
                if (e.target === quickViewModal) {
                    quickViewModal.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
                
                if (e.target === checkoutModal) {
                    checkoutModal.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
                
                if (e.target === confirmationModal) {
                    confirmationModal.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Lazy load images when they come into view
            const lazyImages = document.querySelectorAll('.blur-load > img');
            
            const lazyLoad = (target) => {
                const io = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.onload = () => {
                                img.parentElement.classList.add('loaded');
                            };
                            
                            // In a real app, you might want to load a smaller version first
                            // or use a placeholder until the full image loads
                            
                            observer.unobserve(img);
                        }
                    });
                });
                
                io.observe(target);
            };
            
            lazyImages.forEach(lazyLoad);
        }