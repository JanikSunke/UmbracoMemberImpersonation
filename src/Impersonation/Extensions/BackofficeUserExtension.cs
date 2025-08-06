using Umbraco.Cms.Core.Models.Membership;

namespace Impersonation.Extensions;

public static class BackofficeUserExtension
{
    public static bool IsAllowedToImpersonate(this IUser identity)
    {
        return IsLoggedIntoUmbraco(identity) && HasAccessToMemberSection(identity);
    }

    public static bool IsLoggedIntoUmbraco(this IUser user)
    {
        return user is { IsApproved: true, IsLockedOut: false };
    }

    private static bool HasAccessToMemberSection(this IUser user)
    {
        return user.AllowedSections.Contains("member");
    }
}
