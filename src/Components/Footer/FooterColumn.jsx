const FooterColumn = ({ title, links }) => {
  return (
    <div className="space-y-3 font-mono">
      <div className="text-[11px] font-bold text-white uppercase tracking-wider">
        {title}
      </div>
      <ul className="space-y-2 text-neutral-400">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;