using System;
using System.Collections.Generic;
using System.Text;
using TesteSubway.Entities;
using TesteSubway.Business.Infra.Repository;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace TesteSubway.Business.Domain
{
    public class PurchaseManager : BaseUnitOfWork<Purchase>
    {
        public PurchaseManager(Repository<Purchase> repository) : base(repository) {}
        
        public override int Insert(Purchase entity)
        {
            entity.Client = repository.db.Set<Client>().Find(entity.Client.ID);
            entity.Active = true;
            return repository.Insert(entity).ID;
        }

        public override IEnumerable<Purchase> GetAll()
        {
            return repository.GetAll().Include(x => x.Client);
        }

        public override Purchase GetById(int id)
        {
            return repository.GetAll().Include(x => x.Client).Where(x => x.ID == id).First();
        }
    }
}
