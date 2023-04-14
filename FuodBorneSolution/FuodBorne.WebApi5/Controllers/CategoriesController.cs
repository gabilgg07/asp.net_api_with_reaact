using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FuodBorne.Application.Models.DataContext;
using FuodBorne.Application.Models.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Swashbuckle.AspNetCore.Annotations;

namespace FuodBorne.WebApi5.Controllers
{
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        readonly FuodBorneDbContext db;

        public CategoriesController(FuodBorneDbContext db)
        {
            this.db = db;
        }

        [HttpGet("all")]
        [SwaggerOperation("All Categories (with deleteds)")]
        public async Task<IActionResult> GetAll()
        {
            var data = await db.Categories.ToListAsync();
            return Ok(data);
        }

        [HttpGet]
        [SwaggerOperation("All Categories")]
        public async Task<IActionResult> Get()
        {
            var data = await db.Categories.Where(d => d.DeletedDate == null).ToListAsync();
            return Ok(data);
        }

        [HttpGet("{id:int:min(1)}")]
        [SwaggerOperation("Category by id")]
        public async Task<IActionResult> Get(int id)
        {
            var data = await db.Categories.FirstOrDefaultAsync(d => d.Id == id && d.DeletedDate == null);
            return Ok(data);
        }

        [HttpPost]
        [SwaggerOperation("Add Category")]
        public async Task<IActionResult> Add([FromBody] Category model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            model.CreatedByUserId = 1; // get user id from context
            db.Categories.Add(model);

            await db.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new
            {
                id = model.Id
            }, model);
        }

        [HttpPut("{id:int:min(1)}")]
        [SwaggerOperation("Edit Category")]
        public async Task<IActionResult> Edit(int id, [FromBody] Category model)
        {
            if (id != model.Id)
            {
                ModelState.AddModelError("Id", "Entity key is not same!");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var entity = await db.Categories.FirstOrDefaultAsync(e => e.Id == id && e.DeletedDate == null);

            if (entity == null)
                return NotFound();

            entity.Name = model.Name;

            await db.SaveChangesAsync();

            return Ok(entity);

        }

        [HttpDelete("{id:int:min(1)}")]
        [SwaggerOperation("Delete Category")]
        public async Task<IActionResult> Remove(int id)
        {
            var entity = await db.Categories.FirstOrDefaultAsync(e => e.Id == id && e.DeletedDate == null);

            if (entity == null)
                return NotFound();

            entity.DeletedByUserId = 1;  // get user id from context
            entity.DeletedDate = DateTime.Now;

            await db.SaveChangesAsync();

            return NoContent();
        }
    }
}

