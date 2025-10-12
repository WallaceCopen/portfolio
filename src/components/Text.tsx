import React from "react";

const font = "font-inter";

export const LargeTitle = ({ children }: { children: React.ReactNode }) => (
    <h1 className={`text-2xl font-bold ${font}`}>{children}</h1>
);

export const Title = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <h2 className={`text-xl font-semibold ${font} ${className}`}>{children}</h2>
);

export const Subtitle = ({ children }: { children: React.ReactNode; className?: string }) => (
    <h3 className={`text-lg font-medium text-gray-600 ${font}`}>{children}</h3>
);

export const Paragraph = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <p className={`text-base ${font} ${className}`}>{children}</p>
);

export const Subscript = ({ children }: { children: React.ReactNode }) => (
    <sub className={`text-xs text-gray-500 ${font}`}>{children}</sub>
);

export const Link = ({ children, href, className = "" }: { children: React.ReactNode; href: string; className?: string }) => (
    <a href={href} className={`text-gray-500 hover:text-gray-600 no-underline ${font} ${className}`} style={{ textDecoration: 'none' }}>{children}</a>
);

export const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button className={`px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition ${font}`} {...props}>
        {children}
    </button>
);
