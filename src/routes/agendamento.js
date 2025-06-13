const router = require('express').Router();
const supabase = require('../supabase');

router.get('/:barbeiro_id', async (req, res) => {
  const { barbeiro_id } = req.params;
  const { data, error } = await supabase
    .from('agendamentos')
    .select('*')
    .eq('barbeiro_id', barbeiro_id)
    .order('data_hora', { ascending: true });
  if (error) return res.status(400).json({ error });
  res.json(data);
});

router.post('/', async (req, res) => {
  const { barbeiro_id, cliente, servico, data_hora } = req.body;
  const { data: inserted, error } = await supabase
    .from('agendamentos')
    .insert([{ barbeiro_id, cliente, servico, data_hora }]);
  if (error) return res.status(400).json({ error });
  res.json(inserted);
});

module.exports = router;
