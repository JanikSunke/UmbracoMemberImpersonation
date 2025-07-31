using Asp.Versioning;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PackageStarter.Interfaces.Services;

namespace PackageStarter.Controllers;

[ApiVersion("1.0")]
[ApiExplorerSettings(GroupName = "Impersonation")]
public class ImpersonationApiController : ImpersonationApiControllerBase
{
    private readonly IImpersonationMemberSignInManager _impersonationMemberSignInManager;

    public ImpersonationApiController(IImpersonationMemberSignInManager impersonationMemberSignInManager) =>
        _impersonationMemberSignInManager = impersonationMemberSignInManager;

    [HttpGet("impersonate/{memberKey}")]
    [ProducesResponseType<string>(StatusCodes.Status200OK)]
    public async Task<ActionResult> Impersonate(string memberKey)
    {
        var result = await _impersonationMemberSignInManager.SignInAsync(memberKey);

        if (result.Succeeded)
        {
            return Ok("Successfully impersonated");
        }

        return BadRequest("Failed to impersonate");
    }
}
