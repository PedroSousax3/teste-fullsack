using System;

namespace api.Models.Request
{
    public class DiretorRequest
    {
        public int filme { get; set; }
        public string diretor { get; set; }
        public DateTime nascimento { get; set; }        
    }
}