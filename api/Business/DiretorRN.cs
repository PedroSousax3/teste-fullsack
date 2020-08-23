using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc.ModelBinding;


namespace api.Business
{
    public class DiretorRN
    {
        Database.DiretorBD funcao = new Database.DiretorBD();
        public Models.TbDiretor Inserir(Models.TbDiretor adicionar)
        {
            if(adicionar.NmDiretor == string.Empty)
                throw new ArgumentException("Dados usado para Inserir o diretor estão incorretos");
            if(adicionar.IdFilme < 1)
                throw new ArgumentException("Filme não identificado");
        
            return funcao.InserirBD(adicionar);
        }

        public List<Models.TbDiretor> ListarRN()
        {
            return funcao.ListarRN();
        }

        public Models.TbDiretor ConsultarId(int iddiretor)
        {
            if(iddiretor < 0)
                throw new ArgumentException("id do diretor deve ser maior que 0");

            return funcao.ConsultaId(iddiretor);
        }

        public List<Models.TbDiretor> ConsultarNome (string nome)
        {
            if(nome == string.Empty)
                throw new ArgumentException("Campo nome é obrigatório");

            return funcao.ConsultaNome(nome);
        }

        public Models.TbDiretor AlterarRN(int id, Models.TbDiretor novo)
        {
            if(novo.NmDiretor == string.Empty)
                throw new ArgumentException("Campo nome é obrigatório");

            return funcao.AterarBd(id, novo);
        }

        public Models.TbDiretor Deletar(int id)
        {
            if(id < 1)
                throw new ArgumentException("Filme não identificado");

            return funcao.DeletarBD(id);
        }
    }
}