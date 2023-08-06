'use strict'
;(() => {
  var exports = {}
  exports.id = 405
  exports.ids = [405, 195]
  exports.modules = {
    /***/ 5447: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      })
      /* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1129)
      /* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0__)

      const formatDate = (date) => {
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }
        const now = new Date(date).toLocaleDateString(
          _data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default().locale,
          options
        )
        return now
      }
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = formatDate

      /***/
    },

    /***/ 1182: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
          try {
            __webpack_require__.r(__webpack_exports__)
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ getStaticProps: () => /* binding */ getStaticProps,
              /* harmony export */ default: () => /* binding */ Home,
              /* harmony export */
            })
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(997)
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__)
            /* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(8334)
            /* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(6118)
            /* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(5262)
            /* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(1129)
            /* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default =
              /*#__PURE__*/ __webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__)
            /* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(9085)
            /* harmony import */ var _lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(5447)
            /* harmony import */ var _components_NewsletterForm__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(3688)
            var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([
              _lib_mdx__WEBPACK_IMPORTED_MODULE_5__,
            ])
            _lib_mdx__WEBPACK_IMPORTED_MODULE_5__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0]

            const MAX_DISPLAY = 5
            async function getStaticProps() {
              const posts = await (0,
              _lib_mdx__WEBPACK_IMPORTED_MODULE_5__ /* .getAllFilesFrontMatter */.sj)('blog')
              return {
                props: {
                  posts,
                },
              }
            }
            function Home({ posts }) {
              return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                {
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _components_SEO__WEBPACK_IMPORTED_MODULE_2__ /* .PageSEO */.TQ,
                      {
                        title: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default().title,
                        description:
                          _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default().description,
                      }
                    ),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                      className: 'divide-y divide-gray-200 dark:divide-gray-700',
                      children: [
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'div',
                          {
                            className: 'space-y-2 pt-6 pb-8 md:space-y-5',
                            children: [
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'h1',
                                {
                                  className:
                                    'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                                  children: 'Latest',
                                }
                              ),
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'p',
                                {
                                  className: 'text-lg leading-7 text-gray-500 dark:text-gray-400',
                                  children:
                                    _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default()
                                      .description,
                                }
                              ),
                            ],
                          }
                        ),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'ul',
                          {
                            className: 'divide-y divide-gray-200 dark:divide-gray-700',
                            children: [
                              !posts.length && 'No posts found.',
                              posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
                                const { slug, date, title, summary, tags } = frontMatter
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  'li',
                                  {
                                    className: 'py-12',
                                    children:
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                        'article',
                                        {
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                            'div',
                                            {
                                              className:
                                                'space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0',
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                  'dl',
                                                  {
                                                    children: [
                                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                        'dt',
                                                        {
                                                          className: 'sr-only',
                                                          children: 'Published on',
                                                        }
                                                      ),
                                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                        'dd',
                                                        {
                                                          className:
                                                            'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                                          children:
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                              'time',
                                                              {
                                                                dateTime: date,
                                                                children: (0,
                                                                _lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z)(
                                                                  date
                                                                ),
                                                              }
                                                            ),
                                                        }
                                                      ),
                                                    ],
                                                  }
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                  'div',
                                                  {
                                                    className: 'space-y-5 xl:col-span-3',
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                        'div',
                                                        {
                                                          className: 'space-y-6',
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                              'div',
                                                              {
                                                                children: [
                                                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                    'h2',
                                                                    {
                                                                      className:
                                                                        'text-2xl font-bold leading-8 tracking-tight',
                                                                      children:
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                          _components_Link__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
                                                                          {
                                                                            href: `/blog/${slug}`,
                                                                            className:
                                                                              'text-gray-900 dark:text-gray-100',
                                                                            children: title,
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                    'div',
                                                                    {
                                                                      className: 'flex flex-wrap',
                                                                      children:
                                                                        tags &&
                                                                        Array.isArray(tags) &&
                                                                        tags.map((tag) =>
                                                                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                                            _components_Tag__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
                                                                            {
                                                                              text: tag,
                                                                            },
                                                                            tag
                                                                          )
                                                                        ),
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            ),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                              'div',
                                                              {
                                                                className:
                                                                  'prose max-w-none text-gray-500 dark:text-gray-400',
                                                                children: summary,
                                                              }
                                                            ),
                                                          ],
                                                        }
                                                      ),
                                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                        'div',
                                                        {
                                                          className:
                                                            'text-base font-medium leading-6',
                                                          children:
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                              _components_Link__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
                                                              {
                                                                href: `/blog/${slug}`,
                                                                className:
                                                                  'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                                                'aria-label': `Read "${title}"`,
                                                                children: 'Read more \u2192',
                                                              }
                                                            ),
                                                        }
                                                      ),
                                                    ],
                                                  }
                                                ),
                                              ],
                                            }
                                          ),
                                        }
                                      ),
                                  },
                                  slug
                                )
                              }),
                            ],
                          }
                        ),
                      ],
                    }),
                    posts.length > MAX_DISPLAY &&
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('div', {
                        className: 'flex justify-end text-base font-medium leading-6',
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          _components_Link__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
                          {
                            href: '/blog',
                            className:
                              'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                            'aria-label': 'all posts',
                            children: 'All Posts \u2192',
                          }
                        ),
                      }),
                    _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default().newsletter
                      .provider !== '' &&
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('div', {
                        className: 'flex items-center justify-center pt-4',
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          _components_NewsletterForm__WEBPACK_IMPORTED_MODULE_7__ /* ["default"] */.Z,
                          {}
                        ),
                      }),
                  ],
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

    /***/ 562: /***/ (module) => {
      module.exports = require('next/dist/server/denormalize-page-path.js')

      /***/
    },

    /***/ 4014: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/i18n/normalize-locale-path.js')

      /***/
    },

    /***/ 8524: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/is-plain-object.js')

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
  var __webpack_require__ = require('../webpack-runtime.js')
  __webpack_require__.C(exports)
  var __webpack_exec__ = (moduleId) => __webpack_require__((__webpack_require__.s = moduleId))
  var __webpack_exports__ = __webpack_require__.X(0, [596, 568, 754, 6, 118, 928, 688], () =>
    __webpack_exec__(1182)
  )
  module.exports = __webpack_exports__
})()
