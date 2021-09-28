const config = {
    SENTRY_DSN: "https://3b882f947add4b7f844114d1887137c7@o1015321.ingest.sentry.io/5980831",
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51JCzpgSChv1F0QSH57P7hikSUCS6F6IDpGre5WSvIBVyJipY4i6gQAFULJzAhhOaoYaH01So5rjR6gGi5G6TGzov00yUTViAtc",
    // Backend config
    s3: {
      REGION: process.env.REACT_APP_REGION,
      BUCKET: process.env.REACT_APP_BUCKET,
    },
    apiGateway: {
      REGION: process.env.REACT_APP_REGION,
      URL: process.env.REACT_APP_API_URL,
    },
    cognito: {
      REGION: process.env.REACT_APP_REGION,
      USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
      APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
      IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
    },
  };
  
  export default config;