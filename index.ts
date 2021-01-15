import Obniz from 'obniz';
import InfraredLED, { InfraredLEDOptions } from 'obniz/dist/src/parts/Infrared/InfraredLED';

import { on } from './signal';

const irLedPin: InfraredLEDOptions = {
  anode: 8,
  cathode: 11,
};

const main = async() => {
  const obniz = new Obniz('OBNIZ_ID_HERE');
  await obniz.connectWait();

  const irLed: InfraredLED = obniz.wired('InfraredLED', irLedPin);
  
  irLed.send(on);
  await obniz.wait(1000);
}

main().then(() => {
  console.log('finish');
}).catch((e) => {
  console.error(e);
});