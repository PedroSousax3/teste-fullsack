using System;

namespace api.Models.Response
{
    public class AtorResponse
    {
        public int id { get; set; }
        public string nome { get; set; }
        public decimal altura { get; set; }
        public DateTime nascimento { get; set; } 
    }
}