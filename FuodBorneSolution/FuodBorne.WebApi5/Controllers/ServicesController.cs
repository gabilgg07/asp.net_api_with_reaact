using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using FuodBorne.Application.Models.DataContext;
using FuodBorne.Application.Models.Entity;
using FuodBorne.Application5.Models.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Swashbuckle.AspNetCore.Annotations;

namespace FuodBorne.WebApi5.Controllers
{
    [Route("api/[controller]")]
    public class ServicesController : ControllerBase
    {
        readonly FuodBorneDbContext db;
        readonly IHttpContextAccessor ctx;
        readonly IMapper mapper;

        public ServicesController(FuodBorneDbContext db, IHttpContextAccessor ctx, IMapper mapper)
        {
            this.db = db;
            this.ctx = ctx;
            this.mapper = mapper;
        }

        [HttpGet("all")]
        [SwaggerOperation("All Services (with deleteds)")]
        public async Task<IActionResult> GetAll()
        {
            var data = await db.Services.ToListAsync();
            return Ok(data);
        }

        [HttpGet]
        [SwaggerOperation("All Services")]
        public async Task<IActionResult> Get()
        {
            //var data = await db.Services
            //    .Where(d=> d.DeletedDate == null)
            //    //projection -> gelen data proyeksiyalanir ki, geriye ne qayitsin deye
            //    .Select(s=>new ServiceDto
            //    {
            //        Id= s.Id,
            //        CategoryId = s.CategoryId,
            //        Name = s.Name,
            //        Description = s.Description,
            //        CreatedDate = s.CreatedDate,
            //        CreatedByUserId = s.CreatedByUserId,
            //        ImageUrl = $"{ctx.GetHostName()}/uploads/images/{s.ImageUrl}"
            //    })
            //    .ToListAsync();

            var data = await db.Services.Where(d => d.DeletedDate == null).ToListAsync();
            var dto = mapper.Map<List<ServiceDto>>(data);

            return Ok(dto);
        }

        [HttpGet("{id:int:min(1)}")]
        [SwaggerOperation("Service by id")]
        public async Task<IActionResult> Get(int id)
        {
            var data = await db.Services.FirstOrDefaultAsync(d=>d.Id == id && d.DeletedDate == null);
            var dto = mapper.Map<ServiceDto>(data);

            return Ok(dto);
        }

        [HttpPost]
        [SwaggerOperation("Add Service")]
        public async Task<IActionResult> Add([FromBody]Service model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            model.CreatedByUserId = 1; // get user id from context
            db.Services.Add(model);

            await db.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new
            {
                id = model.Id
            }, model); 
        }

        [HttpPut("{id:int:min(1)}")]
        [SwaggerOperation("Edit Service")]
        public async Task<IActionResult> Edit(int id, [FromBody]Service model)
        {
            if (id != model.Id)
            {
                ModelState.AddModelError("Id", "Entity key is not same!");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var entity = await db.Services.FirstOrDefaultAsync(e => e.Id == id && e.DeletedDate == null);

            if (entity == null)
                return NotFound();

            entity.Name = model.Name;
            entity.Description = model.Description;
            entity.CategoryId = model.CategoryId;

            //db.Entry(entity).State = EntityState.Modified;
            await db.SaveChangesAsync();

            return Ok(entity);

        }

        [HttpDelete("{id:int:min(1)}")]
        [SwaggerOperation("Delete Service")]
        public async Task<IActionResult> Remove(int id)
        { 
            var entity = await db.Services.FirstOrDefaultAsync(e => e.Id == id && e.DeletedDate == null);

            if (entity == null)
                return NotFound();

            entity.DeletedByUserId = 1;  // get user id from context
            entity.DeletedDate = DateTime.Now;

            await db.SaveChangesAsync();

            return NoContent();
        }
    }
}

