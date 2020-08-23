using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.Database
{
    public class DiretorBD
    {
        Models.apidbContext bd = new Models.apidbContext();

        public Models.TbDiretor InserirBD(Models.TbDiretor adicionar)
        {
            bd.TbDiretor.Add(adicionar);

            bd.SaveChanges();

            return adicionar;
        }

        public List<Models.TbDiretor> ListarRN()
        {
            return bd.TbDiretor.ToList();
        }

        public Models.TbDiretor ConsultaId(int iddiretor)
        {
            return bd.TbDiretor.FirstOrDefault(x => x.IdDiretor == iddiretor);
        }

        public List<Models.TbDiretor> ConsultaNome(string nome)
        {
            List<Models.TbDiretor> result = bd.TbDiretor
                                              .Where(x => x.NmDiretor.Contains(nome))
                                              .ToList();

            return result;
        }

        public Models.TbDiretor AterarBd(int id, Models.TbDiretor novo)
        {
            Models.TbDiretor atual = bd.TbDiretor.FirstOrDefault(x => x.IdDiretor == id);

            atual.IdFilme = novo.IdFilme;
            atual.NmDiretor = novo.NmDiretor;
            atual.DtNascimento = novo.DtNascimento;

            bd.SaveChanges();

            return atual;
        }

        public Models.TbDiretor DeletarBD(int id)
        {
            Models.TbDiretor apagar = bd.TbDiretor.FirstOrDefault(x => x.IdDiretor == id);

            bd.Remove(apagar);

            return apagar;
        }
    }
}