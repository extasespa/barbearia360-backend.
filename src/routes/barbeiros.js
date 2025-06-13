const router = require('express').Router();
const supabase = require('../supabase');

router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('barbeiros').select('*');
  if (error) return res.status(400).json({ error });
  res.json(data);
});

router.post('/', async (req, res) => {
  const { nome, user_id } = req.body;
  const { data, error } = await supabase.from('barbeiros').insert([{ nome, user_id }]);
  if (error) return res.status(400).json({ error });
  res.json(data);
});

module.exports = router;
