using System.Linq;
using System.Collections.Generic;

namespace backend.Database
{
    public class ComentarioDatabase
    {
        Models.bd_fullstackContext bd = new Models.bd_fullstackContext();
        public Models.TbComentario InserirBD(Models.TbComentario comentario)
        {
            bd.TbComentario.Add(comentario);
            bd.SaveChanges();

            return comentario;
        }

        public List<Models.TbComentario> ConsultarComentariosBD(int idmeme)
        {
            List<Models.TbComentario> comentarios = bd.TbComentario
                                                      .Where(x => 
                                                     x.IdMeme == idmeme)
                                                      .ToList();
            
            return comentarios;
        }
    }
}