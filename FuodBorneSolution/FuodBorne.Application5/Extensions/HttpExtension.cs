using System;
using Microsoft.AspNetCore.Http;

namespace FuodBorne.Application5.Extensions
{
    public static partial class Extension
    {
        public static string GetHostName(this IHttpContextAccessor ctx)
        {
            return $"{ctx.HttpContext.Request.Scheme}://{ctx.HttpContext.Request.Host.Value}";

        }
    }
}

