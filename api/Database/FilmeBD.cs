using System.Collections.Generic;
using System.Linq;

namespace api.Database
{
    public class FilmeDatabase
    {
        Models.apidbContext bd = new Models.apidbContext();
        Models.TbFilme filme = new Models.TbFilme();

        public Models.TbFilme Inserir(Models.TbFilme filme)
        {
            bd.TbFilme.Add(filme);
            bd.SaveChanges();
            return filme;
        }

        public List<Models.TbFilme> ListarBD()
        {
            return bd.TbFilme.ToList();
        }

        public Models.TbFilme ConsultarFilmePorId(int id)
        {
            List<Models.TbFilme> consultar = bd.TbFilme.ToList();

            Models.TbFilme result = consultar.FirstOrDefault(x => x.IdFilme == id);

            return result;
        }

        public void Alterar(int id, Models.TbFilme filme)
        {
            Models.TbFilme registro = bd.TbFilme.FirstOrDefault(x => x.IdFilme == id);

            registro.NmFilme = filme.NmFilme;
            registro.DsGenero = filme.DsGenero;
            registro.VlAvaliacao = filme.VlAvaliacao;
            registro.BtDisponivel = filme.BtDisponivel;
            registro.NrDuracao = filme.NrDuracao;
            registro.DtLancamento = filme.DtLancamento;

            bd.SaveChanges();
        }

        public List<Models.TbFilme> ConsultarFiltro(string nome, string genero)
        {
            List<Models.TbFilme> result = bd.TbFilme.
                                Where(x => x.NmFilme.Contains(nome) && x.DsGenero.Contains(genero))
                            .ToList();

            return result;
        }

        public void Deletar(int id)
        {
            Models.TbFilme atual = bd.TbFilme.FirstOrDefault(x => x.IdFilme == id);

            bd.TbFilme.Remove(atual);
            bd.SaveChanges();
        }
    }
}