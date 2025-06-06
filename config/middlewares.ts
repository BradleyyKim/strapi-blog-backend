export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      origin: [
        'http://localhost:3000', 
        'https://www.mykim.in',
        'https://mykim.in'
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '10mb',
      formLimit: '100mb',
      textLimit: '10mb',
      formidable: {
        maxFileSize: 100 * 1024 * 1024, // 100MB
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
