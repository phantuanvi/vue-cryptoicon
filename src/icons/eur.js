const Eur = {
  symbol: 'eur',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM8 19.004h1.994C11.097 23 13.733 25 17.9 25c1.585 0 2.951-.216 4.1-.648v-2.373c-1.209.494-2.32.74-3.334.74-1.419 0-2.512-.271-3.277-.815-.766-.545-1.416-1.511-1.949-2.9h4.956l.8-2.003h-6.184c-.03-.378-.045-.806-.045-1.285 0-.416.019-.748.056-.995h7.096l.811-2.003h-7.422c.713-2.292 2.316-3.438 4.809-3.438a8.92 8.92 0 0 1 3.683.776V7.532A14.002 14.002 0 0 0 18.103 7c-4.16 0-6.833 1.906-8.02 5.718H8.812L8 14.721h1.69a12.95 12.95 0 0 0-.057 1.25c0 .332.011.675.034 1.03H8.81z" fill-rule="evenodd"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#0f8ff8" r="16"/><path d="M8 19.004L8.81 17h.857a16.279 16.279 0 0 1-.034-1.03c0-.448.019-.864.056-1.25H8l.81-2.003h1.274C11.27 8.906 13.944 7 18.103 7c1.367 0 2.666.177 3.897.532v2.524a8.92 8.92 0 0 0-3.683-.776c-2.493 0-4.096 1.146-4.81 3.438h7.423l-.81 2.003h-7.097a6.938 6.938 0 0 0-.056.995c0 .479.015.907.045 1.285h6.183l-.8 2.003H13.44c.533 1.389 1.183 2.355 1.949 2.9.765.544 1.858.816 3.277.816 1.014 0 2.125-.247 3.334-.741v2.373c-1.149.432-2.515.648-4.1.648-4.167 0-6.803-1.999-7.906-5.996z" fill="#fff"/></g>`;
  }
};
export default Eur;
