import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {

  return (
    <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full items-center px-6 md:px-10 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 border-t border-gray-200">
      <p className="text-sm text-gray-600">&copy; 2024 KIIT E-Cell. All rights reserved.</p>

      <nav className="sm:ml-auto flex gap-6 text-sm">
        <Link href="#" className="hover:underline text-gray-700">
          Terms of Service
        </Link>
        <Link href="#" className="hover:underline text-gray-700">
          Privacy
        </Link>
      </nav>

      <div className="flex gap-6 mt-4 sm:mt-0">
        <Link href="https://www.facebook.com/kiitecell/" target={"_blank"}  aria-label="Facebook" className="text-gray-500 hover:text-gray-700 transition duration-200">
          <Facebook className="h-5 w-5" />
        </Link>
        <Link href="https://www.instagram.com/ecell_kiit/?hl=en" target={"_blank"} aria-label="Instagram" className="text-gray-500 hover:text-gray-700 transition duration-200">
          <Instagram className="h-5 w-5" />
        </Link>
        <Link href="https://www.linkedin.com/company/kiit-e-cell" target={"_blank"} aria-label="LinkedIn" className="text-gray-500 hover:text-gray-700 transition duration-200">
          <Linkedin className="h-5 w-5" />
        </Link>
      </div>
    </footer>
  );
}
