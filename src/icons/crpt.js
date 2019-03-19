const Crpt = {
  symbol: 'crpt',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm5.833-22.256l.576-.588c-1.604-1.343-3.577-2.099-5.634-2.099-4.647 0-8.472 3.653-8.76 8.397h.822c.288-4.24 3.743-7.557 7.938-7.557 1.85 0 3.62.63 5.058 1.847zm-.288 2.771l.577-.587a6.655 6.655 0 0 0-5.347-2.73c-3.702 0-6.704 3.066-6.704 6.802 0 3.778 3.002 6.843 6.704 6.843 2.098 0 4.071-1.008 5.347-2.729l-.577-.588a5.865 5.865 0 0 1-4.77 2.478c-3.249 0-5.881-2.688-5.881-6.004 0-3.275 2.632-5.962 5.88-5.962a5.863 5.863 0 0 1 4.771 2.477zm.946-2.141c.206.21.37.42.535.63l.576-.588c-.165-.21-.33-.42-.534-.63zm-5.757 14.61a8.688 8.688 0 0 0 5.634-2.099l-.576-.587a7.767 7.767 0 0 1-5.058 1.847c-4.195 0-7.65-3.317-7.938-7.557h-.822c.288 4.744 4.113 8.396 8.76 8.396zm5.757-3.316l.577.588c.205-.21.37-.42.534-.63l-.576-.588c-.164.21-.329.42-.535.63zM6.823 16c0-5.584 4.482-10.16 9.952-10.16 2.961 0 5.757 1.344 7.65 3.695L25 8.947C22.944 6.427 19.941 5 16.775 5 10.853 5 6 9.912 6 16c0 6.045 4.812 11 10.775 11 3.208 0 6.17-1.428 8.225-3.947l-.576-.587c-1.892 2.393-4.688 3.694-7.65 3.694-5.469 0-9.951-4.576-9.951-10.16z"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#00bdcd" r="16"/><path d="M21.833 9.744a7.764 7.764 0 0 0-5.058-1.847c-4.195 0-7.65 3.317-7.938 7.557h-.822c.288-4.744 4.113-8.397 8.76-8.397 2.057 0 4.03.756 5.634 2.1zm-.288 2.771a5.863 5.863 0 0 0-4.77-2.477c-3.249 0-5.881 2.687-5.881 5.962 0 3.316 2.632 6.004 5.88 6.004 1.886 0 3.659-.92 4.771-2.478l.577.588c-1.276 1.721-3.25 2.73-5.347 2.73-3.702 0-6.704-3.066-6.704-6.844 0-3.736 3.002-6.802 6.704-6.802a6.655 6.655 0 0 1 5.347 2.73zm.946-2.141l.577-.588c.205.21.37.42.534.63l-.576.587a7.357 7.357 0 0 0-.535-.63zm-5.757 14.61c-4.647 0-8.472-3.652-8.76-8.396h.822c.288 4.24 3.743 7.557 7.938 7.557 1.85 0 3.62-.63 5.058-1.847l.576.587a8.688 8.688 0 0 1-5.634 2.1zm5.757-3.316c.206-.21.37-.42.535-.63l.576.587c-.165.21-.329.42-.534.63zM6.823 16c0 5.584 4.482 10.16 9.952 10.16 2.961 0 5.757-1.301 7.65-3.694l.575.587C22.944 25.573 19.983 27 16.775 27 10.812 27 6 22.045 6 16 6 9.912 10.853 5 16.775 5 19.94 5 22.945 6.427 25 8.947l-.576.588c-1.892-2.351-4.688-3.695-7.65-3.695-5.47 0-9.951 4.576-9.951 10.16z" fill="#fff" fill-rule="nonzero"/></g>`;
  }
};
export default Crpt;
