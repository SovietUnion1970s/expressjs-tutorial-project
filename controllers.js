export const xoaUser=(req, res) => {
  const id = parseInt(req.params.id);
  res.send(`User with id ${id} has been deleted.`);
}
export const getUser=(req, res) => {
  const id = parseInt(req.params.id);
  res.send(`User with id ${id} details.`);
}
export const testMiddleware=(req, res) => {
  console.log('Middleware test');
  res.send('Test middleware executed.');
}