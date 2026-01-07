"use client";

import { useEffect, useState, type ReactNode } from "react";

import RelatedArticles from "@/components/blog/RelatedArticles";
import Navbar from "@/components/layout/Navbar";

type BlogArticleLayoutProps = {
  children: ReactNode;
  currentHref?: string;
};

export default function BlogArticleLayout({
  children,
  currentHref
}: BlogArticleLayoutProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop || 0;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, scrolled)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="blog-article antialiased scroll-smooth">
      <Navbar />
      <div
        className="fixed top-0 left-0 h-1 bg-burgundy z-50 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
      {children}
      <RelatedArticles currentHref={currentHref} />
      <style jsx global>{`
        .blog-article {
          font-family: "Inter", sans-serif;
          background-color: #f9f8f6;
          color: #2d2d2d;
        }
        .blog-article h1,
        .blog-article h2,
        .blog-article h3,
        .blog-article h4,
        .blog-article h5,
        .blog-article .serif-font {
          font-family: "Playfair Display", serif;
        }
        .blog-article .text-burgundy {
          color: #5d0e18;
        }
        .blog-article .bg-burgundy {
          background-color: #5d0e18;
        }
        .blog-article .border-gold {
          border-color: #c5a065;
        }
        .blog-article .bg-gold {
          background-color: #c5a065;
        }
        .blog-article .text-gold {
          color: #c5a065;
        }
        .blog-article .bg-greige {
          background-color: #f0efea;
        }
        .blog-article .border-burgundy {
          border-color: #5d0e18;
        }
        .blog-article .image-hover-zoom {
          overflow: hidden;
          transition: transform 0.5s ease;
        }
        .blog-article .image-hover-zoom img {
          transition: transform 0.7s ease;
        }
        .blog-article .image-hover-zoom:hover img {
          transform: scale(1.05);
        }
        .blog-article .dropcap::first-letter {
          float: left;
          font-size: 4rem;
          line-height: 3.5rem;
          font-family: "Playfair Display", serif;
          font-weight: 700;
          margin-right: 0.5rem;
          color: #5d0e18;
        }
        .blog-article .zigzag-content:nth-child(even) {
          flex-direction: row-reverse;
        }
      `}</style>
    </div>
  );
}
