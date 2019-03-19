const Ok = {
  symbol: 'ok',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm11.986-17.331c-.51-.109-1.016-.251-1.532-.365-.476-.112-.949-.248-1.428-.351-.136-.03-.273-.086-.417-.075-.098.025-.176.097-.262.15L19.64 16.98c-.091.062-.18.123-.284.16.056-.215.162-.41.243-.613l.72-1.732c.235-.546.455-1.1.694-1.646.022-.055.05-.114.034-.172-.307-.092-.624-.153-.933-.234-.596-.145-1.192-.298-1.788-.44-.12-.028-.236-.078-.359-.086a.181.181 0 0 0-.056.072l-3.533 8.47a.469.469 0 0 0-.036.161c.195.067.401.1.599.153.701.17 1.4.346 2.099.518.13.03.259.084.395.084.076-.1.106-.226.156-.34.346-.816.68-1.637 1.028-2.453.058-.136.1-.278.172-.404.123-.016.237.037.354.062.818.203 1.64.398 2.456.607.222.06.473.142.598.356.1.15.059.342-.011.496l-.927 2.221c-.047.123-.125.24-.131.376.217.073.443.109.663.17.676.17 1.356.334 2.032.501.134.03.265.081.401.084a.585.585 0 0 0 .08-.14c.416-1.005.836-2.004 1.254-3.006.1-.251.211-.499.264-.763a1.41 1.41 0 0 0-.122-1.053c-.184-.317-.518-.506-.844-.651-.353-.162-.738-.237-1.11-.337a.18.18 0 0 1 .06-.075c1.393-.866 2.79-1.724 4.177-2.592v-.064zM16.882 12.97a1.178 1.178 0 0 0-.534-.905c-.273-.197-.59-.314-.902-.428a16.642 16.642 0 0 0-1.415-.396c-1.035-.25-2.068-.512-3.104-.763a19.278 19.278 0 0 0-2.247-.47c-.245-.006-.49-.017-.735.005a1.966 1.966 0 0 0-.916.382 2.43 2.43 0 0 0-.56.688c-.167.283-.28.593-.412.893l-1.629 3.915c-.178.406-.342.827-.395 1.27-.024.24.032.483.159.69.164.25.393.451.662.582.624.306 1.3.479 1.972.64 1.01.254 2.027.499 3.037.752.744.178 1.484.384 2.244.479.44.07.892.038 1.317-.095.34-.13.632-.358.841-.654.295-.398.462-.869.654-1.32.53-1.278 1.067-2.553 1.599-3.83.197-.452.39-.93.364-1.435zm-3.62.891c.02-.147-.085-.273-.208-.337-.25-.136-.535-.186-.807-.256-.722-.18-1.444-.358-2.17-.534a1.442 1.442 0 0 0-.634-.04c-.245.07-.368.318-.451.535-.41.975-.81 1.952-1.222 2.924-.045.114-.09.228-.1.35 0 .14.097.262.216.32.179.092.374.143.563.193l2.255.554c.262.061.537.128.805.07.225-.073.34-.304.423-.507l1.105-2.651c.087-.2.198-.398.226-.62z"/>`;
  },
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" r="16" fill="#000"/><path d="M27.986 14.669v.064c-1.387.868-2.784 1.726-4.177 2.592a.18.18 0 0 0-.06.075c.372.1.757.175 1.11.337.326.145.66.334.844.651.176.322.22.7.122 1.053-.053.264-.164.512-.264.763-.418 1.002-.838 2.001-1.253 3.007a.585.585 0 0 1-.08.139c-.137-.003-.268-.053-.402-.084-.676-.167-1.356-.331-2.032-.5-.22-.062-.446-.098-.663-.17.006-.137.084-.254.13-.377l.928-2.221c.07-.154.111-.346.011-.496-.125-.214-.376-.295-.598-.356-.816-.21-1.638-.404-2.456-.607-.117-.025-.231-.078-.354-.062-.072.126-.114.268-.172.404-.348.816-.682 1.637-1.028 2.453-.05.114-.08.24-.156.34-.136 0-.264-.053-.395-.084-.699-.172-1.398-.348-2.1-.518-.197-.053-.403-.086-.598-.153a.469.469 0 0 1 .036-.161l3.533-8.47a.181.181 0 0 1 .056-.072c.123.008.24.058.36.086.595.142 1.191.295 1.787.44.309.08.626.142.933.234.016.058-.012.117-.034.172-.24.546-.46 1.1-.693 1.646l-.721 1.732c-.081.203-.187.398-.243.612.104-.036.193-.097.284-.159l4.706-2.95c.086-.054.164-.126.262-.151.144-.011.28.044.417.075.48.103.952.24 1.428.35.516.115 1.022.257 1.532.366zM16.882 12.97c.025.504-.167.983-.364 1.434-.532 1.278-1.07 2.553-1.599 3.831-.192.451-.359.922-.654 1.32-.21.296-.502.524-.84.654a2.884 2.884 0 0 1-1.318.095c-.76-.095-1.5-.3-2.244-.479-1.01-.253-2.027-.498-3.037-.752-.671-.161-1.348-.334-1.972-.64a1.654 1.654 0 0 1-.662-.582 1.114 1.114 0 0 1-.159-.69c.053-.443.217-.864.395-1.27l1.63-3.915c.13-.3.244-.61.411-.893a2.43 2.43 0 0 1 .56-.688c.268-.204.583-.335.916-.382.245-.022.49-.01.735-.005a19.32 19.32 0 0 1 2.247.47c1.036.25 2.069.513 3.104.763.476.117.95.237 1.415.396.311.114.629.23.902.428.31.201.508.536.534.905zm-3.62.891c.02-.147-.085-.273-.208-.337-.25-.136-.535-.186-.807-.256-.722-.18-1.444-.358-2.17-.534a1.442 1.442 0 0 0-.634-.04c-.245.07-.368.318-.451.535-.41.975-.81 1.952-1.222 2.924-.045.114-.09.228-.1.35 0 .14.097.262.216.32.179.092.374.143.563.193l2.255.554c.262.061.537.128.805.07.225-.073.34-.304.423-.507l1.105-2.651c.087-.2.198-.398.226-.62z" fill="#FFF"/></g>`;
  }
};
export default Ok;
