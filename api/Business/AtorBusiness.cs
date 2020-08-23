using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace api.Business
{
    public class AtorBusiness
    {
        Database.AtorBD funcaobd = new Database.AtorBD();
        public Models.TbAtor InserirRN(Models.TbAtor adicionar)
        {
            if(string.IsNullOrEmpty(adicionar.NmAtor))
                throw new ArgumentException("Campo nome é obrigatorio.");
            if(adicionar.VlAltura < 0)
                throw new ArgumentException("Altura deve ser maior que 0");


            return funcaobd.InserirBD(adicionar);
        }

        public List<Models.TbAtor> ListarRN(){
            return funcaobd.ListarBD();
        }

        public Models.TbAtor ConsultarIdRN(int id) 
        {
            if(id < 1)
                throw new ArgumentException("Campo id do ator obrigatorio para realizar alterações.");

            return funcaobd.ConsultarIdBD(id);
        }

        public List<Models.TbAtor> ConsultarNomeRN(string nome) 
        {
            if(string.IsNullOrEmpty(nome))
                throw new ArgumentException("Campo nome é obrigatorio.");

            return funcaobd.ConsultarNomeBD(nome);
        }

        public Models.TbAtor AlterarRN(int id, Models.TbAtor ator)
        {
            if(id < 1)
                throw new ArgumentException("Campo id do ator obrigatorio para realizar alterações.");

            return funcaobd.AlterarBD(id, ator);
        }

        public Models.TbAtor DeletarRN(int id) 
        {
            if(id < 1)
                throw new ArgumentException("Campo id do ator obrigatorio para deletar o registro de um ator.");

            return funcaobd.DeletarBD(id);
        }
    }
}