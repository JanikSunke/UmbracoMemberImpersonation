using System.Security.Claims;
using Umbraco.Cms.Core.Models.Membership;
using Umbraco.Extensions;

namespace PackageStarter.Extensions;

public static class BackofficeUserExtension
{
    public static bool IsAllowedToImpersonate(this IUser identity)
    {
        return IsLoggedIntoUmbraco(identity) && HasAccessToMemberSection(identity);
    }

    private static bool IsLoggedIntoUmbraco(this IUser user)
    {
        return user is { IsApproved: true, IsLockedOut: false };
    }

    private static bool HasAccessToMemberSection(this IUser user)
    {
        return user.AllowedSections.Contains("member");
    }
}
