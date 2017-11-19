using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TesteSubway.Entities;
using TesteSubway.Application.Services;

namespace Teste_Subway.Controllers
{
    [Route("api/purchase")]
    public class PurchaseController : Controller
    {
        private PurchaseService purchaseManager;
        public PurchaseController() : this(new PurchaseService()) { }
        public PurchaseController(PurchaseService purchaseManager)
        {
            this.purchaseManager = purchaseManager;
        }
        // GET: api/purchase
        [HttpGet]
        public IEnumerable<Purchase> Get()
        {
            return purchaseManager.GetAll();
        }

        // GET api/purchase/5
        [HttpGet("{id}")]
        public Purchase Get(int id)
        {
            return purchaseManager.Get(id);
        }

        // POST api/purchase
        [HttpPost]
        public void Post([FromBody]Purchase value)
        {
            purchaseManager.Insert(value);
        }

        // PUT api/purchase/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Purchase value)
        {
            purchaseManager.Update(value);
        }

        // DELETE api/purchase/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            purchaseManager.Delete(id);
        }

        // PUT api/purchase/5/inactive
        [HttpPut("{id}/inactive")]
        public void Put(int id)
        {
            purchaseManager.Inactivate(id);
        }
    }
}
