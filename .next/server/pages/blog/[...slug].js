'use strict'
;(() => {
  var exports = {}
  exports.id = 94
  exports.ids = [94, 195]
  exports.modules = {
    /***/ 7207: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
          try {
            __webpack_require__.r(__webpack_exports__)
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ getStaticPaths: () => /* binding */ getStaticPaths,
              /* harmony export */ getStaticProps: () => /* binding */ getStaticProps,
              /* harmony export */ default: () => /* binding */ Blog,
              /* harmony export */
            })
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(997)
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__)
            /* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147)
            /* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default =
              /*#__PURE__*/ __webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__)
            /* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(8379)
            /* harmony import */ var _lib_generate_rss__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(469)
            /* harmony import */ var _components_MDXComponents__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(1954)
            /* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(9085)
            var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([
              _lib_mdx__WEBPACK_IMPORTED_MODULE_5__,
            ])
            _lib_mdx__WEBPACK_IMPORTED_MODULE_5__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0]

            const DEFAULT_LAYOUT = 'PostLayout'
            async function getStaticPaths() {
              const posts = (0, _lib_mdx__WEBPACK_IMPORTED_MODULE_5__ /* .getFiles */.bE)('blog')
              return {
                paths: posts.map((p) => ({
                  params: {
                    slug: (0, _lib_mdx__WEBPACK_IMPORTED_MODULE_5__ /* .formatSlug */.gf)(p).split(
                      '/'
                    ),
                  },
                })),
                fallback: false,
              }
            }
            async function getStaticProps({ params }) {
              const allPosts = await (0,
              _lib_mdx__WEBPACK_IMPORTED_MODULE_5__ /* .getAllFilesFrontMatter */.sj)('blog')
              const postIndex = allPosts.findIndex(
                (post) =>
                  (0, _lib_mdx__WEBPACK_IMPORTED_MODULE_5__ /* .formatSlug */.gf)(post.slug) ===
                  params.slug.join('/')
              )
              const prev = allPosts[postIndex + 1] || null
              const next = allPosts[postIndex - 1] || null
              const post1 = await (0,
              _lib_mdx__WEBPACK_IMPORTED_MODULE_5__ /* .getFileBySlug */.x7)(
                'blog',
                params.slug.join('/')
              )
              const authorList = post1.frontMatter.authors || ['default']
              const authorPromise = authorList.map(async (author) => {
                const authorResults = await (0,
                _lib_mdx__WEBPACK_IMPORTED_MODULE_5__ /* .getFileBySlug */.x7)('authors', [author])
                return authorResults.frontMatter
              })
              const authorDetails = await Promise.all(authorPromise)
              // rss
              if (allPosts.length > 0) {
                const rss = (0, _lib_generate_rss__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z)(
                  allPosts
                )
                fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync('./public/feed.xml', rss)
              }
              return {
                props: {
                  post: post1,
                  authorDetails,
                  prev,
                  next,
                },
              }
            }
            function Blog({ post, authorDetails, prev, next }) {
              const { mdxSource, toc, frontMatter } = post
              return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                {
                  children:
                    frontMatter.draft !== true
                      ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          _components_MDXComponents__WEBPACK_IMPORTED_MODULE_4__ /* .MDXLayoutRenderer */.J,
                          {
                            layout: frontMatter.layout || DEFAULT_LAYOUT,
                            toc: toc,
                            mdxSource: mdxSource,
                            frontMatter: frontMatter,
                            authorDetails: authorDetails,
                            prev: prev,
                            next: next,
                          }
                        )
                      : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('div', {
                          className: 'mt-24 text-center',
                          children: /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
                            {
                              children: [
                                'Under Construction',
                                ' ',
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  'span',
                                  {
                                    role: 'img',
                                    'aria-label': 'roadwork sign',
                                    children: '\uD83D\uDEA7',
                                  }
                                ),
                              ],
                            }
                          ),
                        }),
                }
              )
            }

            __webpack_async_result__()
          } catch (e) {
            __webpack_async_result__(e)
          }
        }
      )

      /***/
    },

    /***/ 8904: /***/ (module) => {
      module.exports = require('github-slugger')

      /***/
    },

    /***/ 8076: /***/ (module) => {
      module.exports = require('gray-matter')

      /***/
    },

    /***/ 7219: /***/ (module) => {
      module.exports = require('image-size')

      /***/
    },

    /***/ 8214: /***/ (module) => {
      module.exports = require('mdx-bundler')

      /***/
    },

    /***/ 1228: /***/ (module) => {
      module.exports = require('mdx-bundler/client')

      /***/
    },

    /***/ 562: /***/ (module) => {
      module.exports = require('next/dist/server/denormalize-page-path.js')

      /***/
    },

    /***/ 4957: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/head.js')

      /***/
    },

    /***/ 4014: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/i18n/normalize-locale-path.js')

      /***/
    },

    /***/ 744: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/image-config-context.js')

      /***/
    },

    /***/ 5843: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/image-config.js')

      /***/
    },

    /***/ 8524: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/is-plain-object.js')

      /***/
    },

    /***/ 5832: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/loadable.js')

      /***/
    },

    /***/ 8020: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/mitt.js')

      /***/
    },

    /***/ 4964: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router-context.js')

      /***/
    },

    /***/ 3938: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/format-url.js')

      /***/
    },

    /***/ 9565: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/get-asset-path-from-route.js')

      /***/
    },

    /***/ 1428: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/is-dynamic.js')

      /***/
    },

    /***/ 1292: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/parse-relative-url.js')

      /***/
    },

    /***/ 979: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/querystring.js')

      /***/
    },

    /***/ 6052: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/resolve-rewrites.js')

      /***/
    },

    /***/ 4226: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/route-matcher.js')

      /***/
    },

    /***/ 5052: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/route-regex.js')

      /***/
    },

    /***/ 4241: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/routing-items.js')

      /***/
    },

    /***/ 9232: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/utils.js')

      /***/
    },

    /***/ 968: /***/ (module) => {
      module.exports = require('next/head')

      /***/
    },

    /***/ 1853: /***/ (module) => {
      module.exports = require('next/router')

      /***/
    },

    /***/ 6689: /***/ (module) => {
      module.exports = require('react')

      /***/
    },

    /***/ 997: /***/ (module) => {
      module.exports = require('react/jsx-runtime')

      /***/
    },

    /***/ 4956: /***/ (module) => {
      module.exports = require('reading-time')

      /***/
    },

    /***/ 9847: /***/ (module) => {
      module.exports = import('rehype-autolink-headings')

      /***/
    },

    /***/ 1380: /***/ (module) => {
      module.exports = import('rehype-citation')

      /***/
    },

    /***/ 9521: /***/ (module) => {
      module.exports = import('rehype-katex')

      /***/
    },

    /***/ 6370: /***/ (module) => {
      module.exports = import('rehype-preset-minify')

      /***/
    },

    /***/ 483: /***/ (module) => {
      module.exports = import('rehype-prism-plus')

      /***/
    },

    /***/ 7752: /***/ (module) => {
      module.exports = import('rehype-slug')

      /***/
    },

    /***/ 1083: /***/ (module) => {
      module.exports = import('remark-footnotes')

      /***/
    },

    /***/ 6809: /***/ (module) => {
      module.exports = import('remark-gfm')

      /***/
    },

    /***/ 9832: /***/ (module) => {
      module.exports = import('remark-math')

      /***/
    },

    /***/ 6016: /***/ (module) => {
      module.exports = import('unist-util-visit')

      /***/
    },

    /***/ 4300: /***/ (module) => {
      module.exports = require('buffer')

      /***/
    },

    /***/ 7147: /***/ (module) => {
      module.exports = require('fs')

      /***/
    },

    /***/ 1017: /***/ (module) => {
      module.exports = require('path')

      /***/
    },
  }
  // load runtime
  var __webpack_require__ = require('../../webpack-runtime.js')
  __webpack_require__.C(exports)
  var __webpack_exec__ = (moduleId) => __webpack_require__((__webpack_require__.s = moduleId))
  var __webpack_exports__ = __webpack_require__.X(
    0,
    [596, 568, 754, 489, 625, 6, 118, 928, 689, 579, 688, 954, 469],
    () => __webpack_exec__(7207)
  )
  module.exports = __webpack_exports__
})()
