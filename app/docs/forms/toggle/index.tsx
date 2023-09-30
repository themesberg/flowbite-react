'use client';

import type { FC } from 'react';
import { useState } from 'react';
import ToggleSwitchDocs from './toggle.mdx';

const ToggleSwitchPageContent: FC = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  const [red, setRed] = useState(true);
  const [green, setGreen] = useState(true);
  const [purple, setPurple] = useState(true);
  const [yellow, setYellow] = useState(true);
  const [teal, setTeal] = useState(true);
  const [orange, setOrange] = useState(true);
  const [small, setSmall] = useState(false);
  const [medium, setMedium] = useState(false);
  const [large, setLarge] = useState(false);

  const state = {
    switch1,
    setSwitch1,
    switch2,
    setSwitch2,
    red,
    setRed,
    green,
    setGreen,
    purple,
    setPurple,
    yellow,
    setYellow,
    teal,
    setTeal,
    orange,
    setOrange,
    small,
    setSmall,
    medium,
    setMedium,
    large,
    setLarge,
  };

  return <ToggleSwitchDocs {...state} />;
};

export default ToggleSwitchPageContent;
