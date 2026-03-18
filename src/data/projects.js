export const projects = [
  {
    slug: 'wordpress-growth-hub',
    title: 'WordPress Growth Hub',
    stack: 'WordPress, PHP, WooCommerce',
    summary:
      'I completed porjects including WooCommerce,LMS, Baby shower etc',
    challenge:
      'The client needed a scalable, easy-to-update website that could handle high traffic and convert visitors into leads effectively.',
    solution: [
      'LearnDashGroup Theme was customized to create a visually appealing and user-friendly design that aligned with the brand identity.',
      'Implemented custom PHP functions to enhance functionality and user experience.',
      'Optimized site performance through caching, image optimization, and code minification, resulting in faster load times and improved SEO.',
    ],
    results: [
      'B2B,B2C LearnDash LMS site launched successfully with a 25% increase in lead generation.',
      '',
      'Reduced manual CRM entry by over 70%.',
    ],
    photos: [
      '/portfolio-shots/wp-theme.svg',
      '/portfolio-shots/wp-automation.svg',
      '/portfolio-shots/wp-content.svg',
    ],
    tags: ['WordPress', 'PHP', 'n8n', 'Performance'],
  },
  {
    slug: 'shopify-launchpad',
    title: 'Shopify Launchpad Store',
    stack: 'Shopify, React, n8n',
    summary:
      'A branded Shopify storefront with animated landing blocks, bundle logic, and abandoned checkout automations.',
    challenge:
      'The brand needed a premium launch in 4 weeks while preserving flexibility for frequent campaign drops.',
    solution: [
      'Created modular theme sections for campaign re-use and seasonal refreshes.',
      'Implemented a React-powered product finder for faster product discovery.',
      'Automated order notifications and upsell flows with n8n + email platform.',
    ],
    results: [
      'Average order value increased by 18%.',
      'Checkout abandonment recovery improved by 24%.',
      'Campaign launch time dropped from days to hours.',
    ],
    photos: [
      '/portfolio-shots/shopify-store.svg',
      '/portfolio-shots/shopify-checkout.svg',
      '/portfolio-shots/react-ui.svg',
    ],
    tags: ['Shopify', 'React', 'Automation', 'Ecommerce'],
  },
  {
    slug: 'n8n-lead-command',
    title: 'n8n Lead Command Center',
    stack: 'n8n, PHP, WordPress',
    summary:
      'An event-driven automation pipeline that scores, enriches, and syncs leads from website to CRM in real time.',
    challenge:
      'Sales teams were losing opportunities due to delayed enrichment and poor lead prioritization.',
    solution: [
      'Designed n8n workflows with fail-safe retries and alerting.',
      'Added enrichment steps before CRM insertion for stronger scoring.',
      'Built PHP webhook endpoints for secure validation and logging.',
    ],
    results: [
      'Lead response time reduced from 6 hours to under 20 minutes.',
      'Improved MQL-to-SQL rate by 27%.',
      'Near-zero duplicate records after dedup logic.',
    ],
    photos: [
      '/portfolio-shots/n8n-flow.svg',
      '/portfolio-shots/wp-automation.svg',
      '/portfolio-shots/php-service.svg',
    ],
    tags: ['n8n', 'CRM', 'PHP', 'Integration'],
  },
  {
    slug: 'Data Analytics Dashboard',
    title: 'Power BI Analytics Dashboard',
    stack: 'Power BI, Power Query, Star Schema modeling,KPI Metrics',
    summary:
      'A comprehensive Power BI dashboard that unified data sources and provided actionable insights for sales and marketing teams.',
    challenge:
      'AxisCare Live API connected data from Axis endpoints, but the data was siloed and lacked a clear structure for analysis.',
    solution: [
      'With pagination and incremental refresh, for data modeling the datas is ready for analysis and visualization.',
      'KPI metrics were defined and implemented to track key performance indicators across sales and marketing.',
      'Scheduled refresh and correct data modeling with star schema design to ensure optimal performance and scalability.',
    ],
    results: [
      'Reporting prep refreshed everyday or customer timing, ensuring up-to-date insights.',
      'Support the decision-making process with real-time data.',
      'Improved data accuracy and consistency across all reports.',
    ],
    photos: [
      '/portfolio-shots/PowerBI_dashboard.png',
      '/portfolio-shots/PowerBI_Reliability.png',
      '/portfolio-shots/PowerBI_Revenue.png',
      '/portfolio-shots/PowerBI_Demand.png',
    ],
    tags: ['Power BI', 'Analytics', 'Power Query', 'Automation','KPI'],
  },
  {
    slug: 'react-experience-site',
    title: 'React Experience Website',
    stack: 'React, WordPress Headless, PHP',
    summary:
      'A headless React front-end with animated storytelling and WordPress CMS control for content teams.',
    challenge:
      'Marketing wanted modern interactions, but editors needed the familiar WordPress authoring flow.',
    solution: [
      'Built a React interface with reusable layout components and motion system.',
      'Connected to WordPress REST endpoints secured with token-based access.',
      'Created a CMS component guide so non-technical teams could publish safely.',
    ],
    results: [
      'Time-on-page increased by 33%.',
      'Publishing speed improved by 2.5x for new campaign pages.',
      'Bounce rate dropped on mobile-first landing pages.',
    ],
    photos: [
      '/portfolio-shots/react-ui.svg',
      '/portfolio-shots/wp-content.svg',
      '/portfolio-shots/php-service.svg',
    ],
    tags: ['React', 'Headless CMS', 'WordPress', 'UX'],
  },
  {
    slug: 'php-platform-refresh',
    title: 'PHP Platform Refresh',
    stack: 'PHP, React, Power BI',
    summary:
      'A legacy PHP platform modernization with React widgets and BI-ready event tracking.',
    challenge:
      'The app was stable but hard to maintain, and product teams lacked visibility into user behavior.',
    solution: [
      'Refactored critical PHP modules into service-based architecture.',
      'Added React micro-frontends for high-change dashboard areas.',
      'Implemented event tracking pipelines feeding Power BI product analytics.',
    ],
    results: [
      'Deployment errors dropped by 41%.',
      'Release cadence improved from monthly to weekly.',
      'Product analytics became available to every squad.',
    ],
    photos: [
      '/portfolio-shots/php-service.svg',
      '/portfolio-shots/react-ui.svg',
      '/portfolio-shots/powerbi-kpi.svg',
    ],
    tags: ['PHP', 'React', 'Power BI', 'Modernization'],
  },
]
