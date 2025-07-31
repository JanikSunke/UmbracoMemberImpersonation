using Microsoft.Extensions.DependencyInjection;
using PackageStarter.Interfaces.Services;
using PackageStarter.Services;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;

namespace PackageStarter.Composers;

public class ServicesComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.Services.AddScoped<IImpersonationMemberSignInManager, ImpersonationMemberSignInManager>();
    }
}
