using System;

namespace DatingApp.API.Models
{
    public class Message
    {
        public int Id { get; set; }
        public int SenderId { get; set; }
        public User Sender { get; set; }
        public int RecipientId { get; set; }
        public User Recipient { get; set; }
        public string Content { get; set; }
        public bool IsRead { get; set; }

        //For date read, instead of the default value we prefer to have it nullable
        public DateTime? DateRead { get; set; }
        public DateTime MessageSent { get; set; }

        // If sender deleted and recipient deleted are true, we will delete 
        // the message. Otherwhise, it will be only hidden.
        public bool SenderDeleted { get; set; }
        public bool RecipientDeleted { get; set; }
    }
}