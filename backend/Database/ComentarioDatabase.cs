using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class ComentarioDatabase
    {
        Models.bd_fullstackContext bd = new Models.bd_fullstackContext();
        public Models.TbComentario InserirBD(Models.TbComentario comentario)
        {
            bd.Add(comentario);
            bd.SaveChanges();

            return comentario;
        }

        public List<Models.TbComentario> ConsultarComentariosBD(int idmeme)
        {
            List<Models.TbComentario> comentarios = bd.TbComentario
                                                      .Where(x => 
                                                     x.IdMemelation == idmeme)
                                                      .ToList();
            
            return comentarios;
        }

        public List<Models.TbComentario> ConsultarMemeCompleto()
        {
            return bd.TbComentario.Include(x => x.IdMemelationNavigation).ToList();
        }

        public List<Models.TbComentario> ListarBD ()
        {
            return bd.TbComentario.ToList();
        }
        
    }
}