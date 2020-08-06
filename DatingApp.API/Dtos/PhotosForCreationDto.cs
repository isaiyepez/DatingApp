using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Dtos
{
    public class PhotosForCreationDto
    {       
        public string Url { get; set; }
        public IFormFile File { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }

        // This public ID will be returned by cloudinary
        public string PublicId { get; set; }
    
        public PhotosForCreationDto()
        {
            DateAdded = DateTime.Now;
        }

    }
}
