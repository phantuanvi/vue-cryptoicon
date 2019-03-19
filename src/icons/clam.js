const Calm = {
  symbol: 'calm',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.81-24.13c0 .883-.028 4.005-.375 7.153-.327 2.967-.846 6.223-.965 6.954.15.014.292.037.426.067.286-.575 1.693-3.459 2.338-5.626.738-2.48 1.164-5.788 1.176-7.126l.002-.241c-.245-.373-.779-1.068-1.47-1.254-.604-.162-.955-.09-1.133-.016zm2.899 1.424c-.013 1.355-.443 4.701-1.189 7.207-.633 2.129-1.99 4.933-2.33 5.62.146.046.288.101.425.167.365-.47 2.038-2.663 3.086-4.645 1.235-2.34 2.383-5.442 2.538-6.044l.064-.247c-.137-.418-.465-1.196-1.101-1.605-.657-.423-1.232-.47-1.493-.464zm.257 8.484c-1.033 1.955-2.665 4.108-3.086 4.653.174.104.337.224.488.36.448-.435 2.317-2.267 3.561-3.811 1.436-1.783 2.863-4.285 3.097-4.828l.121-.282c-.033-.36-.135-.93-.444-1.352-.362-.494-.918-.743-1.177-.837-.196.745-1.384 3.87-2.56 6.097zm-9.961-8.252c.112.877.644 3.657 1.572 6.652.832 2.685 2.07 5.365 2.348 5.956.144-.047.292-.084.441-.11-.11-.64-.676-4.004-1.027-7.167-.384-3.457-.54-6.386-.561-6.981l-.002-.059c-.261-.076-.845-.17-1.594.173-.69.315-1.05.907-1.212 1.262l.035.274zm3.071-1.66c.021.592.177 3.511.56 6.96.351 3.168.92 6.54 1.026 7.155.143-.014.286-.022.43-.022l.078.002c.108-.664.637-3.967.968-6.97.346-3.133.373-6.242.373-7.12v-.142C17.23 7.483 16.578 7 15.78 7c-.797 0-1.435.483-1.709.73l.004.136zm2.016 14.387c-1.628 0-2.37.957-2.59 1.312C14.878 24.56 15.753 25 16.105 25c.352 0 1.349-.533 2.574-1.392-.225-.374-.97-1.355-2.587-1.355zm9.201-7.968c-.257.583-1.69 3.092-3.13 4.878-1.252 1.554-3.128 3.394-3.584 3.835.126.136.24.283.34.439a29.17 29.17 0 0 0 2.791-2.287c2.352-2.189 4.225-4.353 4.287-5.444a1.539 1.539 0 0 0-.704-1.421zM6.82 14.073c.537 1.341 1.56 2.93 3.042 4.722a33.811 33.811 0 0 0 3.91 3.996c.1-.09.207-.174.319-.25-.418-.488-1.91-2.308-3.283-4.941-1.538-2.95-2.122-4.99-2.372-5.862l-.037-.13-.002-.006c-.344.091-1.212.375-1.553.995a1.96 1.96 0 0 0-.231.929c.065.184.134.366.207.547zm6.74 8.928a34.204 34.204 0 0 1-3.93-4.02c-1.448-1.752-2.464-3.315-3.027-4.652-.21.182-.649.67-.6 1.533.066 1.131 1.715 2.922 4.726 5.496a45.31 45.31 0 0 0 2.532 2.03 2.91 2.91 0 0 1 .3-.387zM8.687 11.527l.037.13c.248.864.826 2.885 2.35 5.809 1.394 2.673 2.908 4.494 3.273 4.916.097-.053.196-.101.298-.144-.3-.638-1.525-3.304-2.353-5.974-.934-3.013-1.47-5.816-1.582-6.701l-.005-.034a2.169 2.169 0 0 0-1.378.41c-.465.339-.655.887-.732 1.253.024.092.053.202.092.335z" fill-rule="evenodd"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#20c5d3" r="16"/><path d="M17.81 7.87v-.089c.177-.075.528-.146 1.132.016.691.186 1.225.88 1.47 1.254l-.002.24c-.012 1.339-.438 4.647-1.176 7.127-.645 2.167-2.052 5.05-2.338 5.626a3.558 3.558 0 0 0-.426-.067c.119-.731.638-3.987.965-6.954.347-3.148.374-6.27.374-7.152zm2.899 1.424v-.011c.26-.006.836.041 1.493.464.636.409.964 1.187 1.1 1.605l-.063.247c-.155.602-1.303 3.705-2.538 6.044-1.048 1.982-2.721 4.175-3.086 4.645a3.27 3.27 0 0 0-.425-.167c.34-.687 1.697-3.491 2.33-5.62.746-2.506 1.176-5.852 1.189-7.207zm.257 8.484c1.176-2.227 2.364-5.352 2.56-6.097.259.094.815.343 1.177.837.31.422.411.993.444 1.352l-.121.282c-.234.543-1.66 3.045-3.097 4.828-1.244 1.544-3.113 3.376-3.561 3.81a3.167 3.167 0 0 0-.488-.36c.421-.544 2.053-2.697 3.086-4.652zm-9.961-8.252l-.035-.274c.163-.355.523-.947 1.212-1.262.75-.342 1.333-.249 1.594-.173l.002.059c.02.595.177 3.524.56 6.981.352 3.163.919 6.527 1.028 7.166-.15.027-.297.064-.441.11-.278-.59-1.516-3.27-2.348-5.955-.928-2.995-1.46-5.775-1.572-6.652zm3.071-1.66l-.004-.137c.274-.246.912-.729 1.71-.729.796 0 1.448.483 1.729.73v.14c0 .879-.027 3.988-.373 7.12-.331 3.004-.86 6.307-.968 6.971l-.078-.002c-.144 0-.287.008-.43.022-.106-.615-.675-3.987-1.027-7.156-.382-3.448-.538-6.367-.559-6.96zm2.016 14.387c1.617 0 2.362.981 2.587 1.355-1.225.86-2.222 1.392-2.574 1.392-.352 0-1.227-.44-2.603-1.435.22-.355.962-1.312 2.59-1.312zm9.201-7.968c.246.16.751.591.704 1.42-.062 1.092-1.935 3.256-4.287 5.445a29.17 29.17 0 0 1-2.79 2.287 3.089 3.089 0 0 0-.341-.439c.456-.441 2.332-2.28 3.584-3.835 1.44-1.786 2.873-4.295 3.13-4.878zM6.82 14.073a13.898 13.898 0 0 1-.207-.547 1.96 1.96 0 0 1 .23-.929c.342-.62 1.21-.904 1.554-.995l.002.006.037.13c.25.871.834 2.912 2.372 5.862 1.373 2.633 2.865 4.453 3.283 4.94a3.11 3.11 0 0 0-.32.251 33.811 33.811 0 0 1-3.909-3.996c-1.482-1.792-2.505-3.38-3.042-4.722zm6.74 8.928c-.11.12-.21.25-.3.388a45.838 45.838 0 0 1-2.53-2.03c-3.012-2.575-4.66-4.366-4.726-5.497-.05-.863.388-1.35.6-1.533.562 1.337 1.578 2.9 3.026 4.652A34.204 34.204 0 0 0 13.56 23zM8.687 11.527a10.296 10.296 0 0 1-.092-.335c.077-.366.267-.914.732-1.252a2.169 2.169 0 0 1 1.378-.411l.005.034c.113.885.648 3.688 1.582 6.7.828 2.671 2.053 5.337 2.353 5.975a3.177 3.177 0 0 0-.298.144c-.365-.422-1.879-2.243-3.272-4.916-1.525-2.924-2.103-4.945-2.35-5.808z" fill="#fff" fill-rule="nonzero"/></g>`;
  }
};
export default Calm;
