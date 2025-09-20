"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import SocialIcon from "../hero/Social-icon";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full border-t border-border/30 bg-background py-6 mt-12"
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Copyright */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Juwel Rana. All rights reserved.
        </p>

        {/* Center - Navigation Links */}
        <div className="flex gap-6 text-sm">
          <Link href="#home" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* Right - Socials */}
        <div className="flex gap-4">
          <Link href="https://github.com/JuwelRana34" target="_blank">
            <Github className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/md-juwel-rana/" target="_blank">
            <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="mailto:juwelrana3426@email.com">
            <Mail className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
        </div>

      </div>
    </motion.footer>
  );
}
