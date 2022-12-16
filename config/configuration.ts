export default () => ({
  port: parseInt(process.env.APP_PORT, 10) || 3005,
  database: {
    username: process.env.DATABASE_USER ?? 'username',
  },
});
