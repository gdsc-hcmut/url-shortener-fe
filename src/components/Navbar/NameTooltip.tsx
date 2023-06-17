import React from 'react';

type NameTooltipProps = {
  userNameFull: string;
};

export default function NameTooltip(props: NameTooltipProps) {
  const { userNameFull } = props;

  return (
    <div className="fixed top-[72px] right-[132px]">
      <div className="fixed w-4 h-4 bg-gdscBlue-300 rotate-45 top-[68px] right-[152px]" />
      <div className="p-2 bg-gdscBlue-300 rounded border text-white">
        {userNameFull}
      </div>
    </div>
  );
}
