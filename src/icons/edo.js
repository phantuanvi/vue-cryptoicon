const Edo = {
  symbol: 'edo',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.94-8.126l1.709 1.722a1.377 1.377 0 0 0 1.949 0l1.719-1.722-2.694-2.697zm6.95-9.242l2.693-2.697-2.692-2.697-2.693 2.697zm-.669 8.363l6.255-6.265a1.382 1.382 0 0 0 0-1.953l-1.718-1.721-7.23 7.242zm-7.403-.278l7.218-7.23-2.692-2.697-7.218 7.23zm-3.822-3.8l2.705-2.698-2.693-2.698-1.718 1.722a1.382 1.382 0 0 0-.013 1.952zM18.883 8.129l-1.719-1.725a1.377 1.377 0 0 0-1.949 0L8.96 12.67l2.693 2.697z" fill-rule="evenodd"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#242424" r="16"/><path d="M13.06 23.874l2.683-2.697 2.694 2.697-1.719 1.722a1.377 1.377 0 0 1-1.95 0zm6.95-9.242l-2.692-2.697 2.693-2.697 2.692 2.697zm-.669 8.363l-2.693-2.697 7.23-7.242 1.718 1.721c.539.54.539 1.413 0 1.953zm-7.403-.278L9.246 20.02l7.218-7.23 2.692 2.697zm-3.822-3.8l-1.719-1.722a1.382 1.382 0 0 1 .013-1.952l1.718-1.722 2.693 2.698zM18.883 8.129l-7.23 7.238L8.96 12.67l6.255-6.266a1.377 1.377 0 0 1 1.95 0z" fill="#fff" fill-rule="nonzero"/></g>`;
  }
};
export default Edo;
