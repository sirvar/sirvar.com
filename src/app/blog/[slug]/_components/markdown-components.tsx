import Link from "next/link";
import Image from "next/image";
import { MDXRemoteProps } from "next-mdx-remote/rsc";
import { Ref } from "react";

type MDXComponents = MDXRemoteProps["components"];

export const mdxComponents: MDXComponents = {
  a: ({ children, ref, ...props }) => {
    const newRef = ref as Ref<HTMLAnchorElement>;
    return (
      <Link {...props} ref={newRef} href={props.href || ""} target="_blank">
        {children}
      </Link>
    );
  },
  img: ({ src, alt }) => {
    return (
      <Image
        className="rounded mx-auto"
        src={`/${src}`}
        width={640}
        height={480}
        alt={alt || "blog post image"}
      />
    );
  },
  p: (props) => {
    if (
      Array.isArray(props.children) &&
      props.children.length === 3 &&
      props.children[2].type === "em"
    ) {
      return (
        <p className="text-center">
          <Image
            className="rounded mx-auto mb-1"
            src={`/${props.children[0].props.src}`}
            width={640}
            height={480}
            alt={props.children[0].props.alt || "blog post image"}
          />
          {props.children[1]}
          <em className="text-xs" {...props.children[2].props} />
        </p>
      );
      // <p className="text">{props.children}</p>;
    } else {
      return <p className="text-md">{props.children}</p>;
    }
  },
};
