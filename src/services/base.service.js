class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  async get(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.massage = 'ID must be sent'
      throw error;
    }

    const currententity = await this.repository.get(id)

    if (!currententity) {
      const error = new Error();
      error.status = 404;
      error.massage = 'Entity does not found'
      throw error;
    }

    return await currententity;
  }

  async getAll() {
    return await this.repository.getAll();
  }

  async create(entity) {
    return await this.repository.create(entity)
  }

  async update(id, entity) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.massage = 'ID must be sent'
      throw error;
    }

    return await this.repository.update(id, entity)
  }

  async delete(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.massage = 'ID must be sent'
      throw error;
    }

    return await this.repository.delete(id, entity)
  }
}

module.exports = BaseService 