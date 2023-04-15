using FuodBorne.Application.Models.Entity;
using FuodBorne.Application5.Extensions;
using FuodBorne.Application5.Models.Dto;
using Microsoft.AspNetCore.Http;

namespace FuodBorne.Application5.Mapper
{
    public class ServiceProfile: FoudBorneProfile
    {
		public ServiceProfile(IHttpContextAccessor ctx)
			:base(ctx)
		{
			CreateMap<Service, ServiceDto>()
				.ForMember(dest => dest.ImageUrl,
				src => src.MapFrom(m => $"{ctx.GetHostName()}/uploads/images/{m.ImageUrl}"));
		}
		
	}
}

