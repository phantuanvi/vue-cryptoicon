const Wabi = {
  symbol: 'wabi',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm5.89-24.532c.056-.217.056-.3-.007-.377-.107-.127-.208-.121-.334.02-.082.089-.107.242-.107.6 0 .784-.1.874-.435.401-.12-.172-.252-.287-.328-.287-.063 0-.12.013-.12.026a.76.76 0 0 1-.037.121c-.019.051.05.185.164.306.309.339.397.562.428 1.08.026.465.02.503-.227.995-.327.664-.542 1.2-.642 1.608-.082.358-.101.377-.284.25-.24-.167-.756-.307-1.273-.345-.29-.02-.523-.026-.523-.007 0 .064.132.792.17.9.025.109.082.115.542.077.983-.077 1.45-.173 1.588-.326.17-.191.429-.683.7-1.353.315-.772.58-1.296.73-1.462.077-.083.398-.249.726-.376.46-.179.586-.256.586-.351 0-.205-.19-.217-.53-.039-.27.147-.327.16-.403.083-.126-.127-.031-.274.441-.683.568-.491.612-.587.334-.695-.208-.077-.359.012-.53.312-.176.326-.478.613-.598.562-.12-.05-.139-.606-.031-1.04zm-5.011 2.674c-.044-.498-.12-.644-.385-.76-.227-.095-.53-.102-.945-.025-1.002.179-1.305.275-1.98.62-.661.338-.737.395-.869.663-.24.46-.22.626.07.792.44.248.541.389.541.74 0 .172-.031.37-.075.434-.145.236.598 1.551 1.304 2.285.227.243.429.498.448.58.044.167-.006.843-.1 1.29a3.15 3.15 0 0 0 .49 2.406c.65.97 1.482 1.283 2.289.856.403-.217.598-.466.775-1.015.347-1.066.372-2.126.076-3.038-.196-.6-.24-.875-.448-2.815-.195-1.787-.246-2.062-.429-2.138-.075-.026-.233-.09-.346-.134-.284-.103-.372-.268-.416-.74zm-5.963 2.381c0-.326-.113-.677-.246-.785-.113-.09-.277-.109-.34-.038-.094.095-.031.427.145.785.202.402.233.632.114.753-.17.172-.353.096-1.003-.44-.195-.16-.435-.115-.435.076 0 .147.284.338.725.479.177.057.366.16.429.236.107.128.113.14.006.217-.07.051-.202.064-.378.038a1.387 1.387 0 0 0-.435.007c-.132.032-.164.076-.145.217.019.16.044.172.271.166a3.48 3.48 0 0 0 .549-.058l.296-.05.485.452c.265.25.58.594.693.773.29.434.63.772.782.772.132 0 .485-.434.8-.99.284-.49.316-.644.246-1.148l-.07-.447-.44.747c-.347.593-.473.746-.58.753-.177 0-.58-.421-.775-.804-.196-.396-.196-.99-.007-1.303.139-.23.177-.6.07-.67-.126-.083-.31.109-.41.428-.063.185-.132.364-.164.396-.076.083-.183-.237-.183-.562zm11.528 5.75c.391-.414.643-.81.624-.97-.012-.101-.07-.127-.27-.14-.303-.006-.347 0-1.072.25-1.4.478-2.603 1.244-3.02 1.927-.113.179-.113.185 0 .14.89-.37 2.118-.81 2.15-.778.057.05-1.16 2.317-1.317 2.45-.196.173-.221.281-.082.396.069.064.252.058.882-.025 1.33-.173 1.532-.147 2.641.37.548.255.7.28.756.128.05-.134-.044-.25-.296-.351-.555-.217-.504-.44.107-.44.34 0 1.28.171 1.557.286.063.026.17-.025.284-.12.176-.16.182-.167.063-.263-.095-.07-.303-.095-.864-.095-.624 0-.756-.02-.882-.122l-.145-.12.208-.129c.113-.07.479-.191.813-.268 1.21-.268 1.519-.414 1.393-.65-.151-.288-.41-.262-1.355.165-.555.25-1.078.377-1.135.281-.1-.166.076-.39.643-.817.328-.249.618-.498.637-.549.044-.127-.158-.344-.328-.344-.202 0-.429.204-.763.676-.17.243-.397.479-.554.568-.271.16-.505.204-.568.109-.012-.026.095-.262.253-.524.123-.196.229-.403.315-.619.05-.191-.007-.338-.133-.338-.189 0-.397.293-.472.676-.045.205-.108.44-.152.517-.094.186-.611.734-.895.958-.227.172-1.222.613-1.273.562-.05-.051.07-.205 1.242-1.622.397-.478.85-1.008 1.008-1.174zM7.992 20.528a10.67 10.67 0 0 1-.448-.734c-.233-.408-.277-.447-.473-.466a.585.585 0 0 0-.346.077c-.114.083-.114.102-.032.261.05.096.29.345.536.55.674.561 1.103 1.397.744 1.448-.196.032-.555-.179-1.072-.619-.245-.217-.498-.39-.554-.39-.17 0-.347.128-.347.25 0 .153.082.217.555.408.502.201.967.488 1.374.849.372.351.327.428-.227.37-.303-.025-.441-.019-.473.039-.094.153.158.274.94.453.434.102.913.242 1.058.319.34.179.927.74 1.298 1.25.297.416.48.505.643.307.038-.05.108-.293.133-.536.025-.242.208-.919.403-1.5.372-1.136.416-1.455.259-1.972-.05-.166-.076-.313-.05-.326.024-.012.258.02.516.07.788.154 1.424.077 2.73-.325.598-.191.66-.268.358-.485-.283-.204-2.401-.51-3.542-.51-.693 0-.731.025-.907.574-.095.3-.108.619-.114 2.215-.006 1.02-.025 1.883-.057 1.908-.145.147-.435-.542-.554-1.315-.082-.568-.05-.99.132-1.57.158-.498.139-.76-.07-.823-.27-.09-.422.191-.44.823-.007.236-.05.472-.089.53-.075.102-.088.102-.246-.007-.245-.16-.296-.344-.365-1.346-.038-.55-.088-.913-.132-.939-.114-.076-.391-.057-.473.026-.107.108-.095.364.044.893.151.581.22 1.137.139 1.137-.082 0-.618-.562-.851-.894zm9.038-10.96s-.07.556.063.869c0 0 .17.28.397.325 0 0 .101-.549-.07-.989 0 .006-.068-.255-.39-.204zm-4.544 1.82c-.22.236-.057.447-.057.44.252.396.756.632.756.632.095-.217-.031-.517-.031-.517-.183-.287-.668-.555-.668-.555z" fill-rule="evenodd"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#399b32" r="16"/><path d="M21.89 7.468c-.108.434-.089.99.031 1.04.12.051.422-.236.599-.562.17-.3.321-.389.53-.312.277.108.233.204-.335.695-.472.409-.567.556-.44.683.075.077.131.064.402-.083.34-.178.53-.166.53.039 0 .095-.126.172-.586.35-.328.128-.65.294-.725.377-.151.166-.416.69-.731 1.462-.271.67-.53 1.162-.7 1.353-.139.153-.605.25-1.588.326-.46.038-.517.032-.542-.077a9.679 9.679 0 0 1-.17-.9c0-.019.233-.013.523.007.517.038 1.033.178 1.273.344.183.128.202.109.284-.249.1-.408.315-.944.642-1.608.246-.492.253-.53.227-.996-.031-.517-.12-.74-.428-1.079-.114-.12-.183-.255-.164-.306a.76.76 0 0 0 .038-.121c0-.013.056-.026.12-.026.075 0 .207.115.327.287.334.473.435.383.435-.402 0-.357.025-.51.107-.6.126-.14.227-.146.334-.019.063.077.063.16.007.377zm-5.011 2.674c.044.473.132.638.416.74.113.045.27.11.346.135.183.076.234.35.429 2.138.208 1.94.252 2.215.448 2.815.296.912.27 1.972-.076 3.038-.177.549-.372.798-.775 1.015-.807.427-1.64.115-2.288-.856-.482-.7-.66-1.57-.492-2.406.095-.447.145-1.123.1-1.29-.018-.082-.22-.337-.447-.58-.706-.734-1.45-2.049-1.304-2.285.044-.064.075-.262.075-.434 0-.351-.1-.492-.542-.74-.29-.166-.309-.332-.069-.792.132-.268.208-.325.87-.664.674-.344.977-.44 1.979-.619.416-.077.718-.07.945.026.265.115.34.261.385.76zm-5.963 2.381c0 .325.107.645.183.562.032-.032.1-.211.164-.396.1-.32.284-.51.41-.428.107.07.069.44-.07.67-.189.313-.189.907.007 1.303.195.383.598.804.775.804.107-.007.233-.16.58-.753l.44-.747.07.447c.07.504.038.657-.246 1.149-.315.555-.668.989-.8.989-.151 0-.492-.338-.782-.772-.113-.18-.428-.524-.693-.773l-.485-.453-.296.051a3.48 3.48 0 0 1-.549.058c-.227.006-.252-.007-.27-.166-.02-.14.012-.185.144-.217a1.38 1.38 0 0 1 .435-.007c.176.026.309.013.378-.038.107-.077.101-.09-.006-.217-.063-.077-.252-.179-.429-.236-.44-.14-.725-.332-.725-.479 0-.191.24-.236.435-.077.65.537.832.613 1.003.44.12-.12.088-.35-.114-.752-.176-.358-.24-.69-.145-.785.063-.07.227-.051.34.038.133.108.246.46.246.785zm11.528 5.75c-.157.167-.611.697-1.008 1.175-1.173 1.417-1.292 1.57-1.242 1.622.05.05 1.046-.39 1.273-.562.284-.224.8-.772.895-.958.044-.076.107-.312.152-.517.075-.383.283-.676.472-.676.126 0 .183.147.133.338a3.823 3.823 0 0 1-.315.62c-.158.261-.265.497-.253.523.063.095.297.05.568-.109.157-.09.384-.325.554-.568.334-.472.561-.676.763-.676.17 0 .372.217.328.344-.02.051-.31.3-.637.55-.567.427-.744.65-.643.816.057.096.58-.032 1.135-.28.945-.428 1.204-.454 1.355-.167.126.237-.183.383-1.393.651-.334.077-.7.198-.813.268l-.208.128.145.121c.126.103.258.122.882.122.561 0 .77.025.864.095.12.096.113.103-.063.262-.114.096-.22.147-.284.121-.277-.115-1.216-.287-1.557-.287-.611 0-.662.224-.107.44.252.103.347.218.296.352-.056.153-.208.127-.756-.128-1.11-.517-1.311-.543-2.64-.37-.631.083-.814.09-.883.025-.139-.115-.114-.223.082-.395.157-.134 1.374-2.4 1.317-2.451-.032-.032-1.26.408-2.15.778-.113.045-.113.039 0-.14.417-.683 1.62-1.45 3.02-1.928.725-.249.769-.255 1.071-.249.202.013.259.039.271.14.02.16-.233.556-.624.97zM7.992 20.528c.233.332.769.894.85.894.083 0 .013-.556-.138-1.137-.139-.53-.151-.785-.044-.893.082-.083.36-.102.473-.026.044.026.094.39.132.939.07 1.002.12 1.187.365 1.346.158.109.17.109.246.007.038-.058.082-.294.089-.53.018-.632.17-.913.44-.823.209.063.228.325.07.823-.183.58-.214 1.002-.132 1.57.12.773.41 1.462.554 1.315.032-.025.05-.887.057-1.908.006-1.596.019-1.915.114-2.215.176-.55.214-.575.907-.575 1.141 0 3.259.307 3.542.51.303.218.24.295-.359.486-1.305.402-1.941.479-2.729.326-.258-.052-.492-.083-.517-.07-.025.012 0 .159.05.325.158.517.114.836-.258 1.972-.195.581-.378 1.258-.403 1.5-.025.243-.095.485-.133.536-.164.198-.346.109-.643-.306-.371-.51-.958-1.072-1.298-1.251-.145-.077-.624-.217-1.059-.32-.781-.178-1.033-.3-.939-.452.032-.058.17-.064.473-.039.554.058.599-.019.227-.37a4.705 4.705 0 0 0-1.374-.849c-.473-.191-.555-.255-.555-.408 0-.122.176-.25.347-.25.056 0 .309.173.554.39.517.44.876.651 1.072.62.36-.052-.07-.888-.744-1.45-.246-.204-.485-.453-.536-.549-.082-.16-.082-.178.032-.261a.585.585 0 0 1 .346-.077c.196.02.24.058.473.466.139.249.34.58.448.734zm9.038-10.96c.322-.05.39.211.39.205.171.44.07.99.07.99-.227-.045-.397-.326-.397-.326-.132-.313-.063-.868-.063-.868zm-4.544 1.82s.485.268.668.555c0 0 .126.3.031.517 0 0-.504-.236-.756-.632 0 .007-.164-.204.057-.44z" fill="#fff" fill-rule="nonzero"/></g>`;
  }
};
export default Wabi;