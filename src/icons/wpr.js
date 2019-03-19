const Wpr = {
  symbol: 'wpr',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M3.993 5.425l4.854 17.382.035.15h4.186l1.87-6.932 1.87 6.932h4.185l.036-.15 1.96-7.078 3.435 12.41A15.937 15.937 0 0 1 16 32C7.163 32 0 24.837 0 16A15.94 15.94 0 0 1 3.993 5.425zm2.65-2.405A15.928 15.928 0 0 1 16 0c8.837 0 16 7.163 16 16a15.93 15.93 0 0 1-3.025 9.364L24.901 10.65l-.035-.15h-3.75l-2.336 8.438-1.973-8.438h-3.739l-1.973 8.438L6.642 3.02z" fill-rule="evenodd"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#ffe600" r="16"/><path d="M3.993 5.425a16.096 16.096 0 0 1 2.65-2.405l4.452 15.918 1.973-8.438h3.74l1.972 8.438 2.337-8.438h3.749l.035.15 4.074 14.714a16.092 16.092 0 0 1-2.55 2.775l-3.437-12.41-1.96 7.078-.035.15h-4.186l-1.869-6.932-1.87 6.932H8.882l-.035-.15z" fill="#fff"/></g>`;
  }
};
export default Wpr;
