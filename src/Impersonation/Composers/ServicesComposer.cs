using Impersonation.Interfaces.Accessors;
using Impersonation.Interfaces.Services;
using Impersonation.Services;
using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;

namespace Impersonation.Composers;

public class ServicesComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.Services.AddScoped<IImpersonationMemberSignInManager, ImpersonationMemberSignInManager>();
        builder.Services.AddScoped<IBackofficeUserAccessor, BackofficeUserAccessor>();
    }
}
