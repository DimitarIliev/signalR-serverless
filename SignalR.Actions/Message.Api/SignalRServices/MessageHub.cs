using Microsoft.AspNetCore.SignalR;

namespace Message.Api.SignalRServices
{
    public class MessageHub : Hub
    {
        // Invoke from Clients to send messages
        public async Task SendMessage(string message)
        {
            await Clients.All.SendAsync("broadcast", message);
        }
    }
}
