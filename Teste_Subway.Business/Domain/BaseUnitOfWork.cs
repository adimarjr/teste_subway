using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using TesteSubway.Business.Infra.Repository;

namespace TesteSubway.Business.Domain
{
    public class BaseUnitOfWork<TEntity> : IUnitOfWork<TEntity> where TEntity : Entities.BaseEntity
    {
        public Repository<TEntity> repository { get; private set; }
        public BaseUnitOfWork(Repository<TEntity> repository)
        {
            this.repository = repository;
        }

        public void Delete(int id)
        {
            repository.Delete(id);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return repository.GetAll();
        }

        public TEntity GetById(int id)
        {
            return repository.Get(id);
        }

        public int Insert(TEntity entity)
        {
            entity.Active = true;
            return repository.Insert(entity).ID;
        }

        public int Update(TEntity entity)
        {
            return repository.Update(entity).ID;
        }

        public IEnumerable<TEntity> Where(Expression<Func<TEntity, bool>> expression)
        {
            return repository.GetAllList(expression);
        }

        public void Inactivate(int id)
        {
            var entity = GetById(id);
            entity.Active = false;
            Update(entity);
        }
    }
}
