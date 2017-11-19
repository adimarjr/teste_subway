using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace TesteSubway.Business.Domain
{
    public interface IUnitOfWork<T> where T : class
    {
        int Insert(T model);
        int Update(T model);
        void Delete(int id);
        IEnumerable<T> GetAll();
        T GetById(int id);
        IEnumerable<T> Where(Expression<Func<T, bool>> expression);
    }
}
