import Link from "next/link";
import Image from "next/image";
import { MDXRemoteProps } from "next-mdx-remote/rsc";
import { Ref } from "react";
import React from "react";

type MDXComponents = MDXRemoteProps["components"];

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  // eslint-disable-next-line react/display-name
  return (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => {
    if (!props.children) return <h2 {...props} />;

    let slug = slugify(props.children.toString());
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      props.children
    );
  };
}

export const mdxComponents: MDXComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: ({ children, ref, ...props }) => {
    const newRef = ref as Ref<HTMLAnchorElement>;
    return (
      <Link
        {...props}
        ref={newRef}
        href={props.href || ""}
        target={props.href?.startsWith("#") ? undefined : "_blank"}
      >
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
