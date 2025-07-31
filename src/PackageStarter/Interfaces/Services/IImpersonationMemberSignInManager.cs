using Microsoft.AspNetCore.Identity;

namespace PackageStarter.Interfaces.Services;

public interface IImpersonationMemberSignInManager
{
    Task<SignInResult> SignInAsync(string userName);
}
