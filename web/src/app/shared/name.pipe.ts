import { Pipe, PipeTransform } from "@angular/core";

import { vtubers, batches } from "vtubers";

type NameKeys = keyof typeof vtubers | keyof typeof batches;

const nameMap: Record<NameKeys, string> = {
  hololive: $localize`:@@hololive:Hololive`,
  sora: $localize`:@@sora:Tokino Sora`,
  roboco: $localize`:@@roboco:Roboco`,
  miko: $localize`:@@miko:Sakura Miko`,
  suisei: $localize`:@@suisei:Hoshimachi Suisei`,
  fubuki: $localize`:@@fubuki:Shirakami Fubuki`,
  matsuri: $localize`:@@matsuri:Natsuiro Matsuri`,
  haato: $localize`:@@haato:Akai Haato`,
  haato_alt: $localize`:@@haato_alt:Akai Haato Sub`,
  aki: $localize`:@@aki:Aki Rosenthal`,
  aki_alt: $localize`:@@aki_alt:Aki Rosenthal Sub`,
  mel: $localize`:@@mel:Yozora Mel`,
  choco: $localize`:@@choco:Yuzuki Choco`,
  choco_alt: $localize`:@@choco_alt:Yuzuki Choco Sub`,
  shion: $localize`:@@shion:Murasaki Shion`,
  aqua: $localize`:@@aqua:Minato Aqua`,
  subaru: $localize`:@@subaru:Oozora Subaru`,
  ayame: $localize`:@@ayame:Nakiri Ayame`,
  pekora: $localize`:@@pekora:Usada Pekora`,
  rushia: $localize`:@@rushia:Uruha Rushia`,
  flare: $localize`:@@flare:Shiranui Flare`,
  marine: $localize`:@@marine:Houshou Marine`,
  noel: $localize`:@@noel:Shirogane Noel`,
  kanata: $localize`:@@kanata:Amane Kanata`,
  coco: $localize`:@@coco:Kiryu Coco`,
  watame: $localize`:@@watame:Tsunomaki Watame`,
  towa: $localize`:@@towa:Tokoyami Towa`,
  himemoriluna: $localize`:@@himemoriluna:Himemori Luna`,
  mio: $localize`:@@mio:Ookami Mio`,
  okayu: $localize`:@@okayu:Nekomata Okayu`,
  korone: $localize`:@@korone:Inugami Korone`,
  azki: $localize`:@@azki:AZKi`,
  yogiri: $localize`:@@yogiri:Yogiri`,
  civia: $localize`:@@civia:Civia`,
  echo: $localize`:@@echo:Spade Echo`,
  doris: $localize`:@@doris:Doris`,
  artia: $localize`:@@artia:Artia`,
  rosalyn: $localize`:@@rosalyn:Rosalyn`,
  risu: $localize`:@@risu:Ayunda Risu`,
  moona: $localize`:@@moona:Moona Hoshinova`,
  iofi: $localize`:@@iofi:Airani Iofifteen`,
  luna: $localize`:@@luna:Kaguya Luna`,
  nekomiya: $localize`:@@nekomiya:Nekomiya Hinata`,
  tamaki: $localize`:@@tamaki:Inuyama Tamaki`,
  pph: $localize`:@@pph:Pinky Pop Hepburn`,
  nana: $localize`:@@nana:Kagura Nana`,
  ui: $localize`:@@ui:Shigure Ui`,
  hololive_og: $localize`:@@hololive_og:Hololive Talents`,
  hololive_1st: $localize`:@@hololive_1st:Hololive 1st Gen`,
  hololive_2nd: $localize`:@@hololive_2nd:Hololive 2nd Gen`,
  hololive_3rd: $localize`:@@hololive_3rd:Hololive 3rd Gen`,
  hololive_4th: $localize`:@@hololive_4th:Hololive 4th Gen`,
  hololive_gamers: $localize`:@@hololive_gamers:Hololive Gamers`,
  innk_music: $localize`:@@innk_music:Innk Music`,
  hololive_cn_1st: $localize`:@@hololive_cn_1st:Hololive China 1st Gen`,
  hololive_cn_2nd: $localize`:@@hololive_cn_2nd:Hololive China 2nd Gen`,
  hololive_id: $localize`:@@hololive_id:Hololive Indonesia`,
  others: $localize`:@@others:Others`,
};

@Pipe({ name: "name" })
export class NamePipe implements PipeTransform {
  transform(value: string): string {
    return nameMap[value];
  }
}