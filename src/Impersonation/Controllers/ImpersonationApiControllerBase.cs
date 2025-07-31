using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Api.Common.Attributes;
using Umbraco.Cms.Web.Common.Authorization;
using Umbraco.Cms.Web.Common.Routing;

namespace Impersonation.Controllers
{
    [ApiController]
    [BackOfficeRoute("/backoffice/impersonation/v{version:apiVersion}")]
    [Authorize(Policy = AuthorizationPolicies.SectionAccessMembers)]
    [MapToApi(Constants.ApiName)]
    public class ImpersonationApiControllerBase : ControllerBase
    {
    }
}
