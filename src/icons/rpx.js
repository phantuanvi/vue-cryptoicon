const Rpx = {
  symbol: 'rpx',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.696-16.268c-.55 0-1.021.333-1.212.805H20.48a.482.482 0 0 0-.42.243l-.785 1.396-.582-4.915c-.065-.55-.88-.556-.954-.007l-1.014 7.523-.981-14.339c-.04-.573-.894-.59-.957-.018l-1.22 11.147-.849-4.67c-.09-.498-.813-.523-.939-.031l-.938 3.67H6.48c-.266 0-.481.211-.481.47s.215.47.48.47h4.736c.22 0 .412-.146.466-.355l.484-1.895 1.047 5.756c.098.535.892.508.95-.033l.991-9.054.935 13.667c.039.566.88.592.956.03l1.14-8.454.308 2.607c.054.455.673.574.899.173l1.372-2.441h3.72c.19.471.662.805 1.212.805.72 0 1.304-.571 1.304-1.275s-.584-1.275-1.304-1.275z"/>`;
  },
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" fill="#8d181b" r="16"/><path d="M25.696 15.732c.72 0 1.304.57 1.304 1.275s-.584 1.275-1.304 1.275c-.55 0-1.021-.334-1.212-.805h-3.72l-1.372 2.44c-.226.402-.845.283-.899-.172l-.308-2.607-1.14 8.454c-.076.562-.917.536-.956-.03l-.935-13.667-.99 9.054c-.06.54-.853.568-.95.033l-1.048-5.756-.484 1.895a.479.479 0 0 1-.466.356H6.48c-.265 0-.48-.21-.48-.47s.215-.47.48-.47h4.36l.939-3.671c.126-.492.848-.467.94.032l.849 4.669L14.787 6.42c.063-.571.918-.555.957.018l.981 14.34 1.014-7.524c.074-.549.889-.543.954.007l.582 4.915.784-1.396a.482.482 0 0 1 .421-.243h4.004a1.304 1.304 0 0 1 1.212-.805z" fill="#fff"/></g>`;
  }
};
export default Rpx;
