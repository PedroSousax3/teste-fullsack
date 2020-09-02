namespace backend.Utils
{
    public class ComentarioConversor
    {

        public Models.TbComentario Converter(Models.Request.ComentarioRequest comentario)
        {
            Models.TbComentario novo = new Models.TbComentario();

            novo.IdMeme = comentario.meme;
            novo.DsComentario = comentario.comentario;

            return novo;
        }

        public Models.Response.ComentarioResponse Converter(Models.TbComentario comentario) 
        {
            Models.Response.ComentarioResponse novo = new Models.Response.ComentarioResponse();

            novo.id = comentario.IdComentario;
            novo.meme = comentario.IdMeme;
            novo.comentario = comentario.DsComentario;
            novo.data = comentario.DtPostado;

            return novo;
        }
    }
}