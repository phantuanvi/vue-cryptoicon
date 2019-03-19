const Bela = {
  symbol: 'bela',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M8.297 11.568a8.936 8.936 0 0 0-1.189 4.468c0 4.95 4.005 8.964 8.946 8.964S25 20.987 25 16.036c0-4.95-4.005-8.964-8.946-8.964a8.891 8.891 0 0 0-4.501 1.216A2.416 2.416 0 0 0 7 9.422a2.42 2.42 0 0 0 1.297 2.146zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.054-11.554c-2.43 0-4.4-1.974-4.4-4.41s1.97-4.41 4.4-4.41 4.4 1.975 4.4 4.41-1.97 4.41-4.4 4.41z" fill-rule="evenodd"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#13a0f6" r="16"/><path d="M8.297 11.568A2.422 2.422 0 0 1 7 9.422a2.416 2.416 0 1 1 4.553-1.134 8.891 8.891 0 0 1 4.501-1.216c4.94 0 8.946 4.014 8.946 8.964S20.995 25 16.054 25s-8.946-4.013-8.946-8.964a8.94 8.94 0 0 1 1.189-4.468zm7.757 8.878c2.43 0 4.4-1.974 4.4-4.41s-1.97-4.41-4.4-4.41-4.4 1.975-4.4 4.41 1.97 4.41 4.4 4.41z" fill="#fff"/></g>`;
  }
};
export default Bela;