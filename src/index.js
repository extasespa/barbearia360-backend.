const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const barbeirosRoutes = require('./routes/barbeiros');
const movRoutes = require('./routes/movimentacoes');
const agRoutes = require('./routes/agendamentos');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/barbeiros', barbeirosRoutes);
app.use('/movimentacoes', movRoutes);
app.use('/agendamentos', agRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
