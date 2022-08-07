/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import clientAudiophile from './assets/client-audiophile.svg';
import clientDatabiz from './assets/client-databiz.svg';
import clientMaker from './assets/client-maker.svg';
import clientMeet from './assets/client-meet.svg';

function Affiliate({ src, alt }) {
  return <li>
    <img src={src} alt={alt} />
  </li>
}

export default function Affiliates() {
  return <ul>
    {
      [clientDatabiz, clientAudiophile, clientMeet, clientMaker].map(client => <Affiliate src={client} alt="affiliate client logo" />)
    }
  </ul>
}