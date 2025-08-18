using System.Text.Json;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Services;
using UmbracoMemberImpersonation.TestSite.Notification.Data;
using File = System.IO.File;

namespace UmbracoMemberImpersonation.TestSite.Notification;

public class SeedMembersOnStartup : INotificationHandler<UmbracoApplicationStartedNotification>
{
    private readonly ILogger<SeedMembersOnStartup> _logger;
    private readonly IMemberService _memberService;

    public SeedMembersOnStartup(IMemberService memberService, ILogger<SeedMembersOnStartup> logger)
    {
        _memberService = memberService;
        _logger = logger;
    }

    public void Handle(UmbracoApplicationStartedNotification notification)
    {
        var members = _memberService.GetAllMembers();
        if (members.Any())
        {
            return;
        }

        var membersJson = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Data", "members.json"));
        if (string.IsNullOrWhiteSpace(membersJson))
        {
            _logger.LogError("Failed to fetch data from members.json");
            return;
        }

        var membersList = JsonSerializer.Deserialize<IEnumerable<MemberJson>>(membersJson, new JsonSerializerOptions(JsonSerializerDefaults.Web));
        if (membersList == null)
        {
            _logger.LogError("Failed to deserialize members.json");
            return;
        }

        var newMembers = new List<IMember>();

        foreach (var member in membersList)
        {
            var newMember =
                _memberService.CreateMember(
                    member.Username,
                    member.Email,
                    member.Name,
                    Constants.Conventions.MemberTypes.DefaultAlias
                );
            newMember.IsApproved = true;
            newMembers.Add(newMember);
        }

        _memberService.Save(newMembers);
    }
}
