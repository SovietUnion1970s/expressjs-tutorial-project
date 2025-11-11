export const testMiddleware=((req, res, next) => {
  console.log(`Starting`);
  res.on('finish', () => {
    console.log(`Finished`);
  });
  next();
});