using Message.Api.SignalRServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace Message.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MessageController : ControllerBase
    {
        private readonly IHubContext<MessageHub> _hub;
        private readonly ILogger<MessageController> _logger;

        public MessageController(IHubContext<MessageHub> hub, ILogger<MessageController> logger)
        {
            _hub = hub;
            _logger = logger;
        }

        [HttpPost(Name = "SendMessage")]
        public async Task SendMessage([FromBody] string message)
        {
            _logger.LogInformation("Sending message to SignalR");

            await _hub.Clients.All.SendAsync("broadcast", message);

            _logger.LogInformation("Message sent to SignalR");
        }
    }
}
