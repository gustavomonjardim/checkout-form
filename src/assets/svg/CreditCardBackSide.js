import React from 'react';

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 364 223.778" {...props}>
      <defs>
        <filter id="a" x="0" y="7.054" width="366.913" height="240.51" filterUnits="userSpaceOnUse">
          <feOffset dy="6" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="6" result="b" />
          <feFlood floodOpacity="0.349" />
          <feComposite operator="in" in2="b" />
          <feComposite in="SourceGraphic" />
        </filter>
        <radialGradient
          id="prefix__a"
          cx={277.549}
          cy={147.853}
          r={432.612}
          gradientTransform="matrix(-.615 0 0 .54 448.179 68.023)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#bfbfbf" />
          <stop offset={0.337} stopColor="#a8a8a8" />
          <stop offset={1} stopColor="#727272" />
        </radialGradient>
        <style>{'.prefix__c{fill:#fff;}.b{fill:#fff;}.c{fill:url(#c);}.h{filter:url(#a);}'}</style>
      </defs>

      <g transform="translate(-136.043 -216)">
        <g className="h" transform="matrix(1, 0, 0, 1, 136.04, 216)">
          <rect
            className="b"
            width="330.913"
            height="204.51"
            rx="10"
            transform="translate(18 19.05)"
          />
        </g>
        <g transform="translate(137 216)">
          <g transform="translate(0)">
            <rect width={363.999} height={223.778} rx={10} fill="url(#prefix__a)" />
            <path fill="#1c1c1c" d="M0 38.678h364v48.391H0z" />
            <path className="prefix__c" d="M166.038 106.258h61.051v24.893h-61.051z" />
            <g opacity={0.9}>
              <path
                className="prefix__c"
                d="M40.721 106.258h125.316v1.532H40.721zM40.721 108.854h125.316v1.532H40.721zM40.721 111.449h125.316v1.532H40.721zM40.721 114.045h125.316v1.532H40.721zM40.721 116.641h125.316v1.532H40.721zM40.721 119.236h125.316v1.532H40.721zM40.721 121.832h125.316v1.532H40.721zM40.721 124.428h125.316v1.532H40.721zM40.721 127.023h125.316v1.532H40.721zM40.721 129.619h125.316v1.532H40.721z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;
