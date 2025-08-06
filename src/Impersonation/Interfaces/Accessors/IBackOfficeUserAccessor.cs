using System.Security.Claims;

namespace Impersonation.Interfaces.Accessors;

public interface IBackofficeUserAccessor
{
    ClaimsIdentity? BackofficeUser { get; }
}
