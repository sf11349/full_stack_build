using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace UserManagementAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private static List<User> Users = new List<User>
         {
            new User { FirstName = "David", LastName = "Jones", JobTitle = "Developer", Phone = "07789 543768", Email = "djones@test.com" },
            new User { FirstName = "Lisa", LastName = "Holmes", JobTitle = "Development Lead", Phone = "07756 896512", Email = "lholmes@test.com" },
            new User { FirstName = "Alex", LastName = "Smith", JobTitle = "QA Lead", Phone = "07723 743289", Email = "asmith@test.com" },
            new User { FirstName = "Kieran", LastName = "James", JobTitle = "Developer", Phone = "07898 654123", Email = "kjames@test.com" },
            new User { FirstName = "Gavin", LastName = "Miles", JobTitle = "UX Designer", Phone = "07881 987554", Email = "gmiles@test.com" },
            new User { FirstName = "Kathy", LastName = "Smith", JobTitle = "UX Lead", Phone = "07765 332287", Email = "ksmith@test.com" },
            new User { FirstName = "Phil", LastName = "Walker", JobTitle = "Senior QA", Phone = "07889 984447", Email = "pwalker@test.com" },
            new User { FirstName = "Rebecca", LastName = "Bates", JobTitle = "Product Development Manager", Phone = "07798 548733", Email = "rbates@test.com" },
            new User { FirstName = "Hayley", LastName = "Walker-Smith", JobTitle = "Developer", Phone = "07888 932145", Email = "hwalker@test.com" },
            new User { FirstName = "Alexis", LastName = "Crawley", JobTitle = "DevOps Engineer", Phone = "07778 667412", Email = "acrawley@test.com" },
            new User { FirstName = "David", LastName = "Gold", JobTitle = "DevOps Engineer", Phone = "07768 479563", Email = "dgold@test.com" },
            new User { FirstName = "Phillipa", LastName = "Walker", JobTitle = "QA Lead", Phone = "07775 357951", Email = "pwalker2@test.com" }
        };

        [HttpGet]
        public IEnumerable<User> Get([FromQuery] string query)
        {
            if (string.IsNullOrEmpty(query))
                return Users;

            return Users.Where(u => u.FirstName.StartsWith(query, System.StringComparison.OrdinalIgnoreCase) ||
                                     u.LastName.StartsWith(query, System.StringComparison.OrdinalIgnoreCase));
        }

        [HttpPost]
        public IActionResult Post([FromBody] User user)
        {
            Users.Add(user);
            return Ok(user);
        }
    }
}
