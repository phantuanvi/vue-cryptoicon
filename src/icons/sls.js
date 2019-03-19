const Sls = {
  symbol: 'sls',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7.894 18.31v2.907-2.908H7v4.44h.894v-1.532c.253.413.556.769.914 1.054.595.473 1.318.729 2.16.729 1.217 0 2.194-.504 2.863-1.368.544-.703.846-1.613.846-2.41 0-1.045-.417-1.86-1.204-2.509-.576-.475-1.187-.784-2.42-1.295l-.203-.084c-1.117-.463-1.622-.711-2.071-1.066-.544-.43-.81-.92-.81-1.58 0-.886.307-1.607.847-2.11a2.75 2.75 0 0 1 1.873-.719c1.046 0 1.786.446 2.278 1.263.417.692.63 1.627.63 2.55h.894v-3.616h1.1v12.747h2.645v-1.558c.249.4.545.747.895 1.026.595.473 1.318.729 2.16.729 1.217 0 2.194-.504 2.863-1.368.544-.703.846-1.613.846-2.41 0-1.045-.417-1.86-1.204-2.509-.576-.475-1.187-.784-2.42-1.295a682.17 682.17 0 0 0-.203-.084c-1.117-.463-1.622-.711-2.071-1.066-.544-.43-.81-.92-.81-1.58 0-.886.307-1.607.847-2.11a2.75 2.75 0 0 1 1.873-.719c1.046 0 1.786.446 2.278 1.263.417.692.63 1.627.63 2.55h.894v-4.42h-.895v1.216C23.27 9.533 22.292 9 21.012 9c-.93 0-1.83.34-2.495.96-.718.668-1.12 1.613-1.12 2.728 0 .93.395 1.658 1.137 2.244.537.424 1.09.696 2.285 1.191l.203.084c1.15.477 1.707.758 2.191 1.158.595.491.893 1.071.893 1.858 0 .614-.242 1.345-.67 1.896-.505.652-1.22 1.022-2.144 1.022-1.181 0-1.996-.65-2.529-1.784A5.974 5.974 0 0 1 18.326 19a5.685 5.685 0 0 1-.076-.48 4.2 4.2 0 0 1-.014-.21h-.894v3.634h-.858V9.197h-2.888v1.27C12.946 9.533 11.97 9 10.69 9c-.93 0-1.83.34-2.495.96-.718.668-1.12 1.613-1.12 2.728 0 .93.395 1.658 1.137 2.244.537.424 1.09.696 2.285 1.191l.203.084c1.15.477 1.707.758 2.191 1.158.595.491.893 1.071.893 1.858 0 .614-.242 1.345-.67 1.896-.505.652-1.22 1.022-2.144 1.022-1.181 0-1.996-.648-2.532-1.785-.2-.424-.346-.89-.443-1.359a6.195 6.195 0 0 1-.08-.483c-.013-.1-.02-.185-.02-.205z" fill-rule="evenodd"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#8e9495" r="16"/><path d="M7.623 20.711a6.907 6.907 0 0 1-.506-1.547A5.396 5.396 0 0 1 7 18.31h.894a6.195 6.195 0 0 0 .1.688c.097.469.243.935.443 1.36.536 1.136 1.35 1.784 2.532 1.784.924 0 1.64-.37 2.144-1.022.428-.551.67-1.282.67-1.896 0-.787-.298-1.367-.893-1.858-.484-.4-1.041-.68-2.191-1.158l-.203-.084c-1.196-.495-1.748-.767-2.285-1.191-.742-.586-1.136-1.313-1.136-2.244 0-1.115.401-2.06 1.119-2.728A3.663 3.663 0 0 1 10.689 9c1.28 0 2.257.533 2.907 1.467v-1.27h2.888v12.747h.858v-3.577a.898.898 0 0 1 0-.088l.894.03v.045a5.685 5.685 0 0 0 .09.646c.093.465.237.932.437 1.357.533 1.135 1.348 1.784 2.529 1.784.924 0 1.64-.37 2.144-1.022.428-.551.67-1.282.67-1.896 0-.787-.298-1.367-.893-1.858-.484-.4-1.041-.68-2.191-1.158l-.203-.084c-1.196-.495-1.748-.767-2.285-1.191-.742-.586-1.136-1.313-1.136-2.244 0-1.115.401-2.06 1.119-2.728A3.663 3.663 0 0 1 21.012 9c1.28 0 2.257.533 2.907 1.467V9.251h.895v4.422h-.895c0-.924-.212-1.86-.629-2.551-.492-.817-1.232-1.263-2.278-1.263a2.75 2.75 0 0 0-1.873.718c-.54.504-.847 1.225-.847 2.111 0 .66.266 1.15.81 1.58.45.355.954.603 2.071 1.066l.203.084c1.233.511 1.844.82 2.42 1.295.787.65 1.204 1.464 1.204 2.51 0 .796-.302 1.706-.846 2.41-.669.863-1.646 1.367-2.862 1.367-.843 0-1.566-.256-2.16-.73a3.967 3.967 0 0 1-.896-1.025v1.558H15.59V10.056h-1.1v3.617h-.894c0-.924-.212-1.86-.629-2.551-.492-.817-1.232-1.263-2.278-1.263a2.75 2.75 0 0 0-1.873.718c-.54.504-.847 1.225-.847 2.111 0 .66.266 1.15.81 1.58.45.355.954.603 2.071 1.066l.203.084c1.233.511 1.844.82 2.42 1.295.787.65 1.204 1.464 1.204 2.51 0 .796-.302 1.706-.846 2.41-.669.863-1.646 1.367-2.862 1.367-.843 0-1.566-.256-2.16-.73a3.994 3.994 0 0 1-.915-1.053v1.532H7v-4.44h.894v2.908a5.306 5.306 0 0 1-.271-.506z" fill="#fff" fill-rule="nonzero"/></g>`;
  }
};
export default Sls;
