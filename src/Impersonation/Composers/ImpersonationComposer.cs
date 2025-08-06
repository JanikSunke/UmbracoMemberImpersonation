using Impersonation.Interfaces.Accessors;
using Impersonation.Interfaces.Services;
using Impersonation.NotificationHandlers;
using Impersonation.Services;
using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Notifications;

namespace Impersonation.Composers;

public class ImpersonationComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.Services.AddScoped<IImpersonationMemberSignInManager, ImpersonationMemberSignInManager>();
        builder.Services.AddScoped<IBackofficeUserAccessor, BackofficeUserAccessor>();
        builder.AddNotificationHandler<UserLogoutSuccessNotification, UserLogoutMemberNotification>();
    }
}
