using System;

namespace api.Models.Response
{
    public class DiretorResponse
    {
        public int id { get; set; }
        public int filme { get; set; }
        public string diretor { get; set; }
        public DateTime nascimento { get; set; }
    }
}