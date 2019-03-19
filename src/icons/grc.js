const Grc = {
  symbol: 'grc',
  color: '#000',
  plainIcon: c => {
    return `<path  fill="${
      c ? c : this.color
    }" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.053-27h-.11c-.063.05-.122.107-.191.147-2.985 1.73-5.97 3.46-8.958 5.183-.204.118-.29.243-.29.491.008 3.465.005 6.929-.004 10.393 0 .21.06.33.242.435a1974.33 1974.33 0 0 1 6.468 3.743c.914.531 1.822 1.072 2.733 1.608h.11c.043-.032.084-.068.13-.095 3.015-1.749 6.03-3.498 9.047-5.244.166-.096.27-.19.27-.419a2234.53 2234.53 0 0 1-.008-10.476c0-.205-.074-.312-.24-.408a3499.05 3499.05 0 0 1-7.608-4.402c-.535-.31-1.061-.637-1.591-.956zm2.806 17.48c-.065-.045-.195-.064-.259-.028-.676.378-1.345.77-2.016 1.16-.029.016-.052.044-.092.079l1.464.915c-.441.26-.867.456-1.23.735-.506.388-.946.39-1.451 0-.351-.272-.764-.462-1.149-.69-.013-.007-.018-.029-.047-.082.632-.377 4.356-2.572 5.527-3.377 1.071-.738 1.95-1.696 2.424-2.943.2-.523.288-1.09.42-1.64.018-.074-.004-.158-.009-.253-.097-.005-.177-.013-.257-.014-2.007 0-4.015-.002-6.022.003-.098 0-.245.028-.285.094-.435.729-.854 1.467-1.305 2.25h4.426l.03.069c-.183.154-.35.333-.552.458-1.185.737-5.45 3.41-6.381 4.033-.146.097-.24.1-.385.016-1.3-.76-2.601-1.517-3.907-2.266-.149-.085-.193-.183-.192-.349.005-3.097.006-6.195.001-9.293 0-.168.047-.265.192-.348a488.06 488.06 0 0 0 3.934-2.276c.162-.095.258-.084.403.032.327.262.673.502 1.018.74.061.041.181.066.237.034.703-.403 1.398-.819 2.133-1.253l-1.438-.904c.303-.179.566-.335.83-.489.299-.175.594-.358.902-.517.089-.046.238-.063.32-.018.56.308 1.108.635 1.66.957.02.013.032.041.072.093-.465.285-3.976 2.368-5.234 3.192a7.38 7.38 0 0 0-2.361 2.481c-1.262 2.17-.91 5.142.82 6.955.61.638 1.27 1.21 2.014 1.681.076.049.215.085.282.048.693-.386 1.378-.789 2.064-1.187.014-.009.022-.028.036-.048-.52-.335-1.048-.659-1.56-1.008-.642-.44-1.241-.933-1.69-1.583-.907-1.31-.81-2.98.227-4.185.752-.874 1.702-1.488 2.674-2.07 1.244-.747 4.42-2.687 4.743-2.94.117-.09.194-.116.332-.035 1.331.78 2.669 1.547 3.998 2.329.08.047.156.18.156.275.01 3.125.01 6.25.003 9.376 0 .095-.07.233-.15.28-1.346.79-2.698 1.569-4.05 2.35-.03.017-.064.03-.087.041-.416-.3-.82-.597-1.233-.88zm2.894-9.337c-.702-1.244-1.748-2.142-2.917-2.911-.08-.053-.261-.019-.362.037-.558.308-1.107.634-1.659.955-.107.063-.213.128-.348.209l.18.124c.593.391 1.203.76 1.777 1.18.806.589 1.49 1.29 1.81 2.28.018.056.112.126.172.127.655.009 1.31.005 1.987.005-.038-.607-.295-1.394-.64-2.006z"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#5411B3"/><path fill="#FFF" d="M16.053 5c.53.319 1.056.645 1.59.956 2.535 1.47 5.07 2.938 7.608 4.402.167.096.241.203.241.408-.005 3.492-.004 6.984.008 10.476 0 .228-.104.323-.27.419-3.017 1.746-6.032 3.495-9.047 5.244-.046.027-.087.063-.13.095h-.11c-.91-.536-1.82-1.077-2.733-1.608-2.154-1.251-4.31-2.5-6.468-3.743-.183-.105-.243-.225-.242-.435.01-3.464.012-6.928.005-10.393 0-.248.085-.373.289-.49 2.989-1.724 5.973-3.454 8.958-5.184.069-.04.128-.098.191-.147h.11zm2.806 17.48c.413.283.817.58 1.233.88.023-.01.057-.024.088-.041 1.35-.781 2.703-1.56 4.049-2.35.08-.047.15-.185.15-.28.007-3.126.006-6.251-.003-9.376a.377.377 0 0 0-.156-.275c-1.33-.782-2.667-1.55-3.998-2.329-.138-.08-.215-.056-.332.035-.323.253-3.499 2.193-4.743 2.94-.972.582-1.922 1.196-2.674 2.07-1.037 1.205-1.134 2.875-.227 4.185.449.65 1.048 1.144 1.69 1.583.512.349 1.04.673 1.56 1.008-.014.02-.022.04-.036.048-.686.398-1.37.8-2.064 1.187-.067.037-.206 0-.282-.048a10.765 10.765 0 0 1-2.014-1.68c-1.73-1.814-2.082-4.787-.82-6.956a7.38 7.38 0 0 1 2.36-2.481c1.26-.824 4.77-2.907 5.235-3.192-.04-.052-.051-.08-.072-.093-.552-.322-1.1-.65-1.66-.957-.082-.045-.231-.028-.32.018-.308.159-.603.342-.902.517-.264.154-.527.31-.83.489l1.438.904c-.735.434-1.43.85-2.133 1.253-.056.032-.176.007-.237-.035a17.38 17.38 0 0 1-1.018-.74c-.145-.115-.241-.126-.403-.031a488.06 488.06 0 0 1-3.934 2.276c-.145.083-.192.18-.192.348.005 3.098.004 6.196-.001 9.293 0 .166.043.264.192.35 1.306.748 2.608 1.504 3.907 2.265.144.085.24.081.385-.016.932-.623 5.196-3.296 6.381-4.033.201-.125.37-.304.552-.458l-.03-.07h-4.426c.45-.782.87-1.52 1.305-2.249.04-.066.187-.094.285-.094 2.007-.005 4.015-.003 6.022-.003.08 0 .16.009.257.014.005.095.027.18.009.254-.132.549-.22 1.116-.42 1.64-.474 1.246-1.353 2.204-2.424 2.942-1.17.805-4.895 3-5.527 3.377.03.053.034.075.047.083.385.227.798.417 1.149.689.505.39.945.388 1.45 0 .364-.279.79-.476 1.231-.735l-1.464-.915c.04-.035.063-.063.092-.08.67-.389 1.34-.78 2.016-1.16.064-.035.194-.016.259.029zm2.894-9.337c.345.612.602 1.399.64 2.006-.678 0-1.332.004-1.987-.005-.06-.001-.154-.07-.173-.128-.32-.988-1.003-1.69-1.81-2.28-.573-.419-1.183-.788-1.776-1.18-.05-.032-.099-.067-.18-.123.135-.081.24-.146.348-.209.552-.32 1.1-.647 1.66-.955.1-.056.28-.09.361-.037 1.17.769 2.215 1.667 2.917 2.911z"/></g>`;
  }
};
export default Grc;
