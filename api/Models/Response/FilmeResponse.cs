using System;

namespace api.Models.Response
{
    public class FilmeResponse
    {
        public int id { get; set; }
        public string filme { get; set; }
        public string genero { get; set; }
        public decimal? avaliacao { get; set; }
        public bool disponivel { get; set; }
        public int? duracao { get; set; }
        public DateTime lancamento { get; set; }
    }
}