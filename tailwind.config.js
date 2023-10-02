module.exports = {
   purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
   theme: {
      fontFamily: {
         sans: ['ui-sans-serif', 'system-ui', 'ui-monospace'],
         kaushan: ['Kaushan Script'],
         montserrat: ['Montserrat Script'],
         syne: ['Syne Script'],
         krona: ['Krona One'],
         mono: ['Mono Script']
      },
      boxShadow: {
         'custom-light': ' 0 0 10px #313131',
         'custom-dark': '5px 5px 10px #0a0c0e, -5px -5px 10px #14161c',
      },
      extend: {
         colors: {
            green: {
               DEFAULT: '#00f260',
            },
            black: {
               DEFAULT: '#010101',
               100: '#0a0b0e',
               200: '#16181D',
               //?FIX this
               300: '#16181D',
               500: '#0f1115',
               700: '#202125',
            },
            cyan: {
               DEFAULT: '#134e4a',
               50: '#ecfeff',
               300: '#67e8f9',
               //?FIX this
               700: '#0e7490',
               800: '#155e75',
            },
            rose: {
               DEFAULT: '#ffe4e6',
               50: '#fff1f2',
               300: '#fef2f2',
               400: '#f472b6',
               500: '#f9a8d4',
               100: '#fce7f3'
            },
            slate: {
               DEFAULT: '#cbd5e1',
               400: '#94a3b8',
               500: '#64748b',
               //?FIX this
               600: '#475569',
            },
         },
      },
   },
   variants: {
      extend: {
         boxShadow: ['dark'],
      },
   },
   plugins: [],
}
