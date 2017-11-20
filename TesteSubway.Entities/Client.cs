using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TesteSubway.Entities
{
    public class Client : BaseEntity
    {
        [Required]
        public string Name { get; set; }
        public DateTime Birth { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }

        //public virtual IList<Purchase> Purchases { get; set; }
    }
}
