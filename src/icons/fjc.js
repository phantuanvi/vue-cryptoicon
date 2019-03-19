const Fjc = {
  symbol: 'fjc',
  color: '#000',
  plainIcon: c => {
    return `<path  fill="${
      c ? c : this.color
    }" d="M16.194 12.326h-.003.003L15.51 15.3c.426.094.87.25 1.308.127a.9.9 0 0 0 .593-.604c.082-.263.123-.533.195-.795l.724.184c.032.005-.005.024.015.003l.018-.014c.3-.322.642-.675.912-1.016a5.262 5.262 0 0 0-1.403-.469l-1.634-.38.004-.009h-.046zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.306-20.172c.049-.079.093-.184.138-.274A12.038 12.038 0 0 0 22 5.644c-1.435-.828-2.95-1.35-4.598-1.531.61 2.662 1.474 5.24 2.723 7.669l.181.046zm-8.229-.455l-.044-.01-.35-.08v-.006h-.005l.315-1.373c.233.05.466.105.698.162h.005a32.523 32.523 0 0 0 1.976-5.953A11.977 11.977 0 0 0 8.76 6.468v.004A12.015 12.015 0 0 0 4 15.798v.24a12.169 12.169 0 0 0 4.144 1.466l.007-.007a33.108 33.108 0 0 0 3.93-6.123h-.003zm7.514 2.025l-.056-.038c-.27.342-.533.622-.833.937l.085.016.11.037-1.082 4.688-1.298-.3c.068-.383.237-.765.158-1.163a.938.938 0 0 0-.559-.637c-.292-.139-.618-.188-.93-.263l-.604 2.622c-.037.177-.037.375.075.525.09.132.244.2.394.237l.964.225-.289 1.155c3.38-.033 6.82.494 10.05 1.488.528-.714.75-.998 1.107-1.81-1.973-1.83-3.598-4.158-5.063-6.413l-.36 1.563-1.451-.337c.123-.585.24-1.208.067-1.8-.125-.393-.223-.591-.485-.732zM8.18 17.805c-.965 1.189-1.974 2.345-3.097 3.386.352.814.577.986 1.102 1.699a35.54 35.54 0 0 1 5.449-1.189c.094-.409.116-.521.206-.934l-2.216-.513c.105-.454.214-.912.315-1.37.334.065.664.155.994.222.162.04.333.01.472-.082.139-.102.21-.27.248-.432l.213-.817a1.89 1.89 0 0 0-.213.019c-.919.13-1.815.112-2.738.03-.258-.027-.452-.006-.704-.062l-.03.043zm5.145 3.304l-.09.45.949-.068.03-.176-.889-.206zm-1.639-3.578c.07-.01.14-.016.21-.019v-.004l1.143-4.95c.045-.225.135-.45.064-.675a.555.555 0 0 0-.348-.347l-.037-.012c-.19-.051-.044-.015-.237-.06-.021-.005-.117.027-.139.023a32.422 32.422 0 0 1-3.892 6.048c.252.052.21.037.461.063.925.085 1.856.062 2.775-.067zm2.543-7.114v.004c.176-.743.341-1.489.521-2.231l1.478.34-.514 2.232.885.206c.088-.371.175-.743.26-1.115l.129-.558.129-.558 1.477.338c-.02.1-.042.2-.064.3-.143.646-.302 1.287-.445 1.936l1.702.396c-1.25-2.43-2.077-4.97-2.686-7.632-.382-.045-.543-.03-.93-.037h-.236c-.424 0-.581-.011-.997.037-.467 2.043-1.02 4.186-1.87 6.102l1.161.24zm12.735.739C25.93 8.842 24.455 7.1 22.262 5.83c-.002 2.072-.5 3.921-1.518 5.726a4.087 4.087 0 0 0-.169.347c.686.15 1.114.242 1.8.396v.007l-.442 1.987c1.462 2.254 3.093 4.736 5.062 6.566.628-1.432.97-2.973 1.005-4.537v-.563a12.053 12.053 0 0 0-1.035-4.604zM4 16.3v.173c.023 1.599.365 2.914 1.005 4.38a28.767 28.767 0 0 0 2.951-3.165C6.501 17.456 5.275 17.04 4 16.3zm11.685 5.4l-.503 2.19h-.003l-1.485-.34.413-1.797-.945.067-.35 1.523h-.002l-1.486-.341c.075-.338.15-.668.233-1.001-1.769.24-3.515.625-5.22 1.151a12.015 12.015 0 0 0 9.457 4.886h.491a12.045 12.045 0 0 0 9.379-4.886 32.818 32.818 0 0 0-9.979-1.452z"/>`;
  },
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" r="16" fill="#00AFEC"/><g fill="#FFF"><path d="M20.306 11.828c.049-.079.093-.184.138-.274A12.038 12.038 0 0 0 22 5.644c-1.435-.828-2.95-1.35-4.598-1.531.61 2.662 1.474 5.24 2.723 7.669l.181.046zm-8.228-.455l-.045-.01-.35-.08v-.006h-.005l.315-1.373c.233.05.466.105.698.162h.005a32.523 32.523 0 0 0 1.977-5.953 11.977 11.977 0 0 0-5.914 2.355v.004A12.015 12.015 0 0 0 4 15.798v.24a12.169 12.169 0 0 0 4.144 1.466l.007-.007a33.108 33.108 0 0 0 3.93-6.123h-.003zm7.512 2.025c.263.14.361.34.486.732.173.592.056 1.215-.067 1.8l1.451.337.36-1.563c1.465 2.255 3.09 4.584 5.063 6.412-.358.813-.58 1.097-1.107 1.811-3.23-.994-6.67-1.521-10.05-1.488l.289-1.155-.964-.225c-.15-.038-.303-.105-.393-.237-.113-.15-.113-.348-.075-.525l.603-2.622c.312.075.638.124.93.263a.938.938 0 0 1 .559.637c.079.398-.09.78-.158 1.163l1.298.3 1.082-4.688-.11-.037-.085-.016c.3-.315.562-.595.833-.937l.056.038zM8.182 17.805l.031-.043c.252.056.446.035.704.062.923.082 1.819.1 2.738-.03.07-.01.142-.017.213-.02l-.213.818c-.038.162-.109.33-.248.432a.596.596 0 0 1-.472.082c-.33-.067-.66-.157-.994-.221-.101.457-.21.915-.315 1.369l2.216.513c-.09.413-.112.525-.206.934a35.54 35.54 0 0 0-5.449 1.189c-.525-.713-.75-.885-1.102-1.699 1.122-1.04 2.132-2.197 3.097-3.386zm5.145 3.304l.889.206-.03.176-.949.068.09-.45zm-1.639-3.579a2.06 2.06 0 0 1 .208-.018v-.004l1.144-4.95c.045-.225.135-.45.064-.675a.555.555 0 0 0-.348-.347l-.037-.012c-.19-.051-.044-.015-.237-.06-.021-.005-.117.027-.139.023a32.423 32.423 0 0 1-3.892 6.047c.251.053.21.038.461.064.925.085 1.856.062 2.775-.067z"/><path d="M14.23 10.417v.004c.176-.743.341-1.489.521-2.231l1.478.34-.514 2.232.885.206c.088-.371.175-.743.26-1.115l.129-.558.129-.558 1.477.337c-.02.1-.042.2-.064.3-.143.647-.302 1.288-.445 1.937l1.701.396c-1.249-2.43-2.076-4.97-2.685-7.632-.382-.045-.543-.03-.93-.037h-.236c-.424 0-.581-.011-.997.037-.468 2.043-1.02 4.186-1.87 6.102l1.161.24zm1.961 1.909l.045.01.005-.01z"/><path d="M16.195 12.325l-.686 2.974c.426.094.87.25 1.308.127a.9.9 0 0 0 .593-.604c.082-.263.123-.533.195-.795l.724.184c.032.005-.005.024.016.003l.018-.014c.3-.322.64-.675.91-1.016a5.262 5.262 0 0 0-1.402-.469l-1.676-.39zm10.77-1.169C25.93 8.842 24.455 7.1 22.262 5.83c-.002 2.072-.5 3.921-1.518 5.726a4.087 4.087 0 0 0-.169.347c.686.15 1.114.242 1.8.396v.007l-.442 1.987c1.462 2.254 3.093 4.736 5.062 6.566.628-1.432.97-2.973 1.005-4.537v-.563a12.053 12.053 0 0 0-1.035-4.604zM4 16.3v.173c.023 1.599.365 2.914 1.005 4.38a28.767 28.767 0 0 0 2.951-3.165C6.501 17.456 5.275 17.04 4 16.3zm11.685 5.4l-.503 2.19h-.003l-1.485-.34.413-1.797-.945.067-.35 1.523h-.002l-1.486-.341c.076-.338.15-.668.233-1.001-1.769.24-3.515.625-5.22 1.151a12.015 12.015 0 0 0 9.457 4.886h.491a12.045 12.045 0 0 0 9.379-4.886 32.818 32.818 0 0 0-9.979-1.452z"/></g></g>`;
  }
};
export default Fjc;
