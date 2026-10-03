(() => {
  'use strict';

  const PHONE = '27659462725';
  const WHATSAPP_ICON = `
    <svg class="wa-icon" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor">
      <path d="M19.11 17.61c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.62 1.11 2.8c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.58.66.21 1.25.18 1.72.11.52-.08 1.6-.66 1.83-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32Z"/>
      <path d="M16.03 3.2c-7.04 0-12.77 5.72-12.77 12.76 0 2.25.59 4.45 1.71 6.39L3.15 29l6.8-1.78a12.75 12.75 0 0 0 6.07 1.55h.01c7.04 0 12.77-5.73 12.77-12.77 0-3.41-1.33-6.62-3.74-9.03A12.68 12.68 0 0 0 16.03 3.2Zm0 23.42h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.04 1.06 1.08-3.94-.25-.4a10.6 10.6 0 0 1-1.63-5.67c0-5.87 4.78-10.64 10.66-10.64 2.84 0 5.52 1.11 7.53 3.12a10.58 10.58 0 0 1 3.12 7.54c0 5.87-4.78 10.64-10.66 10.64Z"/>
    </svg>`;

  const IMAGES = {
    perfumeLight: 'https://images.unsplash.com/photo-1673710672680-944563ff9cce?auto=format&fit=crop&w=900&q=82',
    perfumeDark: 'https://images.unsplash.com/photo-1774682060971-7b0b07c1d47f?auto=format&fit=crop&w=900&q=82',
    diffuserAmber: 'https://images.unsplash.com/photo-1766984702231-e36415fcaeeb?auto=format&fit=crop&w=900&q=82',
    diffuserSoft: 'https://images.unsplash.com/photo-1679240017168-5d2adb0529a7?auto=format&fit=crop&w=900&q=82',
    craft: 'https://images.unsplash.com/photo-1492552181161-62217fc3076d?auto=format&fit=crop&w=900&q=82',
    hands: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=82'
  };

  const PRODUCTS = [
    { id:'signature-01', name:'Atha Signature No. 01', category:'Perfumes', price:'Price on request', description:'A refined perfume placeholder with warm amber, soft floral and musk-inspired notes. Size: to be confirmed.', image:IMAGES.perfumeLight },
    { id:'signature-02', name:'Atha Signature No. 02', category:'Perfumes', price:'Price on request', description:'A deeper perfume placeholder with woody, smooth and evening-inspired notes. Size: to be confirmed.', image:IMAGES.perfumeDark },
    { id:'car-01', name:'Atha Car Diffuser No. 01', category:'Car Diffusers', price:'Price on request', description:'A compact car fragrance placeholder designed for a polished, long-lasting scent experience. Size: to be confirmed.', image:IMAGES.hands },
    { id:'car-02', name:'Atha Car Diffuser No. 02', category:'Car Diffusers', price:'Price on request', description:'A fresh car diffuser placeholder with a clean, balanced scent profile. Size: to be confirmed.', image:IMAGES.craft },
    { id:'home-01', name:'Atha Home Diffuser No. 01', category:'Home Diffusers', price:'Price on request', description:'An amber-inspired reed diffuser placeholder for bedrooms, lounges and workspaces. Size: to be confirmed.', image:IMAGES.diffuserAmber },
    { id:'home-02', name:'Atha Home Diffuser No. 02', category:'Home Diffusers', price:'Price on request', description:'A minimal home diffuser placeholder with a soft, elegant room-fragrance profile. Size: to be confirmed.', image:IMAGES.diffuserSoft }
  ];

  function openWhatsApp(message) {
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function productMessage(product) {
    return `Hi Atha Scent! 👋\n\nI'm interested in this product:\n*Product:* ${product.name}\n*Category:* ${product.category}\n*Price:* ${product.price}\n*Details:* ${product.description}\n\nMy name is: [Please type your name here]\n\nPlease send me more information.`;
  }

  function productCard(product) {
    return `
      <article class="product-card reveal" data-category="${product.category}">
        <div class="product-image"><img src="${product.image}" alt="Luxury fragrance placeholder for ${product.name}" loading="lazy"></div>
        <div class="product-body">
          <div class="product-meta"><span>${product.category}</span><span>WhatsApp order</span></div>
          <h3>${product.name}</h3>
          <p class="product-desc">${product.description}</p>
          <p class="product-price">${product.price}</p>
          <button class="btn btn-whatsapp product-order" type="button" data-product-id="${product.id}">${WHATSAPP_ICON} Order on WhatsApp</button>
        </div>
      </article>`;
  }

  function renderProducts() {
    document.querySelectorAll('[data-products]').forEach(container => {
      const mode = container.dataset.products;
      const list = mode === 'featured' ? PRODUCTS.slice(0,3) : PRODUCTS;
      container.innerHTML = list.map(productCard).join('');
    });
  }

  function setupProductButtons() {
    document.addEventListener('click', event => {
      const btn = event.target.closest('.product-order');
      if (!btn) return;
      const product = PRODUCTS.find(p => p.id === btn.dataset.productId);
      if (product) openWhatsApp(productMessage(product));
    });
  }

  function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    if (!buttons.length) return;
    buttons.forEach(button => button.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      document.querySelectorAll('.product-card').forEach(card => {
        card.hidden = filter !== 'All' && card.dataset.category !== filter;
      });
    }));
  }

  function setupForms() {
    document.querySelectorAll('[data-wa-form]').forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault();
        if (!form.reportValidity()) return;
        const data = new FormData(form);
        const kind = form.dataset.waForm;
        let message = '';

        if (kind === 'booking') {
          message = `Hi Atha Scent! 👋\n\nI'd like to enquire about the Custom Perfume Bar.\n*Name:* ${data.get('name')}\n*Email:* ${data.get('email')}\n*Phone:* ${data.get('phone')}\n*Event date:* ${data.get('eventDate')}\n*Event type:* ${data.get('eventType')}\n*Message:* ${data.get('message') || 'No additional message'}\n\nPlease send me booking information.`;
        } else if (kind === 'reseller') {
          message = `Hi Atha Scent! 👋\n\nI'd like to apply for the Atha Scent Reseller Program.\n*Name:* ${data.get('name')}\n*Email:* ${data.get('email')}\n*Phone:* ${data.get('phone')}\n*Location:* ${data.get('location')}\n*Motivation:* ${data.get('motivation')}\n\nPlease send me reseller information.`;
        } else if (kind === 'contact') {
          message = `Hi Atha Scent! 👋\n\nI have an enquiry.\n*Name:* ${data.get('name')}\n*Email:* ${data.get('email')}\n*Phone:* ${data.get('phone')}\n*Subject:* ${data.get('subject')}\n*Message:* ${data.get('message')}\n\nPlease get back to me when available.`;
        } else if (kind === 'newsletter') {
          message = `Hi Atha Scent! 👋\n\nI'd like to join your scent updates list.\n*Email:* ${data.get('email')}\n\nPlease keep me updated on new scents, launches and events.`;
        }
        if (message) openWhatsApp(message);
      });
    });
  }

  function setupGeneralWhatsApp() {
    document.querySelectorAll('[data-wa-general]').forEach(el => {
      el.addEventListener('click', event => {
        event.preventDefault();
        openWhatsApp(`Hi Atha Scent! 👋\n\nI'd like to know more about your handcrafted perfumes, diffusers and fragrance experiences.\n\nMy name is: [Please type your name here]`);
      });
    });
  }

  function setupMobileNav() {
    const toggle = document.querySelector('.menu-toggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  function injectFloatingWhatsApp() {
    if (document.querySelector('.floating-wa')) return;
    const a = document.createElement('a');
    a.href = '#';
    a.className = 'floating-wa';
    a.setAttribute('data-wa-general','');
    a.setAttribute('aria-label','Chat with Atha Scent on WhatsApp');
    a.innerHTML = WHATSAPP_ICON;
    document.body.appendChild(a);
  }

  function setupReveal() {
    const nodes = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(n => n.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold:.08 });
    nodes.forEach(node => io.observe(node));
  }

  function setYear() {
    document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  }

  renderProducts();
  injectFloatingWhatsApp();
  setupProductButtons();
  setupFilters();
  setupForms();
  setupGeneralWhatsApp();
  setupMobileNav();
  setupReveal();
  setYear();
})();
