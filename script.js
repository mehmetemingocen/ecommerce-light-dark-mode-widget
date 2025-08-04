// Theme Management
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.body = document.body;
        this.currentTheme = localStorage.getItem('theme') || 'light';
        
        this.init();
    }
    
    init() {
        // Set initial theme
        this.setTheme(this.currentTheme);
        
        // Add event listener
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
        
        // Add keyboard shortcut (Ctrl/Cmd + J)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'j') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }
    
    setTheme(theme) {
        this.currentTheme = theme;
        
        if (theme === 'dark') {
            this.body.classList.remove('light-mode');
            this.body.classList.add('dark-mode');
        } else {
            this.body.classList.remove('dark-mode');
            this.body.classList.add('light-mode');
        }
        
        // Save to localStorage
        localStorage.setItem('theme', theme);
        
        // Update toggle button appearance
        this.updateToggleButton();
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        
        // Add animation effect
        this.addToggleAnimation();
    }
    
    updateToggleButton() {
        const lightIcon = this.themeToggle.querySelector('.light-icon');
        const darkIcon = this.themeToggle.querySelector('.dark-icon');
        
        if (this.currentTheme === 'dark') {
            lightIcon.style.display = 'block';
            darkIcon.style.display = 'none';
        } else {
            lightIcon.style.display = 'none';
            darkIcon.style.display = 'block';
        }
    }
    
    addToggleAnimation() {
        // Add a subtle animation effect
        this.themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.themeToggle.style.transform = 'scale(1)';
        }, 150);
    }
}

// Product Management
class ProductManager {
    constructor() {
        this.cartCount = 0;
        this.init();
    }
    
    init() {
        // Add event listeners to all "Add to Cart" buttons
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.addToCart(e);
            });
        });
        
        // Initialize cart count from localStorage
        this.loadCartCount();
    }
    
    addToCart(event) {
        const button = event.target;
        const productCard = button.closest('.product-card');
        const productTitle = productCard.querySelector('.product-title').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        
        // Update cart count
        this.cartCount++;
        this.updateCartDisplay();
        this.saveCartCount();
        
        // Add visual feedback
        this.showAddToCartFeedback(button, productTitle);
        
        // Store product in localStorage
        this.saveProductToCart(productTitle, productPrice);
    }
    
    showAddToCartFeedback(button, productTitle) {
        const originalText = button.textContent;
        button.textContent = 'Sepete Eklendi!';
        button.style.backgroundColor = 'var(--secondary-color)';
        
        // Show notification
        this.showNotification(`${productTitle} sepete eklendi!`);
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = 'var(--primary-color)';
        }, 2000);
    }
    
    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: var(--primary-color);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 15px var(--shadow-color);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-weight: 500;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    updateCartDisplay() {
        const cartCountElement = document.querySelector('.cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = this.cartCount;
        }
    }
    
    saveCartCount() {
        localStorage.setItem('cartCount', this.cartCount.toString());
    }
    
    loadCartCount() {
        const savedCount = localStorage.getItem('cartCount');
        if (savedCount) {
            this.cartCount = parseInt(savedCount);
            this.updateCartDisplay();
        }
    }
    
    saveProductToCart(title, price) {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.push({
            title: title,
            price: price,
            date: new Date().toISOString()
        });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

// Search Functionality
class SearchManager {
    constructor() {
        this.searchInput = document.querySelector('.search-input');
        this.searchBtn = document.querySelector('.search-btn');
        this.productCards = document.querySelectorAll('.product-card');
        
        this.init();
    }
    
    init() {
        this.searchInput.addEventListener('input', (e) => {
            this.filterProducts(e.target.value);
        });
        
        this.searchBtn.addEventListener('click', () => {
            this.filterProducts(this.searchInput.value);
        });
        
        // Add enter key support
        this.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.filterProducts(this.searchInput.value);
            }
        });
    }
    
    filterProducts(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        
        this.productCards.forEach(card => {
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            const description = card.querySelector('.product-description').textContent.toLowerCase();
            
            if (title.includes(term) || description.includes(term)) {
                card.style.display = 'block';
                card.style.opacity = '1';
            } else {
                card.style.opacity = '0.3';
                if (term.length > 0) {
                    card.style.display = 'none';
                }
            }
        });
    }
}

// Smooth Scrolling
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        // Smooth scroll for navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                if (targetId && targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
}

// Performance Optimization
class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        // Lazy loading for images
        this.setupLazyLoading();
        
        // Debounce search input
        this.debounceSearch();
    }
    
    setupLazyLoading() {
        const images = document.querySelectorAll('img');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            if (img.dataset.src) {
                imageObserver.observe(img);
            }
        });
    }
    
    debounceSearch() {
        let timeout;
        const searchInput = document.querySelector('.search-input');
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                // Search functionality will be handled by SearchManager
            }, 300);
        });
    }
}

// Initialize all managers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new ProductManager();
    new SearchManager();
    new SmoothScroll();
    new PerformanceOptimizer();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background-color: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS animation for ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 