using Microsoft.AspNetCore.Identity;
using PackageStarter.Extensions;
using PackageStarter.Interfaces.Services;
using Umbraco.Cms.Core.Security;
using Umbraco.Cms.Web.Common.Security;

namespace PackageStarter.Services;

public class ImpersonationMemberSignInManager : IImpersonationMemberSignInManager
{
    private readonly IBackOfficeSecurityAccessor _backOfficeSecurityAccessor;
    private readonly IMemberSignInManager _memberSignInManager;
    private readonly IMemberManager _memberManager;

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
}
