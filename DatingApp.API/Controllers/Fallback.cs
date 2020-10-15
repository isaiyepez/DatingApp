using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    public class Fallback : Controller
    { // Notice that we are using CONTROLLER instead of CONTROLLERBASE 
      // because we want the view support
      public IActionResult Index()
      {
          return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot",
          "index.html"), "text/HTML");
      }
        
    }
}