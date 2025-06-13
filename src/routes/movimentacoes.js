const router = require('express').Router();
const supabase = require('../supabase');

router.get('/:barbeiro_id', async (req, res) => {
  const { barbeiro_id } = req.params;
  const { data, error } = await supabase
    .from('movimentacoes')
    .select('*')
    .eq('barbeiro_id', barbeiro_id);
  if (error) return res.status(400).json({ error });
  res.json(data);
});

router.post('/', async (req, res) => {
  const { barbeiro_id, valor, tipo, descricao, data } = req.body;
  const { data: inserted, error } = await supabase
    .from('movimentacoes')
    .insert([{ barbeiro_id, valor, tipo, descricao, data }]);
  if (error) return res.status(400).json({ error });
  res.json(inserted);
});

module.exports = router;
