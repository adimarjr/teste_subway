using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TesteSubway.Entities;
using TesteSubway.Business.Infra.Repository;

namespace TesteSubway.Business.Domain
{
    public class AccountManager : BaseUnitOfWork<Client>
    {
        public AccountManager(Repository<Client> repository) : base(repository)
        {}

        public int ActiveAccounts()
        {
            return Where(x => x.Active).Count();
        }
    }
}
