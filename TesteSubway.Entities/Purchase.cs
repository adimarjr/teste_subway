using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TesteSubway.Entities
{
    public class Purchase : BaseEntity
    {
        [Required]
        public Client Client { get; set; }
        public DateTime Date { get; set; }
        public decimal Value { get; set; }
        [Required]
        public string Product { get; set; }
        public bool Paid { get; set; }
    }
}
