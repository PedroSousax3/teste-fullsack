using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace api.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class DiretorController : ControllerBase
    {
        Business.DiretorRN funcaorn = new Business.DiretorRN();
        Utils.ConvertDiretor convert = new Utils.ConvertDiretor();



        [HttpGet]
        public ActionResult<List<Models.Response.DiretorResponse>>  ListarDiretors()
        {
            try
            {
                List<Models.TbDiretor> diretores = funcaorn.ListarRN();

                return diretores.Select(x => convert.Converter(x))
                                .ToList();
            }
            catch(SystemException ex) 
            {
                return BadRequest(
                    new Models.Response.Erro(404, ex.Message)
                );
            }
        }

        [HttpGet("ConsultarNome")]
        public ActionResult<List<Models.Response.DiretorResponse>> ConsultarNome(string nome)
        {
            try
            {
                   List<Models.TbDiretor> consulta = funcaorn.ConsultarNome(nome).ToList();

                   return consulta.Select(x => convert.Converter(x)).ToList();
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.Erro(404, ex.Message)
                );
            }
        }

        [HttpGet("ConsultarId/{iddiretor}")]
        public ActionResult<Models.Response.DiretorResponse> ConsultarId(int iddiretor)
        {
            try
            {
                return convert.Converter(funcaorn.ConsultarId(iddiretor));
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.Erro(404, ex.Message)
                );
            }
        }

        [HttpPost]
        public ActionResult<Models.Response.DiretorResponse> Inserir(Models.Request.DiretorRequest diretor)
        {
            try
            {
                Models.TbDiretor adicionar = convert.Converter(diretor);
                
                Models.TbDiretor result = funcaorn.Inserir(adicionar);

                Models.Response.DiretorResponse resultconvert = convert.Converter(adicionar);

                return resultconvert;
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.Erro(404, ex.Message)
                );
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<Models.Response.DiretorResponse> Deletar(int id)
        {
            try
            {
                Models.TbDiretor vldeletado = funcaorn.Deletar(id);

                return convert.Converter(vldeletado);
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.Erro(401, ex.Message)
                );
            }
        }


        [HttpPut]
        public ActionResult<Models.Response.DiretorResponse> Alterar (int id, Models.Request.DiretorRequest novo)
        {
            try
            {
                Models.TbDiretor alterado = funcaorn.AlterarRN(id, convert.Converter(novo));

                return convert.Converter(alterado);

            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.Erro(400, ex.Message)
                );
            }
        }      
    }
}