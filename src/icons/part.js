const Part = {
  symbol: 'part',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.576-25.827c-.61.235-.712 1.118-.214 1.525.802.707 1.541 1.484 2.314 2.224.294.292.763.45 1.147.24.5-.223.648-.956.28-1.356a25.784 25.784 0 0 0-2.025-1.921c-.398-.398-.858-.992-1.502-.712zm7.034 2.051c-.959.81-1.733 1.809-2.61 2.701-.39.393-.25 1.17.267 1.384.358.165.805.083 1.058-.223.695-.725 1.39-1.45 2.105-2.156.326-.308.623-.766.438-1.23-.121-.52-.82-.71-1.258-.476zM8.49 8.37c-.406.285-.512.959-.156 1.326.63.645 1.266 1.285 1.96 1.86.396.32.71.906 1.302.815.707-.003 1.06-.996.554-1.464-.766-.753-1.547-1.492-2.305-2.257-.337-.373-.9-.555-1.355-.28zm.588 4.52c-1.065.722-1.802 1.846-2.73 2.735-.515.477-.16 1.46.547 1.487.604.073.942-.5 1.305-.874.614-.693 1.347-1.284 1.91-2.018.476-.663-.269-1.625-1.032-1.33zm15.476 2.127c-.672.583-1.226 1.3-1.882 1.909-.396.428-1.024.843-.913 1.512.085.648.97.962 1.443.515a23.054 23.054 0 0 0 1.848-1.948c.325-.4.915-.714.838-1.308-.017-.633-.81-1.023-1.334-.68zM11.069 19.72c-.755.659-1.392 1.443-2.125 2.129-.378.367-.874.838-.672 1.423.118.605 1.008.808 1.425.386.642-.625 1.277-1.258 1.848-1.948.323-.399.914-.716.82-1.314-.013-.619-.786-.981-1.296-.676zm9.062-.023c-.586.22-.701 1.101-.211 1.482.81.757 1.584 1.556 2.39 2.316.399.397 1.22.383 1.46-.178.17-.312.148-.748-.108-1.007-.83-.896-1.77-1.675-2.653-2.514-.238-.204-.596-.196-.878-.1zm-6.8 2.145c-.504.22-.656.962-.282 1.36a23.19 23.19 0 0 0 1.95 1.85c.397.322.705.91 1.297.84.733-.008 1.085-1.01.565-1.505a82.32 82.32 0 0 1-2.314-2.237c-.302-.32-.796-.535-1.216-.308zm-1.35-14.907a.867.867 0 1 0-1.736 0 .867.867 0 0 0 1.735 0zm2.528 2.308a.867.867 0 1 0-1.735 0 .867.867 0 0 0 1.735 0zm-6.774 2.12a.867.867 0 1 0-1.735 0 .867.867 0 0 0 1.735 0zm13.772-4.497a.867.867 0 1 0-1.733 0 .867.867 0 0 0 1.733 0zM26 11.146a.867.867 0 1 0-1.735 0 .867.867 0 0 0 1.735 0zm-2.371 2.492a.867.867 0 1 0-1.735 0 .867.867 0 0 0 1.735 0zm2.367 7.006a.867.867 0 1 0-1.735 0 .867.867 0 0 0 1.735 0zM19.23 22.76a.867.867 0 1 0-1.735 0 .867.867 0 0 0 1.735 0zm2.496 2.372a.867.867 0 1 0-1.735 0 .867.867 0 0 0 1.735 0zm-9.5 0a.867.867 0 1 0-1.736 0 .867.867 0 0 0 1.735 0zm-2.117-6.794a.867.867 0 1 0-1.735 0 .867.867 0 0 0 1.735 0zm-2.374 2.521a.867.867 0 1 0-1.735 0 .867.867 0 0 0 1.735 0z"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#03E8B0"/><path fill="#FFF" fill-rule="nonzero" d="M15.424 6.173c.644-.28 1.104.314 1.502.712.71.603 1.386 1.244 2.026 1.92.367.401.218 1.134-.281 1.357-.384.21-.853.052-1.147-.24-.773-.74-1.512-1.517-2.314-2.224-.498-.407-.396-1.29.214-1.525m7.034 2.051c.437-.235 1.137-.044 1.258.477.185.463-.112.92-.438 1.229-.715.705-1.41 1.43-2.105 2.156-.253.306-.7.388-1.058.223-.517-.214-.657-.99-.267-1.384.877-.892 1.651-1.892 2.61-2.7M8.49 8.368c.455-.275 1.018-.093 1.355.28.758.765 1.54 1.504 2.305 2.257.507.468.153 1.46-.554 1.464-.592.09-.906-.495-1.302-.815-.694-.575-1.33-1.215-1.96-1.86-.356-.367-.25-1.041.157-1.326m.587 4.52c.763-.295 1.508.667 1.032 1.33-.563.734-1.296 1.325-1.91 2.018-.363.373-.7.947-1.305.874-.707-.027-1.062-1.01-.548-1.487.929-.889 1.666-2.013 2.732-2.736m15.475 2.128c.525-.343 1.317.047 1.334.68.077.594-.513.908-.838 1.308-.572.688-1.2 1.33-1.848 1.948-.474.447-1.358.133-1.443-.515-.111-.669.517-1.084.913-1.512.656-.609 1.21-1.326 1.882-1.909M11.069 19.72c.51-.305 1.283.057 1.295.676.095.598-.496.915-.819 1.314-.57.69-1.206 1.323-1.848 1.948-.417.422-1.307.219-1.425-.386-.202-.585.294-1.056.672-1.423.733-.686 1.37-1.47 2.125-2.129m9.062-.023c.282-.097.64-.105.878.099.883.839 1.823 1.618 2.653 2.514.256.26.279.695.109 1.007-.24.561-1.062.575-1.461.178-.806-.76-1.58-1.559-2.39-2.316-.49-.38-.375-1.262.21-1.482m-6.799 2.145c.42-.227.914-.012 1.216.308a82.32 82.32 0 0 0 2.314 2.237c.52.494.168 1.497-.565 1.505-.592.07-.9-.518-1.297-.84a23.19 23.19 0 0 1-1.95-1.85c-.374-.398-.222-1.14.282-1.36m-1.35-14.907a.868.868 0 1 1-1.736 0 .868.868 0 0 1 1.735 0m2.529 2.308a.867.867 0 1 1-1.735 0 .867.867 0 0 1 1.735 0m-6.774 2.12a.868.868 0 1 1-1.735 0 .868.868 0 0 1 1.735 0m13.772-4.497a.867.867 0 1 1-1.736 0 .867.867 0 0 1 1.737 0M26 11.146a.867.867 0 1 1-1.735 0 .867.867 0 0 1 1.735 0m-2.371 2.492a.867.867 0 1 1-1.735 0 .867.867 0 0 1 1.735 0m2.367 7.006a.867.867 0 1 1-1.735 0 .867.867 0 0 1 1.735 0M19.23 22.76a.868.868 0 1 1-1.735 0 .868.868 0 0 1 1.735 0m2.496 2.372a.868.868 0 1 1-1.735 0 .868.868 0 0 1 1.735 0m-9.5 0a.868.868 0 1 1-1.736 0 .868.868 0 0 1 1.735 0m-2.116-6.794a.868.868 0 1 1-1.735 0 .868.868 0 0 1 1.735 0m-2.374 2.521a.868.868 0 1 1-1.735 0 .868.868 0 0 1 1.735 0"/></g>`;
  }
};
export default Part;
