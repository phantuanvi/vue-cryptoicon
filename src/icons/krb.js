const Krb = {
  symbol: 'krb',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.24-17.294v-4.29h-1.988v4.322H12.31V6H9.5v20h2.81v-9.133h1.462v3.746h1.989v-3.73c.326.021.6.104.815.244.216.14.416.374.6.702l3.562 7.35c.31.546.721.821 1.231.821H24.5l-4.346-8.675c-.29-.51-.6-.904-.926-1.185a2.965 2.965 0 0 0-1.22-.613c.31-.109.594-.27.852-.483.252-.213.479-.488.679-.826L24.053 6h-2.3c-.262 0-.5.073-.7.213a1.93 1.93 0 0 0-.515.566l-3.625 6.987c-.163.312-.337.54-.52.675a1.486 1.486 0 0 1-.632.265z"/>`;
  },
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" r="16" fill="#00AEEF"/><path fill="#FFF" d="M15.76 14.706c.238-.041.448-.13.632-.265s.358-.363.521-.675l3.625-6.987c.142-.234.316-.42.516-.566a1.2 1.2 0 0 1 .7-.213h2.299l-4.514 8.218c-.2.338-.427.613-.68.826a2.772 2.772 0 0 1-.851.483c.484.125.889.328 1.22.613.326.28.637.676.926 1.185L24.5 26h-2.53c-.511 0-.922-.275-1.232-.82l-3.562-7.351c-.184-.328-.384-.561-.6-.702-.215-.14-.489-.223-.815-.244v3.73h-1.989v-3.746H12.31V26H9.5V6h2.81v8.738h1.462v-4.322h1.989v4.29z"/></g>`;
  }
};
export default Krb;
