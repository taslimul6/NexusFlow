import { footerColumns, socialLinks } from "../../data/footerLinks";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 bg-black text-neutral-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          {/* Column 1: Brand & Socials */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <img src="/icons/logo.svg" alt="" className="w-5 h-5 invert" />
              <span className="text-sm font-semibold">NexusFlow</span>
            </div>
            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
              The unified developer platform for AI-orchestrated sprints, instant edge previews, and automated delivery pipelines.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  className="text-neutral-500 hover:text-white transition-colors"
                >
                  <img
                    src={social.icon}
                    alt=""
                    className="w-4 h-4 invert opacity-60 hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Columns 2–4: Product / Solutions / Company */}
          {footerColumns.map((column) => (
            <FooterColumn key={column.id} title={column.title} links={column.links} />
          ))}

        </div>

        {/* Bottom Status & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-500">
          <div className="space-y-1 text-center sm:text-left">
            <div>© 2026 NexusFlow. Portfolio demo project.</div>
            <div className="text-neutral-600">
              * NexusFlow is a fictional product — all brands, metrics and testimonials are placeholders.
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All systems nominal</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;