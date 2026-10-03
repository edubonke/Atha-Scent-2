(() => {
  const schema = {
    '@context':'https://schema.org',
    '@type':'LocalBusiness',
    name:'Atha Scent',
    description:'Handcrafted perfumes, car diffusers, home diffusers and custom perfume bar experiences in Pretoria, South Africa.',
    telephone:'+27659462725',
    areaServed:{'@type':'City',name:'Pretoria'},
    address:{'@type':'PostalAddress',addressLocality:'Pretoria',addressCountry:'ZA'},
    sameAs:[
      'https://www.instagram.com/atha_scent?stkn=eWZjMDZ2NWd2dTE1',
      'https://www.facebook.com/share/1YJbPehNR8/?mibextid=wwXIfr'
    ]
  };
  const tag = document.createElement('script');
  tag.type = 'application/ld+json';
  tag.textContent = JSON.stringify(schema);
  document.head.appendChild(tag);
})();
