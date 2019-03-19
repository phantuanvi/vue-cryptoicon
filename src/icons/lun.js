const Lun = {
  symbol: 'lun',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.187-25.952v.002l-8.216 4.63a.358.358 0 0 0 0 .628l7.156 4.018c.247-.281.586-.47.96-.536v-2.198c-.77-.134-1.354-.788-1.354-1.576 0-.885.736-1.603 1.645-1.603s1.645.718 1.645 1.603c0 .793-.59 1.45-1.366 1.578v2.193c.378.064.723.254.973.54l7.155-4.034a.36.36 0 0 0 .185-.314.36.36 0 0 0-.186-.314l-8.225-4.618a.381.381 0 0 0-.372 0zm8.62 5.819l.002-.001-6.908 3.894c.155.365.164.774.026 1.145l1.95 1.093c.26-.37.667-.615 1.121-.677.9-.124 1.732.487 1.859 1.363s-.5 1.688-1.4 1.812c-.9.123-1.732-.487-1.858-1.364a1.56 1.56 0 0 1 .037-.628l-1.99-1.115c-.25.294-.6.49-.987.555l.007 7.693c0 .28.31.454.557.314l7.965-4.49a.36.36 0 0 0 .186-.314l-.008-8.967a.36.36 0 0 0-.187-.314.379.379 0 0 0-.371 0zm-17.425.313L7 21.146c0 .13.07.25.186.314l7.966 4.49c.247.14.558-.034.558-.313l.006-7.695a1.654 1.654 0 0 1-.977-.554l-1.99 1.115c.056.205.068.42.038.629-.127.876-.96 1.487-1.859 1.363s-1.526-.935-1.4-1.811c.128-.876.96-1.487 1.86-1.363.454.062.86.308 1.121.677l1.949-1.092c-.138-.37-.13-.777.023-1.141l-6.915-3.898a.375.375 0 0 0-.186-.05.368.368 0 0 0-.372.363z"/>`;
  },
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" fill="#f55749" r="16"/><path d="M15.813 6.048a.381.381 0 0 1 .372 0l8.225 4.618a.36.36 0 0 1 .186.314c0 .13-.07.25-.185.314l-7.155 4.034a1.656 1.656 0 0 0-.973-.54v-2.193c.775-.129 1.366-.785 1.366-1.578 0-.885-.736-1.603-1.645-1.603s-1.645.718-1.645 1.603c0 .788.585 1.442 1.354 1.576v2.198a1.654 1.654 0 0 0-.96.536L7.599 11.31a.358.358 0 0 1-.001-.628l8.216-4.631m8.62 5.817a.379.379 0 0 1 .372-.001.362.362 0 0 1 .187.314L25 21.147c0 .13-.07.249-.186.314l-7.965 4.49c-.247.14-.557-.035-.557-.314l-.007-7.693c.386-.064.736-.261.987-.555l1.99 1.115a1.56 1.56 0 0 0-.037.628c.126.877.959 1.487 1.858 1.364.9-.124 1.526-.935 1.4-1.812s-.96-1.487-1.859-1.363a1.644 1.644 0 0 0-1.122.677l-1.95-1.093c.14-.371.13-.78-.025-1.145l6.908-3.894m-17.427.314c0-.212.178-.363.372-.363.065 0 .13.017.186.05l6.915 3.898c-.153.364-.161.77-.023 1.14l-1.949 1.093a1.645 1.645 0 0 0-1.122-.677c-.9-.124-1.731.487-1.858 1.363s.5 1.687 1.4 1.811 1.73-.487 1.858-1.363a1.56 1.56 0 0 0-.037-.629l1.989-1.115c.249.292.595.488.977.554l-.006 7.695c0 .279-.31.453-.558.313l-7.966-4.49A.36.36 0 0 1 7 21.146l.008-8.966" fill="#fff"/></g>`;
  }
};
export default Lun;
