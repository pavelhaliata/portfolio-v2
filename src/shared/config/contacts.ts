const email = 'pavelvladimirovichvs@gmail.com'

export const contacts = {
  github: {
    label: 'GitHub',
    href: 'https://github.com/pavelhaliata',
    icon: 'github',
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pavel-haliata/',
    icon: 'linkedin',
  },
  telegram: {
    label: 'Telegram',
    href: 'https://t.me/pawl_h',
    icon: 'telegram',
  },
  email: {
    label: `Написать на ${email}`,
    href: `mailto:${email}`,
    icon: 'mail',
  },
} as const

export const socialLinks = Object.values(contacts)
