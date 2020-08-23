using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.Business
{
    public class FilmeRN
    {
        Database.FilmeDatabase funcao = new Database.FilmeDatabase();
        Models.apidbContext bd = new Models.apidbContext();
        public Models.TbFilme Inserir(Models.TbFilme dados)
        {
            if(dados.NmFilme == string.Empty)
                throw new ArgumentException("Campo nome é obrigatorio");
            if(dados.VlAvaliacao < 0)
                throw new ArgumentException("avaliação não pode ser menor que zero");
            if(dados.NrDuracao < 0)
                throw new ArgumentException("Duração não pode ser menor que zero");
            
            dados = funcao.Inserir(dados);
                        
            return dados; 
        }
        
        public List<Models.TbFilme> ListarRN()
        {
            return funcao.ListarBD();
        }

        public Models.TbFilme ConsultaFilmePorId(int idfilme)
        {
            if(funcao.ListarBD().Count() <= 0)
                throw new ArgumentException("tabela não possui registros para serem consultados");

            return funcao.ConsultarFilmePorId(idfilme);
        }

        public List<Models.TbFilme> ConsultarFiltro(string nome, string genero)
        {
            return funcao.ConsultarFiltro(nome, genero);
        }

        public void  Alterar(int id, Models.TbFilme dados)
        {
            if(dados.NmFilme == string.Empty)
                throw new ArgumentException("Campo nome é obrigatorio");
            if(dados.VlAvaliacao < 0)
                throw new ArgumentException("avaliação não pode ser menor que zero");
            if(dados.NrDuracao < 0)
                throw new ArgumentException("Duração não pode ser menor que zero");
            if(dados.IdFilme <= 0 && dados.IdFilme.ToString().Length <= 0)
                throw new ArgumentException("Campo IdFilme é obrigatório para realizar alteração");
            
            funcao.Alterar(id, dados);
        }

        public void Deletar(int id)
        {
            if(!bd.TbFilme.Any(x => x.IdFilme == id))
                throw new ArithmeticException("Filme não cadastrado");

            funcao.Deletar(id);
        }
    }
}