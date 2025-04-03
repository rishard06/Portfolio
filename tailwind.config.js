const config = {
  content: ['./src/**/*.{html,js}'],
  plugin: [],
  theme: {
    extend: {
      colors: {
        primary: 'red',
        'purple': '#7e5bef',
        'pink': '#ff49db',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
    },
  },
}

export default config;