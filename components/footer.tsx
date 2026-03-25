"use client";

import Link from "next/link";

interface FooterProps {
  name: string;
}

export function Footer({ name }: FooterProps) {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-2">
            <Link href="#" className="text-xl font-semibold">
              {name}
            </Link>
            <p className="text-sm text-muted-foreground">
              Frontend Engineer building thoughtful web and mobile experiences
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <p className="text-sm font-semibold">Quick Links</p>
            <ul className="space-y-1">
              {[
                { href: "#projects", label: "Projects" },
                { href: "#experience", label: "Experience" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest */}
          <div className="space-y-2">
            <p className="text-sm font-semibold">External</p>
            <ul className="space-y-1">
              {[
                { href: "https://github.com/nhile", label: "GitHub" },
                { href: "https://linkedin.com/in/nhile", label: "LinkedIn" },
                { href: "mailto:hello@nhile.dev", label: "Email" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
