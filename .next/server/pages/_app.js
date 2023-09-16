'use strict'
;(() => {
  var exports = {}
  exports.id = 888
  exports.ids = [888]
  exports.modules = {
    /***/ 4539: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__)

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ App,
      })

      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: external "next-themes"
      const external_next_themes_namespaceObject = require('next-themes')
      // EXTERNAL MODULE: external "next/head"
      var head_ = __webpack_require__(968)
      var head_default = /*#__PURE__*/ __webpack_require__.n(head_)
      // EXTERNAL MODULE: ./data/siteMetadata.js
      var siteMetadata = __webpack_require__(6911)
      var siteMetadata_default = /*#__PURE__*/ __webpack_require__.n(siteMetadata) // CONCATENATED MODULE: external "next/script"
      const script_namespaceObject = require('next/script')
      var script_default = /*#__PURE__*/ __webpack_require__.n(script_namespaceObject) // CONCATENATED MODULE: ./components/analytics/GoogleAnalytics.js
      const GAScript = () => {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(script_default(), {
              strategy: 'lazyOnload',
              src: `https://www.googletagmanager.com/gtag/js?id=${
                siteMetadata_default().analytics.googleAnalyticsId
              }`,
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(script_default(), {
              strategy: 'lazyOnload',
              id: 'ga-script',
              children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteMetadata_default().analytics.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
        `,
            }),
          ],
        })
      }
      /* harmony default export */ const GoogleAnalytics = GAScript
      // https://developers.google.com/analytics/devguides/collection/gtagjs/events
      const logEvent = (action, category, label, value) => {
        var ref
        ;(ref = window.gtag) === null || ref === void 0
          ? void 0
          : ref.call(window, 'event', action, {
              event_category: category,
              event_label: label,
              value: value,
            })
      } // CONCATENATED MODULE: ./components/analytics/Plausible.js

      const PlausibleScript = () => {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(script_default(), {
              strategy: 'lazyOnload',
              'data-domain': siteMetadata_default().analytics.plausibleDataDomain,
              src: 'https://plausible.io/js/plausible.js',
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(script_default(), {
              strategy: 'lazyOnload',
              id: 'plausible-script',
              children: `
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `,
            }),
          ],
        })
      }
      /* harmony default export */ const Plausible = PlausibleScript
      // https://plausible.io/docs/custom-event-goals
      const Plausible_logEvent = (eventName, ...rest) => {
        var ref
        return (ref = window.plausible) === null || ref === void 0
          ? void 0
          : ref.call(window, eventName, ...rest)
      } // CONCATENATED MODULE: ./components/analytics/SimpleAnalytics.js

      const SimpleAnalyticsScript = () => {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(script_default(), {
              strategy: 'lazyOnload',
              id: 'sa-script',
              children: `
            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};
        `,
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(script_default(), {
              strategy: 'lazyOnload',
              src: 'https://scripts.simpleanalyticscdn.com/latest.js',
            }),
          ],
        })
      }
      // https://docs.simpleanalytics.com/events
      const SimpleAnalytics_logEvent = (eventName, callback) => {
        if (callback) {
          var ref
          return (ref = window.sa_event) === null || ref === void 0
            ? void 0
            : ref.call(window, eventName, callback)
        } else {
          var ref1
          return (ref1 = window.sa_event) === null || ref1 === void 0
            ? void 0
            : ref1.call(window, eventName)
        }
      }
      /* harmony default export */ const SimpleAnalytics = SimpleAnalyticsScript // CONCATENATED MODULE: ./components/analytics/Umami.js

      const UmamiScript = () => {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: /*#__PURE__*/ jsx_runtime_.jsx(script_default(), {
            async: true,
            defer: true,
            'data-website-id': siteMetadata_default().analytics.umamiWebsiteId,
            src: 'https://umami.example.com/umami.js', // Replace with your umami instance
          }),
        })
      }
      /* harmony default export */ const Umami = UmamiScript // CONCATENATED MODULE: ./components/analytics/Posthog.js

      const PosthogScript = () => {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: /*#__PURE__*/ jsx_runtime_.jsx(script_default(), {
            strategy: 'lazyOnload',
            id: 'posthog-script',
            children: `
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('${
              siteMetadata_default().analytics.posthogAnalyticsId
            }',{api_host:'https://app.posthog.com'})
        `,
          }),
        })
      }
      /* harmony default export */ const Posthog = PosthogScript // CONCATENATED MODULE: ./components/analytics/index.js

      const isProduction = 'production' === 'production'
      const Analytics = () => {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [
            isProduction &&
              siteMetadata_default().analytics.plausibleDataDomain &&
              /*#__PURE__*/ jsx_runtime_.jsx(Plausible, {}),
            isProduction &&
              siteMetadata_default().analytics.simpleAnalytics &&
              /*#__PURE__*/ jsx_runtime_.jsx(SimpleAnalytics, {}),
            isProduction &&
              siteMetadata_default().analytics.umamiWebsiteId &&
              /*#__PURE__*/ jsx_runtime_.jsx(Umami, {}),
            isProduction &&
              siteMetadata_default().analytics.googleAnalyticsId &&
              /*#__PURE__*/ jsx_runtime_.jsx(GoogleAnalytics, {}),
            isProduction &&
              siteMetadata_default().analytics.posthogAnalyticsId &&
              /*#__PURE__*/ jsx_runtime_.jsx(Posthog, {}),
          ],
        })
      }
      /* harmony default export */ const analytics = Analytics // CONCATENATED MODULE: ./data/headerNavLinks.js

      const headerNavLinks = [
        {
          href: '/blog',
          title: 'Blog',
        },
        {
          href: '/tags',
          title: 'Tags',
        },
        {
          href: '/projects',
          title: 'Projects',
        },
        {
          href: '/about',
          title: 'About',
        },
      ]
      /* harmony default export */ const data_headerNavLinks = headerNavLinks

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(6689) // CONCATENATED MODULE: ./data/logo.svg
      var _path,
        _path2,
        _path3,
        _path4,
        _path5,
        _path6,
        _path7,
        _path8,
        _path9,
        _path10,
        _path11,
        _path12,
        _path13,
        _path14,
        _path15,
        _path16,
        _path17,
        _path18,
        _path19,
        _path20,
        _path21,
        _path22,
        _path23,
        _path24,
        _path25,
        _path26,
        _path27,
        _path28,
        _path29,
        _path30,
        _path31,
        _path32,
        _path33,
        _path34,
        _path35,
        _path36,
        _path37,
        _path38,
        _path39,
        _path40,
        _path41,
        _path42,
        _path43,
        _path44,
        _path45,
        _path46,
        _path47,
        _path48,
        _path49,
        _path50,
        _path51,
        _path52,
        _path53,
        _path54,
        _path55,
        _path56,
        _path57,
        _path58,
        _path59,
        _path60,
        _path61,
        _path62,
        _path63,
        _path64,
        _path65,
        _path66,
        _path67,
        _path68,
        _path69,
        _path70,
        _path71,
        _path72,
        _path73,
        _path74,
        _path75,
        _path76,
        _path77,
        _path78,
        _path79,
        _path80,
        _path81,
        _path82,
        _path83,
        _path84,
        _path85,
        _path86,
        _path87,
        _path88,
        _path89,
        _path90,
        _path91,
        _path92,
        _path93,
        _path94,
        _path95,
        _path96,
        _path97,
        _path98,
        _path99,
        _path100,
        _path101,
        _path102,
        _path103,
        _path104,
        _path105,
        _path106,
        _path107,
        _path108,
        _path109,
        _path110,
        _path111,
        _path112,
        _path113,
        _path114,
        _path115,
        _path116,
        _path117,
        _path118,
        _path119,
        _path120,
        _path121,
        _path122,
        _path123,
        _path124,
        _path125,
        _path126,
        _path127,
        _path128,
        _path129,
        _path130,
        _path131,
        _path132,
        _path133,
        _path134,
        _path135,
        _path136,
        _path137,
        _path138,
        _path139,
        _path140,
        _path141,
        _path142,
        _path143,
        _path144,
        _path145,
        _path146,
        _path147,
        _path148,
        _path149,
        _path150,
        _path151,
        _path152,
        _path153,
        _path154,
        _path155,
        _path156,
        _path157,
        _path158,
        _path159,
        _path160,
        _path161,
        _path162,
        _path163,
        _path164,
        _path165,
        _path166,
        _path167,
        _path168,
        _path169,
        _path170,
        _path171,
        _path172,
        _path173,
        _path174,
        _path175,
        _path176,
        _path177,
        _path178,
        _path179,
        _path180,
        _path181,
        _path182,
        _path183,
        _path184,
        _path185,
        _path186,
        _path187,
        _path188,
        _path189,
        _path190,
        _path191,
        _path192,
        _path193,
        _path194,
        _path195,
        _path196,
        _path197,
        _path198,
        _path199,
        _path200,
        _path201,
        _path202,
        _path203,
        _path204,
        _path205,
        _path206,
        _path207,
        _path208,
        _path209,
        _path210,
        _path211,
        _path212,
        _path213,
        _path214,
        _path215,
        _path216,
        _path217,
        _path218,
        _path219,
        _path220,
        _path221,
        _path222,
        _path223,
        _path224,
        _path225,
        _path226,
        _path227,
        _path228,
        _path229,
        _path230,
        _path231,
        _path232,
        _path233,
        _path234,
        _path235,
        _path236,
        _path237,
        _path238,
        _path239,
        _path240,
        _path241,
        _path242,
        _path243,
        _path244,
        _path245,
        _path246,
        _path247,
        _path248,
        _path249,
        _path250,
        _path251,
        _path252,
        _path253,
        _path254,
        _path255,
        _path256,
        _path257,
        _path258
      function _extends() {
        _extends = Object.assign
          ? Object.assign.bind()
          : function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }
              return target
            }
        return _extends.apply(this, arguments)
      }

      var SvgLogo = function SvgLogo(props) {
        return /*#__PURE__*/ external_react_.createElement(
          'svg',
          _extends(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: 270,
              height: 270,
            },
            props
          ),
          _path ||
            (_path = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M0 270h270V0H0v270M154 82c5.84 8.77 11.63 19.87 18 28 .52.66 1.45 1.29 2 2 1.08 1.1 2.12 1.68 3 3 1.46 2.19 2.04 4.66 3 7 .4.72 1.42 2.21 2 3 4 3.95 7 9.15 10 14 2.2 3.56 3.91 7.58 6 11 .66.73 1.81 1.83 2 3 .22.26.79.69 1 1 2.6 1.95 3.57 4.17 4 6 .3.48.66 1.64 1 2 6.34 6.25 10.13 15.58 15 23h-29c-1.16.14-1.9.13-3 0-2.26-.26-4.72 0-7 0-4.71.45-10.61 1-16 1h-51c-15.57 0-32.23.43-47-1H56c1.59-3.08 2.89-6.23 5-9-1.61-1.54 2.11-2.86 3-4 2.15-4.19 4.96-7.62 8-11 1.12-7.63 8.05-13.72 11.75-20.25 3.71-6.52 7.91-13.56 12.25-19.75 1.27-2.5 1.45-2.2 3-4 12.63-20.08 25.97-39.59 38-60 7.6 6.84 11.54 16.57 17 25Z',
              stroke: 'none',
              fill: 'none',
              fillOpacity: 0,
              strokeOpacity: 0,
              strokeWidth: 0.3,
            })),
          _path2 ||
            (_path2 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M99 117c-.92 1.47-2.13 2.76-3 4-4.34 6.19-8.54 13.23-12.25 19.75-3.7 6.53-10.63 12.62-11.75 20.25.22-.25 1 0 1 0 .8-.73 1.41-2.14 2-3 9.46-13.66 18.29-27.68 28-41 3.9-7.08 8.6-13.52 13-20 6.01-8.85 10.93-24.04 19-31 3.2-2.76 5.96 2.47 8.25 5.75 2.3 3.27 4.38 7.9 6.75 11.25.73.78 2.33 1.27 3 2 .01-1.28.98-1.85 1-3-5.46-8.43-9.4-18.16-17-25-12.03 20.41-25.37 39.92-38 60Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#D4CBB0',
              strokeOpacity: 0.95,
              strokeWidth: 0.3,
            })),
          _path3 ||
            (_path3 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M135 66c.98-.51.78 3.02 2 5 1.95 3.17 4.59 8.16 7 11 .6.71 1.41 1.23 2 2 1.83 2.39 3.21 5.44 5 8 .81 1.15 2.03 2.82 3 4 1.52 1.85 2.83 2.75 4 5 3.61 4.31 6.83 7.6 9 13 .78 1.94.96 4.07 2 6 .67 1.23 2.2 3.88 3 5 10.37 14.52 20.11 29.97 30 45 .35.09.73.87 1 1 .82.41 2.82.11 3-1-.25-.26 0-1 0-1-5.84-9.39-11.47-18.49-17-28-.47-.81-.66-.89-1-2-.83-1.35-2.72-2.02-3-4-1.75-.24-1.59-1.84-2-3-3.45-4.99-7.72-9.98-11-15-1.59-1.5-1.85-.62-3-3-.49-1.02-1.19-1.4-1-3 .06-.49 0-1 0-1-3.43-8.74-11.83-15.22-15-24-1.41-.2-2.33-2.06-3-3-2.37-3.35-4.45-7.98-6.75-11.25-2.29-3.28-5.05-8.51-8.25-5.75Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#221519',
              strokeWidth: 0.3,
            })),
          _path4 ||
            (_path4 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M116 97c2.29-1.81 5.85-3.56 8-6 3.16-5.44 12.02-13.66 13-20-1.22-1.98-1.02-5.51-2-5-8.07 6.96-12.99 22.15-19 31Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#241619',
              strokeOpacity: 0.73,
              strokeWidth: 0.3,
            })),
          _path5 ||
            (_path5 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M124 91c-3.08 5.3-12.44 14.79-12 21 .34-.23 1 0 1 0 .5 0 1.74.25 2 0 7.2-12.13 14.84-23.87 22-36 1.9 1.99 3.38 4.66 5 7 .13-.3 1.68-1 2-1-2.41-2.84-5.05-7.83-7-11-.98 6.34-9.84 14.56-13 20Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#D8D3B1',
              strokeWidth: 0.3,
            })),
          _path6 ||
            (_path6 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M115 112c-5.6 9.44-11.5 18.54-17 28-1.37 3.53-2.36 7.49-4 11 .11-.21 1 0 1 0 .65-1.2 2.04-2.99 3-1 .27.56-3.51 8.18-4 9h12c2.67 0 7.2.89 9-1-1.63-.48-2.73-3.14-4-4-2.1-.75-10.68-4.27-8.21-7.23 2.47-2.96 8.15 4.49 9.21 6.23 9.23 6.2 22.82 7.42 34 7 11.18-.42 18.43-10.97 29-13-3.51 5.89-10.6 7.66-15 12h21c.5 0 1.51.08 2 0-.32.21-1.04-2.73-1-3-1.12-2.19-4.2-4.01-4-7 2.28.17 3.48 3.35 5 5 .4-.2 1 0 1 0 .04-.04 2.07-2.25 2-2-6.48-8.71-14.21-19.27-19-29-.76-1.54-1-3.44-2-5-.8-1.25-2.26-2.01-3-3 .11.89-.28 2.15 0 3 .58 1.74 2.88 2.73 2 5-2.62-.86-6-1.23-8-3-9.24-2.69-28.14-4.8-37 0-1.12 1.13-1.03 2.06-3 2-4.22-.13 2.54-9.89 5-11 1.31-8.9 12.27-22.92 23-18 1.48.49 2.21 1.89 3 3 2 2.82 3.2 6.08 5 9 1.21 1.96 3.14 3.62 4 6 .67-.15 3.43.67 4 1-3.27-4.56-4.98-10.28-8-15-.54-.84-1.37-2.04-2-3-1.72-2.61-4.11-5.36-6-8-.64-.9-1.37-1.92-2-3-1.62-2.34-3.1-5.01-5-7-7.16 12.13-14.8 23.87-22 36m43 13c8.14 4.79 12.8 6.59 18 15 1.34.98 2.85 3.25 3 5-1.57-.96-3.25-2.32-4-4-.25.25-1 0-1 0-2.23.98-2.39 4.8-6 4-.71.43-3.15 0-4 0-3.91 1.01-8.89 6.18-13 8-8.45 3.73-18.47 2-27 0-.47-.11-1.61-.21-2 0-1.37.71-3.02 1.47-5 1v-4c-.44-.16-1 0-1 0-4 4.06-9.6-2.72-10-7-.05-.5 0-1 0-1-.2-1.97.18-3.32 1-5-.8.8-2.13 1.36-3 2-1.34.98-2.58 2.23-4 3 2.98-9.37 12.64-17.01 22-19-2.42 3.58-7.62 4.42-10 8 .28-.16 4.61-.41 6-1 4.42-3.22 9.83-5.23 15-7 .8-.77.72-.84 2-1 4.25-2.97 3.13-1.87 9.07-1.07 5.95.79 8.24-1.67 13.93 4.07Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#201416',
              strokeWidth: 0.3,
            })),
          _path7 ||
            (_path7 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M142 83c.63 1.08 1.36 2.1 2 3 .28-1.22 1.86-.59 2-2-.59-.77-1.4-1.29-2-2-.32 0-1.87.7-2 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#CCBBB6',
              strokeWidth: 0.3,
            })),
          _path8 ||
            (_path8 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M153 85v1c3.17 8.78 11.57 15.26 15 24-.05.06 1.95.97 2 1 .33-.02.99-1.55 2-1-6.37-8.13-12.16-19.23-18-28-.02 1.15-.99 1.72-1 3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#74C1C0',
              strokeOpacity: 0.91,
              strokeWidth: 0.3,
            })),
          _path9 ||
            (_path9 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M153 86v-1c-.67-.73-2.27-1.22-3-2 .67.94 1.59 2.8 3 3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#6C625C',
              strokeWidth: 0.3,
            })),
          _path10 ||
            (_path10 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M144 86c1.89 2.64 4.28 5.39 6 8 .08-.83.98-1.09 1-2-1.79-2.56-3.17-5.61-5-8-.14 1.41-1.72.78-2 2Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#AF8A85',
              strokeWidth: 0.3,
            })),
          _path11 ||
            (_path11 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M116 97c-4.4 6.48-9.1 12.92-13 20-3.64 6.6-8.25 15.45-12.75 21.25C85.74 144.04 82.9 154.87 76 158c.82 4.58-2.81 5.2-5 8-1.57 3.59-3.76 6.82-6 10 .09.99-.07 2.01 0 3h148c-.99-2.58-3.04-4.43-4-7-.11-.21-1 0-1 0-2.57 6.2-12.13 3.66-17 3-.83.42-3.05 0-4 0h-31c-5.6 0-11.43.48-17 0-1.25-.11-2.32-.88-3-1-6.56.77-13.14 1-20 1-3.1 0-6.64-.77-9-1H91c-4.37.46-9.92 1.46-15 1-1.43.56-4.53.19-4-2-.26-3.63 1.91-5.95 5-7 .09-.35.65-.89 1-1 2.31-3.51 5.03-7.54 7-11 6.29-11.05 12.91-22.23 20-33 .69-1.04 1.07-1.29 2-2 1.98-2.27 2.41-5.23 5-7-.44-6.21 8.92-15.7 12-21-2.15 2.44-5.71 4.19-8 6Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#1E1718',
              strokeWidth: 0.3,
            })),
          _path12 ||
            (_path12 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M150 94c.63.96 1.46 2.16 2 3 .23 0 1.09-1.13 2-1-.97-1.18-2.19-2.85-3-4-.02.91-.92 1.17-1 2Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#9A998D',
              strokeWidth: 0.3,
            })),
          _path13 ||
            (_path13 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M121 111c.41-.19 1 0 1 0 1.62-2.48 4.27-2.93 6-5 2.6-5.49 4.07-8.9 11-9 1.19-.02 2.86.31 4 0 .75-.21 2.01-1.13 2-2-.24-.24-.84-1.93-1-2-10.73-4.92-21.69 9.1-23 18Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#D4CEB7',
              strokeWidth: 0.3,
            })),
          _path14 ||
            (_path14 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M145 95c.44.44 1.65.61 2 1-.79-1.11-1.52-2.51-3-3 .16.07.76 1.76 1 2Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#2A3D41',
              strokeWidth: 0.3,
            })),
          _path15 ||
            (_path15 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M143 97c-.16.52 1.65 3.45 2 4 1.91 2.5 5.1 2.56 7 4-1.8-2.92-3-6.18-5-9-.35-.39-1.56-.56-2-1 .01.87-1.25 1.79-2 2Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#64B3BA',
              strokeWidth: 0.3,
            })),
          _path16 ||
            (_path16 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M152 97c3.02 4.72 4.73 10.44 8 15 1 1.4 1.75.89 2 3 .74.99 2.2 1.75 3 3 1.19 1.04 2.99 1.23 4 2-1.04-1.93-1.22-4.06-2-6-2.62-4.46-6.5-8.22-9-13-1.17-2.25-2.48-3.15-4-5-.91-.13-1.77 1-2 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#7BC0BB',
              strokeWidth: 0.3,
            })),
          _path17 ||
            (_path17 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M128 106c-1.49 3.15-2.88 7.26-5 10 3.92-1.73 10.61-1.39 15-1 4.39.39 12.15-1.06 16 1-.58-1.36-1.21-4.56-3-7-.87-1.19-2.06-2.71-3-4-1.57-1.79-7.09-7.53-9-8-6.93.1-8.4 3.51-11 9Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#1F0D15',
              strokeWidth: 0.3,
            })),
          _path18 ||
            (_path18 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M148 105c-.98-1.35-2.13-2.63-3-4-.35-.55-2.16-3.48-2-4-1.14.31-2.81-.02-4 0 1.91.47 7.43 6.21 9 8Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#222A2D',
              strokeWidth: 0.3,
            })),
          _path19 ||
            (_path19 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M148 105c.94 1.29 2.13 2.81 3 4 1.38 1.2 3.5 1.89 5 3-.23-.16 0-1 0-1-.86-2.38-2.79-4.04-4-6-1.9-1.44-5.09-1.5-7-4 .87 1.37 2.02 2.65 3 4Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#4D728A',
              strokeWidth: 0.3,
            })),
          _path20 ||
            (_path20 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M167 114c-2.17-5.4-5.39-8.69-9-13 2.5 4.78 6.38 8.54 9 13Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#254446',
              strokeWidth: 0.3,
            })),
          _path21 ||
            (_path21 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M122 111c-1.14 4.08-5.63 6.64-6 11 1.97.06 1.88-.87 3-2 1.27-1.29 3.02-2.73 4-4 2.12-2.74 3.51-6.85 5-10-1.73 2.07-4.38 2.52-6 5Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#75564E',
              strokeWidth: 0.3,
            })),
          _path22 ||
            (_path22 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M154 116c.11.26 1.9 3.88 2 4 2 1.77 5.38 2.14 8 3 .88-2.27-1.42-3.26-2-5-1.38-2.18-3.8-4.46-6-6-1.5-1.11-3.62-1.8-5-3 1.79 2.44 2.42 5.64 3 7Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#5B4269',
              strokeWidth: 0.3,
            })),
          _path23 ||
            (_path23 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M168 111c2.71 1.89 4.77 5.1 8 6-.17-.43 0-1 0-1-2.14-1.5-4.03-3.69-6-5-.05-.03-2.05-.94-2-1 0 0 .06.51 0 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#526A93',
              strokeWidth: 0.3,
            })),
          _path24 ||
            (_path24 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M170 111c1.97 1.31 3.86 3.5 6 5-.36-.73-3.85-5.92-4-6-1.01-.55-1.67.98-2 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#75ACCA',
              strokeWidth: 0.3,
            })),
          _path25 ||
            (_path25 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M176 116s-.17.57 0 1c1.55 3.94 4.49 7.12 6 11 1.62 2.36 2.7 4.34 4 7 1.26.98 1.58 2.64 2 4 .34 1.11.53 1.19 1 2-.04-.31.69-.8 1-1 .52-.33.93-1.47 2-1-3-4.85-6-10.05-10-14-1.35-1.34-1.27-1.22-2-3-.96-2.34-1.54-4.81-3-7-.84-1.03-2.16-1.91-3-3-.55-.71-1.48-1.34-2-2 .15.08 3.64 5.27 4 6Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#659BB7',
              strokeOpacity: 0.82,
              strokeWidth: 0.3,
            })),
          _path26 ||
            (_path26 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M116 122c.37-4.36 4.86-6.92 6-11 0 0-.59-.19-1 0-2.46 1.11-9.22 10.87-5 11Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#A88E89',
              strokeWidth: 0.3,
            })),
          _path27 ||
            (_path27 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M156 112c2.2 1.54 4.62 3.82 6 6-.28-.85.11-2.11 0-3-.25-2.11-1-1.6-2-3-.57-.33-3.33-1.15-4-1 0 0-.23.84 0 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#232444',
              strokeWidth: 0.3,
            })),
          _path28 ||
            (_path28 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M169 114c.12.12 2.03 1.52 3 3 3.28 5.02 7.55 10.01 11 15-.44-1.23-.51-2.75-1-4-1.51-3.88-4.45-7.06-6-11-3.23-.9-5.29-4.11-8-6-.19 1.6.51 1.98 1 3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#57436E',
              strokeWidth: 0.3,
            })),
          _path29 ||
            (_path29 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M107 119c2.3-1.76 5.68-3.98 6-7 0 0-.66-.23-1 0-2.59 1.77-3.02 4.73-5 7Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#C7AEA4',
              strokeWidth: 0.3,
            })),
          _path30 ||
            (_path30 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M107 119c-.93.71-1.31.96-2 2-2.98 11.07-11.93 23.17-20 33-1.97 3.46-4.69 7.49-7 11 .26-.08 2.84-.17 3 0 4.21-8.6 12.25-16.83 17-25 5.5-9.46 11.4-18.56 17-28-.26.25-1.5 0-2 0-.32 3.02-3.7 5.24-6 7Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#93695B',
              strokeWidth: 0.3,
            })),
          _path31 ||
            (_path31 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M177 115c-.88-1.32-1.92-1.9-3-3 .84 1.09 2.16 1.97 3 3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#446376',
              strokeOpacity: 0.29,
              strokeWidth: 0.3,
            })),
          _path32 ||
            (_path32 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M169 114c1.15 2.38 1.41 1.5 3 3-.97-1.48-2.88-2.88-3-3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#24173F',
              strokeWidth: 0.3,
            })),
          _path33 ||
            (_path33 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M123 116c-.98 1.27-2.73 2.71-4 4 8.86-4.8 27.76-2.69 37 0-.1-.12-1.89-3.74-2-4-3.85-2.06-11.61-.61-16-1-4.39-.39-11.08-.73-15 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#DBD5C7',
              strokeWidth: 0.3,
            })),
          _path34 ||
            (_path34 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M96 121c.87-1.24 2.08-2.53 3-4-1.55 1.8-1.73 1.5-3 4Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#372A25',
              strokeOpacity: 0.55,
              strokeWidth: 0.3,
            })),
          _path35 ||
            (_path35 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M75 158c.27-.25 1 0 1 0 6.9-3.13 9.74-13.96 14.25-19.75 4.5-5.8 9.11-14.65 12.75-21.25-9.71 13.32-18.54 27.34-28 41Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#8A6C5D',
              strokeWidth: 0.3,
            })),
          _path36 ||
            (_path36 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M167 123c1.52 1.78 3.39 1.07 5 2-.8-1.12-2.33-3.77-3-5-1.01-.77-2.81-.96-4-2 1 1.56 1.24 3.46 2 5Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#A88C88',
              strokeWidth: 0.3,
            })),
          _path37 ||
            (_path37 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M135 122c3.52-.43 6.82.11 10 1 10.39 2.9 19.16 10.73 26 19-.55 1.01-1.98 1.44-3 2-.15.05 0 1 0 1 3.61.8 3.77-3.02 6-4-1.17-.69-2.06-1.99-3-3-4.26-4.55-8.73-8.68-13-13-5.69-5.74-7.98-3.28-13.93-4.07-5.94-.8-4.82-1.9-9.07 1.07Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#192931',
              strokeWidth: 0.3,
            })),
          _path38 ||
            (_path38 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M85 154c8.07-9.83 17.02-21.93 20-33-7.09 10.77-13.71 21.95-20 33Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#AF9286',
              strokeWidth: 0.3,
            })),
          _path39 ||
            (_path39 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M133 123c-.75.73-1.27 2.38-2 3 7.18-5 19.21.49 21 9 .8 3.8-.32 8.32-3 11 1.43-.12 3.09 1.5 5 1 .32-.2.79-.96 1-1-1.3-.21-2.69.16-4 0 5.77-7.94-.17-17.16-6-23-3.18-.89-6.48-1.43-10-1-1.28.16-1.2.23-2 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#B8D7D2',
              strokeWidth: 0.3,
            })),
          _path40 ||
            (_path40 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M182 125c-.58-.79-1.6-2.28-2-3 .73 1.78.65 1.66 2 3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#668FA8',
              strokeOpacity: 0.62,
              strokeWidth: 0.3,
            })),
          _path41 ||
            (_path41 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M104 139c1.59-1.46 3.51-3.51 5-5 .84-1.08 2.01-2.02 3-3 2.38-3.58 7.58-4.42 10-8-9.36 1.99-19.02 9.63-22 19 1.42-.77 2.66-2.02 4-3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#D5D2BB',
              strokeWidth: 0.3,
            })),
          _path42 ||
            (_path42 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M118 130c-4.4 3.2-8.16 8.32-12 12 0 0-.05.5 0 1 3.63 1.94 7.24 4.12 10 7 0 0 .56-.16 1 0 1.9.69 3.2 2.27 5 3 .39-.21 1.53-.11 2 0 1.59-.78 5.27-2.67 5-5-6.82-4.47-7.09-16.69 0-21 .52-.32 1.59-.65 2-1 .73-.62 1.25-2.27 2-3-5.17 1.77-10.58 3.78-15 7Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#60D4C2',
              strokeWidth: 0.3,
            })),
          _path43 ||
            (_path43 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M155 146c2.49-.41 4.59-.44 7-1 1.63-.36 3.69-1.55 6-1 1.02-.56 2.45-.99 3-2-6.84-8.27-15.61-16.1-26-19 5.83 5.84 11.77 15.06 6 23 1.31.16 2.7-.21 4 0Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#63D8C4',
              strokeWidth: 0.3,
            })),
          _path44 ||
            (_path44 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M186 152c2.64 3.54 5.51 7.14 8 11 .69 1.07 2.41 5.58 3 6 1.5.08 2.07.76 3 1 .46-.14 1.53-.12 2 0-9.89-15.03-19.63-30.48-30-45-1.61-.93-3.48-.22-5-2 4.79 9.73 12.52 20.29 19 29Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#8A6160',
              strokeWidth: 0.3,
            })),
          _path45 ||
            (_path45 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M131 126c-.53.37-2.63 2.52-3 3-2.35 4.06-3.05 8.02-2 12 .16-.87 5.76 4.53 8.23 5.77 2.47 1.24 10.85 1.45 13.77-.77-2.44-3.74.69-8.9 4-11-1.79-8.51-13.82-14-21-9Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#21111B',
              strokeWidth: 0.3,
            })),
          _path46 ||
            (_path46 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M171 138c.87.64 2.9 1.29 4 2 .35.23 1 0 1 0-5.2-8.41-9.86-10.21-18-15 4.27 4.32 8.74 8.45 13 13Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#77BBB1',
              strokeWidth: 0.3,
            })),
          _path47 ||
            (_path47 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M129 127c-.52.52-.66 1.41-1 2 .37-.48 2.47-2.63 3-3-.41.35-1.48.68-2 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#676F71',
              strokeWidth: 0.3,
            })),
          _path48 ||
            (_path48 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M129 148c-.12-1.02-1.57-2.08-2-3-.53-1.14-.67-2.74-1-4-1.05-3.98-.35-7.94 2-12 .34-.59.48-1.48 1-2-7.09 4.31-6.82 16.53 0 21Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#BFE1DD',
              strokeWidth: 0.3,
            })),
          _path49 ||
            (_path49 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M183 132c.41 1.16.25 2.76 2 3 .49.07 1 0 1 0-1.3-2.66-2.38-4.64-4-7 .49 1.25.56 2.77 1 4Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#506091',
              strokeWidth: 0.3,
            })),
          _path50 ||
            (_path50 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M112 131c-.99.98-2.16 1.92-3 3-.67.86-1.28 2.28-2 3-.82 1.68-1.2 3.03-1 5 3.84-3.68 7.6-8.8 12-12-1.39.59-5.72.84-6 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#1A2726',
              strokeWidth: 0.3,
            })),
          _path51 ||
            (_path51 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M104 139c.87-.64 2.2-1.2 3-2 .72-.72 1.33-2.14 2-3-1.49 1.49-3.41 3.54-5 5Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#6C655F',
              strokeWidth: 0.3,
            })),
          _path52 ||
            (_path52 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M126 141c.33 1.26.47 2.86 1 4 4.25 7.36 16.79 6.21 22 1 2.68-2.68 3.8-7.2 3-11-3.31 2.1-6.44 7.26-4 11-2.92 2.22-11.3 2.01-13.77.77-2.47-1.24-8.07-6.64-8.23-5.77Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#211C1D',
              strokeWidth: 0.3,
            })),
          _path53 ||
            (_path53 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M188 139c-.42-1.36-.74-3.02-2-4 0 0-.51.07-1 0 .28 1.98 2.17 2.65 3 4Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#8C89A4',
              strokeWidth: 0.3,
            })),
          _path54 ||
            (_path54 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M174 141s.75.25 1 0c-.2-.4 0-1 0-1-1.1-.71-3.13-1.36-4-2 .94 1.01 1.83 2.31 3 3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#4C7575',
              strokeWidth: 0.3,
            })),
          _path55 ||
            (_path55 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M190 140c2.27.84 6.18 7.99 8 10-2.09-3.42-3.8-7.44-6-11-1.07-.47-1.48.67-2 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#65C2B9',
              strokeOpacity: 0.82,
              strokeWidth: 0.3,
            })),
          _path56 ||
            (_path56 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M81 165c-.2.4 0 1 0 1 3.31.3 6.07-.73 9-1 .24-.2 0-1 0-1-1-.02-2 .01-3 0 .85-4.99 5.06-8.46 7-13 1.64-3.51 2.63-7.47 4-11-4.75 8.17-12.79 16.4-17 25Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#371918',
              strokeWidth: 0.3,
            })),
          _path57 ||
            (_path57 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M175 141c.75 1.68 2.43 3.04 4 4-.15-1.75-1.66-4.02-3-5 0 0-.65.23-1 0 0 0-.2.6 0 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#B9B6BE',
              strokeWidth: 0.3,
            })),
          _path58 ||
            (_path58 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M189 141c5.53 9.51 11.16 18.61 17 28 1.41.2 2.33 2.06 3 3 .96 2.57 3.01 4.42 4 7h-41c.04 0 0 1 0 1 .71-.43 3.15 0 4 0h39c-5.08-8.34-10.42-16.4-15-25-.12-.47.08-1.51 0-2-.19-1.17-1.34-2.27-2-3-1.82-2.01-5.73-9.16-8-10-.31.2-1.04.69-1 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#C0E5E5',
              strokeOpacity: 0.99,
              strokeWidth: 0.3,
            })),
          _path59 ||
            (_path59 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M116 150c-2.76-2.88-6.37-5.06-10-7 .4 4.28 6 11.06 10 7Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#142222',
              strokeWidth: 0.3,
            })),
          _path60 ||
            (_path60 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M162 145c.47-.11 1.5 0 2 0 .85 0 3.29.43 4 0 0 0-.15-.95 0-1-2.31-.55-4.37.64-6 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#ABCBB2',
              strokeWidth: 0.3,
            })),
          _path61 ||
            (_path61 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M129 148c.27 2.33-3.41 4.22-5 5 8.53 2 18.55 3.73 27 0-.4-.04-2.73-1.35-3-2 .85-2.86 4.62-2.1 6-4-1.91.5-3.57-1.12-5-1-5.21 5.21-17.75 6.36-22-1 .43.92 1.88 1.98 2 3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#DBCCAF',
              strokeWidth: 0.3,
            })),
          _path62 ||
            (_path62 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M155 146c-.21.04-.68.8-1 1-1.38 1.9-5.15 1.14-6 4 .27.65 2.6 1.96 3 2 4.11-1.82 9.09-6.99 13-8-.5 0-1.53-.11-2 0-2.41.56-4.51.59-7 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#DBAA8C',
              strokeWidth: 0.3,
            })),
          _path63 ||
            (_path63 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M111 154c.59.21 1.49.7 2 1-.51-.55-.64-1.41-1-2-1.06-1.74-6.74-9.19-9.21-6.23-2.47 2.96 6.11 6.48 8.21 7.23Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#C2AFA8',
              strokeWidth: 0.3,
            })),
          _path64 ||
            (_path64 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M112 153c.36.59.49 1.45 1 2 1.42.84 3.2 1.74 2 3-1.8 1.89-6.33 1-9 1 .19.08.04 1.5 0 2-.05.69-1.15 2.5-1 3h7c-.25-.25 0-1 0-1 2.2-4.06 13.42-4.32 17-2 1.11.72 2.35 1.36 2 3h-7c.01 0 0 1 0 1h40c-.04 0 0-1 0-1-1.33-.03-2.67.02-4 0 3.62-6.61 15.17-2.03 21-5h-21c4.4-4.34 11.49-6.11 15-12-10.57 2.03-17.82 12.58-29 13-11.18.42-24.77-.8-34-7Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#CED5C5',
              strokeWidth: 0.3,
            })),
          _path65 ||
            (_path65 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M95 151c1.27-.01 1.87-.56 3-1-.96-1.99-2.35-.2-3 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#D5BEC1',
              strokeWidth: 0.3,
            })),
          _path66 ||
            (_path66 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M182 156c.01-.1 1.03-2.01 1-2-1.52-1.65-2.72-4.83-5-5-.2 2.99 2.88 4.81 4 7Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#C6B2A7',
              strokeWidth: 0.3,
            })),
          _path67 ||
            (_path67 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M95 151s-.89-.21-1 0c-1.94 4.54-6.15 8.01-7 13 1 .01 2-.02 3 0 1.3-.45 3.61 0 5 0-1.19-.4-1.79-4.1-4-3-.52-.97 1.42-3.96 2-2 .47.12 1 0 1 0 .49-.82 4.27-8.44 4-9-1.13.44-1.73.99-3 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#9B6E66',
              strokeWidth: 0.3,
            })),
          _path68 ||
            (_path68 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M122 153c-1.8-.73-3.1-2.31-5-3v4c1.98.47 3.63-.29 5-1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#192830',
              strokeWidth: 0.3,
            })),
          _path69 ||
            (_path69 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M184 154c.02.29 3.14 1.41 3 4 .23.16 0 1.5 0 2 .26.61 2.96 2.85 2 4 1.61-.42 3.09-1.6 5-1-2.49-3.86-5.36-7.46-8-11 .07-.25-1.96 1.96-2 2Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#31172B',
              strokeWidth: 0.3,
            })),
          _path70 ||
            (_path70 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M200 155c.3.74 2.5 1.45 3 2-.38-1.03-1.42-2.13-2-3-.21-.31-.78-.74-1-1 .08.49-.12 1.53 0 2Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#56A59E',
              strokeOpacity: 0.59,
              strokeWidth: 0.3,
            })),
          _path71 ||
            (_path71 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M115 158c1.2-1.26-.58-2.16-2-3-.51-.3-1.41-.79-2-1 1.27.86 2.37 3.52 4 4Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#6C5A55',
              strokeWidth: 0.3,
            })),
          _path72 ||
            (_path72 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M182 156c-.04.27.68 3.21 1 3 1.14-.2 1.65-.99 3-1-.42-1.21-.87-3.13-2-4 0 0-.6-.2-1 0 .03-.01-.99 1.9-1 2Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#51907F',
              strokeWidth: 0.3,
            })),
          _path73 ||
            (_path73 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M186 158h1c.14-2.59-2.98-3.71-3-4 1.13.87 1.58 2.79 2 4Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#243946',
              strokeWidth: 0.3,
            })),
          _path74 ||
            (_path74 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M203 157c.16.44 0 1 0 1 .78.81 1.37 1 2 2-.43-1.83-1.4-4.05-4-6 .58.87 1.62 1.97 2 3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#052234',
              strokeOpacity: 0.15,
              strokeWidth: 0.3,
            })),
          _path75 ||
            (_path75 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M176 180c1.18.38 2.66 3.59 4 4 3.29 0 6.38.42 9 1 .88.19 2.09 0 3 0h29c-4.87-7.42-8.66-16.75-15-23-1.27-1.26-2.48-2.09-3-4 0 0 .16-.56 0-1-.5-.55-2.7-1.26-3-2 4.58 8.6 9.92 16.66 15 25h-39Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#61CEC3',
              strokeOpacity: 0.95,
              strokeWidth: 0.3,
            })),
          _path76 ||
            (_path76 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M73 161c-1 1.66-1.27 3.33-2 5 2.19-2.8 5.82-3.42 5-8 0 0-.73-.25-1 0-.59.86-1.2 2.27-2 3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#699C97',
              strokeWidth: 0.3,
            })),
          _path77 ||
            (_path77 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M95 164h10c-.15-.5.95-2.31 1-3-2.47 1.1-11.77.61-13-2-.58-1.96-2.52 1.03-2 2 2.21-1.1 2.81 2.6 4 3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#DBAF91',
              strokeWidth: 0.3,
            })),
          _path78 ||
            (_path78 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M183 159c-.49.08-1.5 0-2 0-5.83 2.97-17.38-1.61-21 5 1.33.02 2.67-.03 4 0 5.24-.47 10.74 0 16 0h1c1.13-2.76 3.33-3.04 6-3 .25-.3 0-1 0-1 0-.5.23-1.84 0-2h-1c-1.35.01-1.86.8-3 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#84E0CB',
              strokeWidth: 0.3,
            })),
          _path79 ||
            (_path79 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M206 162c-.34-.36-.7-1.52-1-2-.63-1-1.22-1.19-2-2 .52 1.91 1.73 2.74 3 4Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#5DB7AF',
              strokeOpacity: 0.6,
              strokeWidth: 0.3,
            })),
          _path80 ||
            (_path80 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M106 161c.04-.5.19-1.92 0-2H94s-.53.12-1 0c1.23 2.61 10.53 3.1 13 2Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#FCEBD7',
              strokeWidth: 0.3,
            })),
          _path81 ||
            (_path81 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M112 163c3.41-.99 14.29-2.77 17-2-3.58-2.32-14.8-2.06-17 2Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#88DABE',
              strokeWidth: 0.3,
            })),
          _path82 ||
            (_path82 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M187 161c-.68.83-3.1 2.63-4 3h4c.5 0 1.53.12 2 0 .96-1.15-1.74-3.39-2-4 0 0 .25.7 0 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#686CAA',
              strokeWidth: 0.3,
            })),
          _path83 ||
            (_path83 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M64 172c-.65 1.27-1.14 2.88-2 4-1.09 2.74-.82 5.75-3 8h60c.5-.46 1.5-2.83 2-3-19.12-2.64-39.45-.1-59-1 .99-1.33 1.05-3.57 3-4 2.24-3.18 4.43-6.41 6-10 .73-1.67 1-3.34 2-5 0 0-.78-.25-1 0-3.04 3.38-5.85 6.81-8 11Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#67D5C4',
              strokeWidth: 0.3,
            })),
          _path84 ||
            (_path84 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M112 163s-.25.75 0 1h1c3.66 0 7.34.07 11 0h7c.35-1.64-.89-2.28-2-3-2.71-.77-13.59 1.01-17 2Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#BDF8EF',
              strokeWidth: 0.3,
            })),
          _path85 ||
            (_path85 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M181 164h2c.9-.37 3.32-2.17 4-3-2.67-.04-4.87.24-6 3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#71ABC8',
              strokeWidth: 0.3,
            })),
          _path86 ||
            (_path86 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M189 164c-.47.12-1.5 0-2 0-2.17.92-4.27.95-7 1-5.33.11-10.67 0-16 0h-58c-5.25 0-10.77-.49-16 0-2.93.27-5.69 1.3-9 1-.63.9-1.1 1.85-1 3h114c.99 0 2.01-.05 3 0-.59-.42-2.31-4.93-3-6-1.91-.6-3.39.58-5 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#14090F',
              strokeWidth: 0.3,
            })),
          _path87 ||
            (_path87 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M90 165c5.23-.49 10.75 0 16 0-.07-.01 0-1 0-1H95c-1.39 0-3.7-.45-5 0 0 0 .24.8 0 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#6D4C45',
              strokeWidth: 0.3,
            })),
          _path88 ||
            (_path88 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M106 165h7c.07-.01 0-1 0-1h-7s-.07.99 0 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#968784',
              strokeWidth: 0.3,
            })),
          _path89 ||
            (_path89 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M113 165h11s.01-1 0-1c-3.66.07-7.34 0-11 0 0 0 .07.99 0 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#6C8280',
              strokeWidth: 0.3,
            })),
          _path90 ||
            (_path90 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M164 165c5.33 0 10.67.11 16 0 .04 0 0-1 0-1-5.26 0-10.76-.47-16 0 0 0-.04 1 0 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#426866',
              strokeWidth: 0.3,
            })),
          _path91 ||
            (_path91 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M180 165c2.73-.05 4.83-.08 7-1h-7s.04 1 0 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#423250',
              strokeWidth: 0.3,
            })),
          _path92 ||
            (_path92 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M77 166c-.12.47.24 1.7 0 2 .36 3.25 5.36 4.02 8 3 2.64-1.02 10.04 1.85 12 0-.31-.24-.78-1.9-1-2H80c-.1-1.15.37-2.1 1-3 0 0-.2-.6 0-1-.16-.17-2.74-.08-3 0-.35.11-.91.65-1 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#AEE4DF',
              strokeWidth: 0.3,
            })),
          _path93 ||
            (_path93 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M72 173c.03-.11 1 0 1 0 1.17-2.19 2.58-3.23 4-5 .24-.3-.12-1.53 0-2-3.09 1.05-5.26 3.37-5 7Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#142926',
              strokeWidth: 0.3,
            })),
          _path94 ||
            (_path94 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M73 173c1.17.43 1.7.8 3 1 4.74.73 10.19 0 15 0h5c.24-.17.39-2.7 1-3-1.96 1.85-9.36-1.02-12 0-2.64 1.02-7.64.25-8-3-1.42 1.77-2.83 2.81-4 5Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#58C1AD',
              strokeWidth: 0.3,
            })),
          _path95 ||
            (_path95 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M97 171c4.64 3.58 11.34-.63 17 0s14.09 0 20 0h2c-.25-.25.19-1.92 0-2H96c.22.1.69 1.76 1 2Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#F9E5DA',
              strokeWidth: 0.3,
            })),
          _path96 ||
            (_path96 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M136 171c.5 0 1.53.11 2 0 1.79-.42 4.6-1.8 6-2h-8c.19.08-.25 1.75 0 2Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#D4F0EC',
              strokeWidth: 0.3,
            })),
          _path97 ||
            (_path97 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M138 171c.25.25.25 1.75 0 2 6.33 0 12.45 1.46 18 2h31c1.4-.44 3.25-3.3 5-4-.86-.23-3.19-1.84-4-2h-15c-5.67.55-12.4.54-18 0h-11c-1.4.2-4.21 1.58-6 2Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#7AD1BB',
              strokeWidth: 0.3,
            })),
          _path98 ||
            (_path98 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M173 169h-18c5.6.54 12.33.55 18 0Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#C7EBE4',
              strokeWidth: 0.3,
            })),
          _path99 ||
            (_path99 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M192 171c.43-.17 1.75.25 2 0s-.24-1.69 0-2h-6c.81.16 3.14 1.77 4 2Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#DAF3F0',
              strokeWidth: 0.3,
            })),
          _path100 ||
            (_path100 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M194 171c1.21-.66 4.46-.52 6-1-.93-.24-1.5-.92-3-1-.99-.05-2.01 0-3 0-.24.31.25 1.75 0 2Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#DCC8DB',
              strokeWidth: 0.3,
            })),
          _path101 ||
            (_path101 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M206 170c.55.58 1.47 1.49 2 2 0 0 .89-.21 1 0-.67-.94-1.59-2.8-3-3 0 0-.25.74 0 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#7F858E',
              strokeWidth: 0.3,
            })),
          _path102 ||
            (_path102 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M194 171c-.79.43-1.41 2.39-2 3 4.25-.61 8.73.46 13 0-.3-1.25-1.83-1.71-2-3-.27-.13-.65-.91-1-1-.47-.12-1.54-.14-2 0-1.54.48-4.79.34-6 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#63437B',
              strokeWidth: 0.3,
            })),
          _path103 ||
            (_path103 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M203 171c.17 1.29 1.7 1.75 2 3-4.27.46-8.75-.61-13 0-.25.25-.73.87-1 1 4.87.66 14.43 3.2 17-3a75.41 75.41 0 0 1-2-2c-.18 1.11-2.18 1.41-3 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#392440',
              strokeWidth: 0.3,
            })),
          _path104 ||
            (_path104 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M96 174h11c3.1 0 6.64.77 9 1 6.86 0 13.44-.23 20-1-.14-.05 0-1 0-1-.14-.15-2.03-2.01-2-2-5.91 0-14.34.63-20 0s-12.36 3.58-17 0c-.61.3-.76 2.83-1 3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#DE9483',
              strokeWidth: 0.3,
            })),
          _path105 ||
            (_path105 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M136 173c.16-.23 1.5 0 2 0 .25-.25.25-1.75 0-2-.47.11-1.5 0-2 0h-2c-.03-.01 1.86 1.85 2 2Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#B4AD89',
              strokeWidth: 0.3,
            })),
          _path106 ||
            (_path106 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M187 175c.95 0 3.17.42 4 0 .27-.13.75-.75 1-1 .59-.61 1.21-2.57 2-3-.25.25-1.57-.17-2 0-1.75.7-3.6 3.56-5 4Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#6188AC',
              strokeWidth: 0.3,
            })),
          _path107 ||
            (_path107 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M61 176c.22-.25 1 0 1 0 .86-1.12 1.35-2.73 2-4-.89 1.14-4.61 2.46-3 4Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#132E2C',
              strokeOpacity: 0.45,
              strokeWidth: 0.3,
            })),
          _path108 ||
            (_path108 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M76 175c-.04 0 0-1 0-1-1.3-.2-1.83-.57-3-1 0 0-.97-.11-1 0-.53 2.19 2.57 2.56 4 2Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#475063',
              strokeWidth: 0.3,
            })),
          _path109 ||
            (_path109 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M136 174c.69.22 2.63.92 3 1 5.57.48 11.4 0 17 0-5.55-.54-11.67-2-18-2-.5 0-1.84-.23-2 0 0 0-.14.95 0 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#D3D9CD',
              strokeWidth: 0.3,
            })),
          _path110 ||
            (_path110 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M76 175c5.08.46 10.63-.54 15-1-4.81 0-10.26.73-15 0 0 0-.04 1 0 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#3F6D72',
              strokeWidth: 0.3,
            })),
          _path111 ||
            (_path111 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M116 175c-2.36-.23-5.9-1-9-1 2.36.23 5.9 1 9 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#81605A',
              strokeWidth: 0.3,
            })),
          _path112 ||
            (_path112 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M139 175c-.37-.08-2.31-.78-3-1 .68.12 1.75.89 3 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#5D5855',
              strokeWidth: 0.3,
            })),
          _path113 ||
            (_path113 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M68 185h50c.25-.27 0-1 0-1H59c2.18-2.25 1.91-5.26 3-8 0 0-.78-.25-1 0-2.11 2.77-3.41 5.92-5 9h12Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#60A9A5',
              strokeOpacity: 0.87,
              strokeWidth: 0.3,
            })),
          _path114 ||
            (_path114 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M121 181c.34.05 2.78.22 3 0-.36-.23-.76-1.89-1-2H65c-.07-.99.09-2.01 0-3-1.95.43-2.01 2.67-3 4 19.55.9 39.88-1.64 59 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#D2F5F1',
              strokeWidth: 0.3,
            })),
          _path115 ||
            (_path115 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M124 181c7.47 4.81 24.48 0 33 0h5c2.55-1.89 6.72-.71 10-1 0 0 .04-1 0-1h-49c.24.11.64 1.77 1 2Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#F5E5D7',
              strokeWidth: 0.3,
            })),
          _path116 ||
            (_path116 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M162 181h10c.25-.25 0-1 0-1-3.28.29-7.45-.89-10 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#BEBBDC',
              strokeWidth: 0.3,
            })),
          _path117 ||
            (_path117 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M172 181c2.9-.15 1.79 2.49 3 3h5c-1.34-.41-2.82-3.62-4-4-.85 0-3.29-.43-4 0 0 0 .25.75 0 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#4A9BB3',
              strokeWidth: 0.3,
            })),
          _path118 ||
            (_path118 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M119 184c1.41-.55 3.94-2.82 5-3-.22.22-2.66.05-3 0-.5.17-1.5 2.54-2 3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#99A685',
              strokeWidth: 0.3,
            })),
          _path119 ||
            (_path119 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M119 184h-1s.25.73 0 1h41c-.15-.05 0-1 0-1-.18-.49-1.67-2.84-2-3-8.52 0-25.53 4.81-33 0-1.06.18-3.59 2.45-5 3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#AA7C6D',
              strokeOpacity: 0.91,
              strokeWidth: 0.3,
            })),
          _path120 ||
            (_path120 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M159 184c.71-.43 3.15 0 4 0-.49-.45-1.98-2.32-2-3h-4c.33.16 1.82 2.51 2 3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#8B6C7E',
              strokeWidth: 0.3,
            })),
          _path121 ||
            (_path121 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M163 184h1c2.63 0 5.38-.24 8 0-.55-.25-1.31-2.48-1-3h-10c.02.68 1.51 2.55 2 3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#635497',
              strokeWidth: 0.3,
            })),
          _path122 ||
            (_path122 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M172 184c.24-.26 2.61 0 3 0-1.21-.51-.1-3.15-3-3h-1c-.31.52.45 2.75 1 3Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#447095',
              strokeWidth: 0.3,
            })),
          _path123 ||
            (_path123 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M159 185h5c-.23-.34 0-1 0-1h-1c-.85 0-3.29-.43-4 0 0 0-.15.95 0 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#896A7A',
              strokeOpacity: 0.76,
              strokeWidth: 0.3,
            })),
          _path124 ||
            (_path124 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M164 185h8c.1-.02 0-1 0-1-2.62-.24-5.37 0-8 0 0 0-.23.66 0 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#635495',
              strokeOpacity: 0.77,
              strokeWidth: 0.3,
            })),
          _path125 ||
            (_path125 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M172 185h10c2.28 0 4.74-.26 7 0-2.62-.58-5.71-1-9-1h-5c-.39 0-2.76-.26-3 0 0 0 .1.98 0 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#416989',
              strokeOpacity: 0.76,
              strokeWidth: 0.3,
            })),
          _path126 ||
            (_path126 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M115 186c-.04 0 0-1 0-1H68c14.77 1.43 31.43 1 47 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#001A22',
              strokeOpacity: 0.12,
              strokeWidth: 0.3,
            })),
          _path127 ||
            (_path127 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M115 186h51c-.04 0 0-1 0-1h-51s-.04 1 0 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#1C0C15',
              strokeOpacity: 0.18,
              strokeWidth: 0.3,
            })),
          _path128 ||
            (_path128 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M166 186c5.39 0 11.29-.55 16-1h-16s-.04 1 0 1Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#201535',
              strokeOpacity: 0.08,
              strokeWidth: 0.3,
            })),
          _path129 ||
            (_path129 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M192 185c-.91 0-2.12.19-3 0 1.1.13 1.84.14 3 0Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: '#0E0338',
              strokeOpacity: 0.02,
              strokeWidth: 0.3,
            })),
          _path130 ||
            (_path130 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M0 270h270V0H0v270M154 82c5.84 8.77 11.63 19.87 18 28 .52.66 1.45 1.29 2 2 1.08 1.1 2.12 1.68 3 3 1.46 2.19 2.04 4.66 3 7 .4.72 1.42 2.21 2 3 4 3.95 7 9.15 10 14 2.2 3.56 3.91 7.58 6 11 .66.73 1.81 1.83 2 3 .22.26.79.69 1 1 2.6 1.95 3.57 4.17 4 6 .3.48.66 1.64 1 2 6.34 6.25 10.13 15.58 15 23h-29c-1.16.14-1.9.13-3 0-2.26-.26-4.72 0-7 0-4.71.45-10.61 1-16 1h-51c-15.57 0-32.23.43-47-1H56c1.59-3.08 2.89-6.23 5-9-1.61-1.54 2.11-2.86 3-4 2.15-4.19 4.96-7.62 8-11 1.12-7.63 8.05-13.72 11.75-20.25 3.71-6.52 7.91-13.56 12.25-19.75 1.27-2.5 1.45-2.2 3-4 12.63-20.08 25.97-39.59 38-60 7.6 6.84 11.54 16.57 17 25Z',
              fill: 'none',
              fillOpacity: 0,
              stroke: 'None',
            })),
          _path131 ||
            (_path131 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M99 117c-.92 1.47-2.13 2.76-3 4-4.34 6.19-8.54 13.23-12.25 19.75-3.7 6.53-10.63 12.62-11.75 20.25.22-.25 1 0 1 0 .8-.73 1.41-2.14 2-3 9.46-13.66 18.29-27.68 28-41 3.9-7.08 8.6-13.52 13-20 6.01-8.85 10.93-24.04 19-31 3.2-2.76 5.96 2.47 8.25 5.75 2.3 3.27 4.38 7.9 6.75 11.25.73.78 2.33 1.27 3 2 .01-1.28.98-1.85 1-3-5.46-8.43-9.4-18.16-17-25-12.03 20.41-25.37 39.92-38 60Z',
              fill: '#D4CBB0',
              fillOpacity: 0.95,
              stroke: 'None',
            })),
          _path132 ||
            (_path132 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M135 66c.98-.51.78 3.02 2 5 1.95 3.17 4.59 8.16 7 11 .6.71 1.41 1.23 2 2 1.83 2.39 3.21 5.44 5 8 .81 1.15 2.03 2.82 3 4 1.52 1.85 2.83 2.75 4 5 3.61 4.31 6.83 7.6 9 13 .78 1.94.96 4.07 2 6 .67 1.23 2.2 3.88 3 5 10.37 14.52 20.11 29.97 30 45 .35.09.73.87 1 1 .82.41 2.82.11 3-1-.25-.26 0-1 0-1-5.84-9.39-11.47-18.49-17-28-.47-.81-.66-.89-1-2-.83-1.35-2.72-2.02-3-4-1.75-.24-1.59-1.84-2-3-3.45-4.99-7.72-9.98-11-15-1.59-1.5-1.85-.62-3-3-.49-1.02-1.19-1.4-1-3 .06-.49 0-1 0-1-3.43-8.74-11.83-15.22-15-24-1.41-.2-2.33-2.06-3-3-2.37-3.35-4.45-7.98-6.75-11.25-2.29-3.28-5.05-8.51-8.25-5.75Z',
              fill: '#221519',
              stroke: 'None',
            })),
          _path133 ||
            (_path133 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M116 97c2.29-1.81 5.85-3.56 8-6 3.16-5.44 12.02-13.66 13-20-1.22-1.98-1.02-5.51-2-5-8.07 6.96-12.99 22.15-19 31Z',
              fill: '#241619',
              fillOpacity: 0.73,
              stroke: 'None',
            })),
          _path134 ||
            (_path134 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M124 91c-3.08 5.3-12.44 14.79-12 21 .34-.23 1 0 1 0 .5 0 1.74.25 2 0 7.2-12.13 14.84-23.87 22-36 1.9 1.99 3.38 4.66 5 7 .13-.3 1.68-1 2-1-2.41-2.84-5.05-7.83-7-11-.98 6.34-9.84 14.56-13 20Z',
              fill: '#D8D3B1',
              stroke: 'None',
            })),
          _path135 ||
            (_path135 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M115 112c-5.6 9.44-11.5 18.54-17 28-1.37 3.53-2.36 7.49-4 11 .11-.21 1 0 1 0 .65-1.2 2.04-2.99 3-1 .27.56-3.51 8.18-4 9h12c2.67 0 7.2.89 9-1-1.63-.48-2.73-3.14-4-4-2.1-.75-10.68-4.27-8.21-7.23 2.47-2.96 8.15 4.49 9.21 6.23 9.23 6.2 22.82 7.42 34 7 11.18-.42 18.43-10.97 29-13-3.51 5.89-10.6 7.66-15 12h21c.5 0 1.51.08 2 0-.32.21-1.04-2.73-1-3-1.12-2.19-4.2-4.01-4-7 2.28.17 3.48 3.35 5 5 .4-.2 1 0 1 0 .04-.04 2.07-2.25 2-2-6.48-8.71-14.21-19.27-19-29-.76-1.54-1-3.44-2-5-.8-1.25-2.26-2.01-3-3 .11.89-.28 2.15 0 3 .58 1.74 2.88 2.73 2 5-2.62-.86-6-1.23-8-3-9.24-2.69-28.14-4.8-37 0-1.12 1.13-1.03 2.06-3 2-4.22-.13 2.54-9.89 5-11 1.31-8.9 12.27-22.92 23-18 1.48.49 2.21 1.89 3 3 2 2.82 3.2 6.08 5 9 1.21 1.96 3.14 3.62 4 6 .67-.15 3.43.67 4 1-3.27-4.56-4.98-10.28-8-15-.54-.84-1.37-2.04-2-3-1.72-2.61-4.11-5.36-6-8-.64-.9-1.37-1.92-2-3-1.62-2.34-3.1-5.01-5-7-7.16 12.13-14.8 23.87-22 36Z',
              fill: '#201416',
              stroke: 'None',
            })),
          _path136 ||
            (_path136 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M142 83c.63 1.08 1.36 2.1 2 3 .28-1.22 1.86-.59 2-2-.59-.77-1.4-1.29-2-2-.32 0-1.87.7-2 1Z',
              fill: '#CCBBB6',
              stroke: 'None',
            })),
          _path137 ||
            (_path137 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M153 85v1c3.17 8.78 11.57 15.26 15 24-.05.06 1.95.97 2 1 .33-.02.99-1.55 2-1-6.37-8.13-12.16-19.23-18-28-.02 1.15-.99 1.72-1 3Z',
              fill: '#74C1C0',
              fillOpacity: 0.91,
              stroke: 'None',
            })),
          _path138 ||
            (_path138 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M153 86v-1c-.67-.73-2.27-1.22-3-2 .67.94 1.59 2.8 3 3Z',
              fill: '#6C625C',
              stroke: 'None',
            })),
          _path139 ||
            (_path139 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M144 86c1.89 2.64 4.28 5.39 6 8 .08-.83.98-1.09 1-2-1.79-2.56-3.17-5.61-5-8-.14 1.41-1.72.78-2 2Z',
              fill: '#AF8A85',
              stroke: 'None',
            })),
          _path140 ||
            (_path140 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M116 97c-4.4 6.48-9.1 12.92-13 20-3.64 6.6-8.25 15.45-12.75 21.25C85.74 144.04 82.9 154.87 76 158c.82 4.58-2.81 5.2-5 8-1.57 3.59-3.76 6.82-6 10 .09.99-.07 2.01 0 3h148c-.99-2.58-3.04-4.43-4-7-.11-.21-1 0-1 0-2.57 6.2-12.13 3.66-17 3-.83.42-3.05 0-4 0h-31c-5.6 0-11.43.48-17 0-1.25-.11-2.32-.88-3-1-6.56.77-13.14 1-20 1-3.1 0-6.64-.77-9-1H91c-4.37.46-9.92 1.46-15 1-1.43.56-4.53.19-4-2-.26-3.63 1.91-5.95 5-7 .09-.35.65-.89 1-1 2.31-3.51 5.03-7.54 7-11 6.29-11.05 12.91-22.23 20-33 .69-1.04 1.07-1.29 2-2 1.98-2.27 2.41-5.23 5-7-.44-6.21 8.92-15.7 12-21-2.15 2.44-5.71 4.19-8 6Z',
              fill: '#1E1718',
              stroke: 'None',
            })),
          _path141 ||
            (_path141 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M150 94c.63.96 1.46 2.16 2 3 .23 0 1.09-1.13 2-1-.97-1.18-2.19-2.85-3-4-.02.91-.92 1.17-1 2Z',
              fill: '#9A998D',
              stroke: 'None',
            })),
          _path142 ||
            (_path142 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M121 111c.41-.19 1 0 1 0 1.62-2.48 4.27-2.93 6-5 2.6-5.49 4.07-8.9 11-9 1.19-.02 2.86.31 4 0 .75-.21 2.01-1.13 2-2-.24-.24-.84-1.93-1-2-10.73-4.92-21.69 9.1-23 18Z',
              fill: '#D4CEB7',
              stroke: 'None',
            })),
          _path143 ||
            (_path143 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M145 95c.44.44 1.65.61 2 1-.79-1.11-1.52-2.51-3-3 .16.07.76 1.76 1 2Z',
              fill: '#2A3D41',
              stroke: 'None',
            })),
          _path144 ||
            (_path144 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M143 97c-.16.52 1.65 3.45 2 4 1.91 2.5 5.1 2.56 7 4-1.8-2.92-3-6.18-5-9-.35-.39-1.56-.56-2-1 .01.87-1.25 1.79-2 2Z',
              fill: '#64B3BA',
              stroke: 'None',
            })),
          _path145 ||
            (_path145 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M152 97c3.02 4.72 4.73 10.44 8 15 1 1.4 1.75.89 2 3 .74.99 2.2 1.75 3 3 1.19 1.04 2.99 1.23 4 2-1.04-1.93-1.22-4.06-2-6-2.62-4.46-6.5-8.22-9-13-1.17-2.25-2.48-3.15-4-5-.91-.13-1.77 1-2 1Z',
              fill: '#7BC0BB',
              stroke: 'None',
            })),
          _path146 ||
            (_path146 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M128 106c-1.49 3.15-2.88 7.26-5 10 3.92-1.73 10.61-1.39 15-1 4.39.39 12.15-1.06 16 1-.58-1.36-1.21-4.56-3-7-.87-1.19-2.06-2.71-3-4-1.57-1.79-7.09-7.53-9-8-6.93.1-8.4 3.51-11 9Z',
              fill: '#1F0D15',
              stroke: 'None',
            })),
          _path147 ||
            (_path147 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M148 105c-.98-1.35-2.13-2.63-3-4-.35-.55-2.16-3.48-2-4-1.14.31-2.81-.02-4 0 1.91.47 7.43 6.21 9 8Z',
              fill: '#222A2D',
              stroke: 'None',
            })),
          _path148 ||
            (_path148 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M148 105c.94 1.29 2.13 2.81 3 4 1.38 1.2 3.5 1.89 5 3-.23-.16 0-1 0-1-.86-2.38-2.79-4.04-4-6-1.9-1.44-5.09-1.5-7-4 .87 1.37 2.02 2.65 3 4Z',
              fill: '#4D728A',
              stroke: 'None',
            })),
          _path149 ||
            (_path149 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M167 114c-2.17-5.4-5.39-8.69-9-13 2.5 4.78 6.38 8.54 9 13Z',
              fill: '#254446',
              stroke: 'None',
            })),
          _path150 ||
            (_path150 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M122 111c-1.14 4.08-5.63 6.64-6 11 1.97.06 1.88-.87 3-2 1.27-1.29 3.02-2.73 4-4 2.12-2.74 3.51-6.85 5-10-1.73 2.07-4.38 2.52-6 5Z',
              fill: '#75564E',
              stroke: 'None',
            })),
          _path151 ||
            (_path151 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M154 116c.11.26 1.9 3.88 2 4 2 1.77 5.38 2.14 8 3 .88-2.27-1.42-3.26-2-5-1.38-2.18-3.8-4.46-6-6-1.5-1.11-3.62-1.8-5-3 1.79 2.44 2.42 5.64 3 7Z',
              fill: '#5B4269',
              stroke: 'None',
            })),
          _path152 ||
            (_path152 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M168 111c2.71 1.89 4.77 5.1 8 6-.17-.43 0-1 0-1-2.14-1.5-4.03-3.69-6-5-.05-.03-2.05-.94-2-1 0 0 .06.51 0 1Z',
              fill: '#526A93',
              stroke: 'None',
            })),
          _path153 ||
            (_path153 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M170 111c1.97 1.31 3.86 3.5 6 5-.36-.73-3.85-5.92-4-6-1.01-.55-1.67.98-2 1Z',
              fill: '#75ACCA',
              stroke: 'None',
            })),
          _path154 ||
            (_path154 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M176 116s-.17.57 0 1c1.55 3.94 4.49 7.12 6 11 1.62 2.36 2.7 4.34 4 7 1.26.98 1.58 2.64 2 4 .34 1.11.53 1.19 1 2-.04-.31.69-.8 1-1 .52-.33.93-1.47 2-1-3-4.85-6-10.05-10-14-1.35-1.34-1.27-1.22-2-3-.96-2.34-1.54-4.81-3-7-.84-1.03-2.16-1.91-3-3-.55-.71-1.48-1.34-2-2 .15.08 3.64 5.27 4 6Z',
              fill: '#659BB7',
              fillOpacity: 0.82,
              stroke: 'None',
            })),
          _path155 ||
            (_path155 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M116 122c.37-4.36 4.86-6.92 6-11 0 0-.59-.19-1 0-2.46 1.11-9.22 10.87-5 11Z',
              fill: '#A88E89',
              stroke: 'None',
            })),
          _path156 ||
            (_path156 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M156 112c2.2 1.54 4.62 3.82 6 6-.28-.85.11-2.11 0-3-.25-2.11-1-1.6-2-3-.57-.33-3.33-1.15-4-1 0 0-.23.84 0 1Z',
              fill: '#232444',
              stroke: 'None',
            })),
          _path157 ||
            (_path157 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M169 114c.12.12 2.03 1.52 3 3 3.28 5.02 7.55 10.01 11 15-.44-1.23-.51-2.75-1-4-1.51-3.88-4.45-7.06-6-11-3.23-.9-5.29-4.11-8-6-.19 1.6.51 1.98 1 3Z',
              fill: '#57436E',
              stroke: 'None',
            })),
          _path158 ||
            (_path158 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M107 119c2.3-1.76 5.68-3.98 6-7 0 0-.66-.23-1 0-2.59 1.77-3.02 4.73-5 7Z',
              fill: '#C7AEA4',
              stroke: 'None',
            })),
          _path159 ||
            (_path159 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M107 119c-.93.71-1.31.96-2 2-2.98 11.07-11.93 23.17-20 33-1.97 3.46-4.69 7.49-7 11 .26-.08 2.84-.17 3 0 4.21-8.6 12.25-16.83 17-25 5.5-9.46 11.4-18.56 17-28-.26.25-1.5 0-2 0-.32 3.02-3.7 5.24-6 7Z',
              fill: '#93695B',
              stroke: 'None',
            })),
          _path160 ||
            (_path160 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M177 115c-.88-1.32-1.92-1.9-3-3 .84 1.09 2.16 1.97 3 3Z',
              fill: '#446376',
              fillOpacity: 0.29,
              stroke: 'None',
            })),
          _path161 ||
            (_path161 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M169 114c1.15 2.38 1.41 1.5 3 3-.97-1.48-2.88-2.88-3-3Z',
              fill: '#24173F',
              stroke: 'None',
            })),
          _path162 ||
            (_path162 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M123 116c-.98 1.27-2.73 2.71-4 4 8.86-4.8 27.76-2.69 37 0-.1-.12-1.89-3.74-2-4-3.85-2.06-11.61-.61-16-1-4.39-.39-11.08-.73-15 1Z',
              fill: '#DBD5C7',
              stroke: 'None',
            })),
          _path163 ||
            (_path163 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M96 121c.87-1.24 2.08-2.53 3-4-1.55 1.8-1.73 1.5-3 4Z',
              fill: '#372A25',
              fillOpacity: 0.55,
              stroke: 'None',
            })),
          _path164 ||
            (_path164 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M75 158c.27-.25 1 0 1 0 6.9-3.13 9.74-13.96 14.25-19.75 4.5-5.8 9.11-14.65 12.75-21.25-9.71 13.32-18.54 27.34-28 41Z',
              fill: '#8A6C5D',
              stroke: 'None',
            })),
          _path165 ||
            (_path165 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M167 123c1.52 1.78 3.39 1.07 5 2-.8-1.12-2.33-3.77-3-5-1.01-.77-2.81-.96-4-2 1 1.56 1.24 3.46 2 5Z',
              fill: '#A88C88',
              stroke: 'None',
            })),
          _path166 ||
            (_path166 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M135 122c3.52-.43 6.82.11 10 1 10.39 2.9 19.16 10.73 26 19-.55 1.01-1.98 1.44-3 2-.15.05 0 1 0 1 3.61.8 3.77-3.02 6-4-1.17-.69-2.06-1.99-3-3-4.26-4.55-8.73-8.68-13-13-5.69-5.74-7.98-3.28-13.93-4.07-5.94-.8-4.82-1.9-9.07 1.07Z',
              fill: '#192931',
              stroke: 'None',
            })),
          _path167 ||
            (_path167 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M85 154c8.07-9.83 17.02-21.93 20-33-7.09 10.77-13.71 21.95-20 33Z',
              fill: '#AF9286',
              stroke: 'None',
            })),
          _path168 ||
            (_path168 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M133 123c-.75.73-1.27 2.38-2 3 7.18-5 19.21.49 21 9 .8 3.8-.32 8.32-3 11 1.43-.12 3.09 1.5 5 1 .32-.2.79-.96 1-1-1.3-.21-2.69.16-4 0 5.77-7.94-.17-17.16-6-23-3.18-.89-6.48-1.43-10-1-1.28.16-1.2.23-2 1Z',
              fill: '#B8D7D2',
              stroke: 'None',
            })),
          _path169 ||
            (_path169 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M182 125c-.58-.79-1.6-2.28-2-3 .73 1.78.65 1.66 2 3Z',
              fill: '#668FA8',
              fillOpacity: 0.62,
              stroke: 'None',
            })),
          _path170 ||
            (_path170 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M104 139c1.59-1.46 3.51-3.51 5-5 .84-1.08 2.01-2.02 3-3 2.38-3.58 7.58-4.42 10-8-9.36 1.99-19.02 9.63-22 19 1.42-.77 2.66-2.02 4-3Z',
              fill: '#D5D2BB',
              stroke: 'None',
            })),
          _path171 ||
            (_path171 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M118 130c-4.4 3.2-8.16 8.32-12 12 0 0-.05.5 0 1 3.63 1.94 7.24 4.12 10 7 0 0 .56-.16 1 0 1.9.69 3.2 2.27 5 3 .39-.21 1.53-.11 2 0 1.59-.78 5.27-2.67 5-5-6.82-4.47-7.09-16.69 0-21 .52-.32 1.59-.65 2-1 .73-.62 1.25-2.27 2-3-5.17 1.77-10.58 3.78-15 7Z',
              fill: '#60D4C2',
              stroke: 'None',
            })),
          _path172 ||
            (_path172 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M155 146c2.49-.41 4.59-.44 7-1 1.63-.36 3.69-1.55 6-1 1.02-.56 2.45-.99 3-2-6.84-8.27-15.61-16.1-26-19 5.83 5.84 11.77 15.06 6 23 1.31.16 2.7-.21 4 0Z',
              fill: '#63D8C4',
              stroke: 'None',
            })),
          _path173 ||
            (_path173 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M186 152c2.64 3.54 5.51 7.14 8 11 .69 1.07 2.41 5.58 3 6 1.5.08 2.07.76 3 1 .46-.14 1.53-.12 2 0-9.89-15.03-19.63-30.48-30-45-1.61-.93-3.48-.22-5-2 4.79 9.73 12.52 20.29 19 29Z',
              fill: '#8A6160',
              stroke: 'None',
            })),
          _path174 ||
            (_path174 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M131 126c-.53.37-2.63 2.52-3 3-2.35 4.06-3.05 8.02-2 12 .16-.87 5.76 4.53 8.23 5.77 2.47 1.24 10.85 1.45 13.77-.77-2.44-3.74.69-8.9 4-11-1.79-8.51-13.82-14-21-9Z',
              fill: '#21111B',
              stroke: 'None',
            })),
          _path175 ||
            (_path175 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M171 138c.87.64 2.9 1.29 4 2 .35.23 1 0 1 0-5.2-8.41-9.86-10.21-18-15 4.27 4.32 8.74 8.45 13 13Z',
              fill: '#77BBB1',
              stroke: 'None',
            })),
          _path176 ||
            (_path176 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M129 127c-.52.52-.66 1.41-1 2 .37-.48 2.47-2.63 3-3-.41.35-1.48.68-2 1Z',
              fill: '#676F71',
              stroke: 'None',
            })),
          _path177 ||
            (_path177 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M129 148c-.12-1.02-1.57-2.08-2-3-.53-1.14-.67-2.74-1-4-1.05-3.98-.35-7.94 2-12 .34-.59.48-1.48 1-2-7.09 4.31-6.82 16.53 0 21Z',
              fill: '#BFE1DD',
              stroke: 'None',
            })),
          _path178 ||
            (_path178 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M183 132c.41 1.16.25 2.76 2 3 .49.07 1 0 1 0-1.3-2.66-2.38-4.64-4-7 .49 1.25.56 2.77 1 4Z',
              fill: '#506091',
              stroke: 'None',
            })),
          _path179 ||
            (_path179 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M112 131c-.99.98-2.16 1.92-3 3-.67.86-1.28 2.28-2 3-.82 1.68-1.2 3.03-1 5 3.84-3.68 7.6-8.8 12-12-1.39.59-5.72.84-6 1Z',
              fill: '#1A2726',
              stroke: 'None',
            })),
          _path180 ||
            (_path180 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M104 139c.87-.64 2.2-1.2 3-2 .72-.72 1.33-2.14 2-3-1.49 1.49-3.41 3.54-5 5Z',
              fill: '#6C655F',
              stroke: 'None',
            })),
          _path181 ||
            (_path181 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M126 141c.33 1.26.47 2.86 1 4 4.25 7.36 16.79 6.21 22 1 2.68-2.68 3.8-7.2 3-11-3.31 2.1-6.44 7.26-4 11-2.92 2.22-11.3 2.01-13.77.77-2.47-1.24-8.07-6.64-8.23-5.77Z',
              fill: '#211C1D',
              stroke: 'None',
            })),
          _path182 ||
            (_path182 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M188 139c-.42-1.36-.74-3.02-2-4 0 0-.51.07-1 0 .28 1.98 2.17 2.65 3 4Z',
              fill: '#8C89A4',
              stroke: 'None',
            })),
          _path183 ||
            (_path183 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M174 141s.75.25 1 0c-.2-.4 0-1 0-1-1.1-.71-3.13-1.36-4-2 .94 1.01 1.83 2.31 3 3Z',
              fill: '#4C7575',
              stroke: 'None',
            })),
          _path184 ||
            (_path184 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M190 140c2.27.84 6.18 7.99 8 10-2.09-3.42-3.8-7.44-6-11-1.07-.47-1.48.67-2 1Z',
              fill: '#65C2B9',
              fillOpacity: 0.82,
              stroke: 'None',
            })),
          _path185 ||
            (_path185 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M81 165c-.2.4 0 1 0 1 3.31.3 6.07-.73 9-1 .24-.2 0-1 0-1-1-.02-2 .01-3 0 .85-4.99 5.06-8.46 7-13 1.64-3.51 2.63-7.47 4-11-4.75 8.17-12.79 16.4-17 25Z',
              fill: '#371918',
              stroke: 'None',
            })),
          _path186 ||
            (_path186 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M175 141c.75 1.68 2.43 3.04 4 4-.15-1.75-1.66-4.02-3-5 0 0-.65.23-1 0 0 0-.2.6 0 1Z',
              fill: '#B9B6BE',
              stroke: 'None',
            })),
          _path187 ||
            (_path187 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M189 141c5.53 9.51 11.16 18.61 17 28 1.41.2 2.33 2.06 3 3 .96 2.57 3.01 4.42 4 7h-41c.04 0 0 1 0 1 .71-.43 3.15 0 4 0h39c-5.08-8.34-10.42-16.4-15-25-.12-.47.08-1.51 0-2-.19-1.17-1.34-2.27-2-3-1.82-2.01-5.73-9.16-8-10-.31.2-1.04.69-1 1Z',
              fill: '#C0E5E5',
              fillOpacity: 0.99,
              stroke: 'None',
            })),
          _path188 ||
            (_path188 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M116 150c-2.76-2.88-6.37-5.06-10-7 .4 4.28 6 11.06 10 7Z',
              fill: '#142222',
              stroke: 'None',
            })),
          _path189 ||
            (_path189 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M162 145c.47-.11 1.5 0 2 0 .85 0 3.29.43 4 0 0 0-.15-.95 0-1-2.31-.55-4.37.64-6 1Z',
              fill: '#ABCBB2',
              stroke: 'None',
            })),
          _path190 ||
            (_path190 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M129 148c.27 2.33-3.41 4.22-5 5 8.53 2 18.55 3.73 27 0-.4-.04-2.73-1.35-3-2 .85-2.86 4.62-2.1 6-4-1.91.5-3.57-1.12-5-1-5.21 5.21-17.75 6.36-22-1 .43.92 1.88 1.98 2 3Z',
              fill: '#DBCCAF',
              stroke: 'None',
            })),
          _path191 ||
            (_path191 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M155 146c-.21.04-.68.8-1 1-1.38 1.9-5.15 1.14-6 4 .27.65 2.6 1.96 3 2 4.11-1.82 9.09-6.99 13-8-.5 0-1.53-.11-2 0-2.41.56-4.51.59-7 1Z',
              fill: '#DBAA8C',
              stroke: 'None',
            })),
          _path192 ||
            (_path192 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M111 154c.59.21 1.49.7 2 1-.51-.55-.64-1.41-1-2-1.06-1.74-6.74-9.19-9.21-6.23-2.47 2.96 6.11 6.48 8.21 7.23Z',
              fill: '#C2AFA8',
              stroke: 'None',
            })),
          _path193 ||
            (_path193 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M112 153c.36.59.49 1.45 1 2 1.42.84 3.2 1.74 2 3-1.8 1.89-6.33 1-9 1 .19.08.04 1.5 0 2-.05.69-1.15 2.5-1 3h7c-.25-.25 0-1 0-1 2.2-4.06 13.42-4.32 17-2 1.11.72 2.35 1.36 2 3h-7c.01 0 0 1 0 1h40c-.04 0 0-1 0-1-1.33-.03-2.67.02-4 0 3.62-6.61 15.17-2.03 21-5h-21c4.4-4.34 11.49-6.11 15-12-10.57 2.03-17.82 12.58-29 13-11.18.42-24.77-.8-34-7Z',
              fill: '#CED5C5',
              stroke: 'None',
            })),
          _path194 ||
            (_path194 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M95 151c1.27-.01 1.87-.56 3-1-.96-1.99-2.35-.2-3 1Z',
              fill: '#D5BEC1',
              stroke: 'None',
            })),
          _path195 ||
            (_path195 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M182 156c.01-.1 1.03-2.01 1-2-1.52-1.65-2.72-4.83-5-5-.2 2.99 2.88 4.81 4 7Z',
              fill: '#C6B2A7',
              stroke: 'None',
            })),
          _path196 ||
            (_path196 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M95 151s-.89-.21-1 0c-1.94 4.54-6.15 8.01-7 13 1 .01 2-.02 3 0 1.3-.45 3.61 0 5 0-1.19-.4-1.79-4.1-4-3-.52-.97 1.42-3.96 2-2 .47.12 1 0 1 0 .49-.82 4.27-8.44 4-9-1.13.44-1.73.99-3 1Z',
              fill: '#9B6E66',
              stroke: 'None',
            })),
          _path197 ||
            (_path197 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M122 153c-1.8-.73-3.1-2.31-5-3v4c1.98.47 3.63-.29 5-1Z',
              fill: '#192830',
              stroke: 'None',
            })),
          _path198 ||
            (_path198 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M184 154c.02.29 3.14 1.41 3 4 .23.16 0 1.5 0 2 .26.61 2.96 2.85 2 4 1.61-.42 3.09-1.6 5-1-2.49-3.86-5.36-7.46-8-11 .07-.25-1.96 1.96-2 2Z',
              fill: '#31172B',
              stroke: 'None',
            })),
          _path199 ||
            (_path199 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M200 155c.3.74 2.5 1.45 3 2-.38-1.03-1.42-2.13-2-3-.21-.31-.78-.74-1-1 .08.49-.12 1.53 0 2Z',
              fill: '#56A59E',
              fillOpacity: 0.59,
              stroke: 'None',
            })),
          _path200 ||
            (_path200 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M115 158c1.2-1.26-.58-2.16-2-3-.51-.3-1.41-.79-2-1 1.27.86 2.37 3.52 4 4Z',
              fill: '#6C5A55',
              stroke: 'None',
            })),
          _path201 ||
            (_path201 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M182 156c-.04.27.68 3.21 1 3 1.14-.2 1.65-.99 3-1-.42-1.21-.87-3.13-2-4 0 0-.6-.2-1 0 .03-.01-.99 1.9-1 2Z',
              fill: '#51907F',
              stroke: 'None',
            })),
          _path202 ||
            (_path202 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M186 158h1c.14-2.59-2.98-3.71-3-4 1.13.87 1.58 2.79 2 4Z',
              fill: '#243946',
              stroke: 'None',
            })),
          _path203 ||
            (_path203 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M203 157c.16.44 0 1 0 1 .78.81 1.37 1 2 2-.43-1.83-1.4-4.05-4-6 .58.87 1.62 1.97 2 3Z',
              fill: '#052234',
              fillOpacity: 0.15,
              stroke: 'None',
            })),
          _path204 ||
            (_path204 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M176 180c1.18.38 2.66 3.59 4 4 3.29 0 6.38.42 9 1 .88.19 2.09 0 3 0h29c-4.87-7.42-8.66-16.75-15-23-1.27-1.26-2.48-2.09-3-4 0 0 .16-.56 0-1-.5-.55-2.7-1.26-3-2 4.58 8.6 9.92 16.66 15 25h-39Z',
              fill: '#61CEC3',
              fillOpacity: 0.95,
              stroke: 'None',
            })),
          _path205 ||
            (_path205 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M73 161c-1 1.66-1.27 3.33-2 5 2.19-2.8 5.82-3.42 5-8 0 0-.73-.25-1 0-.59.86-1.2 2.27-2 3Z',
              fill: '#699C97',
              stroke: 'None',
            })),
          _path206 ||
            (_path206 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M95 164h10c-.15-.5.95-2.31 1-3-2.47 1.1-11.77.61-13-2-.58-1.96-2.52 1.03-2 2 2.21-1.1 2.81 2.6 4 3Z',
              fill: '#DBAF91',
              stroke: 'None',
            })),
          _path207 ||
            (_path207 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M183 159c-.49.08-1.5 0-2 0-5.83 2.97-17.38-1.61-21 5 1.33.02 2.67-.03 4 0 5.24-.47 10.74 0 16 0h1c1.13-2.76 3.33-3.04 6-3 .25-.3 0-1 0-1 0-.5.23-1.84 0-2h-1c-1.35.01-1.86.8-3 1Z',
              fill: '#84E0CB',
              stroke: 'None',
            })),
          _path208 ||
            (_path208 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M206 162c-.34-.36-.7-1.52-1-2-.63-1-1.22-1.19-2-2 .52 1.91 1.73 2.74 3 4Z',
              fill: '#5DB7AF',
              fillOpacity: 0.6,
              stroke: 'None',
            })),
          _path209 ||
            (_path209 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M106 161c.04-.5.19-1.92 0-2H94s-.53.12-1 0c1.23 2.61 10.53 3.1 13 2Z',
              fill: '#FCEBD7',
              stroke: 'None',
            })),
          _path210 ||
            (_path210 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M112 163c3.41-.99 14.29-2.77 17-2-3.58-2.32-14.8-2.06-17 2Z',
              fill: '#88DABE',
              stroke: 'None',
            })),
          _path211 ||
            (_path211 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M187 161c-.68.83-3.1 2.63-4 3h4c.5 0 1.53.12 2 0 .96-1.15-1.74-3.39-2-4 0 0 .25.7 0 1Z',
              fill: '#686CAA',
              stroke: 'None',
            })),
          _path212 ||
            (_path212 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M64 172c-.65 1.27-1.14 2.88-2 4-1.09 2.74-.82 5.75-3 8h60c.5-.46 1.5-2.83 2-3-19.12-2.64-39.45-.1-59-1 .99-1.33 1.05-3.57 3-4 2.24-3.18 4.43-6.41 6-10 .73-1.67 1-3.34 2-5 0 0-.78-.25-1 0-3.04 3.38-5.85 6.81-8 11Z',
              fill: '#67D5C4',
              stroke: 'None',
            })),
          _path213 ||
            (_path213 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M112 163s-.25.75 0 1h1c3.66 0 7.34.07 11 0h7c.35-1.64-.89-2.28-2-3-2.71-.77-13.59 1.01-17 2Z',
              fill: '#BDF8EF',
              stroke: 'None',
            })),
          _path214 ||
            (_path214 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M181 164h2c.9-.37 3.32-2.17 4-3-2.67-.04-4.87.24-6 3Z',
              fill: '#71ABC8',
              stroke: 'None',
            })),
          _path215 ||
            (_path215 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M189 164c-.47.12-1.5 0-2 0-2.17.92-4.27.95-7 1-5.33.11-10.67 0-16 0h-58c-5.25 0-10.77-.49-16 0-2.93.27-5.69 1.3-9 1-.63.9-1.1 1.85-1 3h114c.99 0 2.01-.05 3 0-.59-.42-2.31-4.93-3-6-1.91-.6-3.39.58-5 1Z',
              fill: '#14090F',
              stroke: 'None',
            })),
          _path216 ||
            (_path216 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M90 165c5.23-.49 10.75 0 16 0-.07-.01 0-1 0-1H95c-1.39 0-3.7-.45-5 0 0 0 .24.8 0 1Z',
              fill: '#6D4C45',
              stroke: 'None',
            })),
          _path217 ||
            (_path217 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M106 165h7c.07-.01 0-1 0-1h-7s-.07.99 0 1Z',
              fill: '#968784',
              stroke: 'None',
            })),
          _path218 ||
            (_path218 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M113 165h11s.01-1 0-1c-3.66.07-7.34 0-11 0 0 0 .07.99 0 1Z',
              fill: '#6C8280',
              stroke: 'None',
            })),
          _path219 ||
            (_path219 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M164 165c5.33 0 10.67.11 16 0 .04 0 0-1 0-1-5.26 0-10.76-.47-16 0 0 0-.04 1 0 1Z',
              fill: '#426866',
              stroke: 'None',
            })),
          _path220 ||
            (_path220 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M180 165c2.73-.05 4.83-.08 7-1h-7s.04 1 0 1Z',
              fill: '#423250',
              stroke: 'None',
            })),
          _path221 ||
            (_path221 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M77 166c-.12.47.24 1.7 0 2 .36 3.25 5.36 4.02 8 3 2.64-1.02 10.04 1.85 12 0-.31-.24-.78-1.9-1-2H80c-.1-1.15.37-2.1 1-3 0 0-.2-.6 0-1-.16-.17-2.74-.08-3 0-.35.11-.91.65-1 1Z',
              fill: '#AEE4DF',
              stroke: 'None',
            })),
          _path222 ||
            (_path222 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M72 173c.03-.11 1 0 1 0 1.17-2.19 2.58-3.23 4-5 .24-.3-.12-1.53 0-2-3.09 1.05-5.26 3.37-5 7Z',
              fill: '#142926',
              stroke: 'None',
            })),
          _path223 ||
            (_path223 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M73 173c1.17.43 1.7.8 3 1 4.74.73 10.19 0 15 0h5c.24-.17.39-2.7 1-3-1.96 1.85-9.36-1.02-12 0-2.64 1.02-7.64.25-8-3-1.42 1.77-2.83 2.81-4 5Z',
              fill: '#58C1AD',
              stroke: 'None',
            })),
          _path224 ||
            (_path224 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M97 171c4.64 3.58 11.34-.63 17 0s14.09 0 20 0h2c-.25-.25.19-1.92 0-2H96c.22.1.69 1.76 1 2Z',
              fill: '#F9E5DA',
              stroke: 'None',
            })),
          _path225 ||
            (_path225 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M136 171c.5 0 1.53.11 2 0 1.79-.42 4.6-1.8 6-2h-8c.19.08-.25 1.75 0 2Z',
              fill: '#D4F0EC',
              stroke: 'None',
            })),
          _path226 ||
            (_path226 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M138 171c.25.25.25 1.75 0 2 6.33 0 12.45 1.46 18 2h31c1.4-.44 3.25-3.3 5-4-.86-.23-3.19-1.84-4-2h-15c-5.67.55-12.4.54-18 0h-11c-1.4.2-4.21 1.58-6 2Z',
              fill: '#7AD1BB',
              stroke: 'None',
            })),
          _path227 ||
            (_path227 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M173 169h-18c5.6.54 12.33.55 18 0Z',
              fill: '#C7EBE4',
              stroke: 'None',
            })),
          _path228 ||
            (_path228 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M192 171c.43-.17 1.75.25 2 0s-.24-1.69 0-2h-6c.81.16 3.14 1.77 4 2Z',
              fill: '#DAF3F0',
              stroke: 'None',
            })),
          _path229 ||
            (_path229 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M194 171c1.21-.66 4.46-.52 6-1-.93-.24-1.5-.92-3-1-.99-.05-2.01 0-3 0-.24.31.25 1.75 0 2Z',
              fill: '#DCC8DB',
              stroke: 'None',
            })),
          _path230 ||
            (_path230 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M206 170c.55.58 1.47 1.49 2 2 0 0 .89-.21 1 0-.67-.94-1.59-2.8-3-3 0 0-.25.74 0 1Z',
              fill: '#7F858E',
              stroke: 'None',
            })),
          _path231 ||
            (_path231 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M194 171c-.79.43-1.41 2.39-2 3 4.25-.61 8.73.46 13 0-.3-1.25-1.83-1.71-2-3-.27-.13-.65-.91-1-1-.47-.12-1.54-.14-2 0-1.54.48-4.79.34-6 1Z',
              fill: '#63437B',
              stroke: 'None',
            })),
          _path232 ||
            (_path232 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M203 171c.17 1.29 1.7 1.75 2 3-4.27.46-8.75-.61-13 0-.25.25-.73.87-1 1 4.87.66 14.43 3.2 17-3a75.41 75.41 0 0 1-2-2c-.18 1.11-2.18 1.41-3 1Z',
              fill: '#392440',
              stroke: 'None',
            })),
          _path233 ||
            (_path233 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M96 174h11c3.1 0 6.64.77 9 1 6.86 0 13.44-.23 20-1-.14-.05 0-1 0-1-.14-.15-2.03-2.01-2-2-5.91 0-14.34.63-20 0s-12.36 3.58-17 0c-.61.3-.76 2.83-1 3Z',
              fill: '#DE9483',
              stroke: 'None',
            })),
          _path234 ||
            (_path234 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M136 173c.16-.23 1.5 0 2 0 .25-.25.25-1.75 0-2-.47.11-1.5 0-2 0h-2c-.03-.01 1.86 1.85 2 2Z',
              fill: '#B4AD89',
              stroke: 'None',
            })),
          _path235 ||
            (_path235 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M187 175c.95 0 3.17.42 4 0 .27-.13.75-.75 1-1 .59-.61 1.21-2.57 2-3-.25.25-1.57-.17-2 0-1.75.7-3.6 3.56-5 4Z',
              fill: '#6188AC',
              stroke: 'None',
            })),
          _path236 ||
            (_path236 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M61 176c.22-.25 1 0 1 0 .86-1.12 1.35-2.73 2-4-.89 1.14-4.61 2.46-3 4Z',
              fill: '#132E2C',
              fillOpacity: 0.45,
              stroke: 'None',
            })),
          _path237 ||
            (_path237 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M76 175c-.04 0 0-1 0-1-1.3-.2-1.83-.57-3-1 0 0-.97-.11-1 0-.53 2.19 2.57 2.56 4 2Z',
              fill: '#475063',
              stroke: 'None',
            })),
          _path238 ||
            (_path238 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M136 174c.69.22 2.63.92 3 1 5.57.48 11.4 0 17 0-5.55-.54-11.67-2-18-2-.5 0-1.84-.23-2 0 0 0-.14.95 0 1Z',
              fill: '#D3D9CD',
              stroke: 'None',
            })),
          _path239 ||
            (_path239 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M76 175c5.08.46 10.63-.54 15-1-4.81 0-10.26.73-15 0 0 0-.04 1 0 1Z',
              fill: '#3F6D72',
              stroke: 'None',
            })),
          _path240 ||
            (_path240 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M116 175c-2.36-.23-5.9-1-9-1 2.36.23 5.9 1 9 1Z',
              fill: '#81605A',
              stroke: 'None',
            })),
          _path241 ||
            (_path241 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M139 175c-.37-.08-2.31-.78-3-1 .68.12 1.75.89 3 1Z',
              fill: '#5D5855',
              stroke: 'None',
            })),
          _path242 ||
            (_path242 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M68 185h50c.25-.27 0-1 0-1H59c2.18-2.25 1.91-5.26 3-8 0 0-.78-.25-1 0-2.11 2.77-3.41 5.92-5 9h12Z',
              fill: '#60A9A5',
              fillOpacity: 0.87,
              stroke: 'None',
            })),
          _path243 ||
            (_path243 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M121 181c.34.05 2.78.22 3 0-.36-.23-.76-1.89-1-2H65c-.07-.99.09-2.01 0-3-1.95.43-2.01 2.67-3 4 19.55.9 39.88-1.64 59 1Z',
              fill: '#D2F5F1',
              stroke: 'None',
            })),
          _path244 ||
            (_path244 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M124 181c7.47 4.81 24.48 0 33 0h5c2.55-1.89 6.72-.71 10-1 0 0 .04-1 0-1h-49c.24.11.64 1.77 1 2Z',
              fill: '#F5E5D7',
              stroke: 'None',
            })),
          _path245 ||
            (_path245 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M162 181h10c.25-.25 0-1 0-1-3.28.29-7.45-.89-10 1Z',
              fill: '#BEBBDC',
              stroke: 'None',
            })),
          _path246 ||
            (_path246 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M172 181c2.9-.15 1.79 2.49 3 3h5c-1.34-.41-2.82-3.62-4-4-.85 0-3.29-.43-4 0 0 0 .25.75 0 1Z',
              fill: '#4A9BB3',
              stroke: 'None',
            })),
          _path247 ||
            (_path247 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M119 184c1.41-.55 3.94-2.82 5-3-.22.22-2.66.05-3 0-.5.17-1.5 2.54-2 3Z',
              fill: '#99A685',
              stroke: 'None',
            })),
          _path248 ||
            (_path248 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M119 184h-1s.25.73 0 1h41c-.15-.05 0-1 0-1-.18-.49-1.67-2.84-2-3-8.52 0-25.53 4.81-33 0-1.06.18-3.59 2.45-5 3Z',
              fill: '#AA7C6D',
              fillOpacity: 0.91,
              stroke: 'None',
            })),
          _path249 ||
            (_path249 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M159 184c.71-.43 3.15 0 4 0-.49-.45-1.98-2.32-2-3h-4c.33.16 1.82 2.51 2 3Z',
              fill: '#8B6C7E',
              stroke: 'None',
            })),
          _path250 ||
            (_path250 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M163 184h1c2.63 0 5.38-.24 8 0-.55-.25-1.31-2.48-1-3h-10c.02.68 1.51 2.55 2 3Z',
              fill: '#635497',
              stroke: 'None',
            })),
          _path251 ||
            (_path251 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M172 184c.24-.26 2.61 0 3 0-1.21-.51-.1-3.15-3-3h-1c-.31.52.45 2.75 1 3Z',
              fill: '#447095',
              stroke: 'None',
            })),
          _path252 ||
            (_path252 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M159 185h5c-.23-.34 0-1 0-1h-1c-.85 0-3.29-.43-4 0 0 0-.15.95 0 1Z',
              fill: '#896A7A',
              fillOpacity: 0.76,
              stroke: 'None',
            })),
          _path253 ||
            (_path253 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M164 185h8c.1-.02 0-1 0-1-2.62-.24-5.37 0-8 0 0 0-.23.66 0 1Z',
              fill: '#635495',
              fillOpacity: 0.77,
              stroke: 'None',
            })),
          _path254 ||
            (_path254 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M172 185h10c2.28 0 4.74-.26 7 0-2.62-.58-5.71-1-9-1h-5c-.39 0-2.76-.26-3 0 0 0 .1.98 0 1Z',
              fill: '#416989',
              fillOpacity: 0.76,
              stroke: 'None',
            })),
          _path255 ||
            (_path255 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M115 186c-.04 0 0-1 0-1H68c14.77 1.43 31.43 1 47 1Z',
              fill: '#001A22',
              fillOpacity: 0.12,
              stroke: 'None',
            })),
          _path256 ||
            (_path256 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M115 186h51c-.04 0 0-1 0-1h-51s-.04 1 0 1Z',
              fill: '#1C0C15',
              fillOpacity: 0.18,
              stroke: 'None',
            })),
          _path257 ||
            (_path257 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M166 186c5.39 0 11.29-.55 16-1h-16s-.04 1 0 1Z',
              fill: '#201535',
              fillOpacity: 0.08,
              stroke: 'None',
            })),
          _path258 ||
            (_path258 = /*#__PURE__*/ external_react_.createElement('path', {
              d: 'M192 185c-.91 0-2.12.19-3 0 1.1.13 1.84.14 3 0Z',
              fill: '#0E0338',
              fillOpacity: 0.02,
              stroke: 'None',
            }))
        )
      }
      /* harmony default export */ const logo = SvgLogo
      // EXTERNAL MODULE: ./components/Link.js
      var Link = __webpack_require__(2220)
      // EXTERNAL MODULE: ./components/SectionContainer.js
      var SectionContainer = __webpack_require__(7929)
      // EXTERNAL MODULE: ./node_modules/.pnpm/next@12.1.4_@babel+core@7.22.19_react-dom@17.0.2_react@17.0.2/node_modules/next/link.js
      var next_link = __webpack_require__(7506)
      // EXTERNAL MODULE: ./components/social-icons/index.js + 6 modules
      var social_icons = __webpack_require__(4742) // CONCATENATED MODULE: ./components/Footer.js
      function Footer() {
        return /*#__PURE__*/ jsx_runtime_.jsx('footer', {
          children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
            className: 'mt-16 flex flex-col items-center',
            children: [
              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                className: 'mb-3 flex space-x-4',
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx(social_icons /* default */.Z, {
                    kind: 'mail',
                    href: `mailto:${siteMetadata_default().email}`,
                    size: '6',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(social_icons /* default */.Z, {
                    kind: 'github',
                    href: siteMetadata_default().github,
                    size: '6',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(social_icons /* default */.Z, {
                    kind: 'facebook',
                    href: siteMetadata_default().facebook,
                    size: '6',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(social_icons /* default */.Z, {
                    kind: 'youtube',
                    href: siteMetadata_default().youtube,
                    size: '6',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(social_icons /* default */.Z, {
                    kind: 'linkedin',
                    href: siteMetadata_default().linkedin,
                    size: '6',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(social_icons /* default */.Z, {
                    kind: 'twitter',
                    href: siteMetadata_default().twitter,
                    size: '6',
                  }),
                ],
              }),
              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                className: 'mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400',
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx('div', {
                    children: siteMetadata_default().author,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('div', {
                    children: ` • `,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('div', {
                    children: `© ${new Date().getFullYear()}`,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('div', {
                    children: ` • `,
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(next_link['default'], {
                    href: '/',
                    children: siteMetadata_default().title,
                  }),
                ],
              }),
            ],
          }),
        })
      } // CONCATENATED MODULE: ./components/MobileNav.js

      const MobileNav = () => {
        const { 0: navShow, 1: setNavShow } = (0, external_react_.useState)(false)
        const onToggleNav = () => {
          setNavShow((status) => {
            if (status) {
              document.body.style.overflow = 'auto'
            } else {
              // Prevent scrolling
              document.body.style.overflow = 'hidden'
            }
            return !status
          })
        }
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
          className: 'sm:hidden',
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx('button', {
              type: 'button',
              className: 'ml-1 mr-1 h-8 w-8 rounded py-1',
              'aria-label': 'Toggle Menu',
              onClick: onToggleNav,
              children: /*#__PURE__*/ jsx_runtime_.jsx('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                className: 'text-gray-900 dark:text-gray-100',
                children: /*#__PURE__*/ jsx_runtime_.jsx('path', {
                  fillRule: 'evenodd',
                  d: 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z',
                  clipRule: 'evenodd',
                }),
              }),
            }),
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
              className: `fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${
                navShow ? 'translate-x-0' : 'translate-x-full'
              }`,
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx('div', {
                  className: 'flex justify-end',
                  children: /*#__PURE__*/ jsx_runtime_.jsx('button', {
                    type: 'button',
                    className: 'mr-5 mt-11 h-8 w-8 rounded',
                    'aria-label': 'Toggle Menu',
                    onClick: onToggleNav,
                    children: /*#__PURE__*/ jsx_runtime_.jsx('svg', {
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 20 20',
                      fill: 'currentColor',
                      className: 'text-gray-900 dark:text-gray-100',
                      children: /*#__PURE__*/ jsx_runtime_.jsx('path', {
                        fillRule: 'evenodd',
                        d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                        clipRule: 'evenodd',
                      }),
                    }),
                  }),
                }),
                /*#__PURE__*/ jsx_runtime_.jsx('nav', {
                  className: 'fixed mt-8 h-full',
                  children: data_headerNavLinks.map((link) =>
                    /*#__PURE__*/ jsx_runtime_.jsx(
                      'div',
                      {
                        className: 'px-12 py-4',
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Link /* default */.Z, {
                          href: link.href,
                          className:
                            'text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100',
                          onClick: onToggleNav,
                          children: link.title,
                        }),
                      },
                      link.title
                    )
                  ),
                }),
              ],
            }),
          ],
        })
      }
      /* harmony default export */ const components_MobileNav = MobileNav // CONCATENATED MODULE: ./components/ThemeSwitch.js

      const ThemeSwitch = () => {
        const { 0: mounted, 1: setMounted } = (0, external_react_.useState)(false)
        const { theme, setTheme, resolvedTheme } = (0,
        external_next_themes_namespaceObject.useTheme)()
        // When mounted on client, now we can show the UI
        ;(0, external_react_.useEffect)(() => setMounted(true), [])
        return /*#__PURE__*/ jsx_runtime_.jsx('button', {
          'aria-label': 'Toggle Dark Mode',
          type: 'button',
          className: 'ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4',
          onClick: () => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark'),
          children: /*#__PURE__*/ jsx_runtime_.jsx('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 20 20',
            fill: 'currentColor',
            className: 'text-gray-900 dark:text-gray-100',
            children:
              mounted && (theme === 'dark' || resolvedTheme === 'dark')
                ? /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    fillRule: 'evenodd',
                    d: 'M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z',
                    clipRule: 'evenodd',
                  })
                : /*#__PURE__*/ jsx_runtime_.jsx('path', {
                    d: 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z',
                  }),
          }),
        })
      }
      /* harmony default export */ const components_ThemeSwitch = ThemeSwitch // CONCATENATED MODULE: ./components/LayoutWrapper.js

      const LayoutWrapper = ({ children }) => {
        return /*#__PURE__*/ jsx_runtime_.jsx(SectionContainer /* default */.Z, {
          children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
            className: 'flex h-screen flex-col justify-between',
            children: [
              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('header', {
                className: 'flex items-center justify-between py-10',
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx('div', {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Link /* default */.Z, {
                      href: '/',
                      'aria-label': siteMetadata_default().headerTitle,
                      children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                        className: 'flex items-center justify-between',
                        children: [
                          /*#__PURE__*/ jsx_runtime_.jsx('div', {
                            className: 'mr-3',
                            children: /*#__PURE__*/ jsx_runtime_.jsx(logo, {}),
                          }),
                          typeof siteMetadata_default().headerTitle === 'string'
                            ? /*#__PURE__*/ jsx_runtime_.jsx('div', {
                                className: 'hidden h-6 text-2xl font-semibold sm:block',
                                children: siteMetadata_default().headerTitle,
                              })
                            : siteMetadata_default().headerTitle,
                        ],
                      }),
                    }),
                  }),
                  /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                    className: 'flex items-center text-base leading-5',
                    children: [
                      /*#__PURE__*/ jsx_runtime_.jsx('div', {
                        className: 'hidden sm:block',
                        children: data_headerNavLinks.map((link) =>
                          /*#__PURE__*/ jsx_runtime_.jsx(
                            Link /* default */.Z,
                            {
                              href: link.href,
                              className: 'p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4',
                              children: link.title,
                            },
                            link.title
                          )
                        ),
                      }),
                      /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeSwitch, {}),
                      /*#__PURE__*/ jsx_runtime_.jsx(components_MobileNav, {}),
                    ],
                  }),
                ],
              }),
              /*#__PURE__*/ jsx_runtime_.jsx('main', {
                className: 'mb-auto',
                children: children,
              }),
              /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}),
            ],
          }),
        })
      }
      /* harmony default export */ const components_LayoutWrapper = LayoutWrapper

      // EXTERNAL MODULE: external "next/router"
      var router_ = __webpack_require__(1853)
      var router_default = /*#__PURE__*/ __webpack_require__.n(router_) // CONCATENATED MODULE: ./components/ClientReload.js
      /**
       * Client-side complement to next-remote-watch
       * Re-triggers getStaticProps when watched mdx files change
       *
       */ const ClientReload = () => {
        // Exclude socket.io from prod bundle
        ;(0, external_react_.useEffect)(() => {
          Promise.resolve(/* import() */)
            .then(__webpack_require__.bind(__webpack_require__, 4612))
            .then((module) => {
              const socket = module.io()
              socket.on('reload', (data) => {
                router_default().replace(router_default().asPath, undefined, {
                  scroll: false,
                })
              })
            })
        }, [])
        return null
      } // CONCATENATED MODULE: ./pages/_app.js

      const isDevelopment = 'production' === 'development'
      const isSocket = process.env.SOCKET
      function App({ Component, pageProps }) {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
          external_next_themes_namespaceObject.ThemeProvider,
          {
            attribute: 'class',
            defaultTheme: siteMetadata_default().theme,
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx(head_default(), {
                children: /*#__PURE__*/ jsx_runtime_.jsx('meta', {
                  content: 'width=device-width, initial-scale=1',
                  name: 'viewport',
                }),
              }),
              isDevelopment && isSocket && /*#__PURE__*/ jsx_runtime_.jsx(ClientReload, {}),
              /*#__PURE__*/ jsx_runtime_.jsx(analytics, {}),
              /*#__PURE__*/ jsx_runtime_.jsx(components_LayoutWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                  ...pageProps,
                }),
              }),
            ],
          }
        )
      }

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

    /***/ 4612: /***/ (module) => {
      module.exports = import('socket.io-client')

      /***/
    },
  }
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js')
  __webpack_require__.C(exports)
  var __webpack_exec__ = (moduleId) => __webpack_require__((__webpack_require__.s = moduleId))
  var __webpack_exports__ = __webpack_require__.X(0, [808, 506, 971, 848], () =>
    __webpack_exec__(4539)
  )
  module.exports = __webpack_exports__
})()
