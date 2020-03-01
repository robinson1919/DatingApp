using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DatingApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        // private readonly DataContext _context;
        // public ValuesController(DataContext context)
        // {
        //     var info = _context = context;
        // }

        // [HttpGet]
        // public IActionResult GetValues()
        // {
        //     var values = _context.Values.ToList();

        //     return Ok(values);
        // }

        // [HttpGet("{id}")]
        // public IActionResult GetValues(int id)
        // {
        //     var value = _context.Values.FirstOrDefault(x => x.id == id);

        //     return Ok(value);
        // }
        // private static readonly string[] Summaries = new[]
        // {
        //     "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        // };

        // private readonly ILogger<WeatherForecastController> _logger;
        // private readonly DataContext context;

        // public WeatherForecastController(ILogger<WeatherForecastController> logger)
        // {
        //     _logger = logger;
        // }

        // [HttpGet]
        // public IEnumerable<WeatherForecast> Get()
        // {
        //     var rng = new Random();
        //     return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        //     {
        //         Date = DateTime.Now.AddDays(index),
        //         TemperatureC = rng.Next(-20, 55),
        //         Summary = Summaries[rng.Next(Summaries.Length)]
        //     })
        //     .ToArray();
        // }
    }
}
