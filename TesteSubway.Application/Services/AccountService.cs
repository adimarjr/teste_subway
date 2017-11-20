using System;
using System.Collections.Generic;
using System.Text;
using TesteSubway.Business.Domain;
using TesteSubway.Entities;
using TesteSubway.Business.Infra.EntityFramework;
using TesteSubway.Business.Infra.Repository;

namespace TesteSubway.Application.Services
{
    public class AccountService
    {
        private AccountManager accountManager;
        public AccountService()
        {
            accountManager = new AccountManager(new Repository<Client>(TesteSubwayContext.Create()));
        }

        public IEnumerable<Client> GetAll()
        {
            return accountManager.GetAll();
        }

        public IEnumerable<Client> GetAllActive()
        {
            return accountManager.GetAllActive();
        }

        public Client Get(int id)
        {
            return accountManager.GetById(id);
        }

        public int Insert(Client client)
        {
            return accountManager.Insert(client);
        }

        public int Update(Client client)
        {
            return accountManager.Update(client);
        }

        public void Delete(int id)
        {
            accountManager.Delete(id);
        }

        public void Inactivate(int id)
        {
            accountManager.Inactivate(id);
        }

        public int ActiveAccounts()
        {
            return accountManager.ActiveAccounts();
        }
    }
}
