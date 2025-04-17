namespace PersonalWebsite.API.Models
{
    public class Profile
    {
        public string Name { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Bio { get; set; } = string.Empty;
        public List<string> Skills { get; set; } = new List<string>();
        public List<Experience> Experiences { get; set; } = new List<Experience>();
        public List<Project> Projects { get; set; } = new List<Project>();
        public ContactInfo Contact { get; set; } = new ContactInfo();
    }

    public class Experience
    {
        public string Title { get; set; } = string.Empty;
        public string Company { get; set; } = string.Empty;
        public string Period { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
    }

    public class Project
    {
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public List<string> Technologies { get; set; } = new List<string>();
    }

    public class ContactInfo
    {
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string LinkedIn { get; set; } = string.Empty;
        public string GitHub { get; set; } = string.Empty;
    }
}
