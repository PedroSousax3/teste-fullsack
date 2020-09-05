using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_comentario")]
    public partial class TbComentario
    {
        [Key]
        [Column("id_comentario")]
        public int IdComentario { get; set; }
        [Column("id_memelation")]
        public int IdMemelation { get; set; }
        [Column("ds_comentario", TypeName = "varchar(255)")]
        public string DsComentario { get; set; }
        [Column("dt_postado", TypeName = "datetime")]
        public DateTime DtPostado { get; set; }

        [ForeignKey(nameof(IdMemelation))]
        [InverseProperty(nameof(TbMemelation.TbComentario))]
        public virtual TbMemelation IdMemelationNavigation { get; set; }
    }
}
