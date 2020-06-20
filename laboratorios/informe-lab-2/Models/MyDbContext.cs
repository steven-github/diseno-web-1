using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace informe_lab_2.Models
{
    public class MyDbContext : DbContext
    {
        public DbSet<UserAccount> userAccount { get; set; }
    }
}