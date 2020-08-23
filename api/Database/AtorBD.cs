using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace api.Database
{
    public class AtorBD
    {
        Models.apidbContext bd = new Models.apidbContext();

        public Models.TbAtor InserirBD(Models.TbAtor adicionar)
        {
            bd.TbAtor.Add(adicionar);

            bd.SaveChanges();

            return adicionar;
        }

        public List<Models.TbAtor> ListarBD()
        {
            return bd.TbAtor.ToList();
        }

                public Models.TbAtor ConsultarIdBD(int id)
        {
            return bd.TbAtor.FirstOrDefault(x => 
                                x.IdAtor == id);
        }

        public List<Models.TbAtor> ConsultarNomeBD(string nome)
        {
            return bd.TbAtor.Where(x => 
                                x.NmAtor.Contains(nome))
                            .ToList();
        }

        public Models.TbAtor AlterarBD(int id, Models.TbAtor novo)
        {
            Models.TbAtor atual = bd.TbAtor.FirstOrDefault(x => x.IdAtor == id);
            
            atual.NmAtor = novo.NmAtor;
            atual.VlAltura = novo.VlAltura;
            atual.DtNascimento = novo.DtNascimento;

            bd.SaveChanges();

            return atual;
        }

        public Models.TbAtor DeletarBD(int id)
        {
            Models.TbAtor ator = bd.TbAtor.FirstOrDefault(x => x.IdAtor == id);

            bd.Remove(ator);

            bd.SaveChanges();

            return ator;
        }
    }
}