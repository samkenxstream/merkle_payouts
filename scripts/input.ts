import { PayoutConfig, PayoutDistribution } from "../types";

export const config: PayoutConfig = {
  network: 'rinkeby', // TODO: UPDATE
  tokenAddress: '0x00555dC77a343E205CB1C7755407c93470DB3F91', // TODO: UPDATE
  tokenDecimal: 18, // TODO: UOPDATE
  funderAddress: '0x5cdb35fADB8262A3f88863254c870c2e6A848CcA',// TODO: UPDATE
};

// TODO : UPDATE
export const distributions: PayoutDistribution[] = [
  { address: '0x00555dC77a343E205CB1C7755407c93470DB3F91', match: 946.1758278938145 },
  { address: '0x0D89421D6eec0A4385F95f410732186A2Ab45077', match: 69.45693171942503 },
  { address: '0x76577d204A5bd63b6D006222429c4D5124f4619c', match: 341.7461714220219 },
  { address: '0x2A5B1B6188669da07947403Da21F1CAB501374e6', match: 386.9762818672259 },
  { address: '0x6B5918D8EF9094679F4b4e1Bf397a66eA411B118', match: 494.5305640234786 },
  { address: '0xb010ca9Be09C382A9f31b79493bb232bCC319f01', match: 316.1700969251294 },
  { address: '0xBADCdDEA250f1e317Ba59999232464933C4E8D90', match: 190.9808712116415 },
  { address: '0xD7db3B3300E9d15E680807381d8B21E2B0773402', match: 40.28715217984053 },
  { address: '0xb9376ae861cB2D5D217F8670ec99B22d3794a333', match: 274.3557654314374 },
  { address: '0x0aE16533212C0983e336f51688440492980d6C62', match: 290.95407376952846 },
  { address: '0xC9a238405ef9D753D55EC1EB8F7A7b17B8d83E63', match: 579.1462124504936 },
];