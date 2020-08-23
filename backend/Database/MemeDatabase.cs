using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class MemeDatabase
    {
        Models.bd_fullstackContext db = new Models.bd_fullstackContext();

        public Models.TbMemelation Salvar (Models.TbMemelation tb)
        {
            db.Add(tb);
            db.SaveChanges();

            return tb;
        }

        public List<Models.TbMemelation> Listar ()
        {
            return db.TbMemelation.ToList();
        }

        public Models.TbMemelation Deletar (int id)
        {
            Models.TbMemelation tb = 
                db.TbMemelation.FirstOrDefault(x => x.IdMemelation == id);
        
            if (tb != null)
            {
                db.TbMemelation.Remove(tb);
                db.SaveChanges();
            }

            return tb;
        }

        public Models.TbMemelation Alterar (int id, Models.TbMemelation novaTb)
        {
            Models.TbMemelation tb = 
                db.TbMemelation.FirstOrDefault(x => x.IdMemelation == id);

            if (tb != null)
            {
                tb.NmAutor = novaTb.NmAutor;
                tb.DsCategoria = novaTb.DsCategoria;
                tb.DsHashtags = novaTb.DsHashtags;
                tb.BtMaior = novaTb.BtMaior;
                tb.DtInclusao = novaTb.DtInclusao;

                db.SaveChanges();
            }

            return tb;
        }
        
    }
}