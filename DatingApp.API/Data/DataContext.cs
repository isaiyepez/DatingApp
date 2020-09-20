using Microsoft.EntityFrameworkCore;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Like> Likes { get; set; }
        public DbSet<Message> Messages { get; set; }

        protected override void OnModelCreating(ModelBuilder builder){
            // Defining a composite primary key
            builder.Entity<Like>()
            .HasKey(K => new {K.LikerId, K.LikeeId});

            builder.Entity<Like>()
            .HasOne(u => u.Likee) // One likee, many likers
            .WithMany(u => u.Likers)
            .HasForeignKey(u => u.LikeeId)
            .OnDelete(DeleteBehavior.Restrict); // If we had cascade, we will delete users.

             builder.Entity<Like>()
            .HasOne(u => u.Liker) // One liker, many likees. And that is how you "simulate" many-to-many in EF
            .WithMany(u => u.Likees)
            .HasForeignKey(u => u.LikerId)
            .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Message>()
            .HasOne(u => u.Sender)
            .WithMany(m => m.MessagesSent)
            .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Message>()
            .HasOne(u => u.Recipient)
            .WithMany(m => m.MessagesReceived)
            .OnDelete(DeleteBehavior.Restrict);

        }
    }
}