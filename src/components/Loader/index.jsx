const Loader = () => (
  <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="217px"
      height="217px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <rect x="13" y="13" width="35" height="35" fill="#f89b00">
        <animate
          attributeName="fill"
          values="#ac60b5;#f89b00;#f89b00"
          keyTimes="0;0.25;1"
          dur="0.6097560975609756s"
          repeatCount="indefinite"
          begin="0s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="52" y="13" width="35" height="35" fill="#f89b00">
        <animate
          attributeName="fill"
          values="#ac60b5;#f89b00;#f89b00"
          keyTimes="0;0.25;1"
          dur="0.6097560975609756s"
          repeatCount="indefinite"
          begin="0.1524390243902439s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="13" y="52" width="35" height="35" fill="#f89b00">
        <animate
          attributeName="fill"
          values="#ac60b5;#f89b00;#f89b00"
          keyTimes="0;0.25;1"
          dur="0.6097560975609756s"
          repeatCount="indefinite"
          begin="0.45731707317073167s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="52" y="52" width="35" height="35" fill="#f89b00">
        <animate
          attributeName="fill"
          values="#ac60b5;#f89b00;#f89b00"
          keyTimes="0;0.25;1"
          dur="0.6097560975609756s"
          repeatCount="indefinite"
          begin="0.3048780487804878s"
          calcMode="discrete"
        ></animate>
      </rect>
    </svg>
  </div>
);

export default Loader;
