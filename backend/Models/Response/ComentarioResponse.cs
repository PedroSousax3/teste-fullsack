using System;

namespace backend.Models.Response
{
    public class ComentarioResponse
    {
        public int id { get; set; }
        public int meme { get; set; }
        public string comentario { get; set; }
        public DateTime data { get; set; }
    }
}