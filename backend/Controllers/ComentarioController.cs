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
        public ActionResult<Models.Response.ComentarioResponse> Inserir(Models.Request.ComentarioRequest novo) 
        {
            try 
            {
                Models.TbComentario comentario = Convert.Converter(novo);

                Models.TbComentario adicionado = funcaoRN.InserirRN(comentario);

                return Convert.Converter(adicionado);
            }
            catch(Exception ex)
            {
                return BadRequest(
                    new Models.Response.ErroResponse(400, ex.Message)
                );
            }
        }

        [HttpGet]
        public List<Models.Response.ComentarioResponse> ConsultarComentarios(int idmeme)
        {
            List<Models.TbComentario> comentario = funcaoRN.ConsultarComentarioRN(idmeme);

            List<Models.Response.ComentarioResponse> result = 
                comentario.Select(x => 
                    Convert.Converter(x))
                            .ToList();

            return result;
        }

        [HttpGet("Listar")]
        public ActionResult<List<Models.Response.ComentarioResponse>> ListarComentarios()
        {
            try
            {
                List<Models.TbComentario> consulta = funcaoRN.ListarRN();
                return consulta.Select(x => Convert.Converter(x)).ToList();
            }
            catch(Exception ex)
            {
                return BadRequest(
                    new Models.Response.ErroResponse(400, ex.Message)
                );
            }
        }
    }
}