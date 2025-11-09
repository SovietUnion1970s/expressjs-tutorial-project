export const xoaUser=(req, res) => {
  const id = parseInt(req.params.id);
  res.send(`User with id ${id} has been deleted.`);
}