const mongoose = require('mongoose');

const mesaSchema = new mongoose.Schema({
  table_name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  capacidade: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20
  },
  status: {
    type: String,
    enum: ['disponivel', 'ocupada', 'reservada', 'manutencao'],
    default: 'disponivel'
  },
  observacoes: {
    type: String,
    trim: true,
    maxlength: 500
  },
  dataCriacao: {
    type: Date,
    default: Date.now
  },
  dataAtualizacao: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Middleware para atualizar dataAtualizacao antes de salvar
mesaSchema.pre('save', function(next) {
  this.dataAtualizacao = Date.now();
  next();
});

// Método para verificar se a mesa está disponível
mesaSchema.methods.estaDisponivel = function() {
  return this.status === 'disponivel';
};

// Método estático para buscar mesas disponíveis
mesaSchema.statics.buscarDisponiveis = function(capacidadeMinima = 1) {
  return this.find({
    status: 'disponivel',
    capacidade: { $gte: capacidadeMinima }
  }).sort({ numero: 1 });
};

const Mesa = mongoose.model('mesas', mesaSchema);

module.exports = Mesa;