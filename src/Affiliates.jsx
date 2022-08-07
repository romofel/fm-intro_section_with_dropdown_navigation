/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import clientAudiophile from './assets/client-audiophile.svg';
import clientDatabiz from './assets/client-databiz.svg';
import clientMaker from './assets/client-maker.svg';
import clientMeet from './assets/client-meet.svg';

const affiliateStyles = css`
& img {
  height: 16px;
`;

function Affiliate({ src, alt }) {
  return <li css={affiliateStyles}>
    <img src={src} alt={alt} />
  </li>
}

const affiliatesStyles = css`
display: flex;
justify-content: space-between;
padding-left: 1rem;
padding-right: 1rem;
margin-top: 3rem;
`;

export default function Affiliates() {
  return <ul css={affiliatesStyles}>
    {
      [clientDatabiz, clientAudiophile, clientMeet, clientMaker].map(client => <Affiliate src={client} alt="affiliate client logo" />)
    }
  </ul>
}