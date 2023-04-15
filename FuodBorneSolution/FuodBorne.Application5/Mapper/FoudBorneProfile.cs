using AutoMapper;
using Microsoft.AspNetCore.Http;

namespace FuodBorne.Application5.Mapper
{
    public class FoudBorneProfile:Profile
	{
		protected readonly IHttpContextAccessor ctx;

        public FoudBorneProfile(IHttpContextAccessor ctx)
		{
			this.ctx = ctx;
		}
	}
}

