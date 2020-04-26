const langList = ['cn', 'en']
let currentLang = langList[0];

interface LanguageGuide {
  cn: string,
  en?: string,
}

export const lb = {
  linkIndex: {
    setting: 'link.setting'
  },
  link: {
    setting: '/setting'
  }
}

export const lbMap: { [index: string]: LanguageGuide } = {
  [lb.linkIndex.setting]: {
    cn: `设置`,
    en: `setting`,
  },
}

export function getLangList(): string[] {
  return langList.slice()
}

export function text(key: string): string {
  const l = lbMap[key]
  switch (currentLang) {
    case 'en':
      return l.en || l.cn
    case 'cn':
    default:
      return l.cn
  }
}