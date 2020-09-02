using System;
using System.Collections.Generic;

namespace backend.Business
{
    public class ComentarioBusiness
    {
        Database.ComentarioDatabase funcaoBD = new Database.ComentarioDatabase();
        public Models.TbComentario InserirRN(Models.TbComentario comentario)
        {
            comentario.DtPostado = DateTime.Now;

            if(comentario.IdMeme > 0)
                throw new Exception("Meme invalido.");
            if(string.IsNullOrEmpty(comentario.DsComentario))
                throw new Exception("Campo comentario deve ser preenchido.");
            
            return funcaoBD.InserirBD(comentario);
        }

        public List<Models.TbComentario> ConsultarComentarioRN(int idmeme)
        {
            if(idmeme > 0)
                throw new Exception("Meme invalido.");

            return funcaoBD.ConsultarComentariosBD(idmeme);
        }
    }
}