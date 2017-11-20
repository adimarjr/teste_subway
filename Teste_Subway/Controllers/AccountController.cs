using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TesteSubway.Entities;
using TesteSubway.Application.Services;

namespace Teste_Subway.Controllers
{
    [Route("api/account")]
    public class AccountController : Controller
    {
        private AccountService accountService;
        //public AccountController() : this(new AccountService()) { }
        public AccountController(AccountService accountService)
        {
            this.accountService = accountService;
        }
        // GET: api/account
        [HttpGet]
        public IEnumerable<Client> Get()
        {
            return accountService.GetAll();
        }

        // GET api/account/5
        [HttpGet("{id}")]
        [Route("active-accounts")]
        public Client Get(int id)
        {
            return accountService.Get(id);
        }

        [HttpGet("active")]
        public IEnumerable<Client> GetActive()
        {
            return accountService.GetAllActive();
        }

        // POST api/account
        [HttpPost]
        public void Post([FromBody]Client value)
        {
            accountService.Insert(value);
        }

        // PUT api/account/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Client value)
        {
            accountService.Update(value);
        }

        // DELETE api/account/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            accountService.Delete(id);
        }

        // PUT api/account/5/inactive
        [HttpPut("{id}/inactive")]
        public void Put(int id)
        {
            accountService.Inactivate(id);
        }

        // GET api/account/active-accounts
        [HttpGet]
        [Route("active-accounts")]
        public int GetActiveAccounts()
        {
            return accountService.ActiveAccounts();
        }
    }
}
