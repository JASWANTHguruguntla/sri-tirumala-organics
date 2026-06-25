/* ============================================
   SRI TIRUMALA ORGANIC OILS & MILLETS
   Application Logic
   ============================================ */

// ── Product Data ──
const products = {
  oils: [
    {
      id: 'groundnut-oil',
      name: 'Groundnut Oil',
      nameTelugu: 'వేరుశనగ నూనె',
      price: 310,
      unit: 'Litre',
      inStock: true,
      image: 'images/groundnut_oil.png',
      description: 'Premium cold-pressed groundnut oil made from the finest Rayalaseema peanuts. Rich in flavour, aroma, and nutrition — perfect for traditional South Indian cooking.',
      benefits: [
        'Rich in Vitamin E and antioxidants',
        'Heart-healthy monounsaturated fats',
        'Retains natural peanut aroma & flavour',
        'No chemicals or preservatives added',
        'Ideal for deep frying, seasoning & everyday cooking'
      ]
    },
    {
      id: 'sunflower-oil',
      name: 'Sunflower Oil',
      nameTelugu: 'ప్రొద్దుతిరుగుడు నూనె',
      price: null,
      unit: 'Litre',
      inStock: false,
      image: 'images/sunflower_oil.png',
      description: 'Light and healthy cold-pressed sunflower oil, ideal for everyday cooking. Coming soon from our next batch!',
      benefits: [
        'Light flavour suitable for all cuisines',
        'High in Vitamin E',
        'Low in saturated fats',
        'Great for stir-frying and salad dressings'
      ]
    },
    {
      id: 'sesame-oil',
      name: 'Black Sesame Dal Oil',
      nameTelugu: 'నల్ల నువ్వుల దాలి నూనె',
      price: null,
      unit: 'Litre',
      inStock: false,
      image: 'images/sesame_oil.png',
      description: 'Traditional black sesame oil with a rich, nutty aroma. A staple in Ayurvedic wellness and South Indian cooking.',
      benefits: [
        'Rich in omega-6 fatty acids',
        'Used in Ayurvedic oil pulling & massage',
        'Distinctive nutty flavour',
        'High in calcium and iron'
      ]
    },
    {
      id: 'coconut-oil',
      name: 'Coconut Oil',
      nameTelugu: 'కొబ్బరి నూనె',
      price: null,
      unit: 'Litre',
      inStock: false,
      image: 'images/coconut_oil.png',
      description: 'Pure virgin coconut oil, cold-pressed from fresh coconuts. Versatile for cooking, skincare, and hair care.',
      benefits: [
        'Contains lauric acid — boosts immunity',
        'Great for cooking at high temperatures',
        'Natural moisturizer for skin & hair',
        'Antimicrobial and antifungal properties'
      ]
    },
    {
      id: 'castor-oil',
      name: 'Castor Oil',
      nameTelugu: 'ఆముదం నూనె',
      price: 350,
      unit: 'Litre',
      inStock: true,
      image: 'images/castor_oil.png',
      description: 'Premium cold-pressed castor oil for hair growth, skin nourishment, and traditional medicinal use.',
      benefits: [
        'Promotes hair growth and thickness',
        'Deeply moisturizes skin',
        'Anti-inflammatory properties',
        'Used in traditional Ayurvedic remedies',
        'Cold-pressed to retain maximum nutrients'
      ]
    },
    {
      id: 'safflower-oil',
      name: 'Safflower Oil / Kusuma Oil',
      nameTelugu: 'కుసుమ నూనె',
      price: 400,
      unit: 'Litre',
      inStock: true,
      image: 'images/safflower_oil.png',
      description: 'Traditional Kusuma oil (Safflower oil) — a heart-healthy cooking oil popular in Andhra cuisine.',
      benefits: [
        'High in linoleic acid — heart healthy',
        'Light flavour — doesn\'t overpower food',
        'Rich in Vitamin E',
        'Helps regulate blood sugar levels',
        'Traditional oil used in Telugu households'
      ]
    },
    {
      id: 'honey',
      name: 'Natural Honey',
      nameTelugu: 'తేనె',
      price: 450,
      unit: 'Kg',
      inStock: true,
      image: 'images/honey.png',
      description: 'Pure, raw, unprocessed natural honey sourced from local Rayalaseema bee farms. A natural sweetener and immunity booster.',
      benefits: [
        '100% raw and unprocessed',
        'Natural immunity booster',
        'Rich in antioxidants and enzymes',
        'Soothes cough and sore throat',
        'Sourced from local bee farms'
      ]
    }
  ],
  millets: [
    {
      id: 'ragi',
      name: 'Raagi / Finger Millet',
      nameTelugu: 'రాగులు',
      price: 70,
      unit: 'Kg',
      inStock: true,
      image: 'images/ragi_millet.png',
      description: 'Nutrient-rich finger millet (Ragi), a superfood staple in South Indian diets. Excellent source of calcium.',
      benefits: [
        'Extremely rich in calcium',
        'Gluten-free grain',
        'Helps manage diabetes',
        'High in dietary fiber',
        'Great for growing children and elderly'
      ]
    },
    {
      id: 'sorghum',
      name: 'Sorghum',
      nameTelugu: 'జొన్నలు',
      price: null,
      unit: 'Kg',
      inStock: false,
      image: 'images/sorghum.png',
      description: 'Wholesome sorghum (Jowar) — a gluten-free ancient grain perfect for rotis, porridge, and more.',
      benefits: [
        'Gluten-free ancient grain',
        'Rich in B vitamins and iron',
        'High in antioxidants',
        'Supports digestive health'
      ]
    },
    {
      id: 'peanuts',
      name: 'Groundnut / Peanuts',
      nameTelugu: 'శనగ విత్తనాలు/వల్లేలు',
      price: 170,
      unit: 'Kg',
      inStock: true,
      image: 'images/peanuts.png',
      description: 'Premium Rayalaseema groundnuts — crunchy, flavourful, and naturally grown without pesticides.',
      benefits: [
        'High in protein and healthy fats',
        'Naturally grown — no pesticides',
        'Premium Rayalaseema variety',
        'Perfect for snacking and cooking',
        'Rich in folate and magnesium'
      ]
    },
    {
      id: 'pearl-millet',
      name: 'Pearl Millets',
      nameTelugu: 'సజ్జలు',
      price: null,
      unit: 'Kg',
      inStock: false,
      image: 'images/pearl_millet.png',
      description: 'Sajjalu (Pearl Millet) — a hearty, nutritious grain ideal for winter foods like bajra rotis.',
      benefits: [
        'High in iron and zinc',
        'Generates body heat — great for winters',
        'Rich in dietary fiber',
        'Gluten-free and easy to digest'
      ]
    },
    {
      id: 'foxtail-millet',
      name: 'Foxtail Millet / Korra',
      nameTelugu: 'కొర్రలు',
      price: null,
      unit: 'Kg',
      inStock: false,
      image: 'images/foxtail_millet.png',
      description: 'Korralu (Foxtail Millet) — a light, easy-to-digest millet used in upma, dosa, and rice replacements.',
      benefits: [
        'Low glycemic index — diabetic friendly',
        'Rich in complex carbohydrates',
        'High in iron and calcium',
        'Versatile — makes great rice alternatives'
      ]
    }
  ]
};

// ── Cart / Order State ──
let cart = [];

// ── DOM Ready ──
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initNavigation();
  initScrollReveal();
  initOrderPanel();
  initProductModal();
  initDeliveryOptions();
  initFormValidation();
});

// ═══════════════ RENDER PRODUCTS ═══════════════
function renderProducts() {
  const oilsGrid = document.getElementById('oils-grid');
  const milletsGrid = document.getElementById('millets-grid');

  oilsGrid.innerHTML = products.oils.map(p => createProductCard(p)).join('');
  milletsGrid.innerHTML = products.millets.map(p => createProductCard(p)).join('');
}

function createProductCard(product) {
  const isOut = !product.inStock;
  const priceDisplay = product.price
    ? `₹${product.price}/- <span class="unit">per ${product.unit.toLowerCase()}</span>`
    : `Price TBD`;

  return `
    <div class="product-card ${isOut ? 'out-of-stock' : ''} reveal" data-product-id="${product.id}" onclick="openProductModal('${product.id}')">
      <div class="product-image-wrapper">
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        <span class="stock-badge ${isOut ? 'out-of-stock-badge' : 'in-stock'}">
          ${isOut ? '🔴 Out of Stock' : '🟢 In Stock'}
        </span>
        ${isOut ? '<div class="coming-soon-overlay">✨ Coming Soon ✨</div>' : ''}
      </div>
      <div class="product-info">
        <h4 class="product-name">${product.name}</h4>
        <p class="product-name-telugu telugu">${product.nameTelugu}</p>
        <div class="product-price ${!product.price ? 'no-price' : ''}">${priceDisplay}</div>
        ${isOut
          ? `<button class="btn-notify" onclick="event.stopPropagation(); notifyMe('${product.name}')">🔔 Notify Me</button>`
          : `<button class="btn-add-order active" id="btn-${product.id}" onclick="event.stopPropagation(); addToCart('${product.id}')">+ Add to Order</button>`
        }
      </div>
    </div>
  `;
}

// ═══════════════ CART MANAGEMENT ═══════════════
function addToCart(productId) {
  const product = findProduct(productId);
  if (!product || !product.inStock) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    // Already in cart — open panel to show
    openOrderPanel();
    return;
  }

  cart.push({
    id: product.id,
    name: product.name,
    nameTelugu: product.nameTelugu,
    price: product.price,
    unit: product.unit,
    quantity: 1
  });

  // Update button state
  const btn = document.getElementById(`btn-${productId}`);
  if (btn) {
    btn.className = 'btn-add-order added';
    btn.innerHTML = '✓ Added to Order';
    setTimeout(() => {
      btn.innerHTML = '✓ In Your Order';
    }, 1000);
  }

  updateOrderPanel();
  showOrderToggle();

  // Brief animation on cart count
  const countEl = document.getElementById('cart-count');
  countEl.style.transform = 'scale(1.4)';
  setTimeout(() => { countEl.style.transform = 'scale(1)'; }, 300);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);

  // Reset button state
  const btn = document.getElementById(`btn-${productId}`);
  if (btn) {
    btn.className = 'btn-add-order active';
    btn.innerHTML = '+ Add to Order';
  }

  updateOrderPanel();
  if (cart.length === 0) {
    hideOrderToggle();
  }
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity = Math.max(1, Math.min(20, item.quantity + delta));
  updateOrderPanel();
}

function findProduct(productId) {
  return [...products.oils, ...products.millets].find(p => p.id === productId);
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// ═══════════════ ORDER PANEL ═══════════════
function initOrderPanel() {
  const toggleBtn = document.getElementById('order-panel-toggle');
  const closeBtn = document.getElementById('order-panel-close');
  const overlay = document.getElementById('order-panel-overlay');

  toggleBtn.addEventListener('click', openOrderPanel);
  closeBtn.addEventListener('click', closeOrderPanel);
  overlay.addEventListener('click', closeOrderPanel);
}

function openOrderPanel() {
  document.getElementById('order-panel').classList.add('active');
  document.getElementById('order-panel-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeOrderPanel() {
  document.getElementById('order-panel').classList.remove('active');
  document.getElementById('order-panel-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function showOrderToggle() {
  document.getElementById('order-panel-toggle').classList.add('visible');
}

function hideOrderToggle() {
  document.getElementById('order-panel-toggle').classList.remove('visible');
}

function updateOrderPanel() {
  const itemsList = document.getElementById('order-items-list');
  const emptyState = document.getElementById('order-empty');
  const totalBar = document.getElementById('order-total-bar');
  const totalAmount = document.getElementById('order-total-amount');
  const orderForm = document.getElementById('order-form');
  const cartCount = document.getElementById('cart-count');

  cartCount.textContent = cart.length;

  if (cart.length === 0) {
    emptyState.style.display = 'block';
    itemsList.innerHTML = '';
    totalBar.style.display = 'none';
    orderForm.style.display = 'none';
    return;
  }

  emptyState.style.display = 'none';
  totalBar.style.display = 'flex';
  orderForm.style.display = 'block';

  itemsList.innerHTML = cart.map(item => `
    <div class="order-item">
      <div class="order-item-info">
        <div class="order-item-name">${item.name}</div>
        <div class="order-item-price">₹${item.price * item.quantity}/- <span class="order-item-unit">(₹${item.price} × ${item.quantity} ${item.unit}${item.quantity > 1 ? 's' : ''})</span></div>
      </div>
      <div class="quantity-stepper">
        <button onclick="updateQuantity('${item.id}', -1)" aria-label="Decrease quantity">−</button>
        <span class="qty-value">${item.quantity}</span>
        <button onclick="updateQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
      </div>
      <button class="order-item-remove" onclick="removeFromCart('${item.id}')" title="Remove" aria-label="Remove item">🗑️</button>
    </div>
  `).join('');

  totalAmount.textContent = `₹${getCartTotal()}/-`;
}

// ═══════════════ DELIVERY OPTIONS ═══════════════
function initDeliveryOptions() {
  const options = document.querySelectorAll('.delivery-option');
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      options.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });
}

// ═══════════════ FORM VALIDATION & WHATSAPP ORDER ═══════════════
function initFormValidation() {
  const confirmBtn = document.getElementById('btn-confirm-order');
  confirmBtn.addEventListener('click', submitOrder);
}

function submitOrder() {
  const name = document.getElementById('customer-name').value.trim();
  const phone = document.getElementById('customer-phone').value.trim();
  const location = document.getElementById('customer-location').value.trim();
  const notes = document.getElementById('customer-notes').value.trim();
  const delivery = document.querySelector('.delivery-option.selected')?.dataset.value || 'Home Delivery';

  // Validation
  let valid = true;

  if (!name) {
    document.getElementById('customer-name').classList.add('error');
    valid = false;
  } else {
    document.getElementById('customer-name').classList.remove('error');
  }

  if (!phone || phone.length < 10) {
    document.getElementById('customer-phone').classList.add('error');
    valid = false;
  } else {
    document.getElementById('customer-phone').classList.remove('error');
  }

  if (!location) {
    document.getElementById('customer-location').classList.add('error');
    valid = false;
  } else {
    document.getElementById('customer-location').classList.remove('error');
  }

  if (!valid) {
    // Shake animation on invalid fields
    document.querySelectorAll('.error').forEach(el => {
      el.style.animation = 'none';
      el.offsetHeight; // trigger reflow
      el.style.animation = 'shake 0.4s ease-in-out';
    });
    return;
  }

  if (cart.length === 0) return;

  // Build WhatsApp message
  const orderLines = cart.map(item => {
    const unitLabel = item.unit === 'Kg' ? 'Kg' : (item.quantity > 1 ? 'Litres' : 'Litre');
    return `• ${item.name} — ${item.quantity} ${unitLabel} — ₹${item.price * item.quantity}/-`;
  }).join('\n');

  const total = getCartTotal();

  let message = `🛍️ *New Order — Sri Tirumala Organic Oils & Millets*\n\n`;
  message += `👤 Name: ${name}\n`;
  message += `📞 Phone: ${phone}\n`;
  message += `📍 Location: ${location}\n\n`;
  message += `🧾 *Order Details:*\n${orderLines}\n\n`;
  message += `💰 *Total: ₹${total}/-*\n\n`;
  message += `🚚 Delivery: ${delivery}\n`;
  if (notes) {
    message += `📝 Notes: ${notes}\n`;
  }
  message += `\nPlease confirm my order. Thank you! 🙏`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/919642889595?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
}

// ═══════════════ PRODUCT MODAL ═══════════════
function initProductModal() {
  const overlay = document.getElementById('product-modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  closeBtn.addEventListener('click', closeProductModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeProductModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeOrderPanel();
    }
  });
}

function openProductModal(productId) {
  const product = findProduct(productId);
  if (!product) return;

  const modal = document.getElementById('product-modal-overlay');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalTeluguName = document.getElementById('modal-telugu-name');
  const modalPrice = document.getElementById('modal-price');
  const modalStockBadge = document.getElementById('modal-stock-badge');
  const modalDescription = document.getElementById('modal-description');
  const modalBenefits = document.getElementById('modal-benefits');
  const modalAddBtn = document.getElementById('modal-add-btn');

  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalTitle.textContent = product.name;
  modalTeluguName.textContent = product.nameTelugu;

  if (product.price) {
    modalPrice.textContent = `₹${product.price}/- per ${product.unit.toLowerCase()}`;
    modalPrice.className = 'product-price';
  } else {
    modalPrice.textContent = 'Price TBD';
    modalPrice.className = 'product-price no-price';
  }

  if (product.inStock) {
    modalStockBadge.textContent = '🟢 In Stock';
    modalStockBadge.className = 'stock-badge in-stock';
  } else {
    modalStockBadge.textContent = '🔴 Out of Stock';
    modalStockBadge.className = 'stock-badge out-of-stock-badge';
  }

  modalDescription.textContent = product.description;

  modalBenefits.innerHTML = product.benefits.map(b => `<li>${b}</li>`).join('');

  if (product.inStock) {
    const inCart = cart.find(i => i.id === product.id);
    if (inCart) {
      modalAddBtn.className = 'btn-add-order modal-add-btn added';
      modalAddBtn.textContent = '✓ Already in Your Order';
      modalAddBtn.onclick = () => openOrderPanel();
    } else {
      modalAddBtn.className = 'btn-add-order modal-add-btn active';
      modalAddBtn.textContent = '+ Add to Order';
      modalAddBtn.onclick = () => {
        addToCart(product.id);
        modalAddBtn.className = 'btn-add-order modal-add-btn added';
        modalAddBtn.textContent = '✓ Added!';
      };
    }
  } else {
    modalAddBtn.className = 'btn-add-order modal-add-btn disabled';
    modalAddBtn.textContent = '🔔 Notify Me When Available';
    modalAddBtn.onclick = () => notifyMe(product.name);
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('product-modal-overlay').classList.remove('active');
  if (!document.getElementById('order-panel').classList.contains('active')) {
    document.body.style.overflow = '';
  }
}

// ═══════════════ NOTIFY ME ═══════════════
function notifyMe(productName) {
  const message = encodeURIComponent(
    `🔔 Hi! I'd like to be notified when *${productName}* is back in stock at Sri Tirumala Organic Oils & Millets. Please let me know! 🙏`
  );
  window.open(`https://wa.me/919642889595?text=${message}`, '_blank');
}

// ═══════════════ NAVIGATION ═══════════════
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const links = navLinks.querySelectorAll('a[data-section]');

  // Sticky scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
  });

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close mobile menu on outside click
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
}

function updateActiveNavLink() {
  const sections = ['home', 'products', 'about', 'contact'];
  const scrollPos = window.scrollY + 150;

  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (scrollPos >= top && scrollPos < bottom) {
      document.querySelectorAll('.nav-links a[data-section]').forEach(a => {
        a.classList.remove('active');
        if (a.dataset.section === sectionId) {
          a.classList.add('active');
        }
      });
    }
  });
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });

  // Re-observe after products are rendered (they're dynamically created)
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      observer.observe(el);
    });
  }, 100);
}

// ═══════════════ UTILITY: SHAKE ANIMATION ═══════════════
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-6px); }
    40% { transform: translateX(6px); }
    60% { transform: translateX(-4px); }
    80% { transform: translateX(4px); }
  }
`;
document.head.appendChild(shakeStyle);
