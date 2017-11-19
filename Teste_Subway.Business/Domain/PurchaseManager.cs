using System;
using System.Collections.Generic;
using System.Text;
using TesteSubway.Entities;
using TesteSubway.Business.Infra.Repository;

namespace TesteSubway.Business.Domain
{
    public class PurchaseManager : BaseUnitOfWork<Purchase>
    {
        public PurchaseManager(Repository<Purchase> repository) : base(repository) {}
    }
}
