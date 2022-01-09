import React from 'react';

import List from '@/components/List';

const projects = [
  {
    title: `BluetootKit`,
    description: `Lightweight Bluetooth library for Android, written in Kotlin`,
    href: `https://github.com/sirvar/bluetoothkit-android`,
  },
  {
    title: `Quick Connect`,
    description: `Bluetooth device connection tile for Android`,
    href: `https://play.google.com/store/apps/details?id=com.sirvar.quickconnect`,
  },
  {
    title: `Robin`,
    description: `Reusable authentication flow for Android`,
    href: `https://github.com/sirvar/robin`,
  },
];

const Projects: React.FC = () => <List items={projects} />;

export default Projects;
