namespace api.Utils
{
    public class ConvertFilme
    {
        Models.apidbContext ctx = new Models.apidbContext();

        public Models.TbFilme Converter(Models.Request.FilmeRequest filme)
        {
            Models.TbFilme novo = new Models.TbFilme();

            novo.NmFilme = filme.filme;
            novo.DsGenero = filme.genero;
            novo.VlAvaliacao = filme.avaliacao;
            novo.BtDisponivel= filme.disponivel;
            novo.NrDuracao = filme.duracao;
            novo.DtLancamento = filme.lancamento;

            return novo;
        }

        public Models.Response.FilmeResponse Converter(Models.TbFilme filme)
        {
            Models.Response.FilmeResponse novo = new Models.Response.FilmeResponse();

            novo.id = filme.IdFilme;
            novo.filme = filme.NmFilme;
            novo.genero = filme.DsGenero;
            novo.avaliacao = filme.VlAvaliacao;
            novo.disponivel = filme.BtDisponivel;
            novo.duracao = filme.NrDuracao;
            novo.lancamento = filme.DtLancamento;

            return novo;
        }     
    }
}