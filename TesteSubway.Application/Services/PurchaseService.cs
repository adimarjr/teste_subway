using System;
using System.Collections.Generic;
using System.Text;
using TesteSubway.Business.Domain;
using TesteSubway.Entities;
using TesteSubway.Business.Infra.EntityFramework;
using TesteSubway.Business.Infra.Repository;

namespace TesteSubway.Application.Services
{
    public class PurchaseService
    {
        private PurchaseManager purchaseManager;
        public PurchaseService()
        {
            purchaseManager = new PurchaseManager(new Repository<Purchase>(TesteSubwayContext.Create()));
        }

        public IEnumerable<Purchase> GetAll()
        {
            return purchaseManager.GetAll();
        }

        public Purchase Get(int id)
        {
            return purchaseManager.GetById(id);
        }

        public int Insert(Purchase purchase)
        {
            return purchaseManager.Insert(purchase);
        }

        public int Update(Purchase purchase)
        {
            return purchaseManager.Update(purchase);
        }

        public void Delete(int id)
        {
            purchaseManager.Delete(id);
        }

        public void Inactivate(int id)
        {
            purchaseManager.Inactivate(id);
        }
    }
}
