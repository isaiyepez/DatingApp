namespace DatingApp.API.Models
{
    public class Like
    {
        // User ID of the one who gives a like
        public int LikerId { get; set; }

        // User ID of the one who receives a like
        public int LikeeId { get; set; }
        public virtual User Liker { get; set; }
        public virtual User Likee { get; set; }
    }
}