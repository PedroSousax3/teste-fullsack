namespace api.Utils
{
    public class ConvertDiretor
    {
        public Models.TbDiretor Converter(Models.Request.DiretorRequest diretor)
        {
            Models.TbDiretor novo = new Models.TbDiretor();
            
            novo.NmDiretor = diretor.diretor;
            novo.NmDiretor = diretor.diretor;
            novo.DtNascimento = diretor.nascimento;
            novo.IdFilme = diretor.filme;

            return novo;
        }

        public Models.Response.DiretorResponse Converter(Models.TbDiretor diretor)
        {
            Models.Response.DiretorResponse novo = new Models.Response.DiretorResponse();
            
            novo.id = diretor.IdDiretor;
            novo.diretor = diretor.NmDiretor;
            novo.nascimento = diretor.DtNascimento;
            novo.filme = diretor.IdFilme;

            return novo;
        }
    }
}