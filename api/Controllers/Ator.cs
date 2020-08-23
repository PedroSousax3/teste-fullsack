using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Diagnostics;

namespace api.Controllers
{
    [ApiController]
    [Route("[Controller]")]

    public class AtorController : ControllerBase
    {        
        Utils.ConvertAtor convert = new Utils.ConvertAtor();

        Business.AtorBusiness funcaorn = new Business.AtorBusiness();

        [HttpPost]
        public ActionResult<Models.Response.AtorResponse> Inserir(Models.Request.AtorRequest ator)
        {
            try
            {
                Models.TbAtor adicionar = convert.Converter(ator);

                Models.TbAtor novo = funcaorn.InserirRN(adicionar);

                return convert.Converter(novo);
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.Erro(404, ex.Message)
                );
            }
        }

        [HttpGet]
        public ActionResult<List<Models.Response.AtorResponse>> ListarAtores()
        {
            try
            {
                List<Models.TbAtor> atores = funcaorn.ListarRN();

                return atores.Select(x => convert.Converter(x)).ToList();
            }
            catch(SystemException ex)
            {
                return BadRequest(
                    new Models.Response.Erro(404, ex.Message)
                );
            }
        }

        [HttpGet("ConsultarPorNome")]
        public ActionResult<List<Models.Response.AtorResponse>> ConsultarNome(string nome)
        {
            try
            {
                List<Models.TbAtor> consulta = funcaorn.ConsultarNomeRN(nome);

                return consulta.Select(x => convert.Converter(x)).ToList();   
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.Erro(404, ex.Message)
                );
            }
        }

        [HttpGet("ConsultarPorId/{id}")]
        public ActionResult<Models.Response.AtorResponse> ConsultarId(int id)
        {
            try
            {
                Models.TbAtor consulta = funcaorn.ConsultarIdRN(id);

                return convert.Converter(consulta);   
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.Erro(404, ex.Message)
                );
            }
        }

        [HttpPut("{id}")]
        public ActionResult<Models.Response.AtorResponse> Alterar(int id, Models.Request.AtorRequest ator)
        {
            try
            {
                Models.TbAtor novo = funcaorn.AlterarRN(id, convert.Converter(ator));

                return convert.Converter(novo);
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.Erro(400, ex.Message)
                );
            }   
        }

        [HttpDelete("{id}")]
        public ActionResult<Models.Response.AtorResponse> Deletar(int id)
        {
            try
            {
                Models.TbAtor consulta = funcaorn.ConsultarIdRN(id);

                return convert.Converter(consulta);   
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.Erro(404, ex.Message)
                );
            }
        }
    }
}