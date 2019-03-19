const Ebst = {
  symbol: 'ebst',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M9.928 16.574H7.123L4 19.072h6.522A8.05 8.05 0 0 0 17.954 24C22.398 24 26 20.418 26 16s-3.602-8-8.046-8a8.049 8.049 0 0 0-7.46 4.996H4l3.123 2.498h2.8a8.076 8.076 0 0 0 .005 1.08zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.537-15.851v.306c0 .102-.006.204-.02.306H15.48a2.262 2.262 0 0 0 .849 1.617c.244.198.52.354.829.469s.63.172.964.172c.578 0 1.067-.105 1.465-.316.399-.21.726-.5.983-.87l1.543 1.224c-.913 1.225-2.237 1.838-3.972 1.838-.72 0-1.382-.112-1.986-.335a4.693 4.693 0 0 1-1.571-.948 4.269 4.269 0 0 1-1.041-1.502c-.251-.593-.376-1.266-.376-2.019 0-.74.125-1.413.376-2.019s.594-1.122 1.031-1.55c.437-.427.955-.759 1.552-.995s1.244-.354 1.938-.354c.643 0 1.237.105 1.783.316s1.019.523 1.418.937c.398.415.71.932.935 1.55s.337 1.343.337 2.173zm-2.314-1.034a2.8 2.8 0 0 0-.125-.842 1.923 1.923 0 0 0-.395-.708c-.18-.204-.408-.367-.685-.488s-.6-.182-.973-.182c-.694 0-1.282.208-1.765.622a2.261 2.261 0 0 0-.8 1.598z"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#1693d4" fill-rule="nonzero" r="16"/><path d="M9.928 16.574a8.07 8.07 0 0 1-.005-1.08h-2.8L4 12.996h6.494A8.049 8.049 0 0 1 17.954 8C22.398 8 26 11.582 26 16s-3.602 8-8.046 8a8.05 8.05 0 0 1-7.432-4.928H4l3.123-2.498zm12.609-.425c0-.83-.112-1.554-.337-2.172s-.537-1.136-.935-1.55c-.399-.415-.871-.728-1.418-.938s-1.14-.316-1.783-.316c-.694 0-1.34.118-1.938.354s-1.115.568-1.552.995c-.437.428-.78.944-1.031 1.55s-.376 1.28-.376 2.02c0 .752.125 1.425.376 2.018.25.593.597 1.094 1.04 1.502.444.409.968.724 1.572.948a5.688 5.688 0 0 0 1.986.335c1.735 0 3.06-.613 3.972-1.838l-1.543-1.224c-.257.37-.584.66-.983.87-.398.21-.887.316-1.465.316-.334 0-.656-.057-.964-.172s-.585-.271-.83-.469a2.262 2.262 0 0 1-.848-1.617h7.038c.013-.102.019-.204.019-.306zm-2.314-1.034H15.48c.052-.65.318-1.183.8-1.598.483-.414 1.07-.622 1.765-.622.372 0 .697.06.973.182s.505.284.685.488c.18.204.311.44.395.708a2.8 2.8 0 0 1 .125.842z" fill="#fff"/></g>`;
  }
};
export default Ebst;
