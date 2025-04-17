using Microsoft.AspNetCore.Mvc;
using PersonalWebsite.API.Models;

namespace PersonalWebsite.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfileController : ControllerBase
    {
        [HttpGet]
        public ActionResult<Profile> GetProfile()
        {
            // Dữ liệu mẫu (thay thế bằng thông tin của bạn)
            var profile = new Profile
            {
                Name = "Nguyễn Văn A",
                Title = "Lập Trình Viên Full Stack",
                Bio = "Tôi là một lập trình viên đam mê công nghệ với 5 năm kinh nghiệm phát triển các ứng dụng web. Tôi thích học hỏi những công nghệ mới và áp dụng chúng vào các dự án thực tế.",
                Skills = new List<string>
                {
                    "C#", ".NET Core", "ASP.NET", "SQL Server",
                    "JavaScript", "HTML/CSS", "React", "Angular"
                },
                Experiences = new List<Experience>
                {
                    new Experience
                    {
                        Title = "Senior Developer",
                        Company = "Công ty XYZ",
                        Period = "2020 - Hiện tại",
                        Description = "Phát triển và duy trì các ứng dụng web sử dụng .NET Core và React."
                    },
                    new Experience
                    {
                        Title = "Web Developer",
                        Company = "Công ty ABC",
                        Period = "2018 - 2020",
                        Description = "Xây dựng các trang web responsive và tối ưu hiệu suất."
                    }
                },
                Projects = new List<Project>
                {
                    new Project
                    {
                        Name = "Hệ thống quản lý dự án",
                        Description = "Phát triển hệ thống quản lý dự án nội bộ cho công ty.",
                        Technologies = new List<string> { "C#", ".NET Core", "SQL Server", "React" }
                    },
                    new Project
                    {
                        Name = "Ứng dụng thương mại điện tử",
                        Description = "Xây dựng platform thương mại điện tử với đầy đủ tính năng.",
                        Technologies = new List<string> { "ASP.NET MVC", "Entity Framework", "JavaScript", "Bootstrap" }
                    }
                },
                Contact = new ContactInfo
                {
                    Email = "nguyenvana@example.com",
                    Phone = "0987654321",
                    LinkedIn = "linkedin.com/in/nguyenvana",
                    GitHub = "github.com/nguyenvana"
                }
            };

            return Ok(profile);
        }
    }
}