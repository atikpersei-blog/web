'use client';

import React, { useEffect, useState } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useMDXComponents } from '@/mdx-components'; // mdx-components.tsx에서 가져옴

interface MdxRendererProps {
  className: string;
  markdown: string;
}

export default function MdxRenderer({ className, markdown }: MdxRendererProps) {
  const [mdxContent, setMdxContent] = useState<MDXRemoteSerializeResult | null>(null);

  const components = useMDXComponents({});

  useEffect(() => {
    async function renderMdx() {
      const mdxSource = await serialize(markdown, { parseFrontmatter: false });
      setMdxContent(mdxSource);
    }

    renderMdx();
  }, [markdown]);

  return (
    <div className={className}>
      {mdxContent ? <MDXRemote {...mdxContent} components={components} /> : <p>Loading...</p>}
    </div>
  );
}
