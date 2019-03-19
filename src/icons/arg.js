const Arg = {
  symbol: 'arg',
  color: '#000',
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM10.755 5.246l.01-.011a11.947 11.947 0 0 0-6.137 14.198 11.023 11.023 0 0 0 2.495 4.407c.807-1.773 1.434-3.62 2.177-5.405l2.22-5.628c.35-.86.626-1.774 1.242-2.485.648-.754 1.646-1.083 2.602-1.19a6.074 6.074 0 0 1 3.494.542c.775.425 1.274 1.21 1.571 2.028l3.08 8.071c.51 1.338.966 2.697 1.561 3.993a11.936 11.936 0 0 0-14.315-18.52zm4.439 8.134c-1.54 3.855-3.037 7.72-4.566 11.575-.18.446-.425.882-.478 1.37.52.372 1.136.584 1.73.829a11.968 11.968 0 0 0 9.834-.659c.11-.062.21-.141.298-.233-.107-.542-.372-1.041-.553-1.561-1.37-3.622-2.729-7.254-4.11-10.864-.137-.34-.244-.722-.54-.945-.553-.361-1.403-.149-1.615.488z"  />`;
  },
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" r="16" fill="#A71435"/><g fill="#FFF"><path d="M10.755 5.246a11.936 11.936 0 0 1 14.315 18.52c-.595-1.296-1.051-2.655-1.561-3.993l-3.08-8.07c-.297-.818-.796-1.604-1.571-2.029a6.074 6.074 0 0 0-3.494-.542c-.956.107-1.954.436-2.602 1.19-.616.711-.892 1.625-1.242 2.485L9.3 18.435c-.743 1.784-1.37 3.632-2.177 5.405a11.023 11.023 0 0 1-2.495-4.407 11.947 11.947 0 0 1 6.138-14.198l-.011.01z"/><path d="M15.194 13.38c.212-.637 1.062-.85 1.614-.488.297.223.404.605.542.945 1.38 3.61 2.74 7.242 4.11 10.864.18.52.445 1.019.552 1.56a1.256 1.256 0 0 1-.298.234 11.968 11.968 0 0 1-9.833.659c-.595-.245-1.21-.457-1.731-.829.053-.488.297-.924.478-1.37 1.529-3.854 3.026-7.72 4.566-11.575z"/></g></g>`;
  }
};
export default Arg;
