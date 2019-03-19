const Rdd = {
  symbol: 'rdd',
  color: '#000',
  plainIcon: c => {
    return `<g fill-rule="evenodd" fill="${
      c ? c : this.color
    }"><path d="M18.886 7.093a10.436 10.436 0 0 0-3.525-.609C9.64 6.484 5 11.077 5 16.742 5 22.407 9.639 27 15.361 27c5.723 0 10.362-4.593 10.362-10.258a10.14 10.14 0 0 0-.73-3.789 4.308 4.308 0 0 0 1.999-3.632C26.992 6.935 25.037 5 22.627 5a4.372 4.372 0 0 0-3.74 2.093zm-.59 1.686a4.32 4.32 0 0 0 .02 1.218 9.344 9.344 0 0 0-1.167-.574l.238-1.055c.315.13.618.267.909.41zm4.93 4.824c.084.174.163.35.238.53l-.931.648a14.47 14.47 0 0 0-.661-1.204 4.43 4.43 0 0 0 1.354.026zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/><path d="M18.886 7.093a4.266 4.266 0 0 0-.59 1.686 14.6 14.6 0 0 0-.909-.411l-.238 1.055c.408.167.796.359 1.166.574V10c1.454.847 2.622 2.061 3.554 3.577h.003c.235.383.455.784.661 1.204l.93-.647a9.738 9.738 0 0 0-.237-.531 4.364 4.364 0 0 0 1.767-.65c.471 1.173.73 2.45.73 3.79C25.723 22.406 21.083 27 15.36 27S5 22.407 5 16.742C5 11.077 9.639 6.484 15.361 6.484c1.238 0 2.425.215 3.525.609z" opacity=".6"/></g>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#E30613"/><g fill="#FFF"><path d="M15.361 27C9.64 27 5 22.407 5 16.742 5 11.077 9.639 6.484 15.361 6.484c5.723 0 10.362 4.593 10.362 10.258C25.723 22.407 21.083 27 15.36 27zM17.15 9.423c2.416.989 4.152 2.85 5.384 5.358l.93-.647c-1.044-2.512-2.973-4.486-6.076-5.766l-.238 1.055z" opacity=".75"/><path fill-rule="nonzero" d="M26.992 9.321C26.992 6.935 25.037 5 22.627 5s-4.365 1.935-4.365 4.321c0 .228.018.455.054.68 1.453.846 2.62 2.06 3.553 3.576.25.043.504.066.758.066 2.41 0 4.365-1.935 4.365-4.322z"/></g></g>`;
  }
};
export default Rdd;
