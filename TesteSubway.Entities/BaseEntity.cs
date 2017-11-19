using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TesteSubway.Entities
{
    public class BaseEntity
    {
        [Key]
        public int ID { get; set; }
        public bool Active { get; set; }

        public bool IsTransient()
        {
            return ID == 0;
        }
    }
}
