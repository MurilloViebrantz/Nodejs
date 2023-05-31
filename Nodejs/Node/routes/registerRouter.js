const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');




router.get('/', registerController.listar)
router.post('/', registerController.salvar)
router.get('/:id', registerController.buscarPorId)
router.get('/nome/:nome', registerController.buscarPorNome)
router.get('/sobrenome/:sobrenome', registerController.buscarPorSobrenome)
router.get('/cidade/:cidade', registerController.buscarPorCidade)
router.get('/estado/:estado', registerController.buscarPorEstado)
router.get('/status/:status', registerController.buscarPorStatus)
router.put('/:id', registerController.atualizar)
router.delete('/:id', registerController.excluir)



module.exports = router;