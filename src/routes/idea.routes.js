const { Router } = require('express');
const { ParseIntMiddleware, AuthMiddleware } = require('../middlewares')

module.exports = function ({ IdeaController }) {
  const router = Router();

  router.get('', [ParseIntMiddleware], IdeaController.getAll);
  router.get('/:ideaId', IdeaController.get);
  router.get('/:userId/all', IdeaController.getUserIdeas);
  router.get('/:ideaId', IdeaController.get);
  router.post('', AuthMiddleware, IdeaController.create);
  router.patch('/:ideaId', IdeaController.update);
  router.delete('/:ideaId', AuthMiddleware, IdeaController.delete);
  router.post(':ideaId/upvote', AuthMiddleware, IdeaController.upvoteIdea)
  router.post(':ideaId/downvote', AuthMiddleware, IdeaController.downvoteIdea)
  return router;
};