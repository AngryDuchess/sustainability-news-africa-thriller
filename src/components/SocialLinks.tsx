import { X, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { IconBrandTiktok } from "@tabler/icons-react";

const SocialLinks = () => {
  const links = [
    {
      name: "Twitter",
      icon: <X size={20} />,
      url: "https://x.com/SNAfricaNews?t=o5DsPwoKDPPo1rVB0e9WnQ&s=09",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/sustainabilitynewsafrica?igsh=MTNwZ3hqYW5hdWJ5ZA==",
    },
    {
      name: "Facebook",
      icon: <Facebook size={20} />,
      url: "https://www.facebook.com/share/16Eyk5gBsX/",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/company/sustainability-news-africa/",
    },
    {
      name: "Youtube",
      icon: <Youtube size={20} />,
      url: "https://youtube.com/@sustainabilitynewsafrica?si=RVyxOY6Zc-qr-Q95",
    },
    {
      name: "TikTok",
      icon: <IconBrandTiktok size={20} />,
      url: "https://www.tiktok.com/@sustainabilitynewsafrica?_r=1&_d=eb5583ac2dc01d&sec_uid=MS4wLjABAAAAlefCD4S5FHz_5s4ajvUF5ZmaStehb1gsTw8LS75asePAiilYOju7q-tj7lUgqkWZ&share_author_id=7503166626503115831&sharer_language=en&source=h5_m&u_code=ek8hl6e1h50kie&timestamp=1747259754&user_id=7503166626503115831&sec_user_id=MS4wLjABAAAAlefCD4S5FHz_5s4ajvUF5ZmaStehb1gsTw8LS75asePAiilYOju7q-tj7lUgqkWZ&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7500144963566585606&share_link_id=b8a539c5-b02b-41a9-9783-41b043a3750e&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5&enable_checksum=1",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-6 text-sm">
      Follow us on all social media platforms:
      <div className="flex items-center justify-center gap-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className="bg-black/30 hover:bg-emerald-900/50 backdrop-blur-sm p-2 rounded-full transition-all duration-200"
            aria-label={`Follow us on ${link.name}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
