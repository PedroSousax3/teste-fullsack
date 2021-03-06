using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args)
        {
            string port = Environment.GetEnvironmentVariable("PORT");
            return Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    #if DEBUG
                        webBuilder.UseStartup<Startup>();
                    #else 
                         webBuilder.UseStartup<Startup>()
                                 .UseUrls("http://*:" + port);
                    #endif
                });
        }
    }
}
