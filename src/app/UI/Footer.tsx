import Link from "next/link";

const footerLinks = [
  { id: 1, url: "/about", name: "About", color: "text-gray-600" },
  { id: 2, url: "/privacy", name: "Privacy", color: "text-gray-600" },
  { id: 3, url: "/terms", name: "Terms", color: "text-gray-600" },
  { id: 4, url: "/contact", name: "Contact", color: "text-gray-600" }
];

export default function Footer() {
  return (
    <footer className="text-center py-4 w-full mt-auto max-w-[1000px] mx-auto  bg-white p-6 border border-gray-200 shadow-xl">
      <div className="container mx-auto">
        <nav className="flex justify-center space-x-4">
          {footerLinks.map((link) => (
            <Link className={`${link.color} hover:underline hover:text-emerald-500`} href={link.url} key={link.id}>
              {link.name}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-gray-500 mt-2">© 2025 Kanchann</p>
      </div>
    </footer>
  );
}
