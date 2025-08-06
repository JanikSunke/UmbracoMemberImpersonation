using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Web.Common.Security;

namespace Impersonation.NotificationHandlers;

public class UserLogoutMemberNotification : INotificationHandler<UserLogoutSuccessNotification>
{
    private readonly IMemberSignInManager _memberSignInManager;

    public UserLogoutMemberNotification(IMemberSignInManager memberSignInManager) =>
        _memberSignInManager = memberSignInManager;

    public void Handle(UserLogoutSuccessNotification notification)
    {
        _memberSignInManager.SignOutAsync();
    }
}
