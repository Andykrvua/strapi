module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '15e26dca632bbb2b2377c7506ef6419f'),
  },
});
