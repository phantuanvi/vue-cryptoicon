const Bnty = {
  symbol: 'bnty',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.195-12.6c-.47-.293-1.069-.251-1.54-.041a.316.316 0 0 0-.085-.168L21.688 16l1.882-3.19c.043-.043.043-.127.086-.169.47.252 1.026.252 1.54-.042a1.558 1.558 0 0 0 .598-2.141c-.428-.756-1.411-1.008-2.181-.588-.47.294-.77.756-.813 1.302h-3.935L16.984 7.98c-.043-.042-.086-.084-.086-.126.428-.294.727-.756.727-1.302 0-.881-.727-1.553-1.582-1.553-.856 0-1.583.714-1.583 1.553 0 .546.3 1.05.727 1.302-.042.042-.085.084-.085.126l-1.882 3.19H9.243a1.632 1.632 0 0 0-.813-1.3c-.77-.42-1.754-.169-2.181.587a1.558 1.558 0 0 0 .599 2.141c.47.294 1.069.252 1.54.042 0 .042.042.126.085.168L10.355 16 8.43 19.19c-.043.043-.043.127-.086.169-.47-.252-1.026-.252-1.54.042-.769.42-1.026 1.385-.598 2.141s1.411 1.008 2.181.588c.47-.294.77-.756.813-1.302h3.935l1.881 3.191c.043.042.086.084.086.126-.428.294-.727.756-.727 1.302 0 .881.727 1.553 1.582 1.553.856 0 1.583-.714 1.583-1.553 0-.546-.3-1.05-.727-1.302.042-.042.085-.084.085-.126l1.882-3.19h3.935c.042.503.299 1.007.812 1.3.77.42 1.754.169 2.181-.587a1.467 1.467 0 0 0-.513-2.141zm-7.142-4.45c0 .42-.171.756-.385 1.092.257.252.385.63.385 1.008 0 .881-.727 1.595-1.625 1.595h-2.053a.38.38 0 0 1-.385-.378v-4.534a.38.38 0 0 1 .385-.378h2.053c.898 0 1.625.714 1.625 1.595z"/>`;
  },
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" fill="#fd7a3d" r="16"/><path d="M25.195 19.4c.77.42 1.027 1.386.513 2.142-.427.756-1.41 1.008-2.18.588a1.632 1.632 0 0 1-.813-1.302H18.78l-1.882 3.191c0 .042-.043.084-.085.126.427.252.727.756.727 1.302 0 .84-.727 1.553-1.583 1.553-.855 0-1.582-.672-1.582-1.553 0-.546.3-1.008.727-1.302 0-.042-.043-.084-.086-.126l-1.881-3.19H9.2c-.043.545-.342 1.007-.813 1.3-.77.42-1.753.169-2.181-.587s-.171-1.721.599-2.141c.513-.294 1.069-.294 1.54-.042.042-.042.042-.126.085-.168L10.355 16l-1.882-3.19a.316.316 0 0 1-.086-.169c-.47.21-1.069.252-1.54-.042a1.558 1.558 0 0 1-.598-2.141C6.676 9.702 7.66 9.45 8.43 9.87c.513.294.77.798.813 1.302h3.977l1.882-3.191c0-.042.043-.084.085-.126a1.53 1.53 0 0 1-.727-1.302c0-.84.727-1.553 1.583-1.553.855 0 1.582.672 1.582 1.553 0 .546-.3 1.008-.727 1.302 0 .042.043.084.086.126l1.881 3.19H22.8c.043-.545.342-1.007.813-1.3.77-.42 1.753-.169 2.181.587a1.558 1.558 0 0 1-.599 2.141c-.513.294-1.069.294-1.54.042-.042.042-.042.126-.085.168L21.688 16l1.882 3.19a.316.316 0 0 1 .086.169c.47-.21 1.069-.252 1.54.042zm-7.142-4.45c0-.881-.727-1.595-1.625-1.595h-2.053a.38.38 0 0 0-.385.378v4.534c0 .21.171.378.385.378h2.053c.898 0 1.625-.714 1.625-1.595 0-.378-.128-.756-.385-1.008.214-.336.385-.672.385-1.092z" fill="#fff"/></g>`;
  }
};
export default Bnty;
