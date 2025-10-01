"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

interface BlogLinkProps {
  slug: string;
  title: string;
}

const BlogLink = ({ slug, title }: BlogLinkProps) => {
  // 获取选中布局 -> 下一级的路由段
  const segment = useSelectedLayoutSegment();

  return (
    <Link
      href={`/blog/${slug}`}
      style={{ ...(slug === segment && { color: "red" }) }}
    >
      {title}
    </Link>
  );
};

export default BlogLink;
