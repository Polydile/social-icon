import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { DileSocialIcon } from '../dile-social-icon.js';
import '../dile-social-icon.js';

import readme from '../README.md';

storiesOf('dile-social-icon', module)
  .addDecorator(withKnobs)
  .add(
    'Social icons', 
    () => html`
      <h1>Social Icons</h1>
      <p>
        <dile-social-icon icon="facebook"></dile-social-icon> 
        <dile-social-icon icon="google"></dile-social-icon>
        <dile-social-icon icon="linkedin"></dile-social-icon> 
        <dile-social-icon icon="twitter"></dile-social-icon>
        <dile-social-icon icon="pinterest"></dile-social-icon>
        <dile-social-icon icon="youtube"></dile-social-icon>
        <dile-social-icon icon="whatsapp"></dile-social-icon>
        <dile-social-icon icon="instagram"></dile-social-icon>
        <dile-social-icon icon="gmail"></dile-social-icon>
        <dile-social-icon icon="snapchat"></dile-social-icon>
      </p>
      `,
  )
  .add(
    'Styled social icons',
    () => html`
      <style>
        h1 {
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        }
        div.icons {
          display: flex;
          flex-wrap: wrap;
        }
        div.icons p {
          margin-right: 10px;
        }
        .facebook {
          --dile-social-icon-color: #3A5CA9;
          --dile-social-icon-size: 20px;
        }
        .google {
          --dile-social-icon-color: crimson;
          --dile-social-icon-size: 30px;
        }
        .twitter {
          --dile-social-icon-color: deepskyblue;
          --dile-social-icon-size: 40px;
        }
        .pinterest {
          --dile-social-icon-color: #E20020;
          --dile-social-icon-size: 60px;
        }
        .linkedin {
          --dile-social-icon-color: #006CAC;
          --dile-social-icon-size: 50px;
        }
        .youtube {
          --dile-social-icon-color: #FF0004;
          --dile-social-icon-size: 50px;
        }
        .whatsapp {
          --dile-social-icon-color: #07E26B;
          --dile-social-icon-size: 60px;
        }
        .instagram {
          --dile-social-icon-color: #3A5CA9;
          --dile-social-icon-size: 40px;
        }
        .gmail {
          --dile-social-icon-color: #B93125;
          --dile-social-icon-size: 30px;
        }
        .snapchat {
          --dile-social-icon-color: rgb(255, 230, 0);
          --dile-social-icon-size: 20px;
        }
      </style>
      <h1>Styled Social Icons</h1>
      <div class="icons">
        <p>
          <dile-social-icon icon="facebook" class="facebook"></dile-social-icon>
        </p>
        <p>
          <dile-social-icon icon="google" class="google"></dile-social-icon>
        </p>
        <p>
          <dile-social-icon icon="twitter" class="twitter"></dile-social-icon>
        </p>
        <p>
          <dile-social-icon icon="linkedin" class="linkedin"></dile-social-icon>
        </p>
        <p>
          <dile-social-icon icon="pinterest" class="pinterest"></dile-social-icon>
        </p>
        <p>
          <dile-social-icon icon="whatsapp" class="whatsapp"></dile-social-icon>
        </p>
        <p>
          <dile-social-icon icon="youtube" class="youtube"></dile-social-icon>
        </p>
        <p>
          <dile-social-icon icon="instagram" class="instagram"></dile-social-icon>
        </p>
        <p>
          <dile-social-icon icon="gmail" class="gmail"></dile-social-icon>
        </p>
        <p>
          <dile-social-icon icon="snapchat" class="snapchat"></dile-social-icon>
        </p>
      </div>
        `,
  )
  .add('Documentation', () => withClassPropertiesKnobs(DileSocialIcon), { notes: { markdown: readme } })
  