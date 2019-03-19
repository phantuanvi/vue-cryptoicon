const Btdx = {
  symbol: 'btdx',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-29c7.179 0 13 5.821 13 13s-5.821 13-13 13S3 23.179 3 16 8.821 3 16 3zm-.038 1.94c6.087 0 11.023 4.934 11.023 11.022 0 6.087-4.936 11.023-11.023 11.023-6.088 0-11.022-4.936-11.022-11.023C4.94 9.874 9.874 4.94 15.962 4.94zm0 23.082c6.659 0 12.057-5.398 12.057-12.058S22.62 3.907 15.962 3.907c-6.66 0-12.058 5.398-12.058 12.057 0 6.66 5.398 12.058 12.058 12.058zm2.05-11.044a.4.4 0 0 1 .192.385 2.332 2.332 0 0 0 2.193 2.553 2.326 2.326 0 1 0 .18-4.65 2.324 2.324 0 0 0-1.87.871.4.4 0 0 1-.522.088l-1.72-1.058a.407.407 0 0 1-.193-.343v-.017c0-.187.13-.343.308-.39a2.322 2.322 0 0 0 1.731-2.419 2.333 2.333 0 0 0-2.207-2.152 2.326 2.326 0 0 0-.843 4.53.404.404 0 0 1 .277.382v.099c0 .145-.08.28-.206.351l-1.638.918a.398.398 0 0 1-.492-.08 2.32 2.32 0 0 0-1.773-.777 2.336 2.336 0 0 0-2.286 2.322 2.323 2.323 0 1 0 4.625-.324.4.4 0 0 1 .187-.396l1.701-1.05a.4.4 0 0 1 .418-.002l1.938 1.16zM15.997 6.686a5.478 5.478 0 0 0-5.464 5.103 5.99 5.99 0 0 1 1.987.02 3.495 3.495 0 0 1 3.475-3.139 3.497 3.497 0 0 1 3.493 3.496c0 .99-.413 1.883-1.075 2.518a3.579 3.579 0 0 1 2.727-.633 5.477 5.477 0 0 0-5.142-7.366zM11.465 23.01c1.72 0 3.251-.8 4.246-2.05a5.816 5.816 0 0 1-.912-2.042 3.584 3.584 0 0 1-3.331 2.259 3.59 3.59 0 0 1 0-7.179c.789 0 1.517.256 2.108.687a3.49 3.49 0 0 1-1.075-2.421 5.421 5.421 0 0 0-6.459 5.324 5.421 5.421 0 0 0 5.423 5.422zm9.056 0a5.424 5.424 0 1 0 1.33-10.68 5.797 5.797 0 0 1-.338 1.808 3.59 3.59 0 0 1-.992 7.039 3.59 3.59 0 0 1-3.57-3.232 5.885 5.885 0 0 1-1.841.011 5.424 5.424 0 0 0 5.411 5.054z"/>`;
  },
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" r="16" fill="#0AF"/><g fill="#FFF"><path d="M15.962 4.94C9.874 4.94 4.94 9.874 4.94 15.962c0 6.087 4.934 11.023 11.022 11.023 6.087 0 11.023-4.936 11.023-11.023 0-6.088-4.936-11.022-11.023-11.022zm.035 1.746a5.477 5.477 0 0 1 5.143 7.365 3.579 3.579 0 0 0-2.726.632 3.477 3.477 0 0 0 1.074-2.517 3.497 3.497 0 0 0-3.493-3.496 3.495 3.495 0 0 0-3.474 3.139 5.99 5.99 0 0 0-1.988-.02 5.478 5.478 0 0 1 5.464-5.103zm2.015 10.292l-1.938-1.16a.4.4 0 0 0-.418.003l-1.7 1.05a.4.4 0 0 0-.188.396 2.332 2.332 0 0 1-2.229 2.65 2.323 2.323 0 0 1-2.396-2.326 2.336 2.336 0 0 1 2.286-2.322 2.32 2.32 0 0 1 1.773.778c.124.14.33.17.492.08l1.638-.919a.406.406 0 0 0 .206-.351v-.1a.404.404 0 0 0-.277-.381 2.326 2.326 0 0 1 .844-4.53 2.333 2.333 0 0 1 2.206 2.152 2.322 2.322 0 0 1-1.731 2.419.405.405 0 0 0-.308.39v.017c0 .14.074.269.192.343l1.721 1.058a.4.4 0 0 0 .522-.088 2.324 2.324 0 0 1 1.87-.87 2.326 2.326 0 1 1-.179 4.65 2.332 2.332 0 0 1-2.194-2.554.4.4 0 0 0-.192-.385zm-6.547 6.033a5.421 5.421 0 0 1-5.423-5.422 5.421 5.421 0 0 1 6.46-5.324 3.49 3.49 0 0 0 1.074 2.421A3.562 3.562 0 0 0 11.468 14a3.59 3.59 0 0 0 0 7.179 3.584 3.584 0 0 0 3.33-2.26c.171.746.487 1.435.913 2.043a5.41 5.41 0 0 1-4.246 2.05zm9.056 0a5.424 5.424 0 0 1-5.411-5.054 5.885 5.885 0 0 0 1.841-.011 3.59 3.59 0 1 0 4.562-3.807 5.797 5.797 0 0 0 .338-1.808 5.424 5.424 0 0 1-1.33 10.68z"/><path d="M16 3C8.821 3 3 8.821 3 16s5.821 13 13 13 13-5.821 13-13S23.179 3 16 3zm-.038 25.022c-6.66 0-12.058-5.398-12.058-12.058S9.302 3.907 15.962 3.907c6.659 0 12.057 5.398 12.057 12.057 0 6.66-5.398 12.058-12.057 12.058z"/></g></g>`;
  }
};
export default Btdx;
