using System;

namespace api.Models.Request
{
    public class AtorRequest
    {
        public string nome { get; set; }
        public decimal altura { get; set; }
        public DateTime nascimento { get; set; } 
    }
}