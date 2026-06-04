/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import ResponsiveIframe from './ResponsiveIframe'

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  iframe: ResponsiveIframe,
  pre: Pre,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return (
      <div className="overflow-x-hidden overflow-y-hidden">
        <Layout {...rest} />
      </div>
    )
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])
  return (
    <div>
      <MDXLayout layout={layout} components={MDXComponents} {...rest} />
    </div>
  )
}
