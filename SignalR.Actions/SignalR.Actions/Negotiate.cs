using System.IO;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Enums;
using Microsoft.Azure.WebJobs.Extensions.SignalRService;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;

namespace SignalR.Actions
{
    public class Negotiate
    {
        private readonly ILogger<Negotiate> _logger;

        public Negotiate(ILogger<Negotiate> log)
        {
            _logger = log;
        }

        // Change Azure SignalR mode to Serverless!!!
        [FunctionName("negotiate")]
        public static async Task<IActionResult> Run(
                    [HttpTrigger(AuthorizationLevel.Function, "post", Route = "negotiate")] HttpRequest req,
                    [SignalRConnectionInfo(HubName = "broadcast")] SignalRConnectionInfo signalRConnectionInfo,
                    ILogger log)
        {
            return (ActionResult)new OkObjectResult(signalRConnectionInfo);
        }
    }
}

