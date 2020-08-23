using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class FilmeController : ControllerBase
    {
        Utils.ConvertFilme convert = new Utils.ConvertFilme();
        Business.FilmeRN validacao = new Business.FilmeRN();
        Models.TbFilme referencia = new Models.TbFilme();

        [HttpPost]
        public ActionResult<Models.Response.FilmeResponse> Inserir (Models.Request.FilmeRequest entrada)
        {
            try
            {
                return convert.Converter(
                            validacao.Inserir(convert.Converter(entrada))
                        );   
            }
            catch (System.Exception ex)
            {
                return BadRequest (
                    new Models.Response.Erro(400, ex.Message)
                );
            }
        }

        [HttpGet("ConsultarFilme")]
        public ActionResult<List<Models.Response.FilmeResponse>> ListarFilmes ()
        {
            try
            {
                List<Models.TbFilme> consult = validacao.ListarRN();

                List<Models.Response.FilmeResponse> result = 
                                    consult.Select(x => convert.Converter(x))
                                           .ToList();

                return result;
            }
            catch (System.Exception ex)
            {
                return BadRequest (
                    new Models.Response.Erro(404, ex.Message)
                );
            }             
        }

        [HttpGet("ConsultarId/{id}")]
        public ActionResult<Models.Response.FilmeResponse> ConsultarId (int id)
        {
            try
            {
                Models.TbFilme consulta = validacao.ConsultaFilmePorId(id);
                Models.Response.FilmeResponse result = convert.Converter(consulta);

                return result;   
            }
            catch (System.Exception ex)
            {
                return BadRequest (
                    new Models.Response.Erro(404, ex.Message)
                );
            }
        }

        [HttpGet("Filtrar")]
        public ActionResult<List<Models.Response.FilmeResponse>> ConsultaFiltrar(string nome, string genero)
        {
            try
            {
                List<Models.TbFilme> consulta = validacao.ConsultarFiltro(nome, genero);

                List<Models.Response.FilmeResponse> result = 
                            consulta.Select(x => convert.Converter(x)).ToList();
                
                return result;
            }
            catch (System.Exception ex)
            {
                return BadRequest (
                    new Models.Response.Erro(404, ex.Message)
                );
            }
        }

        [HttpPut("{id}")]
        public ActionResult Alterar (int id, Models.Request.FilmeRequest filme)
        {
            try
            {
                Models.TbFilme filmeconvert = convert.Converter(filme);

                validacao.Alterar(id, filmeconvert);

                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest (
                    new Models.Response.Erro(404, ex.Message)
                );
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Deletar (int id)
        {
            try
            {
                validacao.Deletar(id); 

                return Ok();  
            }
            catch (System.Exception ex)
            {
                return BadRequest (
                    new Models.Response.Erro(401, ex.Message)
                );
            }
        }   
    }
}