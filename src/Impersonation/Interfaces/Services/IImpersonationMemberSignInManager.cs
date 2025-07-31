using Microsoft.AspNetCore.Identity;

namespace Impersonation.Interfaces.Services;

public interface IImpersonationMemberSignInManager
{
    Task<SignInResult> SignInAsync(string userName);
}
