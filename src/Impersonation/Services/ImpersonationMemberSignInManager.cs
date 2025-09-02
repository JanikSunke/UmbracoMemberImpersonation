using Impersonation.Extensions;
using Impersonation.Interfaces.Services;
using Microsoft.AspNetCore.Identity;
using Umbraco.Cms.Core.Security;
using Umbraco.Cms.Web.Common.Security;

namespace Impersonation.Services;

public class ImpersonationMemberSignInManager : IImpersonationMemberSignInManager
{
    private readonly IBackOfficeSecurityAccessor _backOfficeSecurityAccessor;
    private readonly IMemberManager _memberManager;
    private readonly IMemberSignInManager _memberSignInManager;

    public ImpersonationMemberSignInManager(IMemberSignInManager memberSignInManager,
        IBackOfficeSecurityAccessor backOfficeSecurityAccessor, IMemberManager memberManager)
    {
        _memberSignInManager = memberSignInManager;
        _backOfficeSecurityAccessor = backOfficeSecurityAccessor;
        _memberManager = memberManager;
    }

    public async Task<SignInResult> SignInAsync(string userId)
    {
        var user = await _memberManager.FindByIdAsync(userId);

        if (user == null)
        {
            return SignInResult.Failed;
        }

        if (_backOfficeSecurityAccessor.BackOfficeSecurity?.CurrentUser?.IsAllowedToImpersonate() != true)
        {
            return SignInResult.Failed;
        }

        await _memberSignInManager.SignInAsync(user, false);
        return SignInResult.Success;
    }

    public async Task<SignInResult> SignOutAsync()
    {
        if (_backOfficeSecurityAccessor.BackOfficeSecurity?.CurrentUser?.IsAllowedToImpersonate() != true)
        {
            return SignInResult.Failed;
        }

        await _memberSignInManager.SignOutAsync();
        return SignInResult.Success;
    }
}
