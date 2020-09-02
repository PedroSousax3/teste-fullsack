using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class ComentarioController : ControllerBase
    {

        Utils.ComentarioConversor Convert = new Utils.ComentarioConversor();
        Business.ComentarioBusiness funcaoRN = new Business.ComentarioBusiness();

        [HttpPost]
        public Models.Response.ComentarioResponse Inserir(Models.Request.ComentarioRequest novo) 
        {
            Models.TbComentario comentario = Convert.Converter(novo);

            Models.TbComentario adicionado = funcaoRN.InserirRN(comentario);

            return Convert.Converter(adicionado);
        }

        [HttpGet]
        public List<Models.Response.ComentarioResponse> ConsultarComentarios(int idmeme)
        {
            List<Models.TbComentario> comentario = funcaoRN.ConsultarComentarioRN(idmeme);

            return comentario.Select(x => Convert.Converter(x)).ToList();
        }
    }
}