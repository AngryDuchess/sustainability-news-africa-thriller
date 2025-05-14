import { X, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

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
  ];

  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      Follow us on all social media platforms:
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
  );
};

export default SocialLinks;
