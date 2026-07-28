import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { profile } from "../data/content";
import { PhoneIcon, MailIcon, WhatsappIcon, PinIcon } from "../components/icons";
import "./Contact.css";

export default function Contact() {
  const waLink = `https://wa.me/${profile.whatsappNumber}`;

  const items = [
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:+${profile.whatsappNumber}`,
      icon: <PhoneIcon />,
    },
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <MailIcon />,
    },
    {
      label: "WhatsApp",
      value: profile.phone,
      href: waLink,
      icon: <WhatsappIcon />,
      external: true,
    },
    {
      label: "Location",
      value: profile.location,
      icon: <PinIcon />,
    },
  ];

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Aisyah Mahla Nurussalamah for event coordination and public relations opportunities."
      />

      <section className="page-header container">
        <span className="eyebrow">Contact</span>
        <h1>Let's plan something great</h1>
        <p className="lede" style={{ margin: "0 auto" }}>
          Reach out directly via phone, email, or WhatsApp — I'm based in Bandung, West
          Java and happy to discuss opportunities near or far.
        </p>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {items.map((item, i) => {
              const Tag = item.href ? "a" : "div";
              return (
                <Reveal
                  as={Tag}
                  key={item.label}
                  className="card contact-card"
                  delay={i * 80}
                  {...(item.href
                    ? {
                        href: item.href,
                        ...(item.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {}),
                      }
                    : {})}
                >
                  <span className="contact-icon">{item.icon}</span>
                  <span className="contact-text">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
