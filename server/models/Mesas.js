const mongoose = require('mongoose');

const mesaSchema = new mongoose.Schema({
  numero: {
    type: Number,
    required: true,
    unique: true,
    min: 1
  },
  capacidade: {
    type: Number,
    required: true,
    min: 1,
    max: 20
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