namespace api.Utils
{
    public class ConvertAtor
    {
        public Models.TbAtor Converter(Models.Request.AtorRequest atual)
        {
            Models.TbAtor novo = new Models.TbAtor();

            novo.NmAtor = atual.nome;
            novo.VlAltura = atual.altura;
            novo.DtNascimento = atual.nascimento;

            return novo;
        }

        public Models.Response.AtorResponse Converter(Models.TbAtor atual)
        {
            Models.Response.AtorResponse novo = new Models.Response.AtorResponse();

            novo.id = atual.IdAtor;
            novo.nome = atual.NmAtor;
            novo.altura = atual.VlAltura;
            novo.nascimento = atual.DtNascimento;

            return novo;
        }
    }
}