using common;
using DiscordWebhook;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wServer.networking.webhooks
{
    public class Webhooks
    {
        public static Webhook realmWebhook = new Webhook("https://discordapp.com/api/webhooks/798929869282344970/I3weXS7cwSh7aXCK_Cpt7JHRkHYKKAmhhwhmlWycTfBVh8cG6soKgOlsEUQZ4ZdihM3_");
        public static Webhook cmdWebhook = new Webhook("https://discordapp.com/api/webhooks/798929764454760458/sNsGIVnUl_XK6DSKBT8lY3rNEMDVklZDt3HKnU9GtVMK9lIGeo9KcoInqr0SzTGbEZ_f");
        public static Webhook banWebhook = new Webhook("https://discordapp.com/api/webhooks/825846040246353920/EqukeUUJ0D-DRlt4uQC7HU7xoFo4YrpNeJkrajs2Bz_Zp_DL-1d8fMfJgHE0xoAeCdle");
        public static Webhook unbanWebook = new Webhook("https://discordapp.com/api/webhooks/825845624871059456/A1P3IrEyt3zA7oXp1cFkWMOOHqhY4EPUf3lKY8eshddgHPoTM79TvrFCeLrapC2zFBZs");
        public static Webhook muteWebook = new Webhook("https://discordapp.com/api/webhooks/825853433830572092/z5uGvB8Ln7xZosxbolB_C484izmZWoFJ_tJwfQge0RLAtYaP1T6rQMV4IDhvbOxGgFoH");
        public static Webhook lootWebhook = new Webhook("https://discordapp.com/api/webhooks/825855642357989386/TovCZBoVwT0Dq69tTZAX2svMoPYx5rhEJIrZ5m6H_bt17JzE4lyiLixYqasezzKtkjFU");
        public static Webhook tradeLogWebhook = new Webhook("https://discord.com/api/webhooks/831703256542478397/a4whr_Igbk8wOa3Ei4AIXl-Uin8BTkhD_IQgAIV9F3NssX1vCOvXTptTmJ73xhrAUdQW"); 
        public static Webhook loginLogWebhook = new Webhook("https://discord.com/api/webhooks/834013051967111209/TMPGBqnZSoLPGzJT6csuvT8ATW7FP8e56KKGWGkYF10w5zGe_s4a8y9pAiGkayyuSRwT");
        public static Webhook announceWebhook = new Webhook("https://discord.com/api/webhooks/837756124047474719/s3S2yty7Plv3WLiTdNDZL3JFYQJLSzTgluL9yucMzAUYijWx64_eaGLzBpX7yGiGmrnj");

        public static void AnnounceOnDiscord(string name, string content, string embedsString)
        {
            Embed[] embeds = {
                new Embed
                {
                    title = "",
                    description = embedsString
                }
            };
            announceWebhook.PostData(new WebhookObject()
            {
                username = name,
                content = "<@&837755607540301854>",
                embeds = embeds
            });
        }
        public static void SendToDiscordAsLoginLog(string name, string content, string embedsString)
        {
            Embed[] embeds = {
                new Embed
                {
                    title = "",
                    description = embedsString
                }
            };
            loginLogWebhook.PostData(new WebhookObject()
            {
                username = name,
                content = content,
                embeds = embeds
            });
        }
        public static void SendToDiscordAsTradeLog(string name, string content, string embedsString)
        {
            Embed[] embeds = {
                new Embed
                {
                    title = "",
                    description = embedsString
                }
            };
            tradeLogWebhook.PostData(new WebhookObject()
            {
                username = name,
                content = content,
                embeds = embeds
            });
        }
        public static void SendToDiscordAsLootLog(string name, string type, string embedsString, int color, string bagURL)
        {
            Embed[] embeds = {
                new Embed
                {
                    thumbnail = new Thumbnail()
                    {
                        url = bagURL
                    },
                    fields = new Field[]
                    {
                        new Field()
                        {
                            name = type+" loot",
                            value = embedsString,
                            inline = true
                        }
                    },
                    color = color
                }
            };
            lootWebhook.PostData(new WebhookObject()
            {
                username = name,
                embeds = embeds
            });
        }
        public static void SendToDiscordAsMuteLog(string name, string content, string embedsString)
        {
            Embed[] embeds = {
                new Embed
                {
                    title = "",
                    description = embedsString
                }
            };
            muteWebook.PostData(new WebhookObject()
            {
                username = name,
                content = content,
                embeds = embeds
            });
        }
        public static void SendToDiscordAsUnbanLog(string name, string content, string embedsString)
        {
            Embed[] embeds = {
                new Embed
                {
                    title = "",
                    description = embedsString
                }
            };
            unbanWebook.PostData(new WebhookObject()
            {
                username = name,
                content = content,
                embeds = embeds
            });
        }
        public static void SendToDiscordAsBanLog(string name, string content, string embedsString)
        {
            Embed[] embeds = {
                new Embed
                {
                    title = "",
                    description = embedsString
                }
            };
            banWebhook.PostData(new WebhookObject()
            {
                username = name,
                content = content,
                embeds = embeds
            });
        }
        public static void SendToDiscordAsRealmAnnounce(string name, string content, string embedsString)
        {
            Embed[] embeds = {
                new Embed
                {
                    title = "",
                    description = embedsString
                }
            };
            realmWebhook.PostData(new WebhookObject()
            {
                username = name,
                content = content,
                embeds = embeds
            });
        }
        public static void SendToDiscordAsCommandLog(string name, string content, string embedsString)
        {
            Embed[] embeds = {
                new Embed
                {
                    title = "",
                    description = embedsString
                }
            };
            cmdWebhook.PostData(new WebhookObject()
            {
                username = name,
                content = content,
                embeds = embeds
            });
        }
    }
}
