const Nxt = {
  symbol: 'nxt',
  color: '#000',
  plainIcon: c => {
    return `<path  fill="${
      c ? c : this.color
    }" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10.082-15.167c.507 0 .918-.373.918-.833v-1.667c0-.46-.41-.833-.918-.833h-5.53c-.507 0-.918.373-.918.833 0 .46.411.833.918.833h4.612V16c0 .46.411.833.918.833zm-4.549 0h-.7l-5.232-3.18a.979.979 0 0 0-.531-.153h-1.835c-.507 0-.918.373-.918.833 0 .46.41.833.918.833h1.542l5.352 3.24c.127.06.27.094.423.094h2.816c.507 0 .918-.373.918-.834 0-.46-.41-.833-.918-.833h-1.835zm-6.463 0h-1.554l-5.232-3.18a.98.98 0 0 0-.531-.153H5.918c-.507 0-.918.373-.918.833 0 .46.41.833.918.833H7.46l5.352 3.24c.126.06.27.094.423.094h1.835c.507 0 .918-.373.918-.834 0-.46-.411-.833-.918-.833zm-9.152 0c-.507 0-.918.373-.918.834 0 .46.41.833.918.833h1.835c.507 0 .918-.373.918-.833 0-.46-.411-.834-.918-.834H5.918z"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#008FBB"/><path fill="#FFF" d="M26.082 16.833c-.507 0-.918-.373-.918-.833v-.834h-4.612c-.507 0-.918-.373-.918-.833 0-.46.411-.833.918-.833h5.53c.507 0 .918.373.918.833V16c0 .46-.41.833-.918.833zm-4.549 0h1.835c.507 0 .918.373.918.833 0 .46-.41.834-.918.834h-2.816a.987.987 0 0 1-.423-.094l-5.352-3.24h-1.542c-.507 0-.918-.373-.918-.833 0-.46.41-.833.918-.833h1.835c.198 0 .381.057.531.154l5.232 3.18h.7zm-6.463 0c.507 0 .918.373.918.833 0 .46-.411.834-.918.834h-1.835a.988.988 0 0 1-.423-.094l-5.352-3.24H5.918c-.507 0-.918-.373-.918-.833 0-.46.41-.833.918-.833h1.835a.98.98 0 0 1 .531.154l5.232 3.18h1.554zm-9.152 0h1.835c.507 0 .918.373.918.834 0 .46-.411.833-.918.833H5.918c-.507 0-.918-.373-.918-.833 0-.46.41-.834.918-.834z"/></g>`;
  }
};
export default Nxt;
